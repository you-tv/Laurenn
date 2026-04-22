import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { useNavigate } from "react-router";
import rainbowLogo from "figma:asset/e64e7302fb552f059e39a93028a3e1c87f690926.png";
import { analyticsTracker } from "../services/analytics-tracker";

interface TrialModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  planName?: string;
}

export function TrialModal({ open, onOpenChange, planName = "Professional" }: TrialModalProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate user ID
    const userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Track trial activation
    analyticsTracker.track('trial_activated', {
      userId,
      metadata: {
        planName,
        email: formData.email,
        company: formData.company,
        signupDate: new Date().toISOString()
      }
    });
    
    // Store user ID in localStorage for demo
    localStorage.setItem('rainbow_user_id', userId);
    localStorage.setItem('rainbow_trial_start', new Date().toISOString());
    
    console.log("Trial signup:", formData);
    onOpenChange(false);
    setFormData({ name: "", email: "", company: "", phone: "" });
    
    // Redirect to webinar space after successful signup
    setTimeout(() => {
      navigate("/webinar-space");
    }, 100);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <img src={rainbowLogo} alt="Rainbow" className="h-10" />
            <div className="flex flex-col leading-tight">
              <DialogTitle className="text-2xl">Commencez votre essai gratuit</DialogTitle>
              <span className="text-xs text-gray-500">by Alcatel-Lucent Enterprise</span>
            </div>
          </div>
          <DialogDescription>
            Accédez gratuitement au plan {planName} pendant 30 jours. Aucune carte bancaire requise.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nom complet *</Label>
            <Input
              id="name"
              placeholder="Jean Dupont"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email professionnel *</Label>
            <Input
              id="email"
              type="email"
              placeholder="jean@entreprise.fr"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Nom de l'entreprise</Label>
            <Input
              id="company"
              placeholder="Votre entreprise"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Numéro de téléphone</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+33 (0)6 00 00 00 00"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Inclus dans votre essai :</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ Accès complet à toutes les fonctionnalités {planName}</li>
              <li>✓ Aucune carte bancaire requise</li>
              <li>✓ 30 jours entièrement gratuits</li>
              <li>✓ Annulation à tout moment, sans engagement</li>
            </ul>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#5e2d91] hover:bg-[#4a2373]"
            size="lg"
          >
            Commencer l'essai gratuit
          </Button>

          <p className="text-xs text-gray-500 text-center">
            En vous inscrivant, vous acceptez nos Conditions d'utilisation et notre Politique de confidentialité.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
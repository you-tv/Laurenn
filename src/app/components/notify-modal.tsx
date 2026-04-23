import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import rainbowLogo from "figma:asset/rainbow_webinar_logo.png";
import { Bell, Sparkles } from "lucide-react";

interface NotifyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  planName?: string;
}

export function NotifyModal({ open, onOpenChange, planName }: NotifyModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock notification signup
    console.log("Enterprise notification signup:", formData);
    setSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      onOpenChange(false);
      setFormData({ name: "", email: "", company: "", phone: "", message: "" });
    }, 3000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px]">
        {!submitted ? (
          <>
            <DialogHeader>
              <div className="flex items-center gap-3 mb-2">
                <img src={rainbowLogo} alt="Rainbow" className="h-10" />
                <div className="flex flex-col leading-tight">
                  <DialogTitle className="text-2xl flex items-center gap-2">
                    <Sparkles className="h-6 w-6 text-[#FF4500]" />
                    Rainbow Webinar Enterprise
                  </DialogTitle>
                  <span className="text-xs text-gray-500">by Alcatel-Lucent Enterprise</span>
                </div>
              </div>
              <DialogDescription className="text-base">
                Soyez parmi les premiers informés du lancement de notre offre Enterprise pour les grands événements et besoins sur mesure.
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
                <Label htmlFor="company">Nom de l'entreprise *</Label>
                <Input
                  id="company"
                  placeholder="Votre entreprise"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  required
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

              <div className="space-y-2">
                <Label htmlFor="message">Vos besoins spécifiques (optionnel)</Label>
                <Textarea
                  id="message"
                  placeholder="Parlez-nous de vos besoins : nombre de participants attendus, fréquence des événements, fonctionnalités spécifiques..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                  className="resize-none"
                />
              </div>

              <div className="bg-gradient-to-br from-[#5e2d91]/10 via-[#6639B7]/10 to-[#0085CA]/10 border-2 border-[#5e2d91]/20 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Bell className="h-5 w-5 text-[#5e2d91]" />
                  Ce que vous recevrez :
                </h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Notification prioritaire du lancement</li>
                  <li>✓ Offre exclusive de lancement</li>
                  <li>✓ Consultation personnalisée avec notre équipe</li>
                  <li>✓ Démo privée des fonctionnalités Enterprise</li>
                </ul>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#5e2d91] hover:bg-[#4a2373]"
                size="lg"
              >
                Me tenir informé
              </Button>

              <p className="text-xs text-gray-500 text-center">
                Vos données sont protégées et ne seront utilisées que pour vous informer du lancement de Rainbow Webinar Enterprise.
              </p>
            </form>
          </>
        ) : (
          <div className="py-8 text-center">
            <div className="mb-6 flex justify-center">
              <div className="h-20 w-20 bg-gradient-to-br from-[#34B233] to-[#0085CA] rounded-full flex items-center justify-center">
                <Bell className="h-10 w-10 text-white animate-bounce" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Merci pour votre intérêt ! 🎉
            </h3>
            <p className="text-gray-600 mb-2">
              Vous serez parmi les premiers informés du lancement de <strong>Rainbow Webinar Enterprise</strong>.
            </p>
            <p className="text-sm text-gray-500">
              Notre équipe vous contactera prochainement pour échanger sur vos besoins.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
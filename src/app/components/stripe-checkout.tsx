import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { 
  CheckCircle, 
  CreditCard, 
  Lock, 
  Shield,
  X,
  Loader2
} from "lucide-react";
import { STRIPE_PLANS, createCheckoutSession } from "../utils/stripe";

interface StripeCheckoutProps {
  plan: "start" | "pro" | "enterprise";
  isOpen: boolean;
  onClose: () => void;
}

export function StripeCheckout({ plan, isOpen, onClose }: StripeCheckoutProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const selectedPlan = STRIPE_PLANS[plan];

  if (!isOpen) return null;

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !acceptedTerms) {
      alert("Veuillez remplir tous les champs et accepter les CGV");
      return;
    }

    if (plan === "enterprise") {
      // Pour Enterprise, rediriger vers formulaire de contact
      window.location.href = "/contact-sales";
      return;
    }

    setIsLoading(true);

    try {
      // Créer la session de checkout Stripe
      const session = await createCheckoutSession(selectedPlan.priceId!, email);
      
      // Rediriger vers Stripe Checkout
      if (session.url) {
        window.location.href = session.url;
      }
    } catch (error) {
      console.error("Erreur lors du checkout:", error);
      alert("Une erreur est survenue. Veuillez réessayer.");
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[#5e2d91] to-[#6639B7] text-white p-6 rounded-t-2xl">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                {plan === "enterprise" ? "Contactez-nous" : "Finaliser votre abonnement"}
              </h2>
              <p className="text-white/90">
                {selectedPlan.name}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Plan Summary */}
          <div className="bg-gradient-to-br from-[#6639B7]/10 to-[#5e2d91]/10 rounded-xl p-6 mb-6 border border-[#5e2d91]/20">
            <div className="flex items-baseline justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedPlan.name}
                </h3>
              </div>
              <div className="text-right">
                {selectedPlan.amount !== null ? (
                  <>
                    <div className="text-4xl font-bold text-[#5e2d91]">
                      {selectedPlan.amount}€
                    </div>
                    <div className="text-sm text-gray-600">par mois</div>
                  </>
                ) : (
                  <div className="text-2xl font-bold text-[#5e2d91]">
                    Sur devis
                  </div>
                )}
              </div>
            </div>

            {/* Features */}
            <div className="space-y-2">
              {selectedPlan.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="h-4 w-4 text-[#34B233] flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleCheckout} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Adresse email *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.fr"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5e2d91] focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">
                Utilisé pour créer votre compte et recevoir les factures
              </p>
            </div>

            {/* Security badges */}
            <div className="bg-gray-50 rounded-xl p-4 space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <Shield className="h-5 w-5 text-[#34B233]" />
                <span>Paiement 100% sécurisé par Stripe</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <Lock className="h-5 w-5 text-[#34B233]" />
                <span>Cryptage SSL 256-bit</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <CreditCard className="h-5 w-5 text-[#34B233]" />
                <span>CB, Visa, Mastercard, American Express</span>
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                className="mt-1 w-4 h-4 text-[#5e2d91] rounded focus:ring-2 focus:ring-[#5e2d91]"
              />
              <span className="text-sm text-gray-700">
                J'accepte les{" "}
                <a href="/legal/cgv" className="text-[#5e2d91] hover:underline">
                  Conditions Générales de Vente
                </a>{" "}
                et la{" "}
                <a href="/legal/privacy" className="text-[#5e2d91] hover:underline">
                  Politique de Confidentialité
                </a>
              </span>
            </label>

            {/* Info billing */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-sm text-blue-900">
                <strong>Facturation :</strong> Vous serez redirigé vers Stripe pour saisir vos informations de paiement.
                Résiliable à tout moment depuis votre espace client.
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                disabled={isLoading}
                className="flex-1"
              >
                Annuler
              </Button>
              <Button
                type="submit"
                disabled={isLoading || !email || !acceptedTerms}
                className="flex-1 bg-[#5e2d91] hover:bg-[#4a2373] text-white gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Redirection...
                  </>
                ) : (
                  <>
                    <Lock className="h-5 w-5" />
                    {plan === "enterprise" ? "Nous contacter" : "Paiement sécurisé"}
                  </>
                )}
              </Button>
            </div>

            {/* Trial reminder */}
            {plan !== "enterprise" && (
              <p className="text-center text-sm text-gray-500">
                💡 Profitez d'abord de l'essai gratuit 30 jours sans engagement
              </p>
            )}
          </form>
        </div>
      </motion.div>
    </div>
  );
}

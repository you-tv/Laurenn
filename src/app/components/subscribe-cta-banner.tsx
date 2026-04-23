import { motion } from "motion/react";
import { Crown, Sparkles, ArrowRight, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { analyticsTracker } from "../services/analytics-tracker";
import { useNavigate } from "react-router";

interface SubscribeCTABannerProps {
  daysRemaining: number;
  userId?: string;
  variant?: "default" | "urgent" | "feature-locked";
}

export function SubscribeCTABanner({ daysRemaining, userId, variant = "default" }: SubscribeCTABannerProps) {
  const navigate = useNavigate();

  const handleSubscribeClick = () => {
    analyticsTracker.track('subscribe_cta_clicked', {
      userId,
      metadata: {
        daysRemaining,
        variant,
        location: 'webinar_space_banner'
      }
    });

    // Redirect to pricing/checkout
    navigate('/pricing');
  };

  // Urgent variant (< 7 days)
  if (variant === "urgent" || daysRemaining <= 7) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-red-500 via-orange-500 to-pink-500 text-white p-6 rounded-xl shadow-lg mb-6"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
              <Clock className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold">⏰ Votre essai expire dans {daysRemaining} jour{daysRemaining > 1 ? 's' : ''} !</h3>
              <p className="text-white/90 mt-1">Ne perdez pas vos webinaires et vos données. Passez à un plan payant dès maintenant.</p>
            </div>
          </div>
          <Button 
            onClick={handleSubscribeClick}
            className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-6 py-6 text-lg whitespace-nowrap"
          >
            S'abonner maintenant
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </motion.div>
    );
  }

  // Feature-locked variant
  if (variant === "feature-locked") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 p-6 rounded-xl mb-6"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-[#6639B7] to-[#5e2d91] rounded-lg">
              <Crown className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">🔒 Fonctionnalité Premium</h3>
              <p className="text-gray-600 mt-1">Débloquez toutes les fonctionnalités avancées avec un abonnement Pro ou Enterprise.</p>
            </div>
          </div>
          <Button 
            onClick={handleSubscribeClick}
            className="bg-gradient-to-r from-[#6639B7] to-[#5e2d91] text-white hover:opacity-90 font-semibold px-6 py-6 whitespace-nowrap"
          >
            Voir les plans
            <Sparkles className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </motion.div>
    );
  }

  // Default variant
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-[#6639B7] via-[#5e2d91] to-[#CF0072] text-white p-6 rounded-xl shadow-lg mb-6"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
            <Sparkles className="h-8 w-8" />
          </div>
          <div>
            <h3 className="text-xl font-bold">✨ Passez à Rainbow Webinar Pro</h3>
            <p className="text-white/90 mt-1">
              {daysRemaining} jours restants sur votre essai • Accédez à toutes les fonctionnalités sans limite
            </p>
          </div>
        </div>
        <Button 
          onClick={handleSubscribeClick}
          className="bg-white text-[#5e2d91] hover:bg-gray-100 font-semibold px-6 py-6 whitespace-nowrap"
        >
          Découvrir les offres
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </motion.div>
  );
}

import { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { 
  CheckCircle, 
  Sparkles, 
  ArrowRight, 
  Mail,
  Download
} from "lucide-react";
import rainbowLogo from "figma:asset/e64e7302fb552f059e39a93028a3e1c87f690926.png";

export default function CheckoutSuccess() {
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    // Récupérer le session_id depuis l'URL
    const params = new URLSearchParams(window.location.search);
    const session = params.get('session_id');
    setSessionId(session);

    // EN PRODUCTION: Vérifier le statut de la session côté serveur
    /*
    if (session) {
      fetch('/api/verify-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId: session })
      })
      .then(res => res.json())
      .then(data => {
        // Activer l'abonnement de l'utilisateur
        console.log('Session vérifiée:', data);
      });
    }
    */
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6639B7]/10 via-white to-[#5e2d91]/10">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2">
              <img src={rainbowLogo} alt="Rainbow" className="h-12" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              delay: 0.2,
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#34B233] to-[#2a9129] rounded-full mb-6 shadow-lg"
          >
            <CheckCircle className="h-14 w-14 text-white" />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Paiement réussi ! 🎉
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Bienvenue dans Rainbow Webinar ! Votre abonnement est maintenant actif.
          </motion.p>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {/* Email confirmation */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="bg-gradient-to-br from-[#0085CA]/10 to-[#0085CA]/5 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Mail className="h-6 w-6 text-[#0085CA]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email de confirmation</h3>
              <p className="text-sm text-gray-600">
                Un email de confirmation a été envoyé avec vos identifiants de connexion
              </p>
            </div>

            {/* Facture */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="bg-gradient-to-br from-[#FF4500]/10 to-[#FF4500]/5 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Download className="h-6 w-6 text-[#FF4500]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Facture disponible</h3>
              <p className="text-sm text-gray-600">
                Téléchargez votre facture depuis votre espace client
              </p>
            </div>

            {/* Support */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="bg-gradient-to-br from-[#CF0072]/10 to-[#CF0072]/5 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="h-6 w-6 text-[#CF0072]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Support inclus</h3>
              <p className="text-sm text-gray-600">
                Notre équipe est disponible pour vous accompagner
              </p>
            </div>
          </motion.div>

          {/* Prochaines étapes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-[#5e2d91] to-[#6639B7] rounded-2xl p-8 text-white mb-8"
          >
            <h2 className="text-2xl font-bold mb-6">Prochaines étapes</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="space-y-2">
                <div className="bg-white/20 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <h3 className="font-semibold">Accédez à votre dashboard</h3>
                <p className="text-white/90 text-sm">
                  Explorez toutes les fonctionnalités de Rainbow Webinar
                </p>
              </div>
              <div className="space-y-2">
                <div className="bg-white/20 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <h3 className="font-semibold">Créez votre premier webinaire</h3>
                <p className="text-white/90 text-sm">
                  Planifiez et lancez votre événement en quelques clics
                </p>
              </div>
              <div className="space-y-2">
                <div className="bg-white/20 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <h3 className="font-semibold">Invitez vos participants</h3>
                <p className="text-white/90 text-sm">
                  Partagez votre lien et commencez à engager votre audience
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/dashboard">
              <Button
                size="lg"
                className="bg-[#5e2d91] hover:bg-[#4a2373] text-white gap-2 px-8"
              >
                Accéder au dashboard
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <a
              href="https://app.storylane.io/share/njaxojcgqihp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="gap-2 px-8 border-[#5e2d91] text-[#5e2d91] hover:bg-[#5e2d91]/10"
              >
                Voir la démo interactive
              </Button>
            </a>
          </motion.div>

          {/* Session ID (pour debug) */}
          {sessionId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 text-sm text-gray-500"
            >
              ID de transaction : {sessionId}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

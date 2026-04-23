import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { motion } from "motion/react";
import { Check, Users } from "lucide-react";
import { analyticsTracker } from "../services/analytics-tracker";

export default function Pricing() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"collaboration" | "webinar">("webinar");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const [currency, setCurrency] = useState<"EUR" | "USD" | "GBP">("EUR");

  const currencySymbols = {
    EUR: "€",
    USD: "$",
    GBP: "£"
  };

  const getPriceForCurrency = (eurPrice: number) => {
    const rates = {
      EUR: 1,
      USD: 1.1,
      GBP: 0.85
    };
    return Math.round(eurPrice * rates[currency]);
  };

  const getDisplayPrice = (basePrice: number) => {
    const price = getPriceForCurrency(basePrice);
    if (billingCycle === "annual") {
      return Math.round(price * 0.9); // 10% discount for annual
    }
    return price;
  };

  const handleStartTrial = (plan: string) => {
    analyticsTracker.trackPricingInteraction(plan, 'start_trial');
    navigate('/trial-signup', { state: { plan, billingCycle, currency } });
  };

  // Webinar features
  const startFeatures = [
    "Jusqu'à 120 participants",
    "Durée illimitée",
    "Chat en direct",
    "Partage d'écran",
    "Enregistrement basique",
    "Analytics de base"
  ];

  const proFeatures = [
    "Tout Start +",
    "Jusqu'à 500 participants",
    "Enregistrement HD cloud",
    "Sondages & Q&A",
    "Analytics avancés",
    "Branding personnalisé",
    "Support prioritaire",
    "Intégrations CRM"
  ];

  const enterpriseFeatures = [
    "Tout Pro +",
    "Jusqu'à 1000+ participants",
    "Webinaires illimités",
    "White-label complet",
    "API & webhooks",
    "Customer Success Manager",
    "SLA 99.99%",
    "Onboarding dédié",
    "SSO & sécurité avancée"
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="relative z-10">
        <Navbar />
      
        <main className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Tabs */}
            <motion.div 
              className="flex justify-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <button
                onClick={() => navigate("/pricing/collaboration")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                  activeTab === "collaboration"
                    ? "bg-[#5e2d91] text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Users className="w-5 h-5" />
                Collaboration
              </button>
              <button
                onClick={() => setActiveTab("webinar")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                  activeTab === "webinar"
                    ? "bg-[#5e2d91] text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Webinar
              </button>
            </motion.div>

            {/* Title */}
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold text-center mb-6 text-gray-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Trouvez le forfait Rainbow Webinar qui vous convient
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="text-center text-gray-600 mb-8 text-lg max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              Que vous organisiez des événements en direct ou des sessions automatisées, Rainbow Webinar a un plan de tarification pour assister votre succès.
            </motion.p>

            {/* Controls Bar */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 bg-gradient-to-r from-[#5e2d91] to-[#CF0072] py-6 px-8 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Currency Selector */}
              <div className="flex items-center gap-3">
                <span className="text-white font-semibold">Devise :</span>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value as "EUR" | "USD" | "GBP")}
                  className="bg-yellow-400 text-gray-900 font-bold px-6 py-2 rounded-lg cursor-pointer hover:bg-yellow-500 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-600 border-none"
                >
                  <option value="EUR">EUR €</option>
                  <option value="USD">USD $</option>
                  <option value="GBP">GBP £</option>
                </select>
              </div>

              {/* Billing Cycle Toggle */}
              <div className="flex items-center gap-3">
                <span className={`text-sm font-semibold transition-colors ${billingCycle === "monthly" ? "text-white" : "text-white/60"}`}>
                  Mensuel
                </span>
                <button
                  onClick={() => setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")}
                  className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 ${
                    billingCycle === "annual" ? "bg-white" : "bg-white/30"
                  }`}
                >
                  <span
                    className={`inline-block h-6 w-6 transform rounded-full transition-transform shadow-md ${
                      billingCycle === "annual" ? "bg-[#5e2d91] translate-x-9" : "bg-white translate-x-1"
                    }`}
                  />
                </button>
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-semibold transition-colors ${billingCycle === "annual" ? "text-white" : "text-white/60"}`}>
                    Annuel
                  </span>
                  <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded uppercase">
                    -10%
                  </span>
                </div>
              </div>
            </motion.div>

            {billingCycle === "annual" && (
              <motion.p 
                className="text-center text-green-600 font-bold mb-8 text-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                ✨ ÉCONOMISEZ 10% avec la facturation annuelle
              </motion.p>
            )}

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Start Plan */}
              <motion.div
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Start</h3>
                  <p className="text-sm text-gray-500">Pour démarrer</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-5xl font-bold text-gray-900">{getDisplayPrice(49)}</span>
                    <span className="text-gray-600">{currencySymbols[currency]}</span>
                  </div>
                  <p className="text-sm text-gray-500">/mois</p>
                </div>

                <button 
                  onClick={() => handleStartTrial('start')}
                  className="w-full py-3 px-6 border-2 border-[#5e2d91] text-[#5e2d91] rounded-lg font-semibold hover:bg-[#5e2d91] hover:text-white transition-all mb-8"
                >
                  Essai gratuit 30 jours
                </button>

                <ul className="space-y-3">
                  {startFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Pro Plan - Popular */}
              <motion.div
                className="bg-white border-2 border-[#5e2d91] rounded-2xl p-8 shadow-xl relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#5e2d91] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Populaire
                  </span>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Pro</h3>
                  <p className="text-sm text-gray-500">Le plus populaire</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-5xl font-bold text-gray-900">{getDisplayPrice(129)}</span>
                    <span className="text-gray-600">{currencySymbols[currency]}</span>
                  </div>
                  <p className="text-sm text-gray-500">/mois</p>
                </div>

                <button 
                  onClick={() => handleStartTrial('pro')}
                  className="w-full py-3 px-6 bg-[#5e2d91] text-white rounded-lg font-semibold hover:bg-[#6639B7] transition-all mb-8 shadow-lg"
                >
                  Essai gratuit 30 jours
                </button>

                <ul className="space-y-3">
                  {proFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Enterprise Plan */}
              <motion.div
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Enterprise</h3>
                  <p className="text-sm text-gray-500">Sur mesure</p>
                </div>

                <div className="mb-8">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    Sur devis
                  </div>
                  <p className="text-sm text-gray-500">Pour 500+ participants</p>
                </div>

                <button 
                  onClick={() => navigate('/support')}
                  className="w-full py-3 px-6 border-2 border-[#5e2d91] text-[#5e2d91] rounded-lg font-semibold hover:bg-[#5e2d91] hover:text-white transition-all mb-8"
                >
                  Nous contacter
                </button>

                <ul className="space-y-3">
                  {enterpriseFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Licence par entreprise Banner */}
            <motion.section
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="bg-gradient-to-r from-[#5e2d91]/10 via-[#6639B7]/10 to-[#5e2d91]/10 rounded-2xl p-8 border-2 border-[#5e2d91]/20">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-[#5e2d91] rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-[#5e2d91] mb-2">
                      Licence par entreprise - Un avantage unique
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Un seul abonnement pour <span className="font-bold text-[#5e2d91]">toute votre entreprise</span> ! 
                      Tous vos collaborateurs peuvent organiser des webinaires sans frais supplémentaires. 
                      <span className="block mt-2 text-[#5e2d91] font-bold">
                        💡 Un avantage incomparable pour maximiser votre ROI et simplifier votre gestion.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Additional Info */}
            <motion.section 
              className="mt-20 bg-gradient-to-r from-[#5e2d91] to-[#CF0072] rounded-2xl p-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-white">
                  Pourquoi choisir Rainbow Webinar ?
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">Sécurité garantie</h3>
                    <p className="text-white/90">
                      Chiffrement end-to-end et conformité RGPD pour protéger vos données
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">Support dédié</h3>
                    <p className="text-white/90">
                      Équipe francophone disponible pour vous accompagner à chaque étape
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">Évolutivité</h3>
                    <p className="text-white/90">
                      Adaptez votre forfait à l'évolution de vos besoins en quelques clics
                    </p>
                  </div>
                </div>

                <div className="mt-10 text-center">
                  <p className="text-white/90 mb-4">
                    Vous avez des questions sur nos forfaits ?
                  </p>
                  <Link 
                    to="/support" 
                    className="inline-flex items-center text-white hover:underline font-semibold"
                  >
                    Consultez notre FAQ
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.section>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
import { useState } from "react";
import { useNavigate } from "react-router";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { motion } from "motion/react";
import { Check, Users } from "lucide-react";
import { Link } from "react-router";

export default function PricingCollaboration() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"collaboration" | "webinar">("collaboration");
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
    return Math.round(eurPrice * rates[currency] * 100) / 100;
  };

  const getDisplayPrice = (basePrice: number) => {
    const price = getPriceForCurrency(basePrice);
    if (billingCycle === "annual") {
      return Math.round(price * 0.9 * 100) / 100; // 10% discount for annual
    }
    return price;
  };

  const essentialFeatures = [
    "Audio & Vidéo HD (1:1)",
    "Messagerie instantanée",
    "Partage de fichiers (1 Go)",
    "Intégration calendrier",
    "App mobile iOS & Android",
    "Support communautaire"
  ];

  const businessFeatures = [
    "Tout Essential +",
    "Conférence jusqu'à 100 participants",
    "Enregistrement des réunions",
    "Partage d'écran avancé",
    "Stockage 10 Go/utilisateur",
    "Intégration CRM & Office 365",
    "Support prioritaire 24/7",
    "Administration centralisée"
  ];

  const enterpriseFeatures = [
    "Tout Business +",
    "Conférence jusqu'à 1000 participants",
    "Webinaires & événements",
    "Téléphonie cloud (SIP/PSTN)",
    "Stockage illimité",
    "API & SDK développeur",
    "SLA 99.99% garanti",
    "Customer Success Manager dédié",
    "SSO & sécurité avancée"
  ];

  return (
    <div className="min-h-screen bg-white">
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
              onClick={() => setActiveTab("collaboration")}
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
              onClick={() => navigate("/pricing")}
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
            Trouvez le forfait Rainbow Collaboration qui vous convient
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="text-center text-gray-600 mb-8 text-lg max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Plateforme de communication unifiée pour messagerie, vidéo et téléphonie - des solutions adaptées à chaque taille d'entreprise.
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
            {/* Essential Plan */}
            <motion.div
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Essential</h3>
                <p className="text-sm text-gray-500">Pour démarrer</p>
              </div>

              <div className="mb-8">
                <div className="text-5xl font-bold text-gray-900 mb-2">Free</div>
                <p className="text-sm text-gray-500">jusqu'à 10 utilisateurs</p>
              </div>

              <button className="w-full py-3 px-6 border-2 border-[#5e2d91] text-[#5e2d91] rounded-lg font-semibold hover:bg-[#5e2d91] hover:text-white transition-all mb-8">
                Démarrer gratuitement
              </button>

              <ul className="space-y-3">
                {essentialFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Business Plan - Popular */}
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
                <h3 className="text-xl font-bold text-gray-900 mb-1">Business</h3>
                <p className="text-sm text-gray-500">Le plus populaire</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl font-bold text-gray-900">{getDisplayPrice(9.90)}</span>
                  <span className="text-gray-600">{currencySymbols[currency]}</span>
                </div>
                <p className="text-sm text-gray-500">/utilisateur/mois</p>
              </div>

              <button className="w-full py-3 px-6 bg-[#5e2d91] text-white rounded-lg font-semibold hover:bg-[#6639B7] transition-all mb-8 shadow-lg">
                Essai gratuit 30 jours
              </button>

              <ul className="space-y-3">
                {businessFeatures.map((feature, index) => (
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
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl font-bold text-gray-900">{getDisplayPrice(19.99)}</span>
                  <span className="text-gray-600">{currencySymbols[currency]}</span>
                </div>
                <p className="text-sm text-gray-500">/utilisateur/mois</p>
              </div>

              <button className="w-full py-3 px-6 border-2 border-[#5e2d91] text-[#5e2d91] rounded-lg font-semibold hover:bg-[#5e2d91] hover:text-white transition-all mb-8">
                Essai gratuit 30 jours
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

          {/* Additional Info */}
          <motion.section 
            className="mt-20 bg-gradient-to-r from-[#5e2d91] to-[#CF0072] rounded-2xl p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-white">
                Pourquoi choisir Rainbow Collaboration ?
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
                    Chiffrement end-to-end et conformité RGPD pour protéger vos communications
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
  );
}
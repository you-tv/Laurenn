import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Sparkles, MessageCircle, MonitorPlay, UserPlus, BarChart3, Hand, MessageSquare, Video, Users, Zap, TrendingUp, CalendarCheck, Check } from "lucide-react";
import { useLanguage } from "../i18n/language-context";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import webinarHeroImage from "figma:asset/webinar_hero.jpg";
import registrationPageImage from "figma:asset/registration_page.png";
import reportingImage from "figma:asset/reporting.png";
import webinarLive from "figma:asset/webinar_live.png";
import analyticsImage from "figma:asset/analytics.png";
import silosImage from "figma:asset/silos.jpg";
import eventsImage from "figma:asset/events.png";
import backstageImage from "figma:asset/backstage.png";

// URL du GIF de démonstration Rainbow Webinar
const demoGif = "https://files.catbox.moe/flef3g.gif";

// Vidéo de démonstration
const webinarVideo = webinarLive;

// Image partage d'écran
import screenSharingImage from "figma:asset/screenshare.jpg";

// Images pour les fonctionnalités
const WEBINAR_FEATURES = [
  {
    icon: Users,
    title: "Événements à grande échelle",
    description: "Organisez des webinars et conférences avec des centaines de participants, sans compromettre la qualité ni la performance.",
    color: "#FF4500",
    imageUrl: webinarLive
  },
  {
    icon: Zap,
    title: "Interactions en temps réel",
    description: "Engagez votre audience avec des sondages, Q&A, chat et levée de main pour des échanges vraiment dynamiques.",
    color: "#0085CA",
    imageUrl: analyticsImage
  },
  {
    icon: TrendingUp,
    title: "Analytics & reporting avancés",
    description: "Analysez la participation, mesurez l'engagement et optimisez vos futurs webinars grâce à des données détaillées.",
    color: "#6639B7",
    imageUrl: silosImage
  },
  {
    icon: CalendarCheck,
    title: "Gestion simple des événements",
    description: "Planifiez, invitez et suivez vos participants facilement, de la création jusqu'au suivi post-event.",
    color: "#34B233",
    imageUrl: eventsImage
  },
  {
    icon: UserPlus,
    title: "Intervenants internes & externes",
    description: "Invitez facilement des speakers externes et collaborez avec des participants partout dans le monde.",
    color: "#CF0072",
    imageUrl: backstageImage
  }
];

export default function ProductWebinar() {
  const { t } = useLanguage();
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  // Auto-rotate features every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeatureIndex((prev) => (prev + 1) % WEBINAR_FEATURES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white relative overflow-hidden">
        {/* Vagues arc-en-ciel en arrière-plan */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg className="absolute w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            {/* Vague violet */}
            <path
              d="M0,200 C320,280 480,120 720,200 C960,280 1120,120 1440,200 L1440,0 L0,0 Z"
              fill="#6639B7"
              fillOpacity="0.08"
            />
            {/* Vague bleu ciel */}
            <path
              d="M0,280 C360,360 540,200 900,280 C1260,360 1380,240 1440,280 L1440,0 L0,0 Z"
              fill="#0085CA"
              fillOpacity="0.06"
            />
            {/* Vague orange */}
            <path
              d="M0,160 C280,220 520,100 840,180 C1160,260 1280,140 1440,200 L1440,0 L0,0 Z"
              fill="#EB632E"
              fillOpacity="0.05"
            />
            {/* Vague rose */}
            <path
              d="M0,320 C400,400 600,280 1000,360 C1400,440 1360,320 1440,360 L1440,0 L0,0 Z"
              fill="#CF0072"
              fillOpacity="0.04"
            />
            {/* Vague vert */}
            <path
              d="M0,240 C340,300 560,180 880,260 C1200,340 1320,220 1440,280 L1440,0 L0,0 Z"
              fill="#34B233"
              fillOpacity="0.05"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-[#EB632E]/10 text-[#EB632E] rounded-full text-sm font-semibold mb-6">Evenement</div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6"><span className="text-gray-900">Rainbow </span><span className="text-[#EB632E]"><span className="font-bold italic">Webinar</span></span></h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-600">La plateforme de webinaires professionnels pour engager et convertir votre audience</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://app.storylane.io/share/your-demo-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-[#5e2d91] to-[#CF0072] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Voir une démo
                </a>
                <Link
                  to="/pricing"
                  className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-300 rounded-lg font-semibold hover:border-gray-400 transition-colors"
                >
                  Voir les tarifs
                </Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <img 
                  src={webinarVideo}
                  alt="Rainbow Webinar Platform" 
                  className="w-full h-auto rounded-2xl shadow-lg scale-125"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo GIF Section */}
      

      {/* Tout ce dont vous avez besoin - Main Features */}
      

      {/* Interactive Features Section - Style "Le bureau nouvelle génération" */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#FF4500]/10 text-[#FF4500] rounded-full text-sm font-semibold mb-4">
              Fonctionnalités interactives
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Des webinaires engageants, accessibles partout
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Feature list */}
            <div className="space-y-2">
              {WEBINAR_FEATURES.map((feature, index) => {
                const isActive = index === activeFeatureIndex;
                const Icon = feature.icon;
                
                return (
                  <button
                    key={index}
                    onClick={() => setActiveFeatureIndex(index)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-300 group ${
                      isActive 
                        ? 'bg-white shadow-md border-2' 
                        : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                    }`}
                    style={{
                      borderColor: isActive ? feature.color : 'transparent'
                    }}
                  >
                    <div className="flex items-center gap-3">
                      {/* Icon */}
                      <div 
                        className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          isActive ? 'shadow-sm' : ''
                        }`}
                        style={{ 
                          backgroundColor: isActive ? feature.color : '#E5E7EB'
                        }}
                      >
                        <Icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 
                          className={`text-base font-bold transition-colors ${
                            isActive ? 'text-gray-900' : 'text-gray-600'
                          }`}
                        >
                          {feature.title}
                        </h3>
                        <p className={`text-xs leading-relaxed text-gray-600 transition-all duration-300 overflow-hidden ${
                          isActive ? 'max-h-16 opacity-100 mt-1.5' : 'max-h-0 opacity-0'
                        }`}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right side - Feature image */}
            <div className="relative h-[350px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeatureIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={WEBINAR_FEATURES[activeFeatureIndex].imageUrl}
                    alt={WEBINAR_FEATURES[activeFeatureIndex].title}
                    className="w-full h-full object-cover rounded-xl shadow-lg"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Conçu pour votre façon de travailler Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#6639B7]/10 text-[#6639B7] rounded-full text-sm font-semibold mb-4 uppercase tracking-wide">
              Produit
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Conçu pour votre façon de travailler
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mobile - Chat et Q&A */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="mb-6">
                <img
                  src={reportingImage}
                  alt="Chat et Q&A"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-lg font-semibold text-gray-700">
                Chat et Q&A
              </p>
            </motion.div>

            {/* Desktop - Streaming HD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="mb-6">
                <img
                  src={registrationPageImage}
                  alt="Streaming HD"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-lg font-semibold text-gray-700">
                Streaming HD
              </p>
            </motion.div>

            {/* Desktop - Partage d'écran */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="mb-6">
                <img
                  src={screenSharingImage}
                  alt="Partage d'écran"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-lg font-semibold text-gray-700">
                Partage d'écran
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#EB632E]/10 text-[#EB632E] rounded-full text-sm font-semibold mb-4 uppercase tracking-wide">
              Tarifs
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trouvez le forfait qui vous convient
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des plans flexibles pour toutes les tailles d'événements. Commencez gratuitement pendant 30 jours.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Start Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Start</h3>
                <p className="text-sm text-gray-500">Pour démarrer</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl font-bold text-gray-900">49</span>
                  <span className="text-gray-600">€</span>
                </div>
                <p className="text-sm text-gray-500">/mois</p>
              </div>

              <Link
                to="/pricing"
                className="block w-full py-3 px-6 text-center border-2 border-[#EB632E] text-[#EB632E] rounded-lg font-semibold hover:bg-[#EB632E] hover:text-white transition-all mb-8"
              >
                Essai gratuit 30 jours
              </Link>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Jusqu'à 120 participants</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Durée illimitée</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Chat en direct</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Partage d'écran</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Enregistrement basique</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Analytics de base</span>
                </li>
              </ul>
            </motion.div>

            {/* Pro Plan - Popular */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white border-2 border-[#EB632E] rounded-2xl p-8 shadow-xl relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-[#5e2d91] to-[#CF0072] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Populaire
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
                <p className="text-sm text-gray-500">Le plus populaire</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl font-bold text-gray-900">129</span>
                  <span className="text-gray-600">€</span>
                </div>
                <p className="text-sm text-gray-500">/mois</p>
              </div>

              <Link
                to="/pricing"
                className="block w-full py-3 px-6 text-center bg-gradient-to-r from-[#5e2d91] to-[#CF0072] text-white rounded-lg font-semibold hover:opacity-90 transition-all mb-8 shadow-lg"
              >
                Essai gratuit 30 jours
              </Link>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Tout Start +</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Jusqu'à 500 participants</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Enregistrement HD cloud</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Sondages & Q&A</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Analytics avancés</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Branding personnalisé</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Support prioritaire</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Intégrations CRM</span>
                </li>
              </ul>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <p className="text-sm text-gray-500">Sur mesure</p>
              </div>

              <div className="mb-8">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  Sur devis
                </div>
                <p className="text-sm text-gray-500">Pour 500+ participants</p>
              </div>

              <Link
                to="/support"
                className="block w-full py-3 px-6 text-center border-2 border-[#5e2d91] text-[#5e2d91] rounded-lg font-semibold hover:bg-[#5e2d91] hover:text-white transition-all mb-8"
              >
                Contactez-nous
              </Link>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Tout Pro +</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Jusqu'à 1000+ participants</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Webinaires illimités</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">White-label complet</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">API & webhooks</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Customer Success Manager</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">SLA 99.99%</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Onboarding dédié</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">SSO & sécurité avancée</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Tous les plans incluent un essai gratuit de 30 jours, sans carte bancaire
            </p>
            <Link
              to="/pricing"
              className="text-[#EB632E] font-semibold hover:underline"
            >
              Voir tous les détails des forfaits →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
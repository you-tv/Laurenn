import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { MessageSquare, Video, FolderOpen, Monitor, Users2, Check } from "lucide-react";
import { useLanguage } from "../i18n/language-context";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import rainbowHeroImage from "figma:asset/collaboration_hero.jpg";
import messagingImage from "figma:asset/messaging.png";
import videoImage from "figma:asset/video_conference.png";
import fileShareImage from "figma:asset/file_sharing.jpg";
import screenShareImage from "figma:asset/screenshare.jpg";
import silosImage from "figma:asset/silos.jpg";
import collaborationImage from "figma:asset/collaboration.png";
import meetingsImage from "figma:asset/meetings.png";

const FEATURES = [
  {
    icon: MessageSquare,
    title: "Messagerie d'équipe",
    description: "Échangez en temps réel avec vos équipes grâce à des conversations organisées par projet ou par sujet.",
    color: "#0085CA",
    image: messagingImage
  },
  {
    icon: Video,
    title: "Visioconférence HD",
    description: "Organisez des réunions fluides avec audio et vidéo de haute qualité, où que vous soyez.",
    color: "#6639B7",
    image: videoImage
  },
  {
    icon: FolderOpen,
    title: "Partage de fichiers",
    description: "Partagez et retrouvez facilement vos documents au sein de vos conversations, sans multiplier les outils.",
    color: "#34B233",
    image: fileShareImage
  },
  {
    icon: Monitor,
    title: "Partage d'écran",
    description: "Présentez, expliquez et collaborez en direct pendant vos appels et réunions.",
    color: "#CF0072",
    image: screenShareImage
  }
];

export default function ProductCollaboration() {
  const { t } = useLanguage();
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  // Auto-rotate features every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeatureIndex((prev) => (prev + 1) % FEATURES.length);
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
              fill="#FF4500"
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
              <div className="inline-block px-4 py-2 bg-[#6639B7]/10 text-[#6639B7] rounded-full text-sm font-semibold mb-6">Collaboration</div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-gray-900">Rainbow </span>
                <span className="text-[#0085CA]">Collaboration</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-600">Des conversations aux décisions, tout se passe au même endroit. Simplement.</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.openrainbow.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#6639B7] text-white rounded-lg font-semibold hover:bg-[#5528A3] transition-colors"
                >
                  Commencer maintenant
                </a>
                <a
                  href="https://app.storylane.io/demo/wepusmzd9gcz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-300 rounded-lg font-semibold hover:border-gray-400 transition-colors"
                >
                  Demander une démo
                </a>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <img 
                  src={rainbowHeroImage} 
                  alt="Rainbow Communication Platform" 
                  className="w-full h-auto rounded-2xl shadow-lg scale-125"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      

      {/* Key Advantages */}
      

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#0085CA]/10 text-[#0085CA] rounded-full text-sm font-semibold mb-4">
              Key features
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Le bureau nouvelle génération, accessible partout​
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Feature list */}
            <div className="space-y-2">
              {FEATURES.map((feature, index) => {
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
                    src={FEATURES[activeFeatureIndex].image}
                    alt={FEATURES[activeFeatureIndex].title}
                    className={`w-full h-full object-contain ${
                      activeFeatureIndex === 3 ? 'scale-125' : ''
                    }`}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {/* Benefit 1 - Image left, text right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[300px]">
                <img
                  src={meetingsImage}
                  alt="Des réunions plus fluides"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Des réunions plus fluides
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  De la <span className="text-[#0085CA] font-semibold">préparation</span> au <span className="text-[#0085CA] font-semibold">suivi</span>, tout est pensé pour rendre vos réunions plus <span className="text-[#0085CA] font-semibold">efficaces</span>, <span className="text-[#0085CA] font-semibold">structurées</span> et <span className="text-[#0085CA] font-semibold">productives</span>.
                </p>
              </div>
            </div>

            {/* Benefit 2 - Text left, image right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Moins de silos, plus d'impact
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Un seul <span className="text-[#0085CA] font-semibold">outil</span> pour communiquer, collaborer et avancer avec des équipes moins <span className="text-[#0085CA] font-semibold">alignées</span> et plus <span className="text-[#0085CA] font-semibold">performantes</span>.
                </p>
              </div>
              <div className="relative h-[300px] order-1 lg:order-2">
                <img
                  src={silosImage}
                  alt="Moins de silos, plus d'impact"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Benefit 3 - Image left, text right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[300px]">
                <img
                  src={collaborationImage}
                  alt="Une collaboration sans frontières"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Une collaboration sans frontières
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Offrez à vos équipes une expérience <span className="text-[#0085CA] font-semibold">fluide</span>, au bureau, à <span className="text-[#0085CA] font-semibold">distance</span> ou en <span className="text-[#0085CA] font-semibold">mobilité</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#5e2d91]/10 text-[#5e2d91] rounded-full text-sm font-semibold mb-4">
              Tarifs
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choisissez votre plan Rainbow Collaboration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions adaptées à chaque taille d'équipe, de la startup à l'entreprise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Start Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Start</h3>
                <div className="flex items-baseline justify-center gap-1 mb-4">
                  <span className="text-5xl font-bold text-[#5e2d91]">49€</span>
                  <span className="text-gray-500">/mois</span>
                </div>
                <p className="text-gray-600">Idéal pour les petites équipes</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#34B233] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Jusqu'à 50 utilisateurs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#34B233] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Messagerie d'équipe illimitée</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#34B233] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Visioconférence HD</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#34B233] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Partage de fichiers (5 GB)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#34B233] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Support email</span>
                </li>
              </ul>
              <a
                href="https://www.openrainbow.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-[#5e2d91] to-[#CF0072] text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Essayer 30 jours gratuits
              </a>
            </div>

            {/* Pro Plan - Featured */}
            <div className="bg-white border-2 border-[#5e2d91] rounded-2xl p-8 relative shadow-xl transform scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#5e2d91] to-[#CF0072] text-white text-sm font-semibold rounded-full">
                Le plus populaire
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
                <div className="flex items-baseline justify-center gap-1 mb-4">
                  <span className="text-5xl font-bold text-[#5e2d91]">129€</span>
                  <span className="text-gray-500">/mois</span>
                </div>
                <p className="text-gray-600">Pour les équipes en croissance</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#34B233] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-semibold">Tout Start +</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#34B233] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Jusqu'à 200 utilisateurs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#34B233] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Enregistrement cloud (50 GB)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#34B233] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Analytics avancés</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#34B233] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Intégrations CRM</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#34B233] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Support prioritaire 24/7</span>
                </li>
              </ul>
              <a
                href="https://www.openrainbow.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-[#5e2d91] to-[#CF0072] text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Essayer 30 jours gratuits
              </a>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <div className="flex items-baseline justify-center gap-1 mb-4">
                  <span className="text-3xl font-bold text-[#5e2d91]">Sur mesure</span>
                </div>
                <p className="text-gray-600">Pour les grandes organisations</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#34B233] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-semibold">Tout Pro +</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#34B233] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Utilisateurs illimités</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#34B233] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Stockage illimité</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#34B233] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">SSO & sécurité avancée</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#34B233] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Customer Success Manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#34B233] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">SLA 99.99%</span>
                </li>
              </ul>
              <a
                href="https://app.storylane.io/demo/wepusmzd9gcz"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 bg-white text-[#5e2d91] border-2 border-[#5e2d91] rounded-lg font-semibold hover:bg-[#5e2d91] hover:text-white transition-all"
              >
                Contacter les ventes
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#5e2d91]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Prêt à moderniser votre communication ?
          </h2>
          <p className="text-xl text-white/90 mb-8">Découvrez Rainbow Collaboration et transformez la collaboration dans votre entreprise</p>
          <a
            href="https://www.openrainbow.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-[#5e2d91] rounded-lg font-semibold hover:shadow-lg transition-shadow"
          >
            Découvrir Rainbow 
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
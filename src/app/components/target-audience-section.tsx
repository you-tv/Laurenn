import { useState } from "react";
import { GraduationCap, TrendingUp, Building2, Users } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import teachersImage from "figma:asset/audience_highlight.jpg";
import marketersImage from "figma:asset/webinar_live.png";
import ongImage from "figma:asset/management.jpg";
import managersImage from "figma:asset/collaboration_hero.jpg";

export function TargetAudienceSection() {
  const [activeTab, setActiveTab] = useState(0);

  const audiences = [
    {
      icon: GraduationCap,
      title: "Enseignants & formateurs",
      description: "Invitez vos élèves dans une salle de classe virtuelle. Vous y trouverez tous les outils pour enseigner efficacement et évaluer les acquis en temps réel.",
      highlight: "Transmettez votre savoir sans frontières",
      image: teachersImage,
      color: "#5e2d91"
    },
    {
      icon: TrendingUp,
      title: "Marketeurs & commerciaux",
      description: "Organisez des webinars d'exception pour générer des leads qualifiés. Interagissez avec votre audience et convertissez vos prospects en clients.",
      highlight: "Boostez votre croissance par l'engagement",
      image: marketersImage,
      color: "#34B233"
    },
    {
      icon: Building2,
      title: "ONG & secteur public",
      description: "Collaborez en toute sécurité avec vos partenaires. Rainbow garantit la souveraineté et la confidentialité totale de vos échanges.",
      highlight: "Une collaboration souveraine et sécurisée",
      image: ongImage,
      color: "#0085CA"
    },
    {
      icon: Users,
      title: "Managers & consultants",
      description: "Gérez vos projets et animez vos équipes hybrides. Des espaces de travail partagés pour une productivité optimale.",
      highlight: "Fédérez vos équipes autour de vos projets",
      image: managersImage,
      color: "#CF0072"
    }
  ];

  const currentAudience = audiences[activeTab];

  return (
    <section className="py-24 lg:py-32 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 tracking-tight">
            À qui s'adresse <span className="text-[#5e2d91]">Rainbow</span> ?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Une solution flexible conçue pour répondre aux défis spécifiques de votre secteur d'activité.
          </p>
        </div>

        {/* Tab Switcher - Clean & Minimalist */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1 bg-gray-100/80 rounded-2xl border border-gray-200/50">
            {audiences.map((audience, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-2 px-4 md:px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-gray-900 shadow-sm border border-gray-200/50'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  <audience.icon className={`w-4 h-4 transition-colors ${isActive ? '' : 'text-gray-400'}`} style={isActive ? { color: audience.color } : {}} />
                  <span className="hidden sm:inline">{audience.title}</span>
                  <span className="sm:hidden">{audience.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feature Spotlight - 2D Polished Look */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content (Left) */}
          <div className="order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div 
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-bold mb-6"
                  style={{ backgroundColor: `${currentAudience.color}10`, color: currentAudience.color }}
                >
                  <currentAudience.icon className="w-4 h-4" />
                  {currentAudience.title}
                </div>
                
                <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 leading-tight">
                  {currentAudience.highlight}
                </h3>
                
                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                  {currentAudience.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-[#5e2d91] hover:bg-[#4a2373] text-white px-8 py-6 text-lg font-bold rounded-xl transition-all shadow-md hover:shadow-lg"
                    onClick={() => window.open("https://app.storylane.io/share/njaxojcgqihp", "_blank")}
                  >
                    Testez-le gratuitement
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-gray-200 text-gray-900 hover:bg-gray-50 px-8 py-6 text-lg font-bold rounded-xl"
                  >
                    Découvrir l'usage
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image (Right) */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden bg-gray-50 border border-gray-200 shadow-2xl">
              {/* Subtle glass effect frame decoration */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200/50 to-transparent z-10" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="aspect-[4/3] w-full"
                >
                  <ImageWithFallback
                    src={currentAudience.image}
                    alt={currentAudience.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
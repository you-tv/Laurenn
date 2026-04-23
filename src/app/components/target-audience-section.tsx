import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, TrendingUp, Building2, Users, Lightbulb, HeartPulse } from "lucide-react";
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
      title: "Enseignants et formateurs",
      description: "Invitez vos élèves dans une salle de classe virtuelle. Vous y trouverez tous les outils pour enseigner efficacement et évaluer les acquis.",
      highlight: "Tout ce qu'il faut pour transmettre votre savoir",
      image: teachersImage,
      color: "#5e2d91"
    },
    {
      icon: TrendingUp,
      title: "Marketeurs et commerciaux",
      description: "Organisez des webinars d'exception pour générer des leads qualifiés. Interagissez avec votre audience et convertissez vos prospects.",
      highlight: "Boostez votre pipeline avec des webinars impactants",
      image: marketersImage,
      color: "#34B233"
    },
    {
      icon: Building2,
      title: "ONG et secteur public",
      description: "Collaborez en toute sécurité avec vos partenaires. Rainbow garantit la souveraineté et la confidentialité de vos échanges.",
      highlight: "Une collaboration souveraine et sécurisée",
      image: ongImage,
      color: "#0085CA"
    },
    {
      icon: Users,
      title: "Managers et consultants",
      description: "Gérez vos projets et animez vos équipes hybrides. Des espaces de travail partagés pour une productivité sans frontières.",
      highlight: "Fédérez vos équipes autour de vos projets",
      image: managersImage,
      color: "#6639B7"
    }
  ];

  const currentAudience = audiences[activeTab];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-[#5e2d91] to-[#6639B7] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            À qui s'adresse Rainbow ?
          </h2>
          
        </motion.div>

        {/* Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <motion.div
                key={index}
                onClick={() => setActiveTab(index)}
                className={`group relative backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 cursor-pointer ${
                  activeTab === index 
                    ? 'bg-white/20 border-white/40 scale-105 shadow-xl' 
                    : 'bg-white/10 border-white/20 hover:bg-white/15'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4">
                  <div 
                    className="p-3 rounded-xl"
                    style={{ backgroundColor: `${audience.color}40` }}
                  >
                    <Icon 
                      className="w-6 h-6 text-white"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {audience.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Feature Spotlight */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid lg:grid-cols-2 gap-12 items-center bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <ImageWithFallback 
                  src={currentAudience.image}
                  alt={currentAudience.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                {currentAudience.highlight}
              </h3>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                {currentAudience.description}
              </p>
              <Button 
                onClick={() => window.open("https://app.storylane.io/share/njaxojcgqihp", "_blank")}
                className="bg-gradient-to-r from-[#34B233] to-[#34B233] hover:from-[#2d9c2b] hover:to-[#2d9c2b] text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Testez-le gratuitement →
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
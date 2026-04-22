import { motion, AnimatePresence } from "motion/react";
import { Users, MessageSquare, Video, BarChart3 } from "lucide-react";
import platformImage from "../../imports/Image_MPRainbow_chat_v05.png";
import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import collaborateImage from "figma:asset/615ffc928f2b95e75364d945787a67d3a1d0690c.png";
import communicateImage from "figma:asset/e42d246abb4ef7489c3d5b2c648e2dc5eb3dae88.png";
import eventsImage from "figma:asset/b129969cd88e00ebd7adf6dd587e439b4ea7ef73.png";
import analyticsImage from "figma:asset/a31498e57eb036acf8b4c1f0bba7903ec196e567.png";

export function UnifiedPlatformSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const pillars = [
    {
      icon: Users,
      title: "Collaborer efficacement",
      description: "Travailler ensemble en temps réel grâce aux espaces partagés, chat et fichiers centralisés.",
      color: "#0085CA",
      image: collaborateImage
    },
    {
      icon: MessageSquare,
      title: "Communiquer simplement",
      description: "Voix, visio, messages instantanés : tout est réuni pour fluidifier les échanges.",
      color: "#34B233",
      image: communicateImage
    },
    {
      icon: Video,
      title: "Créer des événements impactants",
      description: "Webinars, conférences et démos produits pour toucher votre audience et renforcer votre marque.",
      color: "#FF4500",
      image: eventsImage
    },
    {
      icon: BarChart3,
      title: "Analyser et performer",
      description: "Suivi des interactions, leads et performances pour transformer vos communications en résultats concrets.",
      color: "#CF0072",
      image: analyticsImage
    }
  ];

  // Auto-rotate every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % pillars.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [pillars.length]);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
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
            <span className="bg-gradient-to-r from-[#5e2d91] to-[#CF0072] bg-clip-text text-transparent">
              Une plateforme unifiée
            </span>
            <br />
            <span className="text-[#5e2d91]">pour toutes vos communications</span>
          </h2>
          
        </motion.div>

        {/* Content Grid: Image + Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Zone - Animated */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0"
                >
                  <ImageWithFallback
                    src={pillars[activeIndex].image}
                    alt={pillars[activeIndex].title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress Indicators */}
            <div className="flex gap-2 mt-6 justify-center">
              {pillars.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className="relative h-2 rounded-full overflow-hidden transition-all"
                  style={{ 
                    width: activeIndex === index ? '40px' : '20px',
                    backgroundColor: activeIndex === index ? pillars[index].color : '#e5e7eb'
                  }}
                >
                  {activeIndex === index && (
                    <motion.div
                      className="absolute inset-0 bg-white/30"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 4, ease: 'linear' }}
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Pillars - Clickable Cards */}
          <div className="order-1 lg:order-2 space-y-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const isActive = activeIndex === index;
              return (
                <motion.div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`group cursor-pointer rounded-xl p-6 transition-all duration-300 border ${
                    isActive 
                      ? 'bg-white shadow-xl border-2 scale-105' 
                      : 'bg-white shadow-md hover:shadow-lg border-gray-100'
                  }`}
                  style={isActive ? { borderColor: pillar.color } : {}}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div 
                      className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        isActive ? 'scale-110' : 'group-hover:scale-105'
                      }`}
                      style={{ 
                        backgroundColor: isActive ? pillar.color : `${pillar.color}20`
                      }}
                    >
                      <Icon 
                        className="w-6 h-6"
                        style={{ color: isActive ? 'white' : pillar.color }}
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 
                        className={`font-bold text-lg mb-2 transition-colors duration-300 ${
                          isActive ? 'text-xl' : ''
                        }`}
                        style={{ color: pillar.color }}
                      >
                        {pillar.title}
                      </h3>
                      <p className={`text-sm text-gray-600 leading-relaxed transition-opacity ${
                        isActive ? 'opacity-100' : 'opacity-70'
                      }`}>
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
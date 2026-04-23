import { Users, MessageSquare, Video, BarChart3 } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import collaborateImage from "figma:asset/collaborate.png";
import communicateImage from "figma:asset/communicate.jpg";
import eventsImage from "figma:asset/events.png";
import analyticsImage from "figma:asset/analytics.png";

export function UnifiedPlatformSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const pillars = [
    {
      title: "Collaborer efficacement",
      description: "Travailler ensemble en temps réel grâce aux espaces partagés, chat et fichiers centralisés. Tout ce dont votre équipe a besoin pour avancer ensemble.",
      color: "#0085CA",
      image: collaborateImage
    },
    {
      title: "Communiquer simplement",
      description: "Voix, visio, messages instantanés : tout est réuni dans une seule interface pour fluidifier les échanges et gagner un temps précieux.",
      color: "#34B233",
      image: communicateImage
    },
    {
      title: "Créer des événements impactants",
      description: "Organisez des webinars, des conférences et des démos produits professionnels pour toucher votre audience et renforcer votre image de marque.",
      color: "#FF4500",
      image: eventsImage
    },
    {
      title: "Analyser et performer",
      description: "Suivez les interactions, qualifiez vos leads et analysez vos performances pour transformer vos communications en résultats concrets.",
      color: "#CF0072",
      image: analyticsImage
    }
  ];

  // Auto-advance logic
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % pillars.length);
      setProgressKey(prev => prev + 1);
    }, 5000); // 5 seconds per tab
    
    return () => clearTimeout(timer);
  }, [activeIndex, pillars.length, isAutoPlaying]);

  const handleManualClick = (index: number) => {
    setIsAutoPlaying(false); // Stop autoplay when user interacts
    if (activeIndex !== index) {
      setActiveIndex(index);
      setProgressKey(prev => prev + 1); // Reset animation key
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 tracking-tight">
            Une plateforme unifiée
            <br />
            <span className="text-[#5e2d91]">pour toutes vos communications</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Une suite complète et intuitive pour connecter vos équipes, organiser vos événements professionnels et analyser vos performances.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Tabs Navigation (Left) - Accordion Style */}
          <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col justify-center space-y-2">
            {pillars.map((pillar, index) => {
              const isActive = activeIndex === index;
              
              return (
                <div
                  key={index}
                  onClick={() => handleManualClick(index)}
                  className="relative pl-8 py-5 cursor-pointer group"
                >
                  {/* Background track line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200 rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Active Animated Progress line */}
                  {isActive && (
                    <motion.div 
                      className="absolute left-0 top-0 w-1.5 -ml-[1px] rounded-full"
                      style={{ backgroundColor: pillar.color }}
                      initial={{ height: isAutoPlaying ? 0 : "100%" }}
                      animate={{ height: "100%" }}
                      transition={{ duration: isAutoPlaying ? 5 : 0.3, ease: "linear" }}
                      key={`progress-${progressKey}-${index}`}
                    />
                  )}
                  
                  {/* Title */}
                  <h3 
                    className={`font-semibold tracking-tight transition-colors duration-300 ${
                      isActive 
                        ? 'text-2xl md:text-3xl' 
                        : 'text-xl text-gray-400 group-hover:text-gray-700'
                    }`}
                    style={isActive ? { color: pillar.color } : {}}
                  >
                    {pillar.title}
                  </h3>
                  
                  {/* Accordion Description */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-600 leading-relaxed text-lg pt-3 pb-1">
                          {pillar.description}
                        </p>
                        <div className="pt-2 flex items-center text-sm font-medium transition-colors" style={{ color: pillar.color }}>
                          <span className="hover:underline cursor-pointer">En savoir plus</span>
                          <span className="ml-1 opacity-70">→</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Image Display (Right) */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <div className="relative w-full aspect-[4/3] lg:aspect-[16/11] rounded-xl overflow-hidden bg-[#111111] shadow-[0_20px_50px_rgba(0,0,0,0.15)] ring-1 ring-black/5">
              
              {/* Browser-like window header */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-[#1e1e1e] border-b border-white/10 flex items-center px-4 z-20">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
              </div>

              {/* Animated Image Container */}
              <div className="absolute inset-0 pt-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, filter: "blur(4px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(4px)" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={pillars[activeIndex].image}
                      alt={pillars[activeIndex].title}
                      className="w-full h-full object-cover object-top"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
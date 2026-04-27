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
      title: "Échanger avec vos équipes",
      description: "Travailler ensemble en temps réel grâce aux espaces partagés, chaînes d'information, chat, et fichiers centralisés.",
      quote: "« Rainbow a transformé la façon dont nos équipes synchronisent leurs projets au quotidien. »",
      author: "Directeur Technique, Innova",
      color: "#5e2d91",
      image: collaborateImage
    },
    {
      title: "Discuter en temps réel",
      description: "Voix, visio, messages instantanés : tout est réuni pour fluidifier les échanges.",
      quote: "« La simplicité de l'interface nous a permis d'adopter l'outil en moins d'une semaine. »",
      author: "Responsable Opérations, Flux",
      color: "#0085CA",
      image: communicateImage
    },
    {
      title: "Organiser des réunions et événements",
      description: "Organisez facilement webinaires, conférences et démonstrations pour engager vos audiences.",
      quote: "« Nos webinaires n'ont jamais été aussi professionnels et engageants. »",
      author: "Directrice Marketing, Zenith",
      color: "#ea5800",
      image: eventsImage
    }
  ];

  // Auto-advance logic
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % pillars.length);
      setProgressKey(prev => prev + 1);
    }, 6000); // 6 seconds per tab
    
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
    <section className="pb-24 lg:pb-32 bg-[#f9fafb] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 tracking-tight">
            Une seule plateforme,
            <br />
            <span className="text-[#5e2d91]">zéro friction dans vos échanges</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            Centralisez vos échanges avec Rainbow et gagnez du temps au quotidien.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Tabs Navigation (Left) - Accordion Style */}
          <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col justify-center">
            <div className="space-y-4 mb-12">
              {pillars.map((pillar, index) => {
                const isActive = activeIndex === index;
                
                return (
                  <div
                    key={index}
                    onClick={() => handleManualClick(index)}
                    className="relative pl-6 py-4 cursor-pointer group"
                  >
                    {/* Background track line - Smaller and more subtle */}
                    <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gray-200 rounded-full opacity-40 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Active Animated Progress line - Smaller thickness */}
                    {isActive && (
                      <motion.div 
                        className="absolute left-0 top-2 w-[2px] rounded-full"
                        style={{ backgroundColor: pillar.color }}
                        initial={{ height: isAutoPlaying ? 0 : "100%" }}
                        animate={{ height: "calc(100% - 16px)" }}
                        transition={{ duration: isAutoPlaying ? 6 : 0.3, ease: "linear" }}
                        key={`progress-${progressKey}-${index}`}
                      />
                    )}
                    
                    {/* Title */}
                    <h3 
                      className={`font-bold tracking-tight transition-all duration-300 ${
                        isActive 
                          ? 'text-xl md:text-2xl' 
                          : 'text-lg text-gray-400 group-hover:text-gray-600'
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
                          <p className="text-gray-600 leading-relaxed text-base pt-3 pb-4">
                            {pillar.description}
                          </p>
                          
                          <div className="flex items-center text-sm font-bold transition-colors" style={{ color: pillar.color }}>
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

            {/* Global Dynamic Quote Section (Bottom of list) */}
            <div className="pt-8 border-t border-gray-100 relative">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="pl-6 border-l-2"
                  style={{ borderColor: pillars[activeIndex].color }}
                >
                  <p className="text-gray-600 italic text-lg mb-2 leading-relaxed">
                    {pillars[activeIndex].quote}
                  </p>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    {pillars[activeIndex].author}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Image Display (Right) */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <div className="relative w-full aspect-[4/3] lg:aspect-[16/11] rounded-xl overflow-hidden bg-[#111111] shadow-[0_20px_50px_rgba(0,0,0,0.15)] ring-1 ring-black/5">

              {/* Animated Image Container */}
              <div className="absolute inset-0">
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
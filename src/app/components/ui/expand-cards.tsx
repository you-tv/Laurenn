"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

const useCases = [
  {
    id: 1,
    title: "Marketing Manager",
    description: "Organisez des événements d'envergure et générez des leads qualifiés grâce à une interface intuitive et performante.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Responsable Formation",
    description: "Digitalisez vos parcours d'apprentissage et accompagnez la montée en compétences de vos équipes en temps réel.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Modérateur Logistique",
    description: "Gérez vos flux de participants et assurez le bon déroulement technique de vos sessions les plus complexes.",
    image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Sales Director",
    description: "Réalisez des démonstrations produits percutantes et convertissez vos prospects plus rapidement avec des outils de vente intégrés.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    title: "Comm Interne",
    description: "Fédérez vos équipes internationales et partagez la culture d'entreprise à travers des sessions interactives et engageantes.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  },
];

export default function ExpandOnHover() {
  const [expandedId, setExpandedId] = useState(2);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div className="flex h-[450px] md:h-[550px] w-full gap-3 md:gap-5">
        {useCases.map((useCase) => {
          const isExpanded = expandedId === useCase.id;
          
          return (
            <motion.div
              key={useCase.id}
              onClick={() => setExpandedId(useCase.id)}
              onMouseEnter={() => setExpandedId(useCase.id)}
              className="relative cursor-pointer overflow-hidden rounded-[1rem] md:rounded-[1rem] group"
              initial={false}
              animate={{
                flex: isExpanded ? 5 : 0.8,
              }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              {/* Background Image */}
              <img
                src={useCase.image}
                alt={useCase.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Dark Overlay */}
              <div className={`absolute inset-0 transition-opacity duration-500 ${isExpanded ? 'bg-black/40' : 'bg-black/20 group-hover:bg-black/10'}`} />

              {/* Content Container */}
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end overflow-hidden">
                <AnimatePresence mode="wait">
                  {isExpanded ? (
                    <motion.div
                      key="expanded"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="max-w-xl"
                    >
                      <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
                        {useCase.title}
                      </h3>
                      <p className="text-white/90 text-base md:text-xl leading-relaxed mb-8">
                        {useCase.description}
                      </p>
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                        <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-[#5e2d91]" />
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="collapsed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                      <span 
                        className="text-white font-bold text-lg md:text-2xl whitespace-nowrap tracking-tight"
                        style={{ 
                          writingMode: 'vertical-lr', 
                          transform: 'rotate(180deg)' 
                        }}
                      >
                        {useCase.title}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Bottom Link */}
      <div className="flex justify-end mt-12">
        <a 
          href="#" 
          className="flex items-center gap-2 text-gray-900 font-bold hover:text-[#5e2d91] transition-colors"
        >
          Voir tous les cas d'usage
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}

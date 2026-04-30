import { useState, useRef, useEffect } from "react";
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
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });

  const updatePillPosition = (index: number) => {
    const el = tabRefs.current[index];
    if (el) {
      setPillStyle({ left: el.offsetLeft, width: el.offsetWidth });
    }
  };

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    updatePillPosition(index);
  };

  useEffect(() => {
    // Set initial pill position after first render
    const timer = setTimeout(() => updatePillPosition(0), 50);
    return () => clearTimeout(timer);
  }, []);

  const audiences = [
    {
      icon: TrendingUp,
      title: "Marketeurs & commerciaux",
      description: "Accélérez vos échanges et gagnez en réactivité. Rainbow vous permet de coordonner vos campagnes et vos actions de vente en un clin d'œil.",
      highlight: "Accélérez vos échanges et gagnez en réactivité",
      image: marketersImage,
      color: "#ea5800"
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
      icon: GraduationCap,
      title: "Enseignants & formateurs",
      description: "Invitez vos élèves dans une salle de classe virtuelle. Vous y trouverez tous les outils pour enseigner efficacement et évaluer les acquis en temps réel.",
      highlight: "Transmettez votre savoir sans frontières",
      image: teachersImage,
      color: "#5e2d91"
    },
    {
      icon: Users,
      title: "Managers & consultants",
      description: "Optimisez la prise de décision et la coordination d’équipes grâce à une communication fluide et sécurisée.",
      highlight: "Optimisez la coordination de vos équipes",
      image: managersImage,
      color: "#16a96e"
    }
  ];

  const currentAudience = audiences[activeTab];

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 tracking-tight">
            À qui s'adresse <span className="text-[#5e2d91]">Rainbow</span> ?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            Une solution flexible conçue pour répondre aux défis spécifiques de votre secteur d'activité.
          </p>
        </div>

        {/* Tab Switcher - Sliding pill animation */}
        <div className="flex justify-center mb-14">
          <div className="relative inline-flex gap-1 p-1.5 bg-white rounded-xl border border-gray-200/60 shadow-sm">
            {/* Sliding background pill */}
            <motion.div
              className="absolute inset-y-1.5 rounded-lg bg-gray-100 border border-gray-200/50 shadow-sm"
              animate={{ left: pillStyle.left, width: pillStyle.width }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />

            {audiences.map((audience, index) => (
              <button
                key={index}
                ref={(el) => { tabRefs.current[index] = el; }}
                onClick={() => handleTabClick(index)}
                className={`relative z-10 flex items-center gap-2 px-4 md:px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                  activeTab === index
                    ? "text-gray-900"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <audience.icon
                  className="w-4 h-4"
                  style={{ color: activeTab === index ? audience.color : undefined }}
                />
                <span className="hidden sm:inline whitespace-nowrap">
                  {audience.title}
                </span>
                <span className="sm:hidden">
                  {audience.title.split(" ")[0]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Feature Spotlight */}
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
                {/* Color badge */}
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
                    className="bg-[#5e2d91] hover:bg-[#4a2373] text-white px-8 py-6 text-lg font-bold rounded-[10px] transition-all shadow-md hover:shadow-lg"
                    onClick={() => window.open("https://app.storylane.io/share/njaxojcgqihp", "_blank")}
                  >
                    Testez-le gratuitement
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-gray-200 text-gray-900 hover:bg-gray-50 px-8 py-6 text-lg font-bold rounded-[10px]"
                  >
                    Découvrir l'usage
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image (Right) */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-xl">
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
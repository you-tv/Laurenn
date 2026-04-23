import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useLanguage } from "../i18n/language-context";
import { ContainerScroll } from "./ui/container-scroll-animation";
import { motion } from "motion/react";
import rainbowChatImg from "figma:asset/rainbow_chat.png";
import bestfordLogo from "figma:asset/bestford.png";
import eydapLogo from "figma:asset/eydap.png";
import herrenbergLogo from "figma:asset/herrenberg.png";
import londonUniversityLogo from "figma:asset/london_university.png";
import acnLogo from "figma:asset/acn.png";
import nexonLogo from "figma:asset/nexon.png";
import perpignanLogo from "figma:asset/perpignan.png";

interface HeroSectionProps {
  onStartTrial: () => void;
  onViewDemo: () => void;
  onViewVideo: () => void;
}

const referenceLogos = [
  { src: bestfordLogo, alt: "Bestford" },
  { src: eydapLogo, alt: "EYDAP" },
  { src: herrenbergLogo, alt: "Herrenberg" },
  { src: londonUniversityLogo, alt: "London University" },
  { src: acnLogo, alt: "ACN" },
  { src: nexonLogo, alt: "Nexon" },
  { src: perpignanLogo, alt: "Perpignan" },
];

export function HeroSection({ onStartTrial, onViewDemo, onViewVideo }: HeroSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="relative flex flex-col items-center justify-center bg-white overflow-hidden pb-12">
      <ContainerScroll
        titleComponent={
          <>
            <motion.h1 
              className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Rainbow, la solution pour des
              <br />
              <span className="hero-word-loader">
                <span className="hero-words">
                  <span className="hero-word text-[#5e2d91]">réunions</span>
                  <span className="hero-word text-[#5e2d91]">webinaires</span>
                  <span className="hero-word text-[#5e2d91]">conférences</span>
                  <span className="hero-word text-[#5e2d91]">échanges</span>
                  <span className="hero-word text-[#5e2d91]">réunions</span>
                </span>
              </span>
              {" "}réussis.
            </motion.h1>

            <motion.p 
              className="text-xl font-medium text-[#CF0072] mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              Souveraine. Moderne. Française. 🇫🇷
            </motion.p>

            <motion.p 
              className="text-xl text-gray-600 leading-relaxed mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              Messagerie, appels, partage de fichiers, visioconférences : tout ce dont vos équipes ont besoin, en un seul outil.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              <Button
                size="lg"
                className="bg-[#5e2d91] hover:bg-[#4a2373] text-white px-8 py-7 text-lg font-semibold rounded-md shadow-sm transition-colors"
                onClick={onStartTrial}
              >
                {t.hero.startTrial}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-7 text-lg font-semibold border-2 border-gray-200 text-gray-900 hover:bg-gray-50 rounded-md transition-colors group"
                onClick={onViewDemo}
              >
                <Play className="mr-2 h-5 w-5 fill-current text-gray-900 group-hover:text-[#5e2d91] transition-colors" />
                {t.hero.viewDemo}
              </Button>
            </motion.div>

            {/* Reference logos static grid */}
            <motion.div 
              className="pt-8 border-t border-gray-100 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              <p className="text-sm text-gray-500 font-medium mb-8">
                Ils nous font confiance
              </p>
              <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center opacity-70">
                {referenceLogos.map((logo, i) => (
                  <div
                    key={i}
                    className="h-8 md:h-10 w-auto flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-200"
                  >
                    <img src={logo.src} alt={logo.alt} className="h-full w-auto object-contain max-w-[120px]" />
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        }
      >
        <div className="relative w-full h-full cursor-pointer group" onClick={onViewVideo}>
          <img
            src={rainbowChatImg}
            alt="Rainbow Collaboration Interface"
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
          {/* Play overlay */}
          <div className="absolute inset-0 bg-gray-900/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
            <div className="bg-white rounded-full p-5 shadow-lg flex items-center justify-center transform group-hover:scale-105 transition-all duration-300">
              <Play className="h-8 w-8 text-[#5e2d91] fill-[#5e2d91] ml-1" />
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
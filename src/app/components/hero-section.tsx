import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../i18n/language-context";
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
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-0">
      {/* Background Accents */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-yellow-200/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-green-200/40 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-0">

        {/* --- Centered Text Content --- */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-5 text-gray-900">
            Vos équipes connectées,
            <br />
            <span className="bg-gradient-to-r from-[#5e2d91] to-[#CF0072] bg-clip-text text-transparent">
              vos données protégées.
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-3">
            Messagerie, appels, partage de fichiers, visioconférences : tout ce dont vos équipes ont besoin, en un seul outil.
          </p>

          <p className="text-base font-semibold bg-gradient-to-r from-[#6639B7] to-[#CF0072] bg-clip-text text-transparent mb-8">
            Souveraine. Moderne. Française. 🇫🇷
          </p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-[#5e2d91] hover:bg-[#4a2373] text-white px-8 py-6 text-lg group shadow-lg transition-all duration-300"
                onClick={onStartTrial}
              >
                {t.hero.startTrial}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-2 border-[#5e2d91] text-[#5e2d91] hover:bg-[#5e2d91] hover:text-white hover:border-transparent group transition-all duration-300"
                onClick={onViewDemo}
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform fill-current" />
                {t.hero.viewDemo}
              </Button>
            </motion.div>
          </motion.div>

          {/* Reference logos scrolling carousel */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-xs text-gray-400 uppercase font-semibold tracking-widest mb-4">
              Ils nous font confiance
            </p>
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-10 items-center"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                style={{ width: "max-content" }}
              >
                {[...referenceLogos, ...referenceLogos].map((logo, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 h-8 w-24 flex items-center justify-center grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
                  >
                    <img src={logo.src} alt={logo.alt} className="h-full w-full object-contain" />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* --- App Screenshot — centered below everything --- */}
        <motion.div
          className="relative w-full flex justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.6 }}
        >
          {/* Glow behind image */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-gradient-to-r from-[#5e2d91]/20 to-[#CF0072]/20 blur-3xl rounded-full pointer-events-none" />

          <motion.div
            className="relative rounded-2xl shadow-2xl border border-gray-200 overflow-hidden group cursor-pointer w-full max-w-4xl"
            whileHover={{ y: -6, boxShadow: "0 30px 60px -12px rgba(94, 45, 145, 0.3)" }}
            transition={{ duration: 0.3 }}
            onClick={onViewVideo}
          >
            <img
              src={rainbowChatImg}
              alt="Rainbow Collaboration Interface"
              className="w-full h-auto object-cover block"
            />
            {/* Play overlay */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white/90 backdrop-blur rounded-full p-5 shadow-xl">
                <Play className="h-10 w-10 text-[#5e2d91] fill-[#5e2d91]" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
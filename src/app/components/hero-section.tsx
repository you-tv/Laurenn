import { Button } from "./ui/button";
import { Play } from "lucide-react";
import { useLanguage } from "../i18n/language-context";
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
    <section className="relative flex flex-col items-center justify-center bg-white overflow-hidden pt-24">
      {/* ── Text content ── */}
      <div className="max-w-6xl mx-auto text-center px-4 z-10 relative">

        {/* Eyebrow */}
        <motion.p
          className="text-sm md:text-base font-bold uppercase tracking-[0.15em] mb-6 bg-gradient-to-r from-[#5e2d91] to-[#CF0072] text-transparent bg-clip-text inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Souveraine. Moderne. Européenne. 🇪🇺
        </motion.p>

        {/* Main Title */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-extrabold tracking-[-0.04em] leading-[1.1] mb-8 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          Rainbow, la solution pour des
          <br />
          <span className="hero-word-loader mt-2">
            <span className="hero-words">
              <span className="hero-word text-[#5e2d91]">réunions</span>
              <span className="hero-word text-[#5e2d91]">webinaires</span>
              <span className="hero-word text-[#5e2d91]">conférences</span>
              <span className="hero-word text-[#5e2d91]">réunions</span>
            </span>
          </span>
          {" "}réussis.
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          Messagerie, appels, partage de fichiers, visioconférences : tout ce dont vos équipes ont besoin, en un seul outil.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-5 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <Button
            size="lg"
            className="bg-[#5e2d91] hover:bg-[#4a2373] text-white px-10 py-7 text-lg font-bold rounded-[10px] shadow-2xl shadow-purple-900/20 transition-all hover:scale-105 active:scale-95"
            onClick={onStartTrial}
          >
            Explorez nos produits
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-10 py-7 text-lg font-bold border-2 border-gray-200 text-gray-900 hover:bg-gray-50 rounded-[10px] transition-all group hover:scale-105 active:scale-95"
            onClick={onViewDemo}
          >
            <Play className="mr-3 h-5 w-5 fill-current text-gray-900 group-hover:text-[#5e2d91] transition-colors" />
            Demander une démonstration
          </Button>
        </motion.div>

        {/* Partners Marquee */}
        <motion.div
          className="pt-8 w-full overflow-hidden mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-10">
            Ils nous font confiance
          </p>
          <div className="relative flex overflow-x-hidden group opacity-60">
            <div className="flex animate-marquee whitespace-nowrap gap-16 md:gap-24 items-center py-4">
              {[...referenceLogos, ...referenceLogos].map((logo, i) => (
                <div
                  key={i}
                  className="h-10 md:h-12 w-auto flex-shrink-0 flex items-center justify-center hover:grayscale-0 transition-all duration-500"
                >
                  <img src={logo.src} alt={logo.alt} className="h-full w-auto object-contain max-w-[140px]" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Image with gray curved stage ── */}
      <div className="relative w-full mt-10">

        {/* Gray convex arch SVG — sits behind the image */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 z-0 pointer-events-none"
          style={{ height: "clamp(160px, 12vw, 220px)" }}
        >
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="w-full h-full block"
          >            <defs>
              <linearGradient id="rainbow-strip" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#34B233" />
                <stop offset="25%" stopColor="#0085CA" />
                <stop offset="50%" stopColor="#5e2d91" />
                <stop offset="75%" stopColor="#CF0072" />
                <stop offset="100%" stopColor="#FF4500" />
              </linearGradient>
            </defs>
            <path d="M0,120 C480,0 960,0 1440,120 L1440,120 L0,120 Z" fill="#f9fafb" />
            <path 
              d="M0,120 C480,0 960,0 1440,120" 
              fill="none" 
              stroke="url(#rainbow-strip)" 
              strokeWidth="4" 
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Gray fill below arch — extends to bottom of section */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 bg-[#f9fafb] z-0"
          style={{ top: "clamp(159px, 12vw, 219px)" }}
        />

        {/* Image — z-10, sits on top of the gray stage */}
        <motion.div
          className="relative z-10 max-w-5xl mx-auto px-4 pb-20 md:pb-28"
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
        >
          <div
            className="relative rounded-2xl overflow-hidden cursor-pointer group"
            onClick={onViewVideo}
            style={{
              boxShadow:
                "0 0 0 1px rgba(0,0,0,0.05), 0 8px 16px rgba(0,0,0,0.08), 0 32px 72px rgba(0,0,0,0.12), 0 56px 96px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src={rainbowChatImg}
              alt="Interface Rainbow — Messagerie, Visioconférence & Collaboration"
              className="w-full h-auto object-cover block"
              draggable={false}
            />
            {/* Play overlay */}
            <div className="absolute inset-0 bg-gray-900/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white/95 backdrop-blur-sm rounded-full p-6 shadow-2xl flex items-center justify-center transform scale-90 group-hover:scale-100 transition-all duration-300">
                <Play className="h-10 w-10 text-[#5e2d91] fill-[#5e2d91] ml-1" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
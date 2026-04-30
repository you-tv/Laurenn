import { Button } from "./ui/button";
import { Play } from "lucide-react";
import { useLanguage } from "../i18n/language-context";
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import { useRef, useState, useCallback } from "react";
import rainbowIntroVideo from "../../assets/rainbow_intro.mp4";
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

// Easing: ease-in-out cubic
function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

export function HeroSection({ onStartTrial, onViewDemo, onViewVideo }: HeroSectionProps) {
  const { t } = useLanguage();

  // ── Scroll-driven curve morph ──────────────────────────────────────────────
  const sectionRef = useRef<HTMLElement>(null);
  const fillPathRef = useRef<SVGPathElement>(null);
  const strokePathRef = useRef<SVGPathElement>(null);

  // Convex  → corners at y=120, control points at y=0
  // Concave → corners at y=0,   control points at y=120
  const SCROLL_START = 100;
  const SCROLL_END = 720; // px before fully concave

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const raw = Math.min(Math.max((latest - SCROLL_START) / (SCROLL_END - SCROLL_START), 0), 1);
    const p = easeInOut(raw);

    // Interpolate key Y values
    const cornerY = 120 - p * 120;   // 120 → 0
    const controlY = p * 120;         // 0   → 120

    const fill = `M0,${cornerY} C480,${controlY} 960,${controlY} 1440,${cornerY} L1440,400 L0,400 Z`; const stroke = `M0,${cornerY} C480,${controlY} 960,${controlY} 1440,${cornerY}`;

    fillPathRef.current?.setAttribute("d", fill);
    strokePathRef.current?.setAttribute("d", stroke);
  });
  // ──────────────────────────────────────────────────────────────────────────

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center overflow-hidden pt-24"
      style={{ background: "linear-gradient(170deg, #ffffff 0%, #f8f5fc 35%, #f0e8f7 65%, #ebe2f3 100%)" }}
    >
      {/* ── Color blobs ── */}
      <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft violet wash — top left */}
        <div style={{ position: "absolute", left: "-15%", top: "-10%", width: "70vw", height: "50vw", maxWidth: 900, maxHeight: 700, borderRadius: "50%", background: "radial-gradient(circle at 55% 55%, rgba(139, 92, 188, 0.15) 0%, rgba(139, 92, 188, 0.06) 40%, transparent 70%)", filter: "blur(80px)" }} />
        {/* Warm magenta accent — top right */}
        <div style={{ position: "absolute", right: "-10%", top: "5%", width: "45vw", height: "45vw", maxWidth: 680, maxHeight: 580, borderRadius: "50%", background: "radial-gradient(circle at 45% 50%, rgba(207, 0, 114, 0.10) 0%, rgba(207, 0, 114, 0.04) 45%, transparent 70%)", filter: "blur(72px)" }} />
        {/* Deep violet core — center-left */}
        <div style={{ position: "absolute", left: "5%", top: "30%", width: "40vw", height: "40vw", maxWidth: 620, maxHeight: 520, borderRadius: "50%", background: "radial-gradient(circle at 50% 45%, rgba(94, 45, 145, 0.12) 0%, rgba(94, 45, 145, 0.04) 50%, transparent 72%)", filter: "blur(64px)" }} />
        {/* Cool blue-violet highlight — center-right */}
        <div style={{ position: "absolute", right: "5%", top: "25%", width: "35vw", height: "35vw", maxWidth: 560, maxHeight: 480, borderRadius: "50%", background: "radial-gradient(circle at 40% 55%, rgba(109, 40, 217, 0.10) 0%, rgba(109, 40, 217, 0.03) 50%, transparent 68%)", filter: "blur(56px)" }} />
        {/* Ambient glow — bottom center */}
        <div style={{ position: "absolute", left: "20%", bottom: "-5%", width: "55vw", height: "30vw", maxWidth: 1000, maxHeight: 400, borderRadius: "50%", background: "radial-gradient(ellipse at 50% 50%, rgba(167, 139, 250, 0.10) 0%, rgba(167, 139, 250, 0.03) 55%, transparent 75%)", filter: "blur(80px)" }} />
      </div>

      {/* ── Text content ── */}
      <div className="max-w-6xl mx-auto text-center px-4 z-10 relative">
        <motion.p
          className="text-sm md:text-base font-bold uppercase tracking-[0.15em] mb-6 bg-gradient-to-r from-[#5e2d91] to-[#CF0072] text-transparent bg-clip-text inline-flex items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Souveraine. Moderne. Européenne.
          <img src="https://flagcdn.com/w40/eu.png" alt="UE" className="inline-block w-6 h-auto ml-2 align-middle translate-y-[-1px]" />
        </motion.p>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-extrabold tracking-[-0.04em] leading-[1.2] mb-8 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          Rainbow, la solution pour des{" "}
          <span className="hero-word-loader">
            <span className="hero-words">
              <span className="hero-word text-[#5e2d91]">réunions</span>
              <span className="hero-word text-[#5e2d91]">webinaires</span>
              <span className="hero-word text-[#5e2d91]">conférences</span>
              <span className="hero-word text-[#5e2d91]">réunions</span>
            </span>
          </span>
          {" "}réussis.
        </motion.h1>

        <motion.div
          className="flex flex-col sm:flex-row gap-5 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <Button
            size="lg"
            className="bg-[#5e2d91] hover:bg-[#4a2373] text-white px-10 py-7 text-lg font-bold rounded-[10px] shadow-2xl shadow-purple-900/20 transition-all active:scale-95"
            onClick={onStartTrial}
          >
            Explorez nos produits
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-10 py-7 text-lg font-bold border-2 border-gray-200 text-gray-900 hover:bg-gray-50 rounded-[10px] transition-all group active:scale-95"
            onClick={onViewDemo}
          >
            <Play className="mr-3 h-5 w-5 fill-current text-gray-900 group-hover:text-[#5e2d91] transition-colors" />
            Demander une démonstration
          </Button>
        </motion.div>

        <motion.div
          className="pt-8 w-full overflow-hidden mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-10">
            Ils nous font confiance
          </p>
          <div
            className="relative flex overflow-x-hidden group opacity-60"
            style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
          >
            <div className="flex animate-marquee whitespace-nowrap gap-16 md:gap-24 items-center py-4">
              {[...referenceLogos, ...referenceLogos].map((logo, i) => (
                <div key={i} className="h-10 md:h-12 w-auto flex-shrink-0 flex items-center justify-center hover:grayscale-0 transition-all duration-500">
                  <img src={logo.src} alt={logo.alt} className="h-full w-auto object-contain max-w-[140px]" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Image with scroll-morphing arch ── */}
      <div className="relative w-full mt-10">
        {/* Gray stage below arch */}
<div
  aria-hidden="true"
  className="absolute inset-x-0 bottom-0 z-0 pointer-events-none"
  style={{
    height: "72%",
    background: `
      radial-gradient(ellipse 80% 50% at 50% 100%, rgba(94, 45, 145, 0.14) 0%, transparent 75%),
      radial-gradient(ellipse 50% 35% at 25% 100%, rgba(139, 92, 188, 0.10) 0%, transparent 70%),
      radial-gradient(ellipse 50% 35% at 75% 100%, rgba(139, 92, 188, 0.10) 0%, transparent 70%),
      linear-gradient(to top, rgba(94, 45, 145, 0.10) 0%, rgba(139, 92, 188, 0.05) 40%, transparent 75%)
    `,
  }}
/>

        {/* Product image */}
        <motion.div
          className="relative z-10 max-w-5xl mx-auto px-4 pb-16 md:pb-24"
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
        >
          <div
            className="relative rounded-2xl overflow-hidden cursor-pointer group"
            onClick={onViewVideo}
            style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.05), 0 8px 16px rgba(0,0,0,0.08), 0 32px 72px rgba(0,0,0,0.12), 0 56px 96px rgba(0,0,0,0.08)" }}
          >
            <video
              src={rainbowIntroVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto object-cover block"
            />
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
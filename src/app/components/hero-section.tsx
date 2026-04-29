import { Button } from "./ui/button";
import { Play } from "lucide-react";
import { useLanguage } from "../i18n/language-context";
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import { useRef, useState, useCallback } from "react";
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
      style={{ background: "linear-gradient(to bottom, #ffffff 0%, #faf7fd 60%, #f3eaf9 100%)" }}
    >
      {/* ── Color blobs ── */}
      <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div style={{ position: "absolute", left: "-25%", top: "33%", width: "80vw", height: "40vw", maxWidth: 680, maxHeight: 580, borderRadius: "50%", background: "radial-gradient(circle at 60% 50%, rgba(182, 120, 187, 0.3) 0%, rgba(182, 120, 187, 0.3) 40%, transparent 70%)", filter: "blur(64px)" }} />
        <div style={{ position: "absolute", right: "-24%", top: "33%", width: "38vw", height: "38vw", maxWidth: 740, maxHeight: 540, borderRadius: "50%", background: "radial-gradient(circle at 40% 55%, rgba(182, 120, 187, 0.3) 0%, rgba(182, 120, 187, 0.3) 42%, transparent 70%)", filter: "blur(60px)" }} />
        <div style={{ position: "absolute", left: "2%", top: "46%", width: "32vw", height: "32vw", maxWidth: 560, maxHeight: 460, borderRadius: "50%", background: "radial-gradient(circle at 55% 45%, rgba(182, 120, 187, 0.3) 0%, rgba(182, 120, 187, 0.3) 45%, transparent 70%)", filter: "blur(56px)" }} />
        <div style={{ position: "absolute", left: "18%", top: "47%", width: "64vw", height: "30vw", maxWidth: 1200, maxHeight: 240, borderRadius: "50%", background: "radial-gradient(circle at 50% 40%, rgba(182, 120, 187, 0.3) 0%, rgba(182, 120, 187, 0.3) 52%, transparent 72%)", filter: "blur(72px)" }} />
        <div style={{ position: "absolute", right: "-1%", top: "45%", width: "44vw", height: "34vw", maxWidth: 680, maxHeight: 580, borderRadius: "50%", background: "radial-gradient(circle at 40% 50%, rgba(182, 120, 187, 0.3) 0%, rgba(182, 120, 187, 0.3) 45%, transparent 70%)", filter: "blur(58px)" }} />
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
      radial-gradient(ellipse 90% 60% at 50% 100%, rgba(140, 60, 180, 0.22) 0%, transparent 70%),
      radial-gradient(ellipse 60% 40% at 20% 100%, rgba(182, 120, 187, 0.18) 0%, transparent 65%),
      radial-gradient(ellipse 60% 40% at 80% 100%, rgba(182, 120, 187, 0.18) 0%, transparent 65%),
      linear-gradient(to top, rgba(120, 40, 170, 0.18) 0%, rgba(182, 120, 187, 0.08) 35%, transparent 70%)
    `,
  }}
/>

        {/* Product image */}
        <motion.div
          className="relative z-10 max-w-5xl mx-auto px-4 pb-20 md:pb-28"
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
        >
          <div
            className="relative rounded-2xl overflow-hidden cursor-pointer group"
            onClick={onViewVideo}
            style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.05), 0 8px 16px rgba(0,0,0,0.08), 0 32px 72px rgba(0,0,0,0.12), 0 56px 96px rgba(0,0,0,0.08)" }}
          >
            <img
              src={rainbowChatImg}
              alt="Interface Rainbow — Messagerie, Visioconférence & Collaboration"
              className="w-full h-auto object-cover block"
              draggable={false}
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
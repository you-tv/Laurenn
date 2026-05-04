import { Button } from "./ui/button";
import { Play, ShieldCheck, MonitorSmartphone, Layers } from "lucide-react";
import { useLanguage } from "../i18n/language-context";
import { motion } from "motion/react";
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

const features = [
  {
    icon: ShieldCheck,
    title: "Réunions sécurisées",
    desc: "Protection des données de bout en bout",
  },
  {
    icon: Layers,
    title: "Collaboration interactive",
    desc: "Partage d'écran, chat, sondages et plus encore",
  },
];

export function HeroSection({ onStartTrial, onViewDemo, onViewVideo }: HeroSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="relative bg-white overflow-x-hidden py-20">

      {/* ── Main grid ── */}
      <div className="relative z-10 max-w-[1800px] mx-auto px-6 lg:px-14 pt-24 pb-6 flex flex-col lg:flex-row items-center gap-10 lg:gap-8">

        {/* ── LEFT: Text content ── */}
        <div className="flex-1 lg:w-[46%] shrink-0 flex flex-col justify-center">

          {/* Badge */}
          <motion.p
            className="text-[11px] font-bold uppercase tracking-[0.18em] mb-6 bg-gradient-to-r from-[#5e2d91] to-[#CF0072] text-transparent bg-clip-text inline-flex items-center gap-2"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            Souveraine. Moderne. Européenne.
            <img
              src="https://flagcdn.com/w40/eu.png"
              alt="UE"
              className="w-5 h-auto translate-y-[-1px] opacity-90"
            />
          </motion.p>

          {/* Headline */}
          <motion.h1
            className="text-[2.6rem] sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-[-0.035em] leading-[1.15] mb-5 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
          >
            Rainbow, la solution pour des{" "}
            <span className="hero-word-loader">
              <span className="hero-words">
                <span className="hero-word text-[#5e2d91]">réunions</span>
                <span className="hero-word text-[#5e2d91]">webinaires</span>
                <span className="hero-word text-[#5e2d91]">conférences</span>
                <span className="hero-word text-[#5e2d91]">réunions</span>
              </span>
            </span>{" "}
            réussies.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-base text-gray-500 leading-relaxed mb-9 max-w-[440px]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
          >
            Collaborez efficacement avec des réunions en ligne sécurisées,
            des fonctionnalités interactives avancées et une expérience fluide,
            où que vous soyez.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.28 }}
          >
            <Button
              size="lg"
              className="bg-[#5e2d91] hover:bg-[#4a2373] text-white px-8 py-6 text-base font-bold rounded-[10px] shadow-xl shadow-purple-900/20 transition-all active:scale-95"
              onClick={onStartTrial}
            >
              Explorez nos produits
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-base font-bold border-2 border-gray-200 text-gray-900 hover:bg-gray-50 rounded-[10px] transition-all group active:scale-95"
              onClick={onViewDemo}
            >
              <Play className="mr-2 h-4 w-4 fill-current text-gray-900 group-hover:text-[#5e2d91] transition-colors" />
              Demander une démonstration
            </Button>
          </motion.div>

          {/* Feature bullets */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.38 }}
          >
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-3 min-w-0">
                <div className="mt-0.5 shrink-0 w-8 h-8 rounded-lg bg-[#5e2d91]/8 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-[#5e2d91]" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-gray-800 leading-snug">{title}</p>
                  <p className="text-[12px] text-gray-400 leading-snug mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: Product image + color aura ── */}
        <motion.div
          className="flex-1 relative lg:w-[54%] flex items-center justify-center"
          initial={{ opacity: 0, x: 32, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          {/* ── Color halos — Rainbow personality — positioned relative to this wrapper, overflow allowed ── */}
          <div aria-hidden="true" className="absolute pointer-events-none" style={{ inset: "-30% -20%", zIndex: 0 }}>
            {/* Green — top right */}
            <div style={{
              position: "absolute", right: "5%", top: "0%",
              width: "90%", height: "90%",
              borderRadius: "50%",
              background: "radial-gradient(circle at 50% 50%, rgba(52,178,51,0.55) 0%, rgba(52,178,51,0.22) 45%, transparent 70%)",
              filter: "blur(60px)",
            }} />
            {/* Blue — top right overlap */}
            <div style={{
              position: "absolute", right: "-10%", top: "0%",
              width: "50%", height: "50%",
              borderRadius: "50%",
              background: "radial-gradient(circle at 50% 50%, rgba(0,133,202,0.50) 0%, rgba(0,133,202,0.18) 50%, transparent 72%)",
              filter: "blur(50px)",
            }} />
            {/* Purple — center left */}
            <div style={{
              position: "absolute", left: "0%", top: "25%",
              width: "55%", height: "55%",
              borderRadius: "50%",
              background: "radial-gradient(circle at 55% 50%, rgba(94,45,145,0.48) 0%, rgba(94,45,145,0.16) 50%, transparent 70%)",
              filter: "blur(58px)",
            }} />
            {/* Pink — bottom left */}
            <div style={{
              position: "absolute", left: "20%", bottom: "5%",
              width: "52%", height: "52%",
              borderRadius: "50%",
              background: "radial-gradient(circle at 50% 50%, rgba(207,0,114,0.48) 0%, rgba(207,0,114,0.16) 50%, transparent 70%)",
              filter: "blur(56px)",
            }} />
            {/* Orange — bottom right */}
            <div style={{
              position: "absolute", right: "2%", bottom: "5%",
              width: "46%", height: "46%",
              borderRadius: "50%",
              background: "radial-gradient(circle at 50% 50%, rgba(255,80,20,0.42) 0%, rgba(255,69,0,0.14) 52%, transparent 72%)",
              filter: "blur(52px)",
            }} />
          </div>

          {/* Product video/image */}
          <div
            className="relative z-10 w-full rounded-2xl overflow-hidden cursor-pointer group"
            onClick={onViewVideo}
            style={{
              boxShadow:
                "0 0 0 1px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.06), 0 20px 48px rgba(0,0,0,0.10), 0 40px 80px rgba(0,0,0,0.07)",
            }}
          >
            <video
              src={`${import.meta.env.BASE_URL}rainbow_intro.mp4`}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto object-cover block"
            />
            {/* Play overlay on hover */}
            <div className="absolute inset-0 bg-gray-900/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white/95 backdrop-blur-sm rounded-full p-5 shadow-2xl flex items-center justify-center transform scale-90 group-hover:scale-100 transition-all duration-300">
                <Play className="h-9 w-9 text-[#5e2d91] fill-[#5e2d91] ml-1" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Trusted-by strip — tight to the hero content ── */}
      <motion.div
        className="relative z-10 py-7"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.55 }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-6 text-center">
            Ils nous font confiance
          </p>
          <div
            className="relative flex overflow-x-hidden opacity-55"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            }}
          >
            <div className="flex animate-marquee whitespace-nowrap gap-16 md:gap-24 items-center">
              {[...referenceLogos, ...referenceLogos].map((logo, i) => (
                <div
                  key={i}
                  className="h-8 md:h-10 w-auto flex-shrink-0 flex items-center justify-center"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-full w-auto object-contain max-w-[120px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
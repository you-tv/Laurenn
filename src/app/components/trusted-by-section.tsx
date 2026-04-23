import { motion } from "motion/react";
import { RadialIntro } from "./ui/radial-intro";
import perpignanLogo from "figma:asset/perpignan.png";
import herrenbergLogo from "figma:asset/herrenberg.png";
import bestfordLogo from "figma:asset/bestford.png";
import eydapLogo from "figma:asset/eydap.png";
import montpellierMetropoleLogo from "figma:asset/montpellier_mediterranee.png";
import loughboroughLogo from "figma:asset/london_university.png";
import occitanieLogo from "figma:asset/region_occitanie.png";
import chuRennesLogo from "figma:asset/chu_rennes.png";
import chmMayotteLogo from "figma:asset/chm_mayotte.png";
import rainbowNameLogo from "figma:asset/rainbow_name_logo.png";
import { useLanguage } from "../i18n/language-context";

export function TrustedBySection() {
  const { t } = useLanguage();

  const orbitItems = [
    { id: 1, name: "Perpignan", src: perpignanLogo },
    { id: 2, name: "Herrenberg", src: herrenbergLogo },
    { id: 3, name: "Bestford", src: bestfordLogo },
    { id: 4, name: "Eydap", src: eydapLogo },
    { id: 5, name: "Montpellier", src: montpellierMetropoleLogo },
    { id: 6, name: "London University", src: loughboroughLogo },
    { id: 7, name: "Occitanie", src: occitanieLogo },
    { id: 8, name: "CHU Rennes", src: chuRennesLogo },
    { id: 9, name: "CHM Mayotte", src: chmMayotteLogo },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#F9FAFB] relative overflow-hidden border-y border-gray-100">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-purple-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#5e2d91 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#5e2d91] font-bold tracking-wider text-sm uppercase mb-4"
          >
            {t.hero.trustedBy}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
          >
            Ils nous font confiance
          </motion.h2>
        </div>

        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <RadialIntro 
              orbitItems={orbitItems} 
              stageSize={typeof window !== 'undefined' && window.innerWidth < 768 ? 320 : 560}
              imageSize={typeof window !== 'undefined' && window.innerWidth < 768 ? 60 : 100}
            >
              <div className="relative group">
                {/* Center Logo Glow */}
                <div className="absolute inset-0 bg-purple-500 blur-2xl opacity-20 group-hover:opacity-30 transition-opacity rounded-full scale-150" />
                
                <img 
                  src={rainbowNameLogo} 
                  alt="Rainbow" 
                  className="relative h-12 md:h-20 w-auto object-contain drop-shadow-sm transition-transform group-hover:scale-105 duration-500"
                />
              </div>
            </RadialIntro>
          </motion.div>
        </div>

        <div className="text-center mt-20 lg:mt-32">
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Plus de 40 000 organisations à travers le monde utilisent Rainbow pour transformer leur communication et collaborer efficacement.
          </p>
        </div>
      </div>
    </section>
  );
}

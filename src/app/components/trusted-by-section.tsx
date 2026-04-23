import { motion } from "motion/react";
import perpignanLogo from "figma:asset/perpignan.png";
import herrenbergLogo from "figma:asset/herrenberg.png";
import bestfordLogo from "figma:asset/bestford.png";
import eydapLogo from "figma:asset/eydap.png";
import montpellierMetropoleLogo from "figma:asset/montpellier_mediterranee.png";
import loughboroughLogo from "figma:asset/london_university.png";
import occitanieLogo from "figma:asset/region_occitanie.png";
import chuRennesLogo from "figma:asset/chu_rennes.png";
import chmMayotteLogo from "figma:asset/chm_mayotte.png";
import hellwegLogo from "figma:asset/hellweg.png";
import nexonLogo from "figma:asset/nexon.png";
import kingswayLogo from "figma:asset/kingsway_hospitals.jpg";
import careOutlookLogo from "figma:asset/care_outlook.jpg";
import paytrenLogo from "figma:asset/paytren.png";
import mayfairLogo from "figma:asset/mayfair_hotels.jpg";
import domaLogo from "figma:asset/doma_hotels.jpg";
import taketaLogo from "figma:asset/taketa_city.png";
import { useLanguage } from "../i18n/language-context";

export function TrustedBySection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-500 mb-8 text-xl font-semibold">{t.hero.trustedBy}</p>
          
          {/* Infinite Scrolling Carousel */}
          <div className="relative overflow-hidden py-8">
            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
            
            {/* Scrolling container */}
            <motion.div
              className="flex gap-16 lg:gap-20"
              animate={{
                x: [0, -1000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {/* Premier groupe de logos */}
              <div className="flex gap-16 lg:gap-20 items-center shrink-0">
                <img 
                  src={bestfordLogo} 
                  alt="BESFORD" 
                  className="h-20 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={perpignanLogo} 
                  alt="Perpignan Méditerranée" 
                  className="h-28 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={eydapLogo} 
                  alt="EYDAP" 
                  className="h-42 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={herrenbergLogo} 
                  alt="Herrenberg" 
                  className="h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={montpellierMetropoleLogo} 
                  alt="Montpellier Méditerranée Métropole" 
                  className="h-32 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={loughboroughLogo} 
                  alt="London University" 
                  className="h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={occitanieLogo} 
                  alt="Région Occitanie" 
                  className="h-24 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={chuRennesLogo} 
                  alt="CHU Rennes" 
                  className="h-20 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={chmMayotteLogo} 
                  alt="CHM Mayotte" 
                  className="h-20 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={hellwegLogo} 
                  alt="Hellweg" 
                  className="h-20 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={nexonLogo} 
                  alt="Nexon" 
                  className="h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={kingswayLogo} 
                  alt="Kingsway Hospitals" 
                  className="h-20 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={careOutlookLogo} 
                  alt="Care Outlook" 
                  className="h-20 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={paytrenLogo} 
                  alt="Paytren" 
                  className="h-20 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={mayfairLogo} 
                  alt="Mayfair Hotels" 
                  className="h-20 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={domaLogo} 
                  alt="Doma Hotels" 
                  className="h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={taketaLogo} 
                  alt="Taketa City" 
                  className="h-24 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>

              {/* Deuxième groupe de logos (duplication pour effet infini) */}
              <div className="flex gap-16 lg:gap-20 items-center shrink-0">
                <img 
                  src={bestfordLogo} 
                  alt="BESFORD" 
                  className="h-20 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={perpignanLogo} 
                  alt="Perpignan Méditerranée" 
                  className="h-28 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={eydapLogo} 
                  alt="EYDAP" 
                  className="h-42 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={herrenbergLogo} 
                  alt="Herrenberg" 
                  className="h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={montpellierMetropoleLogo} 
                  alt="Montpellier Méditerranée Métropole" 
                  className="h-32 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={loughboroughLogo} 
                  alt="London University" 
                  className="h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={occitanieLogo} 
                  alt="Région Occitanie" 
                  className="h-24 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={chuRennesLogo} 
                  alt="CHU Rennes" 
                  className="h-20 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={chmMayotteLogo} 
                  alt="CHM Mayotte" 
                  className="h-20 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={hellwegLogo} 
                  alt="Hellweg" 
                  className="h-20 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={nexonLogo} 
                  alt="Nexon" 
                  className="h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={kingswayLogo} 
                  alt="Kingsway Hospitals" 
                  className="h-20 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={careOutlookLogo} 
                  alt="Care Outlook" 
                  className="h-20 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={paytrenLogo} 
                  alt="Paytren" 
                  className="h-20 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={mayfairLogo} 
                  alt="Mayfair Hotels" 
                  className="h-20 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={domaLogo} 
                  alt="Doma Hotels" 
                  className="h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={taketaLogo} 
                  alt="Taketa City" 
                  className="h-24 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>

              {/* Troisième groupe de logos (pour assurer la continuité) */}
              <div className="flex gap-16 lg:gap-20 items-center shrink-0">
                <img 
                  src={bestfordLogo} 
                  alt="BESFORD" 
                  className="h-20 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={perpignanLogo} 
                  alt="Perpignan Méditerranée" 
                  className="h-28 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={eydapLogo} 
                  alt="EYDAP" 
                  className="h-42 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={herrenbergLogo} 
                  alt="Herrenberg" 
                  className="h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={montpellierMetropoleLogo} 
                  alt="Montpellier Méditerranée Métropole" 
                  className="h-32 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={loughboroughLogo} 
                  alt="London University" 
                  className="h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={occitanieLogo} 
                  alt="Région Occitanie" 
                  className="h-24 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={chuRennesLogo} 
                  alt="CHU Rennes" 
                  className="h-20 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={chmMayotteLogo} 
                  alt="CHM Mayotte" 
                  className="h-20 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={hellwegLogo} 
                  alt="Hellweg" 
                  className="h-20 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={nexonLogo} 
                  alt="Nexon" 
                  className="h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={kingswayLogo} 
                  alt="Kingsway Hospitals" 
                  className="h-20 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={careOutlookLogo} 
                  alt="Care Outlook" 
                  className="h-20 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={paytrenLogo} 
                  alt="Paytren" 
                  className="h-20 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={mayfairLogo} 
                  alt="Mayfair Hotels" 
                  className="h-20 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={domaLogo} 
                  alt="Doma Hotels" 
                  className="h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <img 
                  src={taketaLogo} 
                  alt="Taketa City" 
                  className="h-24 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

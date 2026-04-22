import { motion } from "motion/react";
import perpignanLogo from "figma:asset/d62337ede46c26a4a4d4aeeaaecb3b71d6ca50fa.png";
import herrenbergLogo from "figma:asset/9002d175ecd5542e2e15cdd647ff2ce7e1c2f826.png";
import bestfordLogo from "figma:asset/f1f8e1f03a29867a1bb70a6eb37881b260e9f135.png";
import eydapLogo from "figma:asset/972fbf94fa6f4feebb64f47ed9e009290cc62bce.png";
import montpellierMetropoleLogo from "figma:asset/506695db8390161eb2ad61692a38b139c9a0e395.png";
import loughboroughLogo from "figma:asset/df0a7d405bf2c1ef24f20b4ab369974265c3b4bd.png";
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
                  alt="Loughborough" 
                  className="h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
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
                  alt="Loughborough" 
                  className="h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
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
                  alt="Loughborough" 
                  className="h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
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

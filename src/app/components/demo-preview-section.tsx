import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Button } from "./ui/button";
import { Play } from "lucide-react";
import { useLanguage } from "../i18n/language-context";

// URL du GIF de démonstration Rainbow Webinar depuis Storylane
const demoGif = "https://files.catbox.moe/flef3g.gif";

interface DemoPreviewSectionProps {
  onStartTrial: () => void;
}

export function DemoPreviewSection({ onStartTrial }: DemoPreviewSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Vagues arc-en-ciel en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          {/* Vague violet */}
          <path
            d="M0,200 C320,280 480,120 720,200 C960,280 1120,120 1440,200 L1440,0 L0,0 Z"
            fill="#6639B7"
            fillOpacity="0.08"
          />
          {/* Vague bleu ciel */}
          <path
            d="M0,280 C360,360 540,200 900,280 C1260,360 1380,240 1440,280 L1440,0 L0,0 Z"
            fill="#0085CA"
            fillOpacity="0.06"
          />
          {/* Vague orange */}
          <path
            d="M0,160 C280,220 520,100 840,180 C1160,260 1280,140 1440,200 L1440,0 L0,0 Z"
            fill="#FF4500"
            fillOpacity="0.05"
          />
          {/* Vague rose */}
          <path
            d="M0,320 C400,400 600,280 1000,360 C1400,440 1360,320 1440,360 L1440,0 L0,0 Z"
            fill="#CF0072"
            fillOpacity="0.04"
          />
          {/* Vague vert */}
          <path
            d="M0,240 C340,300 560,180 880,260 C1200,340 1320,220 1440,280 L1440,0 L0,0 Z"
            fill="#34B233"
            fillOpacity="0.05"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            {t.demoPreview.title}
            <br />
            <span className="bg-gradient-to-r from-[#CF0072] via-[#FF4500] via-[#34B233] via-[#0085CA] to-[#6639B7] bg-clip-text text-transparent">
              {t.demoPreview.titleHighlight}
            </span>
          </h2>
        </motion.div>

        {/* Demo GIF with hover effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative max-w-5xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#5e2d91] via-[#6639B7] to-[#CF0072] rounded-2xl opacity-20 blur-2xl" />
            
            {/* GIF container */}
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-white">
              <img
                src={demoGif}
                alt="Démo animée Rainbow Webinar - Interface de gestion de webinaires"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={onStartTrial}
              size="lg"
              className="bg-[#5e2d91] hover:bg-[#4a2373] text-white px-12 py-6 text-lg shadow-2xl"
            >
              <Play className="mr-2 h-6 w-6" />
              {t.demoPreview.ctaButton}
            </Button>
          </motion.div>
          
          {/* No Credit Card text */}
          <motion.p
            className="text-sm text-gray-600 flex items-center justify-center gap-2 mt-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <svg className="w-4 h-4 text-[#34B233]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {t.hero.noCreditCard}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
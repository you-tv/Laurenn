import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../i18n/language-context";

interface HeroSectionProps {
  onStartTrial: () => void;
  onViewDemo: () => void;
  onViewVideo: () => void;
}

export function HeroSection({ onStartTrial, onViewDemo, onViewVideo }: HeroSectionProps) {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background removed - pure white */}
      
      {/* Abstract Rainbow Wave removed */}
      
      {/* Abstract Cloud Forms removed */}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Content - Two columns layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Text Content */}
          <motion.div 
            className="text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Rainbow Webinar Logo */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-black">
                Vos équipes connectées, vos données protégées.
                <br />
              </h1>
              
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 bg-gradient-to-r from-[#6639B7] to-[#CF0072] bg-clip-text text-transparent text-left">Souveraine. Moderne. Française. 🇫🇷</h2>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed text-left">
                Messagerie, appels, partage de fichiers, visioconférences: tout ce dont vos équipes ont besoin, en un seul outil.
              </p>
            </motion.div>

            {/* Key Benefits */}
            <motion.div 
              className="flex flex-col gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Benefits removed */}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#5e2d91] to-[#6639B7] hover:from-[#4a2373] hover:to-[#5228a3] text-white px-8 py-6 text-lg group shadow-lg transition-all duration-300"
                  onClick={onStartTrial}
                >
                  {t.hero.startTrial}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-8 py-6 text-lg border-2 border-[#5e2d91] text-[#5e2d91] hover:bg-[#5e2d91] hover:text-white hover:border-transparent group transition-all duration-300"
                  onClick={onViewDemo}
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  {t.hero.viewDemo}
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats Section */}
            <motion.div 
              className="flex flex-row gap-8 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="text-left">
                <div className="text-3xl lg:text-4xl font-bold text-[#5e2d91] mb-1">4M+</div>
                <div className="text-sm lg:text-base text-gray-500">Utilisateurs Rainbow</div>
              </div>
              <div className="text-left">
                <div className="text-3xl lg:text-4xl font-bold text-[#5e2d91] mb-1">47K</div>
                <div className="text-sm lg:text-base text-gray-500">Entreprises</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Video Section */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-[#5e2d91] rounded-2xl blur-3xl opacity-10" />
            <motion.div 
              className="relative rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden bg-gray-50 group cursor-pointer"
              whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(94, 45, 145, 0.25)" }}
              transition={{ duration: 0.3 }}
              onClick={onViewVideo}
            >
              {/* YouTube Video Embed - Rainbow Demo */}
              <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/XS9eE0UTA5c?start=2&autoplay=1&mute=1&loop=1&playlist=XS9eE0UTA5c&controls=0&modestbranding=1&rel=0&showinfo=0&fs=0&disablekb=1"
                  title="Rainbow Webinar Demo"
                  className="w-full h-full border-0 pointer-events-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/10 group-hover:bg-black/20 transition-colors">
                  <motion.div
                    className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-2xl"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Play className="h-10 w-10 text-[#5e2d91] ml-1" fill="currentColor" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
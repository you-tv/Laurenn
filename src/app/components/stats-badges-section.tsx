import React from 'react';
import { motion } from 'motion/react';

const stats = [
  { value: "700 M", label: "de messages envoyés chaque jour" },
  { value: "4 M", label: "d'utilisateurs collaborent directement avec des équipes externes chaque semaine" },
  { value: "3 M", label: "de flux de travail quotidiens" },
  { value: "1,7 M", label: "d'applications utilisées chaque semaine" },
];

const badges = [
  { title: "Best Results", season: "SPRING 2026" },
  { title: "Easiest Setup", season: "SPRING 2026" },
  { title: "Highest User Adoption", season: "SPRING 2026" },
  { title: "Leader", season: "SPRING 2026", sub: "SMALL BUSINESS" },
  { title: "Leader", season: "SPRING 2026", sub: "MID-MARKET" },
  { title: "Leader", season: "SPRING 2026", sub: "ENTERPRISE" },
];

const G2Badge = ({ title, season, sub }: { title: string, season: string, sub?: string }) => (
  <div className="flex flex-col items-center bg-white border border-gray-100 shadow-sm p-3 rounded-sm w-32 h-44 relative">
    {/* G2 Logo top bar */}
    <div className="w-full h-4 bg-[#FF4500] flex items-center justify-between px-1 mb-2">
      <span className="text-[6px] text-white font-bold">{season}</span>
      <div className="w-2 h-2 bg-white rounded-full flex items-center justify-center">
        <div className="w-1 h-1 bg-[#FF4500] rounded-full" />
      </div>
    </div>
    
    <div className="flex-1 flex flex-col items-center justify-center text-center">
      <div className="text-[12px] font-black text-gray-900 leading-tight mb-1 uppercase tracking-tighter">
        {title}
      </div>
      {sub && (
        <div className="text-[6px] font-bold text-gray-500 uppercase tracking-tighter">
          {sub}
        </div>
      )}
    </div>

    {/* Bottom Shield Point */}
    <div className="absolute bottom-0 left-0 w-full flex">
       <div className="h-1 flex-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500" />
    </div>
    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b border-r border-gray-100 rotate-45 z-0" />
  </div>
);

export function StatsBadgesSection() {
  return (
    <section className="relative py-32 bg-[#5e2d91] overflow-hidden">
      {/* Top Concave Curve */}
      <div 
        className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10"
        aria-hidden="true"
      >
        <svg 
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[60px] md:h-[120px]"
        >
          <path 
            d="M0,0 C480,120 960,120 1440,0 L1440,0 L0,0 Z" 
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-16 md:pt-24">
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black text-white text-center mb-24 tracking-tight max-w-5xl mx-auto leading-[1.1]"
        >
          Des millions de personnes aiment travailler dans Rainbow
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-16 lg:gap-0">
          {/* Left Column: Stats */}
          <div className="flex-1 w-full flex flex-col justify-center gap-12 lg:pr-16">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-8"
              >
                <div className="text-5xl md:text-7xl font-black text-white min-w-[200px] text-right tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-sm md:text-lg text-purple-100 font-medium leading-tight max-w-[300px] opacity-90">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block w-px bg-white/10 self-stretch mx-4" />

          {/* Right Column: Badges */}
          <div className="flex-1 w-full lg:pl-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                Les chiffres parlent d'eux-mêmes.
              </h3>
              <p className="text-lg text-purple-200 font-medium opacity-80">
                Plus de 303 rapports de marché G2 désignent Rainbow comme un leader de confiance.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10">
              {badges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="flex justify-center"
                >
                  <G2Badge {...badge} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple-400 rounded-full blur-[160px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-pink-500 rounded-full blur-[180px] opacity-10 pointer-events-none" />
    </section>
  );
}

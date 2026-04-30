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
    <section className="relative py-24 lg:py-32 bg-[#5e2d91] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black text-white text-center mb-16 lg:mb-20 tracking-tight max-w-5xl mx-auto leading-[1.1]"
        >
          Des millions de personnes aiment travailler dans Rainbow
        </motion.h2>

        {/* Numbers aligned horizontally */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-3">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-purple-100 font-medium leading-snug opacity-80 max-w-[200px] mx-auto">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple-400 rounded-full blur-[160px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-pink-500 rounded-full blur-[180px] opacity-10 pointer-events-none" />
    </section>
  );
}

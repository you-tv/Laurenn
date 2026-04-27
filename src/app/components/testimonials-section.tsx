import React from 'react';
import { motion } from "motion/react";
import ExpandOnHover from "./ui/expand-cards";

export function TestimonialsSection({ onViewDemo }: { onViewDemo?: () => void }) {
  return (
    <section 
      aria-labelledby="testimonials-heading"
      className="bg-gray-50 py-24 lg:py-32 relative overflow-hidden"
    >
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 }
        }}
        className="max-w-7xl px-4 sm:px-6 lg:px-8 z-10 mx-auto"
      >
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto mb-4">
          <div className="flex justify-center">
            <div className="border border-purple-200 py-1 px-4 rounded-full text-xs font-bold tracking-widest uppercase text-[#5e2d91] bg-purple-100/50 transition-colors mb-6">
              Usage
            </div>
          </div>

          <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-extrabold tracking-tight text-center text-gray-900 transition-colors">
            Ils ont transformé leur quotidien avec <br/>
            <span className="text-[#5e2d91]">Rainbow Webinar</span>
          </h2>
          <p className="text-center mt-6 text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto transition-colors">
            Découvrez comment nos clients utilisent la puissance de Rainbow pour leurs événements les plus critiques.
          </p>
        </div>

        {/* New ExpandOnHover Component */}
        <div className="mt-4">
          <ExpandOnHover />
        </div>
      </motion.div>
    </section>
  );
}
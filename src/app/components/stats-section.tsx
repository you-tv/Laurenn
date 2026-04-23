import { motion, useSpring, useTransform, useInView } from "motion/react";
import { useEffect, useRef } from "react";

function Counter({ value, direction = "up" }: { value: number, direction?: "up" | "down" }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const springValue = useSpring(0, {
    stiffness: 40,
    damping: 20,
  });

  const displayValue = useTransform(springValue, (current) => 
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

export function StatsSection() {
  const stats = [
    {
      value: 90,
      suffix: "%",
      label: "des utilisateurs indiquent que Rainbow les aide à rester mieux connectés",
      footnote: "4"
    },
    {
      value: 43,
      suffix: "",
      label: "le nombre moyen d'applications utilisées par les équipes dans Rainbow",
      footnote: "3"
    },
    {
      value: 87,
      suffix: "%",
      label: "des utilisateurs déclarent que Rainbow les aide à collaborer plus efficacement",
      footnote: "4"
    }
  ];

  return (
    <section className="relative bg-[#4a2373] text-white pb-24 lg:pb-32 mt-24 md:mt-40">
      {/* Curved Divider at the top - Bulging Upwards */}
      <div className="absolute top-0 left-0 w-full overflow-hidden -translate-y-[99%] pointer-events-none">
        <svg 
          viewBox="0 0 1440 160" 
          preserveAspectRatio="none" 
          className="w-full h-[80px] sm:h-[120px] md:h-[160px] lg:h-[200px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fill="#4a2373" 
            d="M0,160 C480,0 960,0 1440,160 V160 H0 Z"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-20 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto"
          >
            Nous sommes là pour faire grandir votre entreprise
          </motion.h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="text-6xl lg:text-8xl font-extrabold text-[#c084fc] mb-6 transition-transform group-hover:scale-105 duration-300">
                <Counter value={stat.value} />
                {stat.suffix}
              </div>
              <p className="text-lg md:text-xl font-medium text-white/90 max-w-[280px] mx-auto leading-relaxed">
                {stat.label}
                <sup className="text-xs ml-0.5 opacity-60 font-bold">{stat.footnote}</sup>
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle background decoration - contained in overflow-hidden box to avoid bleed */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6b21a8] rounded-full blur-[160px] opacity-20" />
      </div>
    </section>
  );
}
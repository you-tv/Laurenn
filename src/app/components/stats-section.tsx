import { motion, useMotionValue, useTransform, animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

function Counter({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, value, duration]);

  useEffect(() => {
    return rounded.on("change", (latest) => setDisplayValue(latest));
  }, [rounded]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
}

export function StatsSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Stat 1 */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -3 }}
          >
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-[#5e2d91]/30 hover:shadow-lg transition-all duration-300">
              <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#5e2d91] to-[#CF0072] bg-clip-text text-transparent mb-3">
                <Counter value={4} suffix="M" />
              </div>
              <div className="text-gray-600 text-sm lg:text-base font-medium">
                utilisateurs par mois
              </div>
            </div>
          </motion.div>

          {/* Stat 2 */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -3 }}
          >
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-[#5e2d91]/30 hover:shadow-lg transition-all duration-300">
              <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#5e2d91] to-[#CF0072] bg-clip-text text-transparent mb-3">
                <Counter value={1} suffix="M" />
              </div>
              <div className="text-gray-600 text-sm lg:text-base font-medium">
                interactions par jour
              </div>
            </div>
          </motion.div>

          {/* Stat 3 */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -3 }}
          >
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-[#5e2d91]/30 hover:shadow-lg transition-all duration-300">
              <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#5e2d91] to-[#CF0072] bg-clip-text text-transparent mb-3">
                <Counter value={47} suffix="K" />
              </div>
              <div className="text-gray-600 text-sm lg:text-base font-medium">
                entreprises
              </div>
            </div>
          </motion.div>

          {/* Stat 4 */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -3 }}
          >
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-[#5e2d91]/30 hover:shadow-lg transition-all duration-300">
              <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#5e2d91] to-[#CF0072] bg-clip-text text-transparent mb-3">
                <Counter value={370} />
              </div>
              <div className="text-gray-600 text-sm lg:text-base font-medium">
                utilisateurs actifs quotidiens
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import { Video, Users, BarChart3, Sparkles, Shield, Zap, Presentation, MessageSquare, UserPlus } from "lucide-react";
import { Card } from "./ui/card";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useLanguage } from "../i18n/language-context";

function FeatureCard({ feature, index }: { feature: any, index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card 
          className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-[#5e2d91] group cursor-pointer bg-white h-full"
        >
          <div className="flex items-center gap-4 mb-4">
            <motion.div 
              className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center flex-shrink-0`}
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Icon className="h-6 w-6 text-white" />
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-900">
              {feature.title}
            </h3>
          </div>
          <p className="text-gray-600">
            {feature.description}
          </p>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { t } = useLanguage();

  const features = [
    {
      icon: Zap,
      title: t.features.videoStreaming.title,
      description: t.features.videoStreaming.description,
      bgColor: "bg-gradient-to-br from-[#FF4500] to-[#CF0072]"
    },
    {
      icon: MessageSquare,
      title: t.features.capacity.title,
      description: t.features.capacity.description,
      bgColor: "bg-gradient-to-br from-[#CF0072] to-[#6639B7]"
    },
    {
      icon: Video,
      title: t.features.analytics.title,
      description: t.features.analytics.description,
      bgColor: "bg-gradient-to-br from-[#6639B7] to-[#0085CA]"
    },
    {
      icon: UserPlus,
      title: t.features.interactive.title,
      description: t.features.interactive.description,
      bgColor: "bg-gradient-to-br from-[#0085CA] to-[#34B233]"
    }
  ];

  return (
    <section id="features" className="pt-4 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          ref={ref}
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            <span className="bg-gradient-to-r from-[#CF0072] via-[#FF4500] via-[#34B233] via-[#0085CA] to-[#6639B7] bg-clip-text text-transparent">
              {t.features.title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.features.subtitle}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
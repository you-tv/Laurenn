import { Check, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { useLanguage } from "../i18n/language-context";

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
  hideHeader?: boolean;
}

function PricingCard({ 
  planKey, 
  index, 
  onSelectPlan, 
  isAnnual, 
  monthlyPrice,
  popular,
  available 
}: { 
  planKey: 'start' | 'pro' | 'enterprise';
  index: number;
  onSelectPlan: (name: string) => void;
  isAnnual: boolean;
  monthlyPrice: number | null;
  popular: boolean;
  available: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { t } = useLanguage();

  const planConfig = {
    start: {
      name: t.pricing.start.name,
      description: t.pricing.start.description,
      features: [
        `120 ${t.pricing.participants}`,
        t.pricing.chat,
        t.pricing.recording,
        t.pricing.analytics,
        t.pricing.support
      ]
    },
    pro: {
      name: t.pricing.pro.name,
      description: t.pricing.pro.description,
      features: [
        `500 ${t.pricing.participants}`,
        t.pricing.chat,
        t.pricing.analytics,
        t.pricing.polls,
        t.pricing.prioritySupport
      ]
    },
    enterprise: {
      name: t.pricing.enterprise.name,
      description: t.pricing.enterprise.description,
      features: [
        `1000+ ${t.pricing.participants}`,
        t.pricing.unlimitedWebinars,
        t.pricing.customBranding,
        t.pricing.api,
        t.pricing.manager
      ]
    }
  };

  const plan = planConfig[planKey];

  const getPrice = () => {
    if (!monthlyPrice) return t.pricing.comingSoon;
    if (isAnnual) {
      const annualPrice = Math.round(monthlyPrice * 0.8); // -20%
      return `${annualPrice}€`;
    }
    return `${monthlyPrice}€`;
  };

  const getOriginalPrice = () => {
    if (!monthlyPrice || !isAnnual) return null;
    return `${monthlyPrice}€`;
  };

  const getCTA = () => {
    if (!available) return t.pricing.comingSoon;
    if (planKey === 'enterprise') return t.pricing.contactUs || 'Me tenir informé';
    if (planKey === 'pro') return t.pricing.subscribe || "S'abonner";
    return t.pricing.freeTrial;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <motion.div
        whileHover={available ? { y: -12, scale: 1.03 } : {}}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card
          className={`relative p-8 h-full ${
            popular 
              ? "border-2 shadow-2xl scale-105" 
              : available 
              ? "border border-gray-200"
              : "border-2 border-dashed border-gray-300 opacity-90"
          }`}
          style={popular ? {
            borderImage: 'linear-gradient(135deg, #CF0072, #FF4500, #34B233, #0085CA, #6639B7) 1',
            boxShadow: '0 25px 50px -12px rgba(207, 0, 114, 0.25)'
          } : undefined}
        >
          {popular && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#CF0072] via-[#FF4500] to-[#34B233] text-white shadow-lg">
                {t.pricing.popular || 'Le plus populaire'}
              </Badge>
            </motion.div>
          )}
          
          {!available && (
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-500 text-xs px-2 py-1">
                <Sparkles className="h-3 w-3 mr-1" />
                {t.pricing.comingSoon}
              </Badge>
            </motion.div>
          )}

          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
            <div className="mb-2">
              {getOriginalPrice() && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl text-gray-400 line-through mb-1"
                >
                  {getOriginalPrice()}
                </motion.div>
              )}
              <motion.span 
                className={`${monthlyPrice ? 'text-5xl' : 'text-2xl'} font-bold ${available ? "text-gray-900" : "text-gray-500"}`}
                whileHover={available ? { scale: 1.1 } : {}}
                key={isAnnual ? 'annual' : 'monthly'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {getPrice()}
              </motion.span>
              {available && monthlyPrice && (
                <span className="text-gray-600 ml-2">{t.pricing.perMonth}</span>
              )}
            </div>
            <p className="text-gray-600">{plan.description}</p>
          </div>

          <motion.div
            whileHover={available ? { scale: 1.05 } : {}}
            whileTap={available ? { scale: 0.95 } : {}}
          >
            <Button
              className={`w-full mb-6 ${
                popular
                  ? "bg-gradient-to-r from-[#5e2d91] to-[#6639B7] hover:from-[#4a2373] hover:to-[#5228a3] shadow-lg shadow-[#5e2d91]/30"
                  : !available
                  ? "bg-gray-500 hover:bg-gray-600"
                  : "border-[#5e2d91] text-[#5e2d91] hover:bg-gradient-to-r hover:from-[#5e2d91] hover:to-[#6639B7] hover:text-white"
              }`}
              variant={popular || !available ? "default" : "outline"}
              size="lg"
              onClick={() => onSelectPlan(plan.name)}
              disabled={!available}
            >
              {getCTA()}
            </Button>
          </motion.div>

          <div className="space-y-3">
            {plan.features.map((feature, featureIndex) => (
              <motion.div 
                key={featureIndex} 
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.3 + featureIndex * 0.05 }}
              >
                <motion.div 
                  className={`flex-shrink-0 w-5 h-5 rounded-full ${available ? "bg-[#5e2d91]" : "bg-gray-400"} flex items-center justify-center mt-0.5`}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Check className="h-3 w-3 text-white" />
                </motion.div>
                <span className={available ? "text-gray-700" : "text-gray-500"}>{feature}</span>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export function PricingSection({ onSelectPlan, hideHeader }: PricingSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isAnnual, setIsAnnual] = useState(false);
  const { t } = useLanguage();

  const plans = [
    { key: 'start' as const, monthlyPrice: 49, popular: false, available: true },
    { key: 'pro' as const, monthlyPrice: 129, popular: true, available: true },
    { key: 'enterprise' as const, monthlyPrice: null, popular: false, available: false }
  ];

  return (
    <section id="pricing" className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {!hideHeader && (
          <motion.div 
            ref={ref}
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
              <span className="bg-gradient-to-r from-[#CF0072] via-[#FF4500] via-[#34B233] via-[#0085CA] to-[#6639B7] bg-clip-text text-transparent">
                {t.pricing.title}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.pricing.subtitle}
            </p>
          </motion.div>
        )}

        {/* Billing Toggle */}
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-4 bg-gray-100 p-2 rounded-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                !isAnnual 
                  ? "bg-white text-[#5e2d91] shadow-md" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {t.pricing.monthly}
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all relative ${ 
                isAnnual 
                  ? "bg-white text-[#5e2d91] shadow-md" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {t.pricing.annually}
              <motion.span 
                className="absolute -top-3 -right-20 bg-[#34B233] text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg whitespace-nowrap"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {t.pricing.save20}
              </motion.span>
            </button>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <PricingCard 
              key={plan.key} 
              planKey={plan.key}
              index={index} 
              onSelectPlan={onSelectPlan} 
              isAnnual={isAnnual}
              monthlyPrice={plan.monthlyPrice}
              popular={plan.popular}
              available={plan.available}
            />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {/* Licence par entreprise - Highlight */}
          <motion.div 
            className="mb-6 p-6 bg-gradient-to-r from-[#5e2d91]/10 via-[#6639B7]/10 to-[#5e2d91]/10 rounded-2xl border-2 border-[#5e2d91]/20 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <svg className="w-6 h-6 text-[#5e2d91]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h3 className="text-xl font-bold text-[#5e2d91]">
                {t.pricing.perCompany || 'Licence par entreprise'}
              </h3>
            </div>
            <p className="text-gray-700 font-medium">
              {t.pricing.perCompanyDesc || 'Un seul abonnement pour toute votre entreprise ! Tous vos collaborateurs peuvent organiser des webinaires sans frais supplémentaires.'}
              <span className="text-[#5e2d91] font-bold"> {t.pricing.perCompanyHighlight || 'Un avantage incomparable pour maximiser votre ROI.'}</span>
            </p>
          </motion.div>

          <p className="text-gray-600">
            {t.pricing.trialInfo || 'Tous les forfaits incluent un essai gratuit de 30 jours. Aucune carte bancaire requise. Annulation à tout moment.'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
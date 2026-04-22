import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../i18n/language-context";
import { Users, Shield, TrendingUp } from "lucide-react";
import itServicesImage from "figma:asset/9f39790de70cdb698ec970dfb2fd3221a29a0a2a.png";
import managementImage from "figma:asset/cdfe3c4a75588983dc7f9d0460f1cef254eaf6be.png";
import hrCommunicationImage from "figma:asset/9fd344502ee778ed03f98a5fb47f5a7a37a19387.png";
import chatImage from "../../imports/Image_MPRainbow_chat_v05.png";

export function UseCasesSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'hrCommunication' | 'itServices' | 'management'>('management');

  const useCases = {
    hrCommunication: {
      icon: Users,
      title: t.useCases.hrCommunication.title,
      description: t.useCases.hrCommunication.description,
      image: hrCommunicationImage,
      color: "#CF0072" // Rose Rainbow
    },
    itServices: {
      icon: Shield,
      title: t.useCases.itServices.title,
      description: t.useCases.itServices.description,
      image: itServicesImage,
      color: "#0085CA" // Bleu ciel Rainbow
    },
    management: {
      icon: TrendingUp,
      title: t.useCases.management.title,
      description: t.useCases.management.description,
      image: managementImage,
      color: "#6639B7" // Bleu marine Rainbow
    }
  };

  const tabs = [
    { key: 'management' as const, label: t.useCases.tabs.management },
    { key: 'hrCommunication' as const, label: t.useCases.tabs.hrCommunication },
    { key: 'itServices' as const, label: t.useCases.tabs.itServices }
  ];

  const currentUseCase = useCases[activeTab];
  const Icon = currentUseCase.icon;

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold mb-4"><span className="text-[#5e2d91]">Une plateforme. Plusieurs façons de travailler ensemble. </span></h2>
          
          
          {/* Product Pills */}
          
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`
                px-6 py-3 rounded-lg font-semibold transition-all duration-300
                ${activeTab === tab.key 
                  ? 'bg-gradient-to-r from-[#5e2d91] to-[#6639B7] text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${currentUseCase.color}15` }}
                >
                  <Icon 
                    className="h-8 w-8" 
                    style={{ color: currentUseCase.color }}
                    strokeWidth={2}
                  />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {currentUseCase.title}
                </h3>
              </div>
              
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div 
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <div className="aspect-[4/3] bg-gray-100">
                  <img
                    src={chatImage}
                    alt={currentUseCase.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
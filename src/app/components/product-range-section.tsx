import { ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/language-context";
import { motion } from "motion/react";
import rainbowCollaborationImage from "figma:asset/acd95c1ad6d168b5a42bd6bc6f207f422c6df6e0.png";
import rainbowWebinarImage from "figma:asset/1e216fe596889fc3d337ccba35d7d4e0a7977cf6.png";
import rainbowWebinarLogo from "figma:asset/d4f199b74520989097fe7e29f666ae31e03632cc.png";
import rainbowCollaborationLogo from "figma:asset/4134101cc200bf3877a6c872dee3f00f5e76dc7e.png";
import overlayImage from "figma:asset/146e60a480e0ef1aa0d20aafaf983499b8ab8564.png";

export function ProductRangeSection() {
  const { t } = useLanguage();

  const products = [
    {
      id: 'collaboration',
      title: 'Rainbow Collaboration',
      image: rainbowCollaborationImage,
      bgGradient: 'from-[#E6F4FA] to-[#D0E9F5]', // Dégradé bleu clair
      bgColor: 'bg-white',
      buttonColor: 'bg-[#0085CA] hover:bg-[#006BA0]',
      accentColor: '#0085CA',
      description: t.productRange.collaboration.description,
      link: '/product/collaboration',
      available: true,
    },
    {
      id: 'webinar',
      title: 'Rainbow Webinar',
      image: rainbowWebinarImage,
      bgGradient: 'from-[#FFF0E6] to-[#FFE0CC]', // Dégradé orange clair
      bgColor: 'bg-white',
      buttonColor: 'bg-[#FF4500] hover:bg-[#E03D00]',
      accentColor: '#FF4500',
      description: t.productRange.webinarProduct.description,
      link: '/product/webinar',
      available: true,
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-[#5e2d91]">Trouvez la </span>
            <span className="bg-gradient-to-r from-[#5e2d91] to-[#CF0072] bg-clip-text text-transparent">
              solution
            </span>
            <span className="text-[#5e2d91]"> qui vous correspond le mieux</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.productRange.subtitle}
          </p>
          
          {/* Product Pills */}
          
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => {
            return (
              <motion.div
                key={product.id}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className={`${product.bgColor} rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-100`}>
                  {/* Image en haut avec overlay */}
                  {product.image && (
                    <div className="relative h-80 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Overlay gradient */}
                      <div 
                        className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                        style={{ background: `linear-gradient(135deg, transparent 0%, ${product.accentColor} 100%)` }}
                      />
                    </div>
                  )}
                  
                  {/* Contenu */}
                  <div className="p-8">
                    {/* Badge décoratif */}
                    <div className="inline-block mb-4">
                      <span 
                        className="text-xs font-bold px-3 py-1 rounded-full text-white"
                        style={{ backgroundColor: product.accentColor }}
                      >
                        {product.id === 'collaboration' ? 'COMMUNICATION' : 'ÉVÉNEMENTS'}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <div className="mb-4">
                      <img 
                        src={product.id === 'webinar' ? rainbowWebinarLogo : rainbowCollaborationLogo} 
                        alt={product.title} 
                        className="h-16 object-contain"
                      />
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                      {product.description}
                    </p>
                    
                    {/* Button */}
                    {product.available && (
                      <a
                        href={product.link}
                        className={`${product.buttonColor} text-white px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 transition-all shadow-md hover:shadow-lg group/btn`}
                      >
                        {t.productRange.learnMore}
                        <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/language-context";
import rainbowCollaborationImage from "figma:asset/rainbow_chat.png";
import rainbowWebinarImage from "figma:asset/webinar_live.png";
import rainbowWebinarLogo from "figma:asset/rainbow_webinar_logo.png";
import rainbowCollaborationLogo from "figma:asset/rainbow_collaboration.png";

export function ProductRangeSection() {
  const { t } = useLanguage();

  const products = [
    {
      id: 'collaboration',
      title: 'Rainbow Collaboration',
      image: rainbowCollaborationImage,
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
      bgColor: 'bg-white',
      buttonColor: 'bg-[#FF4500] hover:bg-[#E03D00]',
      accentColor: '#FF4500',
      description: t.productRange.webinarProduct.description,
      link: '/product/webinar',
      available: true,
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-gray-900">
            Trouvez la solution
            <br />
            <span className="text-[#5e2d91]">qui vous correspond le mieux</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.productRange.subtitle}
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product) => {
            return (
              <div
                key={product.id}
                className="group relative"
              >
                <div className={`${product.bgColor} rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-200`}>
                  {/* Image */}
                  {product.image && (
                    <div className="relative h-72 overflow-hidden border-b border-gray-100 bg-gray-100">
                      <img 
                        src={product.image} 
                        alt={product.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="p-8">
                    {/* Badge */}
                    <div className="inline-block mb-4">
                      <span 
                        className="text-xs font-bold px-3 py-1 rounded-md text-white"
                        style={{ backgroundColor: product.accentColor }}
                      >
                        {product.id === 'collaboration' ? 'COMMUNICATION' : 'ÉVÉNEMENTS'}
                      </span>
                    </div>
                    
                    {/* Logo */}
                    <div className="mb-4">
                      <img 
                        src={product.id === 'webinar' ? rainbowWebinarLogo : rainbowCollaborationLogo} 
                        alt={product.title} 
                        className="h-12 object-contain"
                      />
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed min-h-[80px]">
                      {product.description}
                    </p>
                    
                    {/* Button */}
                    {product.available && (
                      <a
                        href={product.link}
                        className={`${product.buttonColor} text-white px-6 py-3 rounded-md font-bold inline-flex items-center gap-2 transition-colors`}
                      >
                        {t.productRange.learnMore}
                        <ArrowRight className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/language-context";
import rainbowCollaborationImage from "figma:asset/rainbow_chat.png";
import rainbowWebinarImage from "figma:asset/webinar_live.png";
import rainbowWebinarLogo from "figma:asset/rainbow_webinar_logo.png";
import rainbowCollaborationLogo from "figma:asset/rainbow_collaboration.png";

import { Check, ArrowRight } from "lucide-react";

export function ProductRangeSection() {
  const { t } = useLanguage();

  const products = [
    {
      id: 'webinar',
      title: 'Rainbow Webinar',
      subtitle: 'La solution souveraine pour vos événements digitaux',
      logo: rainbowWebinarLogo,
      accentColor: '#ea5800',
      borderColor: 'border-[#ea5800]/20',
      bgColor: 'bg-[#ea5800]/5',
      tags: ['Live', 'Polls', 'Q&A'],
      colorCode: '#ea5800',
      description: "Organisez des webinaires professionnels et engageants sans compromis sur la sécurité. Une plateforme conçue pour maximiser l'interaction avec votre audience.",
      features: [
        "Jusqu'à 10 000 participants en simultané",
        "Outils d'interactivité avancés (Sondages, Q&A)",
        "Analytiques détaillés et rapports d'engagement",
        "Enregistrement HD et replay sécurisé",
        "Hébergement souverain et conformité RGPD"
      ],
      link: "/webinar"
    },
    {
      id: 'business',
      title: 'Rainbow Business',
      subtitle: 'Communications unifiées pour les entreprises modernes',
      logo: rainbowCollaborationLogo,
      accentColor: '#8a898a',
      borderColor: 'border-[#8a898a]/20',
      bgColor: 'bg-gray-50',
      tags: ['Chat', 'Video', 'Files'],
      colorCode: '#8a898a',
      description: "Simplifiez la collaboration au sein de votre organisation avec une solution de communication tout-en-un, fluide et hautement sécurisée.",
      features: [
        "Messagerie d'équipe et canaux de discussion",
        "Appels audio et vidéo HD illimités",
        "Partage et stockage de fichiers sécurisé",
        "Intégrations avec vos outils métiers (CRM, etc.)",
        "Présence en temps réel et annuaire entreprise"
      ],
      link: "/collaboration"
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-gray-900 leading-tight">
            Trouvez la solution
            <br />
            <span className="text-[#5e2d91]">qui vous correspond le mieux</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Deux plateformes complémentaires pour répondre à tous vos besoins de communication et d'événementiel.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className={`flex flex-col relative p-10 md:p-14 rounded-[3rem] border ${product.borderColor} ${product.bgColor} transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 group`}
            >
              {/* Color Code Badge */}
              <div 
                className="absolute top-10 right-10 px-4 py-1.5 rounded-full text-white text-xs font-mono font-bold shadow-md z-10"
                style={{ backgroundColor: product.accentColor }}
              >
                {product.colorCode}
              </div>

              {/* Logo & Category */}
              <div className="mb-10">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white shadow-sm border border-gray-100 overflow-hidden mb-6 group-hover:scale-110 transition-transform duration-500">
                  <img 
                    src={product.logo} 
                    alt={product.title} 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-gray-100 text-xs font-bold uppercase tracking-wider"
                      style={{ color: product.accentColor }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="mb-8">
                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                  {product.title}
                </h3>
                <p className="text-[#5e2d91] font-bold text-lg mb-6">
                  {product.subtitle}
                </p>
                <p className="text-gray-500 text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Feature List */}
              <div className="mb-12 flex-grow">
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Fonctionnalités clés</h4>
                <ul className="space-y-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div 
                        className="mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${product.accentColor}20` }}
                      >
                        <Check className="w-3.5 h-3.5" style={{ color: product.accentColor }} />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div>
                <a
                  href={product.link}
                  className="w-full py-5 rounded-2xl font-extrabold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
                  style={{ 
                    backgroundColor: product.accentColor,
                    color: '#fff'
                  }}
                >
                  Découvrir la solution
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
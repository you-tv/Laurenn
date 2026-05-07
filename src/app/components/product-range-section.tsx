import { ArrowRight, Check } from "lucide-react";
import { useLanguage } from "../i18n/language-context";
import rainbowCollaborationImage from "figma:asset/rainbow_chat.png";
import rainbowWebinarImage from "figma:asset/webinar_live.png";

export function ProductRangeSection() {
  const { t } = useLanguage();

  const products = [
    {
      id: 'webinar',
      titlePrefix: 'Rainbow',
      titleHighlight: 'Webinar',
      subtitle: 'La solution souveraine pour vos événements digitaux',
      accentColor: '#ea5800',
      image: rainbowWebinarImage,
      tags: ['Live', 'Polls', 'Q&A', 'Analytics'],
      features: [
        "Jusqu'à 1 000 participants en simultané",
        "Outils d'interactivité avancés (Sondages, Q&A)",
        "Analytiques détaillés et rapports d'engagement",
        "Enregistrement HD et replay sécurisé",
        "Hébergement souverain et conformité RGPD"
      ],
      link: "/webinar"
    },
    {
      id: 'collaboration',
      titlePrefix: 'Rainbow',
      titleHighlight: 'Collaboration',
      subtitle: 'Communications unifiées pour les entreprises modernes',
      accentColor: '#16a96e',
      image: rainbowCollaborationImage,
      tags: ['Chat', 'Video', 'Files', 'Presence'],
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
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-gray-900">
            Trouvez la solution
            <br />
            <span className="text-[#5e2d91]">qui vous correspond le mieux</span>
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
            Deux plateformes complémentaires pour répondre à tous vos besoins de communication et d'événementiel.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-gray-300 transition-all duration-300"
            >
              {/* Product Image */}
              <div className="aspect-[16/10] overflow-hidden bg-gray-50">
                <img
                  src={product.image}
                  alt={product.titleHighlight}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="p-8 md:p-10 flex flex-col flex-grow">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider border rounded"
                      style={{ color: product.accentColor, borderColor: `${product.accentColor}30` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {product.titlePrefix} <span style={{ color: product.accentColor }}>{product.titleHighlight}</span>
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  {product.subtitle}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: product.accentColor }} />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Primary CTA */}
                <a
                  href={product.link}
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white text-center transition-all duration-300 hover:shadow-lg active:scale-[0.98]"
                  style={{ backgroundColor: product.accentColor }}
                >
                  Découvrir {product.titleHighlight}
                </a>
                
                {/* Secondary CTA */}
                <a
                  href={product.link}
                  className="w-full py-3 text-center text-sm font-semibold mt-3 transition-colors"
                  style={{ color: product.accentColor }}
                >
                  Voir les fonctionnalités →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

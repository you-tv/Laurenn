import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../i18n/language-context";
import person1 from "figma:asset/person1.jpg";
import person2 from "figma:asset/person2.png";
import person3 from "figma:asset/person3.jpg";

export function TestimonialsSection({ onViewDemo }: { onViewDemo: () => void }) {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "En faisant appel à Rainbow Webinar, nous avons deux objectifs : communiquer rapidement et faciliter l'information à destination de nos collaborateurs, et mettre à leur disposition des documents de référence (RH, CSF…). Aujourd'hui, nos deux objectifs sont pleinement atteints et dépassés.",
      name: "Sophie Martin",
      title: "Directrice Communication, Groupe Industriel",
      image: person1,
      color: "#CF0072" // Rose
    },
    {
      id: 2,
      text: "Nous nous sommes orientés vers Rainbow Webinar pour son caractère ergonomique et intuitif, son aspect modulable, ainsi que la possibilité de façonner l'outil selon nos besoins et notre identité, et surtout l'ensemble des fonctionnalités proposé.",
      name: "Marc Dubois",
      title: "Responsable IT, Entreprise Technologique",
      image: person2,
      color: "#0085CA" // Bleu ciel
    },
    {
      id: 3,
      text: "Nous avons choisi Rainbow Webinar pour 4 raisons : c'est une solution française, son accessibilité, sa facilité de déploiement et sa capacité à mixer réseau social d'entreprise et intranet. La souveraineté des données était un critère essentiel pour nous.",
      name: "Nathalie Rousseau",
      title: "Directrice Digitale, PME Innovante",
      image: person3,
      color: "#6639B7" // Bleu marine
    },
    {
      id: 4,
      text: "Rainbow Webinar nous a permis de digitaliser nos formations internes et d'atteindre tous nos collaborateurs, même à distance. La qualité vidéo et les outils d'interaction ont transformé notre approche de la formation continue.",
      name: "Laurent Petit",
      title: "DRH, Grande Distribution",
      image: person1,
      color: "#FF4500" // Orange
    },
    {
      id: 5,
      text: "L'accompagnement et le support technique Rainbow sont exceptionnels. Nous organisons maintenant des webinaires clients chaque semaine avec une simplicité déconcertante. Le ROI est largement au rendez-vous.",
      name: "Claire Bernard",
      title: "Responsable Marketing, Startup SaaS",
      image: person3,
      color: "#34B233" // Vert
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Calculer les 3 témoignages à afficher
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 tracking-tight">
            <span className="text-[#5e2d91]">Ils ont transformé leur quotidien avec </span>
            <br />
            Rainbow Webinar
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 w-12 h-12 bg-white border border-gray-200 rounded-full shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 w-12 h-12 bg-white border border-gray-200 rounded-full shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-8">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 rounded-xl p-8 transition-colors duration-200 relative border border-gray-200"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: testimonial.color }}
                  >
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-800 mb-8 leading-relaxed relative z-10 text-lg">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-[#5e2d91] w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Aller au témoignage ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button
            onClick={onViewDemo}
            className="inline-block px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Demander une démo
          </button>
        </div>
      </div>
    </section>
  );
}
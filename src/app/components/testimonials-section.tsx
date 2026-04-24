import React from 'react';
import { motion } from "motion/react";
import person1 from "figma:asset/person1.jpg";
import person2 from "figma:asset/person2.png";
import person3 from "figma:asset/person3.jpg";

// --- Types ---
interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

// --- Data ---
const testimonials: Testimonial[] = [
  {
    text: "En faisant appel à Rainbow Webinar, nous avons deux objectifs : communiquer rapidement et faciliter l'information à destination de nos collaborateurs. Aujourd'hui, nos deux objectifs sont pleinement atteints et dépassés.",
    image: person1,
    name: "Sophie Martin",
    role: "Directrice Communication",
  },
  {
    text: "Nous nous sommes orientés vers Rainbow Webinar pour son caractère ergonomique et intuitif, son aspect modulable, ainsi que la possibilité de façonner l'outil selon nos besoins et notre identité.",
    image: person2,
    name: "Marc Dubois",
    role: "Responsable IT",
  },
  {
    text: "Nous avons choisi Rainbow Webinar pour 4 raisons : c'est une solution française, son accessibilité, sa facilité de déploiement et sa capacité à mixer réseau social d'entreprise et intranet.",
    image: person3,
    name: "Nathalie Rousseau",
    role: "Directrice Digitale",
  },
  {
    text: "Rainbow Webinar nous a permis de digitaliser nos formations internes et d'atteindre tous nos collaborateurs, même à distance. La qualité vidéo et les outils d'interaction ont transformé notre approche de la formation continue.",
    image: person1,
    name: "Laurent Petit",
    role: "DRH, Grande Distribution",
  },
  {
    text: "L'accompagnement et le support technique Rainbow sont exceptionnels. Nous organisons maintenant des webinaires clients chaque semaine avec une simplicité déconcertante. Le ROI est largement au rendez-vous.",
    image: person3,
    name: "Claire Bernard",
    role: "Responsable Marketing",
  },
  {
    text: "La fluidité des réunions en ligne avec Rainbow a permis à nos équipes réparties dans le monde entier de collaborer comme si elles étaient dans la même pièce.",
    image: person2,
    name: "Thomas Leroy",
    role: "Chef de Projet International",
  },
  {
    text: "L'intégration transparente avec nos outils existants a rendu la transition vers Rainbow Webinar indolore et instantanément bénéfique pour notre productivité.",
    image: person1,
    name: "Julie Moreau",
    role: "Operations Manager",
  },
  {
    text: "La sécurité et la souveraineté des données offertes par Rainbow sont des atouts majeurs qui nous ont convaincus de l'adopter pour toutes nos communications sensibles.",
    image: person2,
    name: "Alexandre Dupuis",
    role: "Directeur Sécurité Informatique",
  },
  {
    text: "L'interface utilisateur est si intuitive que même nos employés les moins à l'aise avec la technologie l'ont adoptée sans aucune formation préalable.",
    image: person3,
    name: "Marie Dubois",
    role: "Responsable Formation",
  }
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// --- Sub-Components ---
const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 15,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <motion.li 
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? "true" : "false"}
                  tabIndex={index === 1 ? -1 : 0}
                  whileHover={{ 
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  whileFocus={{ 
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  className="p-8 rounded-3xl border border-gray-200 shadow-lg shadow-black/5 max-w-sm w-full bg-white transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-purple-500/30" 
                >
                  <blockquote className="m-0 p-0">
                    <p className="text-gray-600 leading-relaxed font-normal m-0 transition-colors duration-300">
                      {text}
                    </p>
                    <footer className="flex items-center gap-4 mt-6">
                      <img
                        width={48}
                        height={48}
                        src={image}
                        alt={`Avatar de ${name}`}
                        className="h-12 w-12 rounded-full object-cover ring-2 ring-gray-100 group-hover:ring-purple-500/30 transition-all duration-300 ease-in-out"
                      />
                      <div className="flex flex-col">
                        <cite className="font-semibold not-italic tracking-tight leading-5 text-gray-900 transition-colors duration-300">
                          {name}
                        </cite>
                        <span className="text-sm leading-5 tracking-tight text-gray-500 mt-0.5 transition-colors duration-300">
                          {role}
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  );
};

export function TestimonialsSection({ onViewDemo }: { onViewDemo?: () => void }) {
  return (
    <section 
      aria-labelledby="testimonials-heading"
      className="bg-gray-50 py-24 lg:py-32 relative overflow-hidden"
    >
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 }
        }}
        className="max-w-7xl px-4 sm:px-6 lg:px-8 z-10 mx-auto"
      >
        <div className="flex flex-col items-center justify-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center">
            <div className="border border-purple-200 py-1 px-4 rounded-full text-xs font-bold tracking-widest uppercase text-[#5e2d91] bg-purple-100/50 transition-colors mb-6">
              Témoignages
            </div>
          </div>

          <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-extrabold tracking-tight text-center text-gray-900 transition-colors">
            <span className="text-[#5e2d91]">Ils ont transformé leur quotidien avec</span><br/>
            Rainbow Webinar
          </h2>
          <p className="text-center mt-6 text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto transition-colors">
            Découvrez comment des milliers d'équipes optimisent leurs communications et leur collaboration grâce à notre plateforme souveraine.
          </p>
        </div>

        <div 
          className="flex justify-center gap-6 md:gap-8 mt-12 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] h-[600px] overflow-hidden"
          role="region"
          aria-label="Témoignages défilants"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={35} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={45} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={40} />
        </div>
      </motion.div>
    </section>
  );
}
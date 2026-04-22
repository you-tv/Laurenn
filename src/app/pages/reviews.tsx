import { Star } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { useLanguage } from "../i18n/language-context";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

interface Review {
  id: number;
  name: string;
  initials: string;
  rating: number;
  comment: string;
  color: string;
  company: string;
  position: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Mz",
    initials: "M",
    rating: 5,
    comment: "Great experience with Rainbow Collaboration",
    color: "#6639B7",
    company: "Tech Solutions",
    position: "CEO"
  },
  {
    id: 2,
    name: "Sophie Durand",
    initials: "SD",
    rating: 5,
    comment: "Rainbow Webinar a transformé notre façon d'organiser des événements virtuels. Interface intuitive et fonctionnalités puissantes !",
    color: "#CF0072",
    company: "Digital Marketing Pro",
    position: "Directrice Marketing"
  },
  {
    id: 3,
    name: "Marc Lefebvre",
    initials: "ML",
    rating: 5,
    comment: "Excellent outil pour nos webinaires. La qualité vidéo est exceptionnelle et nos participants sont très satisfaits.",
    color: "#0085CA",
    company: "Formation Expert",
    position: "Responsable Formation"
  },
  {
    id: 4,
    name: "Julie Martin",
    initials: "JM",
    rating: 5,
    comment: "Les analytics en temps réel nous permettent d'optimiser nos webinaires. Un vrai plus pour notre stratégie marketing !",
    color: "#34B233",
    company: "Growth Agency",
    position: "Head of Growth"
  },
  {
    id: 5,
    name: "Thomas Bernard",
    initials: "TB",
    rating: 5,
    comment: "Support client réactif et solution stable. Nous l'utilisons pour tous nos événements d'entreprise.",
    color: "#FF4500",
    company: "Corporate Events",
    position: "Event Manager"
  },
  {
    id: 6,
    name: "Caroline Petit",
    initials: "CP",
    rating: 5,
    comment: "La plateforme parfaite pour nos formations en ligne. Nos formateurs adorent la simplicité d'utilisation.",
    color: "#5e2d91",
    company: "Académie Digitale",
    position: "Directrice Pédagogique"
  }
];

export default function Reviews() {
  const { t } = useLanguage();

  const totalReviews = reviews.length;
  const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviews;

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="relative z-10">
        <Navbar />
      
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Ce que disent nos clients
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Découvrez les témoignages de nos clients qui utilisent Rainbow au quotidien pour transformer leur communication professionnelle.
            </motion.p>
          </div>
        </section>

        {/* Rating Summary */}
        <section className="pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-12 text-center border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div>
                  <div className="text-6xl font-bold text-gray-900 mb-3">
                    {averageRating.toFixed(1)}
                  </div>
                  <div className="flex justify-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-6 h-6 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">
                    {totalReviews} avis client{totalReviews > 1 ? 's' : ''}
                  </p>
                </div>
                <div className="border-l border-gray-200 pl-8 text-left">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Note moyenne
                  </h3>
                  <p className="text-sm text-gray-600">
                    Basé sur des avis clients vérifiés
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-5 h-5 ${
                          star <= review.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{review.comment}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm"
                      style={{ backgroundColor: review.color }}
                    >
                      {review.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{review.name}</p>
                      <p className="text-sm text-gray-500">{review.position} at {review.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  );
}
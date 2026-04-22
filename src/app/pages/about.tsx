import { motion } from "motion/react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Target, Users, Heart, Award } from "lucide-react";
import { useLanguage } from "../i18n/language-context";

export function About() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: "Notre Mission",
      description: "Rendre les communications professionnelles accessibles à tous avec des solutions souveraines et innovantes.",
      color: "#FF4500"
    },
    {
      icon: Users,
      title: "Notre Équipe",
      description: "Une équipe passionnée dédiée à créer les meilleures solutions de communication pour les entreprises.",
      color: "#0085CA"
    },
    {
      icon: Heart,
      title: "Nos Valeurs",
      description: "Innovation, sécurité, souveraineté et excellence au service de nos clients.",
      color: "#CF0072"
    },
    {
      icon: Award,
      title: "Notre Engagement",
      description: "Des solutions hébergées en France, conformes RGPD, pour protéger vos données et votre confidentialité.",
      color: "#34B233"
    }
  ];

  const stats = [
    { number: "15+", label: "Années d'expérience" },
    { number: "10K+", label: "Entreprises clientes" },
    { number: "100%", label: "Hébergement France" },
    { number: "24/7", label: "Support dédié" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#5e2d91] to-[#6639B7] text-white py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl font-bold mb-6">
                À propos de Rainbow
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Rainbow est la solution de communication professionnelle souveraine, 
                conçue pour les entreprises qui recherchent sécurité, performance et innovation.
              </p>
            </motion.div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <div className="absolute top-20 right-20 w-64 h-64 bg-[#FF4500] rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-40 w-48 h-48 bg-[#0085CA] rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -3 }}
                >
                  <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-[#5e2d91]/30 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#5e2d91] to-[#CF0072] bg-clip-text text-transparent mb-3">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm lg:text-base font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Notre Histoire
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  Rainbow by Alcatel-Lucent Enterprise est née de la vision d'offrir 
                  aux entreprises une solution de communication souveraine et sécurisée.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Héritière de plus de 100 ans d'expertise en télécommunications, 
                  Rainbow combine innovation technologique et engagement pour la souveraineté numérique.
                </p>
                <p className="text-lg text-gray-700">
                  Aujourd'hui, des milliers d'entreprises font confiance à Rainbow 
                  pour leurs communications critiques, leurs webinaires et leur collaboration quotidienne.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758873268663-5a362616b5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NzM1NjAyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Rainbow Team"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Nos Valeurs
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ce qui guide notre action au quotidien
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${value.color}15` }}
                    >
                      <Icon 
                        className="w-6 h-6" 
                        style={{ color: value.color }}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#5e2d91] to-[#6639B7] rounded-3xl p-12 text-white">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold mb-6">
                    Technologie & Souveraineté
                  </h2>
                  <p className="text-lg text-white/90 mb-4">
                    Rainbow est hébergé exclusivement en France, garantissant la souveraineté 
                    de vos données et leur conformité avec le RGPD.
                  </p>
                  <p className="text-lg text-white/90">
                    Notre infrastructure de pointe assure performance, sécurité et disponibilité 
                    pour vos communications critiques.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-4"
                >
                  {[
                    { label: "Hébergement France", value: "100%" },
                    { label: "Disponibilité", value: "99.9%" },
                    { label: "Conformité RGPD", value: "100%" },
                    { label: "Chiffrement", value: "AES-256" }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex justify-between items-center p-4 bg-white/10 rounded-lg backdrop-blur-sm"
                    >
                      <span className="font-medium">{item.label}</span>
                      <span className="text-2xl font-bold">{item.value}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Prêt à découvrir Rainbow ?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Rejoignez des milliers d'entreprises qui font confiance à Rainbow 
                pour leurs communications professionnelles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/product"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#5e2d91] text-white rounded-lg font-semibold hover:bg-[#4a2373] transition-colors shadow-lg"
                >
                  Essai gratuit 30 jours
                </motion.a>
                <motion.a
                  href="https://app.storylane.io/demo/wepusmzd9gcz"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-[#5e2d91] rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg border-2 border-[#5e2d91]"
                >
                  Demander une démo
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
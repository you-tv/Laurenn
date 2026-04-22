import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Shield, Lock, CheckCircle2, Globe, MapPin, Scale, Server, Award, Building2, CloudCog } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";
import frenchFlag from "figma:asset/6374b656e87a9cc5554226fb156ea430d9c6d937.png";
import isoLogo from "figma:asset/87ea69d673eaf266f5e32709ae5b558317c1ce0a.png";
import aes256Badge from "figma:asset/b2660a4df675c21106e22efd3c9e620e500cf4b6.png";
import anssiLogo from "figma:asset/142f432539aaf7024794eb90be480e09ec75f073.png";
import hipaaLogo from "figma:asset/b1cb6b10cf938c0a450e1351b902d4369b2f0d7c.png";
import ensLogo from "figma:asset/ebf5703035791ce69ea64d5c4765f72f897b4d20.png";
import rgpdLogo from "figma:asset/9a6e2f86169674ed67964f90b25a518165cb7ff6.png";
import ovhcloudLogo from "figma:asset/d8afdd7069a7fab4056bb04de00834df59c88a79.png";

export default function Security() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col bg-white relative overflow-hidden">
      <div className="relative z-10">
        <Navbar />
      
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-[#5e2d91] via-[#6639B7] to-[#5e2d91] py-32 flex items-center min-h-[450px]">
            <div className="absolute inset-0 overflow-hidden opacity-10">
              <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#CF0072] rounded-full blur-3xl"></div>
            </div>
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white px-4">
                  Sécurité et Certifications
                </h1>
                <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4">
                  Rainbow est une solution française, hébergée dans des centres de données situés en Europe, respectant les normes les plus strictes en matière de sécurité, de souveraineté et de confidentialité.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Certifications internationales et locales */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
                  Certifications Internationales et Locales
                </h2>
                <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                  Rainbow détient les certifications les plus exigeantes pour garantir la sécurité de vos données
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {/* ANSSI CSPN */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="p-6 h-full border-2 border-[#5e2d91] hover:shadow-xl transition-all">
                    <div className="flex flex-col items-center text-center">
                      <img src={anssiLogo} alt="ANSSI CSPN" className="h-20 w-20 object-contain mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">ANSSI CSPN</h3>
                      <p className="text-sm text-gray-600">
                        Certification de Sécurité de Premier Niveau délivrée par l'ANSSI. Plus haut standard français de sécurité pour les solutions de communication professionnelle.
                      </p>
                    </div>
                  </Card>
                </motion.div>

                {/* ISO-27001 & SOC */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-xl transition-all">
                    <div className="flex flex-col items-center text-center">
                      <img src={isoLogo} alt="ISO-27001 & SOC" className="h-20 w-20 object-contain mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">ISO-27001 & SOC</h3>
                      <p className="text-sm text-gray-600">
                        Centres de données certifiés ISO-27001 et SOC avec surveillance 24×7, accès physique strictement contrôlé et infrastructures hautement sécurisées.
                      </p>
                    </div>
                  </Card>
                </motion.div>

                {/* RGPD */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Card className="p-6 h-full hover:shadow-xl transition-all">
                    <div className="flex flex-col items-center text-center">
                      <img src={rgpdLogo} alt="RGPD" className="h-28 w-28 object-contain mb-4 mix-blend-multiply" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">RGPD</h3>
                      <p className="text-sm text-gray-600">
                        Conformité totale à la directive européenne sur la protection des données. Rainbow renforce la protection de la vie privée et garantit le respect de vos données.
                      </p>
                    </div>
                  </Card>
                </motion.div>
              </div>

              {/* Certifications internationales - ligne centrée */}
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {/* ENS */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Card className="p-6 h-full hover:shadow-xl transition-all">
                    <div className="flex flex-col items-center text-center">
                      <div className="h-32 w-32 mb-4 flex items-center justify-center">
                        <img src={ensLogo} alt="ENS" className="h-full w-full object-cover scale-125" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">ENS (Espagne)</h4>
                      <p className="text-sm text-gray-600">
                        Certification délivrée par le système national de sécurité espagnol pour la protection des systèmes d'information contre les cybermenaces internes et externes.
                      </p>
                    </div>
                  </Card>
                </motion.div>

                {/* HIPAA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Card className="p-6 h-full hover:shadow-xl transition-all">
                    <div className="flex flex-col items-center text-center">
                      <img src={hipaaLogo} alt="HIPAA" className="h-20 w-20 object-contain mb-4" />
                      <h4 className="text-xl font-bold text-gray-900 mb-2">HIPAA (USA)</h4>
                      <p className="text-sm text-gray-600">
                        Certification américaine garantissant la sécurité et la confidentialité des données relatives aux soins de santé et informations médicales sensibles.
                      </p>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Partenariat OVHCloud */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-[#5e2d91] to-[#6639B7] rounded-3xl p-12 text-white"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <Building2 className="h-12 w-12" />
                      <h2 className="text-3xl font-bold">
                        Rainbow × OVHCloud
                      </h2>
                    </div>
                    <p className="text-xl text-white/90 leading-relaxed">
                      Une alliance stratégique pour une plateforme de collaboration souveraine et sécurisée. OVHCloud, leader européen du cloud, héberge Rainbow dans des environnements hautement sécurisés pour les secteurs sensibles : gouvernement, santé, éducation.
                    </p>
                  </div>
                  <div className="relative">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1599949104055-2d04026aee1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwZGF0YSUyMGNlbnRlciUyMHNlcnZlcnN8ZW58MXx8fHwxNzcyNjE3OTI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Data Center"
                      className="rounded-2xl shadow-2xl"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Flexibilité et souveraineté */}
          <section className="py-20 bg-gradient-to-br from-[#5e2d91]/30 via-[#6639B7]/25 to-[#CF0072]/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
                  Flexibilité et souveraineté
                </h2>
                <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                  Une solution française adaptée à vos besoins les plus exigeants
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Solution française */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="p-6 h-full hover:shadow-xl transition-all">
                    <div className="text-center mb-4">
                      <img src={frenchFlag} alt="Drapeau français" className="h-20 w-20 mx-auto mb-4 object-contain" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Une solution française</h3>
                    <p className="text-gray-700 text-center">
                      Développée par une équipe d'ingénieurs de conception, de design et de fiabilité de service. Les trois sites français d'Alcatel-Lucent Enterprises sont basés à Brest, Illkirch et Colombes.
                    </p>
                  </Card>
                </motion.div>

                {/* Infrastructures souveraines */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-xl transition-all">
                    <div className="text-center mb-4">
                      <img src={ovhcloudLogo} alt="OVHcloud" className="h-16 w-auto mx-auto mb-4 object-contain" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Infrastructures prêtes pour la souveraineté</h3>
                    <p className="text-gray-700 text-center">
                      Pour les services en Europe, Rainbow est hébergé par OVH, partenaire stratégique d'ALE. Pour les services dans le reste du monde, des centres de données sont également à disposition dans plusieurs régions.
                    </p>
                  </Card>
                </motion.div>

                {/* Non soumis aux lois extraterritoriales */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Card className="p-6 h-full hover:shadow-xl transition-all">
                    <div className="text-center mb-4">
                      <div className="bg-[#CF0072] p-4 rounded-lg inline-block">
                        <Lock className="h-12 w-12 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Non soumis au Cloud Act ni au Patriot Act</h3>
                    <p className="text-gray-700 text-center">
                      Vos données vous appartiennent. Aucun état ou entité externe ne peut accéder à vos informations grâce à notre souveraineté numérique française.
                    </p>
                  </Card>
                </motion.div>

              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="py-20 bg-gradient-to-br from-[#5e2d91] via-[#6639B7] to-[#5e2d91]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                  Prêt à sécuriser vos webinars ?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Découvrez comment Rainbow Webinar peut protéger vos communications professionnelles
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => window.open("https://app.storylane.io/share/njaxojcgqihp", "_blank")}
                    className="bg-white text-[#5e2d91] hover:bg-gray-100 text-lg px-8 py-6"
                  >
                    Tester gratuitement
                  </Button>
                  <Button 
                    onClick={() => window.location.href = "/pricing"}
                    variant="outline"
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#5e2d91] text-lg px-8 py-6"
                  >
                    Voir les tarifs
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
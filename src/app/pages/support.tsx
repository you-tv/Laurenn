import { useState } from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Video, FileText, GraduationCap, CheckCircle2, Mail, Phone, Clock, Send } from "lucide-react";
import { motion } from "motion/react";

export default function Support() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simuler l'envoi du formulaire
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 3000);
  };

  const resources = [
    {
      icon: Video,
      title: "Vidéos tutorielles",
      description: "Apprenez en vidéo",
      link: "https://app.storylane.io/share/njaxojcgqihp"
    },
    {
      icon: FileText,
      title: "Base de connaissances",
      description: "Articles et FAQ détaillées",
      link: "#"
    },
    {
      icon: GraduationCap,
      title: "Help Center Rainbow",
      description: "Formations interactives",
      link: "https://help.openrainbow.com/hc/fr/sections/9497094867858-eLearning-Utilisateurs"
    }
  ];

  const faqItems = [
    {
      question: "Comment démarrer un essai gratuit ?",
      answer: "Cliquez sur 'Essai gratuit 30 jours' depuis la page d'accueil ou la section tarifs. Créez votre compte et commencez immédiatement sans carte bancaire."
    },
    {
      question: "Puis-je changer de forfait à tout moment ?",
      answer: "Oui, vous pouvez passer à un forfait supérieur ou inférieur à tout moment. Les modifications sont effectives immédiatement."
    },
    {
      question: "Combien de participants peuvent rejoindre mes webinaires ?",
      answer: "Selon votre forfait : Start (120 participants), Pro (500 participants), ou Enterprise (1000 participants)."
    },
    {
      question: "Rainbow Webinar est-il conforme au RGPD ?",
      answer: "Oui, Rainbow Webinar est une solution européenne hébergée en France, 100% conforme au RGPD et aux normes de sécurité les plus strictes."
    },
    {
      question: "Quel support technique est inclus ?",
      answer: "Tous les forfaits incluent un support par email. Les forfaits Pro et Enterprise bénéficient d'un support prioritaire avec assistance téléphonique."
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#5e2d91]/5 via-white to-[#5e2d91]/8">
            <div className="max-w-7xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-[#CF0072] via-[#FF4500] via-[#34B233] via-[#0085CA] to-[#6639B7] bg-clip-text text-transparent">
                    Centre d'aide Rainbow Webinar
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Trouvez rapidement les réponses à vos questions
                </p>
              </motion.div>
            </div>
          </section>

          {/* Contact Form - NOW FIRST */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Nous contacter
                </h2>
                <p className="text-xl text-gray-600">
                  Notre équipe est à votre écoute pour répondre à toutes vos questions
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Contact Form */}
                <div className="lg:col-span-2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <Card className="p-8 shadow-xl">
                      {submitted ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-center py-12"
                        >
                          <div className="w-16 h-16 bg-[#34B233]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle2 className="h-8 w-8 text-[#34B233]" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            Message envoyé !
                          </h3>
                          <p className="text-gray-600">
                            Nous vous répondrons dans les plus brefs délais.
                          </p>
                        </motion.div>
                      ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div>
                            <Label htmlFor="name">Nom complet</Label>
                            <Input
                              id="name"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="Jean Dupont"
                            />
                          </div>

                          <div>
                            <Label htmlFor="email">E-mail</Label>
                            <Input
                              id="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="jean@entreprise.com"
                            />
                          </div>

                          <div>
                            <Label htmlFor="subject">Objet</Label>
                            <Input
                              id="subject"
                              required
                              value={formData.subject}
                              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                              placeholder="Question technique, demande commerciale..."
                            />
                          </div>

                          <div>
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                              id="message"
                              required
                              rows={6}
                              value={formData.message}
                              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                              placeholder="Décrivez votre question ou problème..."
                            />
                          </div>

                          <Button
                            type="submit"
                            className="w-full bg-[#5e2d91] hover:bg-[#4a2270] text-white"
                            size="lg"
                          >
                            <Send className="h-4 w-4 mr-2" />
                            Envoyer le message
                          </Button>
                        </form>
                      )}
                    </Card>
                  </motion.div>
                </div>

                {/* Contact Info Sidebar */}
                <div className="space-y-6">
                  {/* Contact Information Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <Card className="p-6 shadow-xl">
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-[#CF0072]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Mail className="h-5 w-5 text-[#CF0072]" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 mb-1">E-mail</h3>
                            <a href="mailto:support@rainbow-ale.com" className="text-[#5e2d91] hover:underline text-sm">
                              support@rainbow-ale.com
                            </a>
                          </div>
                        </div>

                        <div className="border-t border-gray-200 pt-6">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-[#0085CA]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Phone className="h-5 w-5 text-[#0085CA]" />
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900 mb-1">Téléphone</h3>
                              <a href="tel:+33140079500" className="text-[#5e2d91] hover:underline text-sm">
                                +33 1 40 07 95 00
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-gray-200 pt-6">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-[#6639B7]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Clock className="h-5 w-5 text-[#6639B7]" />
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900 mb-1">Horaires d'ouverture</h3>
                              <p className="text-gray-600 text-sm">Lun - Ven : 9h00 - 18h00</p>
                              <p className="text-gray-500 text-xs mt-1">Heure de Paris (CET)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Support - NOW SECOND */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Questions fréquemment posées
                </h2>
                <p className="text-xl text-gray-600">
                  Trouvez rapidement des réponses à vos questions
                </p>
              </motion.div>

              <div className="space-y-4">
                {faqItems.map((item, index) => {
                  const colors = ['#CF0072', '#FF4500', '#34B233', '#0085CA', '#6639B7'];
                  const color = colors[index % colors.length];
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                    >
                      <Card className="p-6 hover:shadow-xl transition-all duration-300 border-l-4" style={{ borderLeftColor: color }}>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: color }}>
                            {index + 1}
                          </span>
                          {item.question}
                        </h3>
                        <p className="text-gray-600 ml-9">
                          {item.answer}
                        </p>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Resources */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Ressources utiles
                </h2>
                <p className="text-xl text-gray-600">
                  Trouvez des réponses et apprenez à utiliser Rainbow Webinar
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {resources.map((resource, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <a 
                      href={resource.link}
                      target={resource.link.startsWith('http') ? '_blank' : undefined}
                      rel={resource.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block h-full"
                    >
                      <Card className="p-6 hover:shadow-xl transition-all duration-300 h-full cursor-pointer group">
                        <div className="w-12 h-12 bg-[#5e2d91]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#5e2d91] transition-colors">
                          <resource.icon className="h-6 w-6 text-[#5e2d91] group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {resource.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {resource.description}
                        </p>
                      </Card>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
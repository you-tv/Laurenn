import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, Play, CheckCircle2, ArrowRight, MessageSquare, Users, Globe, Building2, TrendingUp, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/button';

const categories = ["Tous", "Webinaire", "Collaboration", "Sécurité", "Support"];

const testimonials = [
  {
    id: 1,
    name: "Sophie Martin",
    role: "Directrice Marketing",
    company: "TechNova Solutions",
    content: "Rainbow a complètement transformé notre manière de communiquer. La qualité des webinaires est exceptionnelle et l'interface est d'une simplicité déconcertante pour nos équipes.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    category: "Webinaire",
    logo: "https://flagcdn.com/w20/fr.png" // Placeholder for small company indicator
  },
  {
    id: 2,
    name: "Thomas Dubois",
    role: "Responsable IT",
    company: "GreenEnergy Corp",
    content: "La souveraineté des données était notre priorité absolue. Avec Rainbow, nous avons trouvé une solution européenne robuste qui ne fait aucun compromis sur la performance technique.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    category: "Sécurité"
  },
  {
    id: 3,
    name: "Julie Lefebvre",
    role: "Chef de Projet",
    company: "Innova Group",
    content: "L'outil de collaboration est devenu le cœur battant de notre entreprise. Plus besoin de jongler entre plusieurs applications, tout est centralisé et fluide.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    category: "Collaboration"
  },
  {
    id: 4,
    name: "Marc Durand",
    role: "Directeur des Opérations",
    company: "Global Logistics",
    content: "Le support client est réactif et extrêmement compétent. C'est rassurant de savoir qu'on a une équipe locale prête à nous accompagner sur des projets complexes.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    category: "Support"
  },
  {
    id: 5,
    name: "Elena Rodriguez",
    role: "Responsable RH",
    company: "Future Skills",
    content: "Pour nos formations hybrides, Rainbow est imbattable. L'interactivité est réelle et nos collaborateurs adorent la simplicité d'accès sans installation.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    rating: 4,
    category: "Webinaire"
  },
  {
    id: 6,
    name: "David Smith",
    role: "CTO",
    company: "CyberGuard",
    content: "Une architecture cloud native sécurisée. Rainbow s'intègre parfaitement dans notre écosystème existant tout en renforçant notre posture de sécurité.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    category: "Collaboration"
  }
];

const stats = [
  { label: "Clients Actifs", value: "15,000+", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Souveraineté", value: "100%", icon: ShieldCheck, color: "text-green-600", bg: "bg-green-50" },
  { label: "Croissance", value: "+45%", icon: TrendingUp, color: "text-[#CF0072]", bg: "bg-pink-50" },
  { label: "Support Local", value: "24/7", icon: MessageSquare, color: "text-[#5e2d91]", bg: "bg-purple-50" },
];

export default function TestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredTestimonials = activeCategory === "Tous" 
    ? testimonials 
    : testimonials.filter(t => t.category === activeCategory);

  return (
    <div className="bg-white selection:bg-purple-100">
      {/* ── Hero Section ── */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        {/* Animated Background Blobs */}
        <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ position: "absolute", left: "-10%", top: "-10%", width: "60vw", height: "60vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,100,50,0.12) 0%, transparent 70%)", filter: "blur(80px)" }} 
          />
          <motion.div 
             animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, -5, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{ position: "absolute", right: "-5%", top: "5%", width: "50vw", height: "50vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(52,178,51,0.1) 0%, transparent 70%)", filter: "blur(80px)" }} 
          />
          <div style={{ position: "absolute", left: "20%", bottom: "0%", width: "70vw", height: "40vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(94,45,145,0.08) 0%, transparent 70%)", filter: "blur(100px)" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5e2d91] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5e2d91]"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Témoignages Clients</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-black text-gray-900 mb-8 tracking-tight leading-[0.95]"
            >
              Ceux qui font le <br />
              <span className="bg-gradient-to-r from-[#5e2d91] via-[#CF0072] to-[#FF4500] text-transparent bg-clip-text">futur avec Rainbow.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-500 mb-12 leading-relaxed font-light"
            >
              Découvrez les retours d'expérience de leaders qui ont choisi la souveraineté, 
              la performance et l'innovation pour leurs communications d'entreprise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button className="bg-[#5e2d91] hover:bg-[#4a2373] text-white px-10 py-7 text-lg font-bold rounded-[16px] shadow-2xl shadow-purple-900/20 transition-all active:scale-95">
                Rejoindre nos clients
              </Button>
              <Button variant="outline" className="px-10 py-7 text-lg font-bold border-2 border-gray-200 text-gray-900 hover:bg-gray-50 rounded-[16px] transition-all active:scale-95">
                Voir les cas d'usage
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats Glass Section ── */}
      <section className="py-20 relative z-10 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white/40 backdrop-blur-xl border border-white/40 p-10 rounded-[40px] shadow-2xl shadow-gray-200/50">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center md:items-start"
              >
                <div className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-6 shadow-sm`}>
                  <stat.icon className="w-7 h-7" />
                </div>
                <div className="text-4xl font-black text-gray-900 mb-2 tracking-tight">{stat.value}</div>
                <div className="text-sm text-gray-400 font-bold uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filter Controls ── */}
      <section className="pt-24 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-8 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Histoires de succès</h2>
              <p className="text-gray-500">Filtrer par solution ou besoin métier</p>
            </div>
            <div className="flex flex-wrap gap-2 p-1.5 bg-gray-50 rounded-2xl border border-gray-100">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                    activeCategory === cat 
                      ? "bg-white text-[#5e2d91] shadow-lg shadow-purple-900/5 border border-purple-100" 
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredTestimonials.map((testimonial) => (
                <motion.div
                  layout
                  key={testimonial.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-white border border-gray-100 p-10 rounded-[40px] hover:shadow-2xl hover:shadow-purple-900/5 transition-all duration-500"
                >
                  <Quote className="absolute top-8 right-10 w-12 h-12 text-gray-50 group-hover:text-purple-50 transition-colors duration-500" />
                  
                  <div className="flex gap-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-100'}`} 
                      />
                    ))}
                  </div>

                  <p className="text-xl text-gray-700 mb-10 font-medium leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-5 mt-auto pt-8 border-t border-gray-50">
                    <div className="relative">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-md"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white" title="Vérifié" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-xs text-gray-400 font-medium">{testimonial.role} @ <span className="text-[#5e2d91]">{testimonial.company}</span></div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-10 right-10">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 bg-gray-50 text-gray-400 rounded-full group-hover:bg-purple-50 group-hover:text-[#5e2d91] transition-colors">
                      {testimonial.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── Featured Video Spotlight ── */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative group rounded-[60px] overflow-hidden shadow-3xl bg-gray-900">
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000&auto=format&fit=crop" 
              alt="Workspace" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105 group-hover:scale-100 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
            
            <div className="relative z-10 p-12 md:p-24 flex flex-col items-center text-center max-w-4xl mx-auto">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl mb-12 cursor-pointer group/play"
              >
                <Play className="w-10 h-10 text-[#5e2d91] fill-[#5e2d91] ml-2 group-hover/play:scale-110 transition-transform" />
              </motion.div>
              
              <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight tracking-tight">
                "Rainbow est devenu l'épine dorsale de notre transformation numérique."
              </h2>
              
              <p className="text-xl text-gray-300 mb-12 font-light">
                Marc Lefebvre, DSI de <span className="text-white font-bold">Paris Habitat</span>, 
                explique comment ils ont unifié leurs communications pour 3000 collaborateurs.
              </p>
              
              <Button className="bg-white text-gray-900 hover:bg-gray-100 px-12 py-8 text-lg font-black rounded-2xl transition-all">
                Regarder l'étude de cas (1:45)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Logos Marquee ── */}
      <section className="py-24 border-t border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-xs font-black text-gray-300 uppercase tracking-[0.3em]">Ils sont déjà passés sur Rainbow</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
        </div>
        <div 
          className="flex overflow-hidden opacity-30"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
        >
          <div className="flex animate-marquee whitespace-nowrap gap-24 md:gap-40 items-center py-4">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="text-4xl font-black text-gray-400 grayscale tracking-tighter">RAINBOW PARTNER</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-[#5e2d91] to-[#CF0072] rounded-[60px] p-16 md:p-32 text-center text-white overflow-hidden shadow-3xl shadow-purple-900/20">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.9]">
                Prêt à écrire votre <br />propre histoire de succès ?
              </h2>
              <p className="text-xl md:text-2xl text-purple-100 mb-16 max-w-2xl mx-auto font-light">
                Commencez gratuitement aujourd'hui et rejoignez les entreprises qui dominent leur marché.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button className="bg-white text-[#5e2d91] hover:bg-gray-50 px-12 py-9 text-xl font-black rounded-2xl shadow-2xl transition-all hover:scale-105 active:scale-95">
                  Lancer mon essai gratuit
                </Button>
                <button className="flex items-center gap-3 text-white font-bold hover:gap-5 transition-all text-lg group">
                  Contacter le service commercial
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

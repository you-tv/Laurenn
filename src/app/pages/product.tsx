import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { 
  MessageSquare, Video, FolderOpen, Monitor, Users2, Check, 
  Users, Zap, TrendingUp, CalendarCheck, Play, ArrowRight, UserPlus,
  ShieldCheck, Globe, ZapIcon
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useSearchParams } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// Assets for Collaboration
import collaborationHeroImage from "figma:asset/collaboration_hero.jpg";
import messagingImage from "figma:asset/messaging.png";
import videoImage from "figma:asset/video_conference.png";
import fileShareImage from "figma:asset/file_sharing.jpg";
import screenShareImage from "figma:asset/screenshare.jpg";
import collaborateImage from "figma:asset/collaborate.png";

// Assets for Webinar
import webinarHeroImage from "figma:asset/webinar_hero.jpg";
import webinarLive from "figma:asset/webinar_live.png";
import analyticsImage from "figma:asset/analytics.png";
import silosImage from "figma:asset/silos.jpg";
import eventsImage from "figma:asset/events.png";
import backstageImage from "figma:asset/backstage.png";

const COLLAB_FEATURES = [
  {
    icon: MessageSquare,
    title: "Messagerie d'équipe",
    description: "Échangez en temps réel avec vos équipes grâce à des conversations organisées par projet ou par sujet.",
    color: "#0085CA",
    image: messagingImage
  },
  {
    icon: Video,
    title: "Visioconférence HD",
    description: "Organisez des réunions fluides avec audio et vidéo de haute qualité, où que vous soyez.",
    color: "#6639B7",
    image: videoImage
  },
  {
    icon: FolderOpen,
    title: "Partage de fichiers",
    description: "Partagez et retrouvez facilement vos documents au sein de vos conversations, sans multiplier les outils.",
    color: "#34B233",
    image: fileShareImage
  },
  {
    icon: Monitor,
    title: "Partage d'écran",
    description: "Présentez, expliquez et collaborez en direct pendant vos appels et réunions.",
    color: "#CF0072",
    image: screenShareImage
  }
];

const WEBINAR_FEATURES = [
  {
    icon: Users,
    title: "Événements à grande échelle",
    description: "Organisez des webinars et conférences avec des centaines de participants, sans compromettre la qualité ni la performance.",
    color: "#FF4500",
    imageUrl: webinarLive
  },
  {
    icon: Zap,
    title: "Interactions en temps réel",
    description: "Engagez votre audience avec des sondages, Q&A, chat et levée de main pour des échanges vraiment dynamiques.",
    color: "#0085CA",
    imageUrl: analyticsImage
  },
  {
    icon: TrendingUp,
    title: "Analytics & reporting avancés",
    description: "Analysez la participation, mesurez l'engagement et optimisez vos futurs webinars grâce à des données détaillées.",
    color: "#6639B7",
    imageUrl: silosImage
  },
  {
    icon: CalendarCheck,
    title: "Gestion simple des événements",
    description: "Planifiez, invitez et suivez vos participants facilement, de la création jusqu'au suivi post-event.",
    color: "#34B233",
    imageUrl: eventsImage
  },
  {
    icon: UserPlus,
    title: "Intervenants internes & externes",
    description: "Invitez facilement des speakers externes et collaborez avec des participants partout dans le monde.",
    color: "#CF0072",
    imageUrl: backstageImage
  }
];

export default function Product() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = (searchParams.get("tab") as "webinar" | "collaboration") || "webinar";
  const [activeTab, setActiveTab] = useState<"webinar" | "collaboration">(initialTab);
  
  const [collabIndex, setCollabIndex] = useState(0);
  const [webinarIndex, setWebinarIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCollabIndex((prev) => (prev + 1) % COLLAB_FEATURES.length);
      setWebinarIndex((prev) => (prev + 1) % WEBINAR_FEATURES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleTabChange = (tab: "webinar" | "collaboration") => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Grid Pattern - Matches Home Page */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #f1f1f1 1px, transparent 1px),
              linear-gradient(to bottom, #f1f1f1 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            opacity: 0.5
          }}
        />
        <div className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-[#5e2d91]/5 via-white/0 to-transparent" />
      </div>

      <Navbar />
      
      {/* Floating Pill Toggle - Polished & Home-aligned */}
      <div className="fixed top-24 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <motion.div 
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="pointer-events-auto bg-white p-1 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 flex gap-1"
        >
          <button
            onClick={() => handleTabChange("webinar")}
            className={`relative px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
              activeTab === "webinar" 
                ? "text-white" 
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            {activeTab === "webinar" && (
              <motion.div 
                layoutId="productTab"
                className="absolute inset-0 bg-[#5e2d91] rounded-full shadow-md"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2 uppercase tracking-tight">
              Rainbow Webinar
            </span>
          </button>
          <button
            onClick={() => handleTabChange("collaboration")}
            className={`relative px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
              activeTab === "collaboration" 
                ? "text-white" 
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            {activeTab === "collaboration" && (
              <motion.div 
                layoutId="productTab"
                className="absolute inset-0 bg-[#5e2d91] rounded-full shadow-md"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2 uppercase tracking-tight">
              Rainbow Collaboration
            </span>
          </button>
        </motion.div>
      </div>

      <main className="relative z-10 pt-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {activeTab === "webinar" ? (
              <WebinarView activeIndex={webinarIndex} setActiveIndex={setWebinarIndex} />
            ) : (
              <CollaborationView activeIndex={collabIndex} setActiveIndex={setCollabIndex} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

function WebinarView({ activeIndex, setActiveIndex }: any) {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section - Home Flavor */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-50 text-[#EB632E] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
                <ShieldCheck className="w-3.5 h-3.5" />
                Souveraineté & Performance
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-8 tracking-tight">
                Organisez des événements <br />
                <span className="text-[#EB632E]">d'envergure.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-xl">
                La solution de webinaire souveraine pour engager vos participants, sécuriser vos données et analyser vos résultats.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-10 py-5 bg-[#5e2d91] text-white rounded-md font-bold hover:bg-[#4a2373] transition-colors shadow-sm">
                  Commencer l'essai gratuit
                </button>
                <button className="px-10 py-5 bg-white text-gray-900 border-2 border-gray-200 rounded-md font-bold hover:bg-gray-50 transition-colors flex items-center gap-2">
                  <Play className="w-5 h-5 fill-current text-[#EB632E]" />
                  Voir une démo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[16/10] bg-[#111] rounded-2xl overflow-hidden shadow-2xl border-[10px] border-white ring-1 ring-gray-200">
                <ImageWithFallback src={webinarHeroImage} alt="Webinar Platform" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section - Accordion Style (Like Home's Unified Section) */}
      <section className="py-24 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Tout ce dont vous avez besoin <br />
              <span className="text-[#EB632E]">pour réussir vos événements</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-2">
              {WEBINAR_FEATURES.map((feature, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className="relative pl-8 py-6 cursor-pointer group border-b border-gray-100 last:border-0"
                  >
                    <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-full transition-all duration-300 ${isActive ? 'bg-[#EB632E]' : 'bg-gray-200 opacity-60 group-hover:opacity-100'}`} />
                    <h3 className={`text-xl font-bold transition-colors ${isActive ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'}`}>
                      {feature.title}
                    </h3>
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-600 mt-3 leading-relaxed">
                            {feature.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-900 shadow-2xl border-[8px] border-white ring-1 ring-gray-200">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full"
                  >
                    <ImageWithFallback src={WEBINAR_FEATURES[activeIndex].imageUrl} className="w-full h-full object-cover" />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CollaborationView({ activeIndex, setActiveIndex }: any) {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1 relative">
              <div className="aspect-[16/10] bg-[#111] rounded-2xl overflow-hidden shadow-2xl border-[10px] border-white ring-1 ring-gray-200">
                <ImageWithFallback src={collaborationHeroImage} alt="Collaboration Platform" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0085CA] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
                <Globe className="w-3.5 h-3.5" />
                Collaboration Unifiée
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-8 tracking-tight">
                Travaillez ensemble, <br />
                <span className="text-[#0085CA]">naturellement.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-xl">
                Messagerie, visio, et partage de fichiers : un seul espace pour connecter vos équipes et libérer leur productivité.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-10 py-5 bg-[#5e2d91] text-white rounded-md font-bold hover:bg-[#4a2373] transition-colors shadow-sm">
                  Commencer l'essai gratuit
                </button>
                <button className="px-10 py-5 bg-white text-gray-900 border-2 border-gray-200 rounded-md font-bold hover:bg-gray-50 transition-colors">
                  En savoir plus
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
              L'espace de travail <br />
              <span className="text-[#0085CA]">nouvelle génération</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-2">
              {COLLAB_FEATURES.map((feature, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className="relative pl-8 py-6 cursor-pointer group border-b border-gray-100 last:border-0"
                  >
                    <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-full transition-all duration-300 ${isActive ? 'bg-[#0085CA]' : 'bg-gray-200 opacity-60 group-hover:opacity-100'}`} />
                    <h3 className={`text-xl font-bold transition-colors ${isActive ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'}`}>
                      {feature.title}
                    </h3>
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-600 mt-3 leading-relaxed">
                            {feature.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-900 shadow-2xl border-[8px] border-white ring-1 ring-gray-200">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full"
                  >
                    <ImageWithFallback src={COLLAB_FEATURES[activeIndex].image} className="w-full h-full object-cover" />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Grid - Simplified like Home's Stat section */}
      <section className="py-24 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
           {[
             { icon: ShieldCheck, title: "Sécurisé", desc: "Chiffrement de bout en bout et hébergement français." },
             { icon: Globe, title: "Souverain", desc: "Solution 100% européenne, hors Cloud Act." },
             { icon: ZapIcon, title: "Performant", desc: "Infrastructure haute disponibilité optimisée pour la vidéo." }
           ].map((item, i) => (
             <div key={i} className="space-y-4">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto text-[#5e2d91] border border-gray-100 shadow-sm">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-500">{item.desc}</p>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
}
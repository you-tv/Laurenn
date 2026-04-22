import { motion } from "motion/react";
import { GraduationCap, TrendingUp, Building2, Users, Lightbulb, HeartPulse } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import collaborationMeetingImage from "figma:asset/596ee2e54216c8a181f89aa97e78b602082c3790.png";

export function TargetAudienceSection() {
  const audiences = [
    {
      icon: GraduationCap,
      title: "Enseignants et formateurs",
      color: "#5e2d91"
    },
    {
      icon: TrendingUp,
      title: "Marketeurs et commerciaux",
      color: "#34B233"
    },
    {
      icon: Building2,
      title: "ONG et secteur public",
      color: "#0085CA"
    },
    {
      icon: Users,
      title: "Managers et consultants",
      color: "#6639B7"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-[#5e2d91] to-[#6639B7] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            À qui s'adresse Rainbow ?
          </h2>
          
        </motion.div>

        {/* Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <motion.div
                key={index}
                className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4">
                  <div 
                    className="p-3 rounded-xl"
                    style={{ backgroundColor: `${audience.color}40` }}
                  >
                    <Icon 
                      className="w-6 h-6 text-white"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {audience.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Feature Spotlight */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src={collaborationMeetingImage}
                alt="Formation en ligne"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Tout ce qu'il faut pour transmettre votre savoir
            </h3>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Invitez vos élèves dans une salle de classe virtuelle. Vous y trouverez tous les outils pour enseigner efficacement et évaluer les acquis.
            </p>
            <Button 
              onClick={() => window.open("https://app.storylane.io/share/njaxojcgqihp", "_blank")}
              className="bg-gradient-to-r from-[#34B233] to-[#34B233] hover:from-[#2d9c2b] hover:to-[#2d9c2b] text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Testez-le gratuitement →
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
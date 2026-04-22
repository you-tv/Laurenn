import { motion } from "motion/react";
import { Shield } from "lucide-react";
import isoLogo from "figma:asset/87ea69d673eaf266f5e32709ae5b558317c1ce0a.png";
import anssiLogo from "figma:asset/142f432539aaf7024794eb90be480e09ec75f073.png";
import hipaaLogo from "figma:asset/b1cb6b10cf938c0a450e1351b902d4369b2f0d7c.png";
import ensLogo from "figma:asset/ebf5703035791ce69ea64d5c4765f72f897b4d20.png";
import rgpdLogo from "figma:asset/9a6e2f86169674ed67964f90b25a518165cb7ff6.png";

export function SecurityCertificationsSection() {
  const certifications = [
    {
      logo: anssiLogo,
      name: "ANSSI",
      description: "Agence Nationale de la Sécurité des Systèmes d'Information",
      color: "#5e2d91"
    },
    {
      logo: isoLogo,
      name: "ISO 27001",
      description: "Management de la sécurité de l'information",
      color: "#34B233"
    },
    {
      logo: rgpdLogo,
      name: "RGPD",
      description: "Règlement Général sur la Protection des Données",
      color: "#CF0072"
    },
    {
      logo: ensLogo,
      name: "ENS",
      description: "Esquema Nacional de Seguridad (Espagne)",
      color: "#FF4500"
    },
    {
      logo: hipaaLogo,
      name: "HIPAA",
      description: "Health Insurance Portability and Accountability Act",
      color: "#6639B7"
    },
    {
      logo: isoLogo,
      name: "eIDAS",
      description: "Electronic Identification and Trust Services",
      color: "#0085CA"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#5e2d91] to-[#CF0072] text-white px-6 py-3 rounded-full mb-6">
            <Shield className="w-5 h-5" />
            <span className="font-semibold">Sécurité & Souveraineté</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 !text-[#000000]">Vos données, protégées & hébergées en France.          </h2>
          
          
          
          <p className="text-base max-w-3xl mx-auto !text-[#000000]">Rainbow est une solution française, hébergée dans des centres de données situés en Europe, respectant les normes les plus strictes en matière de sécurité, de souveraineté et de confidentialité.​</p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => {
            return (
              <motion.div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${cert.color}20` }}
                >
                  <img 
                    src={cert.logo}
                    alt={cert.name}
                    className="w-20 h-20 object-contain"
                  />
                </div>
                
                {/* Content */}
                <h3 
                  className="text-2xl font-bold mb-3"
                  style={{ color: cert.color }}
                >
                  {cert.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {cert.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Features */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#5e2d91] rounded-full"></span>
            <span className="font-medium">🇫🇷 Solution Française</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#34B233] rounded-full"></span>
            <span className="font-medium">Hébergement 100% Européen</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#0085CA] rounded-full"></span>
            <span className="font-medium">Non soumis au Cloud Act</span>
          </div>
        </motion.div>

        {/* CTA Link */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <a
            href="/security"
            className="inline-flex items-center gap-2 text-[#5e2d91] hover:text-[#CF0072] font-semibold transition-colors group"
          >
            Voir toutes les certifications
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
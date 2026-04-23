import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { motion } from "motion/react";
import { Scale, ShieldCheck, FileText, Lock } from "lucide-react";

export default function Legal() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gray-50 py-20 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center p-3 bg-[#5e2d91]/10 rounded-xl mb-6">
                <Scale className="h-8 w-8 text-[#5e2d91]" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Informations Légales</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Retrouvez ici l'ensemble des documents relatifs à l'utilisation de nos services et à la protection de vos données.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {/* Mentions Légales */}
              <div className="prose prose-purple max-w-none">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="h-6 w-6 text-[#5e2d91]" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Mentions Légales</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Le présent site est édité par Rainbow Communications, société par actions simplifiée au capital de 1 000 000 €, dont le siège social est situé à Paris, France. 
                </p>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-4">
                  <ul className="space-y-2 text-sm text-gray-600 list-none p-0 m-0">
                    <li><strong>Directeur de la publication :</strong> Jean Dupont</li>
                    <li><strong>Hébergement :</strong> OVHCloud, 2 rue Kellermann - 59100 Roubaix, France</li>
                    <li><strong>Contact :</strong> support@openrainbow.com</li>
                  </ul>
                </div>
              </div>

              {/* Protection des données */}
              <div className="prose prose-purple max-w-none">
                <div className="flex items-center gap-3 mb-6">
                  <ShieldCheck className="h-6 w-6 text-[#5e2d91]" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Protection des Données (RGPD)</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Conformément au Règlement Général sur la Protection des Données (RGPD), Rainbow s'engage à protéger la vie privée de ses utilisateurs. Nous collectons uniquement les données nécessaires au bon fonctionnement de nos services de collaboration et de webinar.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Pour toute demande, veuillez contacter notre Délégué à la Protection des Données (DPO) à l'adresse privacy@openrainbow.com.
                </p>
              </div>

              {/* Conditions d'utilisation */}
              <div className="prose prose-purple max-w-none">
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="h-6 w-6 text-[#5e2d91]" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Conditions Générales d'Utilisation</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  L'utilisation de la plateforme Rainbow implique l'acceptation pleine et entière des présentes conditions générales d'utilisation. Ces conditions sont susceptibles d'être modifiées ou complétées à tout moment.
                </p>
                <p className="text-gray-600 leading-relaxed italic">
                  Dernière mise à jour : 22 avril 2026
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

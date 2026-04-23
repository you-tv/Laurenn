import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { ProductRangeSection } from "../components/product-range-section";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";
import React from "react";

export default function Product() {
  const handleStartTrial = () => {
    // Open trial modal or redirect
    console.log("Start trial");
  };

  const handleCTA = (action: string, url?: string) => {
    switch (action) {
      case "demo":
        window.open('https://app.storylane.io/share/njaxojcgqihp', '_blank');
        break;
      case "external":
        if (url) window.open(url, "_blank");
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #e5e7eb 1px, transparent 1px),
              linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            opacity: 0.3
          }}
        />
        <div className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-[#5e2d91]/5 via-white/0 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        
        <ProductRangeSection />

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#5e2d91] to-[#6639B7]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Prêt à lancer vos webinaires avec Rainbow Webinar ?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Commencez votre essai gratuit de 30 jours et organisez des webinaires professionnels dès aujourd'hui
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-[#5e2d91] hover:bg-gray-100 text-lg px-8"
                  onClick={handleStartTrial}
                >
                  Essai gratuit 30 jours
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#5e2d91] text-[#5e2d91] bg-white hover:bg-gray-100 text-lg px-8"
                  onClick={() => window.open('https://app.storylane.io/share/njaxojcgqihp', '_blank')}
                >
                  Voir une démo
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
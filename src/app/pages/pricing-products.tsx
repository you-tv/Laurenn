import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Video, Share2, Check, ArrowRight } from "lucide-react";

export default function PricingProducts() {
  const [selectedProduct, setSelectedProduct] = useState<"webinar" | "collab">("webinar");

  const webinarPlans = [
    {
      name: "Rainbow Webinar Start",
      price: 49,
      description: "Parfait pour les petites équipes",
      features: [
        "120 participants",
        "Chat et Q&R",
        "Enregistrement",
        "Analytics détaillées",
        "Support email"
      ]
    },
    {
      name: "Rainbow Webinar Pro",
      price: 129,
      description: "Pour les entreprises en croissance",
      popular: true,
      features: [
        "500 participants",
        "Chat et analytics",
        "Sondages interactifs",
        "Support prioritaire",
        "Branding personnalisé"
      ]
    },
    {
      name: "Rainbow Webinar Enterprise",
      price: null,
      description: "Pour les grandes organisations",
      features: [
        "1000+ participants",
        "Webinaires illimités",
        "Personnalisation complète",
        "Accès API",
        "Account manager dédié"
      ]
    }
  ];

  const collabPlans = [
    {
      name: "Rainbow Collab Starter",
      price: 39,
      description: "Pour les petites équipes",
      features: [
        "Messagerie illimitée",
        "Appels audio/vidéo",
        "Partage de fichiers (5 Go)",
        "Espaces de travail",
        "Support standard"
      ]
    },
    {
      name: "Rainbow Collab Business",
      price: 89,
      description: "Pour les équipes en croissance",
      popular: true,
      features: [
        "Tout du Starter",
        "Stockage 100 Go",
        "Visioconférence jusqu'à 50",
        "Intégrations avancées",
        "Support prioritaire"
      ]
    },
    {
      name: "Rainbow Collab Enterprise",
      price: null,
      description: "Pour les grandes organisations",
      features: [
        "Tout du Business",
        "Stockage illimité",
        "Visioconférence illimitée",
        "SSO et SAML",
        "Account manager"
      ]
    }
  ];

  const plans = selectedProduct === "webinar" ? webinarPlans : collabPlans;
  const productColor = selectedProduct === "webinar" ? "#6639B7" : "#0085CA";
  const productIcon = selectedProduct === "webinar" ? Video : Share2;
  const ProductIcon = productIcon;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-gradient-to-r from-[#CF0072] via-[#FF4500] to-[#34B233] text-white text-sm px-6 py-2">
              💰 Tarifs transparents
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choisissez votre formule
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Essai gratuit de 30 jours pour tous les plans. Sans carte bancaire.
            </p>
          </div>

          {/* Product Selector */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 rounded-xl p-2">
              <button
                onClick={() => setSelectedProduct("webinar")}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedProduct === "webinar"
                    ? "bg-white text-[#6639B7] shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Video className="h-5 w-5" />
                Rainbow Webinar
              </button>
              <button
                onClick={() => setSelectedProduct("collab")}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedProduct === "collab"
                    ? "bg-white text-[#0085CA] shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Share2 className="h-5 w-5" />
                Rainbow Collab
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                  plan.popular ? "ring-2 ring-offset-2" : "border border-gray-200"
                }`}
                style={plan.popular ? { ringColor: productColor } : {}}
              >
                {plan.popular && (
                  <div 
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-sm font-semibold"
                    style={{ backgroundColor: productColor }}
                  >
                    Le plus populaire
                  </div>
                )}

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <ProductIcon className="h-6 w-6" style={{ color: productColor }} />
                    <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <div className="mb-6">
                  {plan.price ? (
                    <>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-gray-900">{plan.price}€</span>
                        <span className="text-gray-600">/mois</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">Facturation mensuelle</p>
                    </>
                  ) : (
                    <div>
                      <span className="text-4xl font-bold text-gray-900">Sur mesure</span>
                      <p className="text-sm text-gray-500 mt-1">Contactez notre équipe</p>
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: productColor }} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to={selectedProduct === "webinar" ? "/products/webinar" : "/products/collab"}
                  className="block"
                >
                  <Button
                    className="w-full font-semibold text-white"
                    size="lg"
                    style={{ 
                      backgroundColor: plan.popular ? productColor : undefined,
                    }}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.price ? "Essai gratuit 30 jours" : "Nous contacter"}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Licence par entreprise */}
          <div className="bg-gradient-to-r from-[#5e2d91]/10 to-[#6639B7]/10 rounded-2xl p-8 border-2 border-[#5e2d91]/20">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🏢 Licence par entreprise
              </h3>
              <p className="text-lg text-gray-700 mb-2">
                Un seul abonnement pour toute votre entreprise ! Tous vos collaborateurs peuvent utiliser la plateforme sans frais supplémentaires.
              </p>
              <p className="text-[#5e2d91] font-semibold">
                Un avantage incomparable pour maximiser votre ROI.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

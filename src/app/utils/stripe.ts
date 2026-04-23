import { loadStripe, Stripe } from '@stripe/stripe-js';

// IMPORTANT: Remplacez cette clé par votre clé publique Stripe
// Obtenez-la sur https://dashboard.stripe.com/apikeys
const STRIPE_PUBLIC_KEY = "pk_test_YOUR_STRIPE_PUBLIC_KEY_HERE";

let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(STRIPE_PUBLIC_KEY);
  }
  return stripePromise;
};

// Configuration des plans Stripe
// IMPORTANT: Créez ces prix dans votre dashboard Stripe et remplacez les IDs
export const STRIPE_PLANS = {
  trial: {
    name: "Essai gratuit 30 jours",
    priceId: null, // Pas de prix pour l'essai
    amount: 0,
    currency: "EUR",
    interval: "month",
    features: [
      "120 participants",
      "Sessions illimitées",
      "45 min par session",
      "Enregistrement vidéo",
      "Chat & Q&A",
      "Analytics basiques"
    ]
  },
  start: {
    name: "Rainbow Webinar Start",
    priceId: "price_START_ID_HERE", // Remplacez par l'ID de prix Stripe
    amount: 49,
    currency: "EUR",
    interval: "month",
    features: [
      "120 participants",
      "Sessions illimitées",
      "Durée illimitée",
      "Enregistrement vidéo",
      "Chat & Q&A",
      "Analytics avancés",
      "Support email"
    ]
  },
  pro: {
    name: "Rainbow Webinar Pro",
    priceId: "price_PRO_ID_HERE", // Remplacez par l'ID de prix Stripe
    amount: 129,
    currency: "EUR",
    interval: "month",
    features: [
      "500 participants",
      "Sessions illimitées",
      "Durée illimitée",
      "Enregistrement vidéo HD",
      "Chat & Q&A avancés",
      "Analytics détaillés",
      "API & Webhooks",
      "Support prioritaire",
      "Branding personnalisé"
    ]
  },
  enterprise: {
    name: "Rainbow Webinar Enterprise",
    priceId: null, // Contact commercial
    amount: null,
    currency: "EUR",
    interval: "custom",
    features: [
      "500+ participants",
      "Sessions illimitées",
      "Tout de Pro +",
      "SLA garanti",
      "Support dédié 24/7",
      "Formation personnalisée",
      "Intégrations sur mesure",
      "Infrastructure dédiée"
    ]
  }
};

// Fonction pour créer une session de checkout Stripe
export const createCheckoutSession = async (priceId: string, userEmail: string) => {
  try {
    // IMPORTANT: En production, ceci doit être un appel à votre backend
    // qui utilisera la clé secrète Stripe (stripe.checkout.sessions.create)
    
    // Pour la démo, nous simulons la création d'une session
    const mockSession = {
      id: `cs_test_${Math.random().toString(36).substring(7)}`,
      url: `/checkout/success?session_id=cs_test_mock`
    };
    
    console.log("Création de session Stripe pour:", { priceId, userEmail });
    
    // EN PRODUCTION, utilisez ceci (côté backend):
    /*
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId,
        userEmail,
        successUrl: `${window.location.origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: `${window.location.origin}/pricing`,
      }),
    });
    
    const session = await response.json();
    return session;
    */
    
    return mockSession;
  } catch (error) {
    console.error("Erreur création session Stripe:", error);
    throw error;
  }
};

// Fonction pour créer un portail client Stripe
export const createCustomerPortal = async (customerId: string) => {
  try {
    // EN PRODUCTION, ceci doit être un appel à votre backend
    const mockPortalUrl = `/customer-portal`;
    
    console.log("Création portail client pour:", customerId);
    
    // EN PRODUCTION, utilisez ceci (côté backend):
    /*
    const response = await fetch('/api/create-customer-portal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        customerId,
        returnUrl: `${window.location.origin}/dashboard`,
      }),
    });
    
    const { url } = await response.json();
    return url;
    */
    
    return mockPortalUrl;
  } catch (error) {
    console.error("Erreur création portail client:", error);
    throw error;
  }
};

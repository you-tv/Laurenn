/**
 * BACKEND API EXAMPLE - Stripe Integration
 * 
 * Ce fichier montre comment implémenter les endpoints backend
 * pour gérer Stripe avec Node.js/Express.
 * 
 * IMPORTANT: Ce code doit être exécuté côté serveur uniquement!
 * Ne jamais exposer votre clé secrète Stripe côté client.
 */

/*
// 1. Installation des dépendances
npm install stripe express dotenv

// 2. Configuration des variables d'environnement (.env)
STRIPE_SECRET_KEY=sk_test_YOUR_SECRET_KEY_HERE
STRIPE_WEBHOOK_SECRET=whsec_YOUR_WEBHOOK_SECRET_HERE

// 3. Initialisation de Stripe
import Stripe from 'stripe';
import express from 'express';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

const app = express();
app.use(express.json());

// ============================================
// ENDPOINT: Créer une session de checkout
// ============================================
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { priceId, userEmail, successUrl, cancelUrl } = req.body;

    // Créer la session Stripe Checkout
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId, // Ex: 'price_1ABC123...'
          quantity: 1,
        },
      ],
      customer_email: userEmail,
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        // Ajoutez vos métadonnées personnalisées
        source: 'rainbow_webinar',
        plan: priceId.includes('START') ? 'start' : 'pro',
      },
      // Options additionnelles
      allow_promotion_codes: true,
      billing_address_collection: 'required',
      locale: 'fr',
    });

    res.json({ 
      id: session.id,
      url: session.url 
    });
  } catch (error) {
    console.error('Erreur création session:', error);
    res.status(500).json({ error: error.message });
  }
});

// ============================================
// ENDPOINT: Vérifier une session après paiement
// ============================================
app.post('/api/verify-session', async (req, res) => {
  try {
    const { sessionId } = req.body;

    // Récupérer les détails de la session
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === 'paid') {
      // Le paiement est confirmé
      const subscription = await stripe.subscriptions.retrieve(
        session.subscription as string
      );

      // TODO: Activer l'abonnement dans votre base de données
      // - Créer le compte utilisateur
      // - Activer les licences Webinar
      // - Envoyer email de confirmation
      
      res.json({
        success: true,
        customerId: session.customer,
        subscriptionId: subscription.id,
        status: subscription.status,
      });
    } else {
      res.json({ success: false, message: 'Paiement non confirmé' });
    }
  } catch (error) {
    console.error('Erreur vérification session:', error);
    res.status(500).json({ error: error.message });
  }
});

// ============================================
// ENDPOINT: Créer un portail client
// ============================================
app.post('/api/create-customer-portal', async (req, res) => {
  try {
    const { customerId, returnUrl } = req.body;

    // Créer une session de portail client
    const portalSession = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: returnUrl,
    });

    res.json({ url: portalSession.url });
  } catch (error) {
    console.error('Erreur création portail:', error);
    res.status(500).json({ error: error.message });
  }
});

// ============================================
// WEBHOOK: Gérer les événements Stripe
// ============================================
app.post('/api/webhooks/stripe', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature']!;

  try {
    // Vérifier la signature du webhook
    const event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    // Gérer les différents types d'événements
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object;
        console.log('✅ Paiement réussi:', session.id);
        // TODO: Activer l'abonnement utilisateur
        break;

      case 'customer.subscription.created':
        const subscription = event.data.object;
        console.log('✅ Abonnement créé:', subscription.id);
        // TODO: Créer les licences Webinar
        break;

      case 'customer.subscription.updated':
        const updatedSub = event.data.object;
        console.log('📝 Abonnement mis à jour:', updatedSub.id);
        // TODO: Mettre à jour le plan de l'utilisateur
        break;

      case 'customer.subscription.deleted':
        const deletedSub = event.data.object;
        console.log('❌ Abonnement annulé:', deletedSub.id);
        // TODO: Désactiver l'accès de l'utilisateur
        break;

      case 'invoice.payment_succeeded':
        const invoice = event.data.object;
        console.log('💰 Paiement de facture réussi:', invoice.id);
        // TODO: Envoyer la facture par email
        break;

      case 'invoice.payment_failed':
        const failedInvoice = event.data.object;
        console.log('⚠️ Échec paiement:', failedInvoice.id);
        // TODO: Envoyer email de relance
        break;

      default:
        console.log(`❓ Événement non géré: ${event.type}`);
    }

    res.json({ received: true });
  } catch (error) {
    console.error('Erreur webhook:', error);
    res.status(400).send(`Webhook Error: ${error.message}`);
  }
});

// ============================================
// ENDPOINT: Annuler un abonnement
// ============================================
app.post('/api/cancel-subscription', async (req, res) => {
  try {
    const { subscriptionId } = req.body;

    // Annuler l'abonnement à la fin de la période de facturation
    const subscription = await stripe.subscriptions.update(subscriptionId, {
      cancel_at_period_end: true,
    });

    res.json({
      success: true,
      cancelAt: subscription.cancel_at,
    });
  } catch (error) {
    console.error('Erreur annulation:', error);
    res.status(500).json({ error: error.message });
  }
});

// ============================================
// ENDPOINT: Créer les prix Stripe (à exécuter une fois)
// ============================================
app.post('/api/setup-stripe-products', async (req, res) => {
  try {
    // Créer le produit Rainbow Webinar Start
    const productStart = await stripe.products.create({
      name: 'Rainbow Webinar Start',
      description: 'Jusqu\'à 120 participants, sessions illimitées',
      metadata: {
        plan: 'start',
        participants: '120',
      },
    });

    const priceStart = await stripe.prices.create({
      product: productStart.id,
      unit_amount: 4900, // 49€ en centimes
      currency: 'eur',
      recurring: {
        interval: 'month',
      },
    });

    // Créer le produit Rainbow Webinar Pro
    const productPro = await stripe.products.create({
      name: 'Rainbow Webinar Pro',
      description: 'Jusqu\'à 500 participants, fonctionnalités avancées',
      metadata: {
        plan: 'pro',
        participants: '500',
      },
    });

    const pricePro = await stripe.prices.create({
      product: productPro.id,
      unit_amount: 12900, // 129€ en centimes
      currency: 'eur',
      recurring: {
        interval: 'month',
      },
    });

    res.json({
      success: true,
      products: {
        start: {
          productId: productStart.id,
          priceId: priceStart.id,
        },
        pro: {
          productId: productPro.id,
          priceId: pricePro.id,
        },
      },
    });
  } catch (error) {
    console.error('Erreur configuration produits:', error);
    res.status(500).json({ error: error.message });
  }
});

// Démarrer le serveur
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Serveur backend démarré sur le port ${PORT}`);
});

// ============================================
// INSTRUCTIONS DE CONFIGURATION
// ============================================

ÉTAPES DE MISE EN PRODUCTION:

1. Créer un compte Stripe: https://dashboard.stripe.com/register

2. Récupérer vos clés API:
   - Clé publique (pk_test_...) → Mettre dans /src/app/utils/stripe.ts
   - Clé secrète (sk_test_...) → Mettre dans .env côté backend

3. Créer les produits et prix dans Stripe:
   - Exécuter l'endpoint /api/setup-stripe-products
   - OU créer manuellement via le dashboard Stripe

4. Configurer le webhook:
   - Dans Dashboard Stripe → Developers → Webhooks
   - Ajouter endpoint: https://votre-domaine.com/api/webhooks/stripe
   - Sélectionner événements: 
     * checkout.session.completed
     * customer.subscription.created/updated/deleted
     * invoice.payment_succeeded/failed
   - Copier le secret webhook (whsec_...) dans .env

5. Tester en mode test:
   - Utiliser les cartes de test Stripe
   - 4242 4242 4242 4242 (succès)
   - 4000 0000 0000 9995 (échec)

6. Passer en production:
   - Remplacer pk_test_... par pk_live_...
   - Remplacer sk_test_... par sk_live_...
   - Activer votre compte Stripe (vérification identité)

7. Conformité légale:
   - Ajouter CGV avec mention des abonnements
   - Politique de remboursement
   - Mentions RGPD (données stockées par Stripe)

*/

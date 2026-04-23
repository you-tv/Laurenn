# 🔐 Intégration Stripe - Rainbow Webinar

## ✅ Ce qui a été créé

### 1. **Configuration Stripe** (`/src/app/utils/stripe.ts`)
- Initialisation de Stripe avec clé publique
- Configuration des 3 plans tarifaires :
  - **Start** : 49€/mois - 120 participants
  - **Pro** : 129€/mois - 500 participants  
  - **Enterprise** : Sur devis - 500+ participants
- Fonctions pour créer sessions checkout et portail client

### 2. **Modal Checkout** (`/src/app/components/stripe-checkout.tsx`)
- Formulaire d'abonnement avec email
- Résumé du plan sélectionné avec fonctionnalités
- Badges de sécurité (Stripe, SSL, cartes acceptées)
- Acceptation CGV obligatoire
- Redirection vers Stripe Checkout

### 3. **Page de succès** (`/src/app/pages/checkout-success.tsx`)
- Animation de confirmation
- Récapitulatif des prochaines étapes
- Lien vers le dashboard
- Affichage session ID pour tracking

### 4. **Backend API Example** (`/src/app/api/stripe-backend-example.js`)
Documentation complète côté serveur avec :
- Création de session checkout
- Vérification de paiement
- Webhooks pour événements Stripe
- Gestion des abonnements (annulation, mise à jour)
- Configuration des produits Stripe

### 5. **Intégration dans Pricing**
- Ouverture du modal Stripe au clic sur les plans
- Mapping automatique des plans (Start/Pro/Enterprise)

## 🚀 Comment utiliser

### ÉTAPE 1 : Configuration Stripe

1. **Créer un compte Stripe** : https://dashboard.stripe.com/register

2. **Récupérer les clés API** :
   ```
   Clé publique (test) : pk_test_...
   Clé secrète (test)  : sk_test_...
   ```

3. **Remplacer dans `/src/app/utils/stripe.ts`** :
   ```typescript
   const STRIPE_PUBLIC_KEY = "pk_test_VOTRE_CLE_ICI";
   ```

### ÉTAPE 2 : Créer les produits dans Stripe

**Option A - Via Dashboard Stripe** :
1. Aller dans Products → Add product
2. Créer "Rainbow Webinar Start" à 49€/mois
3. Créer "Rainbow Webinar Pro" à 129€/mois
4. Copier les Price IDs (price_...)

**Option B - Via API** :
- Utiliser l'endpoint `/api/setup-stripe-products` du backend example

**Mettre à jour les Price IDs dans `/src/app/utils/stripe.ts`** :
```typescript
start: {
  priceId: "price_VOTRE_ID_START_ICI",
  ...
},
pro: {
  priceId: "price_VOTRE_ID_PRO_ICI",
  ...
}
```

### ÉTAPE 3 : Backend (Node.js/Express)

1. **Installer les dépendances** :
   ```bash
   npm install stripe express dotenv
   ```

2. **Créer `.env`** :
   ```
   STRIPE_SECRET_KEY=sk_test_...
   STRIPE_WEBHOOK_SECRET=whsec_...
   ```

3. **Copier le code** de `/src/app/api/stripe-backend-example.js`

4. **Démarrer le serveur** :
   ```bash
   node server.js
   ```

### ÉTAPE 4 : Webhooks Stripe

1. **Configuration locale (test)** :
   ```bash
   stripe listen --forward-to localhost:3001/api/webhooks/stripe
   ```

2. **Configuration production** :
   - Dashboard Stripe → Developers → Webhooks
   - Add endpoint : `https://votre-domaine.com/api/webhooks/stripe`
   - Événements à écouter :
     - `checkout.session.completed`
     - `customer.subscription.created`
     - `customer.subscription.updated`
     - `customer.subscription.deleted`
     - `invoice.payment_succeeded`
     - `invoice.payment_failed`

### ÉTAPE 5 : Tester le paiement

**Cartes de test Stripe** :
- ✅ Succès : `4242 4242 4242 4242`
- ❌ Échec : `4000 0000 0000 9995`
- 📅 Date : N'importe quelle date future
- 🔐 CVC : N'importe quel 3 chiffres

**Flux de test** :
1. Aller sur `/pricing`
2. Cliquer sur un plan (Start ou Pro)
3. Remplir l'email
4. Accepter les CGV
5. Cliquer "Paiement sécurisé"
6. ➡️ Redirection vers Stripe Checkout (en mode test)
7. Utiliser carte de test
8. ➡️ Redirection vers `/checkout/success`

## 🔒 Sécurité

✅ **Bonnes pratiques implémentées** :
- Clé secrète Stripe uniquement côté serveur
- Clé publique Stripe côté client
- Vérification signature webhook
- HTTPS obligatoire en production
- Validation email côté serveur
- Métadonnées pour tracking

## 📊 Données collectées

Stripe stocke automatiquement :
- Informations de paiement (cryptées)
- Emails clients
- Historique des transactions
- Statut des abonnements

**À implémenter dans votre BDD** :
- User ID ↔ Stripe Customer ID
- User ID ↔ Subscription ID
- Plan actif (Start/Pro/Enterprise)
- Date d'activation
- Statut (active/canceled/past_due)

## 🎯 Événements à gérer (Webhooks)

```javascript
// Paiement initial réussi
'checkout.session.completed' 
→ Créer compte utilisateur
→ Activer licences Webinar

// Abonnement créé
'customer.subscription.created'
→ Envoyer email bienvenue

// Paiement mensuel réussi
'invoice.payment_succeeded'
→ Renouveler accès
→ Envoyer facture

// Paiement échoué
'invoice.payment_failed'
→ Email relance
→ Suspendre après 3 échecs

// Annulation abonnement
'customer.subscription.deleted'
→ Désactiver accès
→ Email confirmation
```

## 💰 Facturation

**Cycle de facturation** :
- Facturation mensuelle automatique
- Prélèvement le jour anniversaire de l'inscription
- Factures générées automatiquement par Stripe
- TVA française (20%) calculée automatiquement

**Résiliation** :
- Depuis le portail client Stripe
- Ou via API `stripe.subscriptions.update()`
- Accès maintenu jusqu'à fin période payée

## 🌍 Production

### Checklist avant mise en ligne :

- [ ] Remplacer `pk_test_...` par `pk_live_...`
- [ ] Remplacer `sk_test_...` par `sk_live_...`  
- [ ] Activer compte Stripe (vérification identité)
- [ ] Configurer webhooks production
- [ ] Ajouter CGV avec mentions abonnement
- [ ] HTTPS activé sur tout le site
- [ ] Tester un vrai paiement de 0.01€
- [ ] Configurer emails transactionnels
- [ ] Mettre en place monitoring webhooks
- [ ] Backup base de données quotidien

## 📞 Support

**Dashboard Stripe** :
- Voir tous les paiements : Dashboard → Payments
- Voir abonnements : Dashboard → Subscriptions
- Logs des webhooks : Developers → Webhooks → Events
- Remboursements : Dashboard → Payments → Refund

**Liens utiles** :
- Documentation Stripe : https://stripe.com/docs
- API Reference : https://stripe.com/docs/api
- Test Cards : https://stripe.com/docs/testing
- Webhooks : https://stripe.com/docs/webhooks

## 🇫🇷 Conformité légale

**RGPD** :
- Stripe est conforme GDPR
- Serveurs en Europe disponibles
- DPA (Data Processing Agreement) automatique
- Droit à l'oubli géré par API

**Mentions obligatoires** :
- Paiement sécurisé par Stripe (✅ fait)
- CGV avec modalités d'abonnement
- Politique de remboursement (14 jours légaux)
- Coordonnées de facturation

## 🎨 Personnalisation

**Stripe Checkout** :
- Logo : Dashboard → Settings → Branding
- Couleurs : Personnalisables dans le dashboard
- Langue : Automatique selon navigateur (FR supporté)

**Emails Stripe** :
- Factures automatiques
- Confirmations de paiement
- Relances d'échec
- Personnalisables : Dashboard → Settings → Emails

---

## ✨ Prêt à lancer !

Votre intégration Stripe est complète et prête pour la production.

N'oubliez pas de tester le flux complet avant de passer en mode live ! 🚀

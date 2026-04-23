export type Language = 'fr' | 'en' | 'es' | 'it' | 'de';

export const translations = {
  fr: {
    // Navbar
    nav: {
      product: 'Produits',
      pricing: 'Tarifs',
      resources: 'Ressources',
      about: 'À propos',
      signIn: 'Se connecter',
      startTrial: 'Explorer nos produits',
      blog: 'Blog',
      support: 'Centre d\'aide',
      clientCases: 'Cas client',
      elearning: 'Help Center Rainbow'
    },
    // Hero Section
    hero: {
      title: 'Organisez des webinaires',
      titleHighlight: 'mémorables',
      subtitle: 'La plateforme professionnelle pour créer, diffuser et analyser vos webinaires avec simplicité',
      description: 'La plateforme de webinars professionnelle, sécurisée et souveraine pour vos événements en ligne.',
      benefit1: 'Communication unifiée complète',
      benefit2: 'Hébergement en France - 100% souverain',
      benefit3: 'Messagerie, visio & webinaires',
      startTrial: 'Essai gratuit 30 jours',
      viewDemo: 'Voir la démo',
      trustedBy: 'Ils nous font confiance',
      noCreditCard: 'Sans carte bancaire'
    },
    // Features Section
    features: {
      title: 'Tout ce dont vous avez besoin',
      subtitle: 'Des fonctionnalités puissantes pour des webinars mémorables et efficaces',
      videoStreaming: {
        title: 'Une solution intuitive',
        description: 'Plateforme conviviale qui vous libère de la logistique. Concentrez-vous sur votre message, nous gérons le reste.'
      },
      capacity: {
        title: 'Un environnement interactif',
        description: 'Sondages en direct, levez la main, chat participatif : engagez votre audience et transformez chaque webinar en conversation.'
      },
      analytics: {
        title: 'Audio & vidéo haute qualité',
        description: 'Partage d\'écran fluide, streaming stable et qualité professionnelle. Une expérience premium pour vous et vos participants.'
      },
      interactive: {
        title: 'Invitez des experts externes',
        description: 'Ouvrez vos événements à des conférenciers extérieurs. Élargissez votre portée et enrichissez vos contenus.'
      },
      security: {
        title: 'Sécurité entreprise',
        description: 'Chiffrement bancaire, SSO et conformité aux normes SOC 2, RGPD et HIPAA.'
      },
      recording: {
        title: 'Enregistrement en un clic',
        description: 'Enregistrez et partagez automatiquement vos webinars avec une qualité parfaite.'
      },
      cta: 'Créez des webinaires professionnels en quelques minutes'
    },
    demoPreview: {
      title: 'Créez des webinaires professionnels',
      titleHighlight: 'en quelques minutes',
      ctaButton: 'Venez essayer gratuitement pendant 30 jours !',
      trust1: 'Essai gratuit 30 jours',
      trust2: 'Sans engagement',
      trust3: 'Support dédié en français'
    },
    // Pricing Section
    pricing: {
      title: 'Choisissez votre formule',
      subtitle: 'Des tarifs simples et transparents pour toutes les tailles d\'entreprises',
      monthly: 'Mensuel',
      annually: 'Annuel',
      save20: 'Économisez 20%',
      perMonth: '/mois',
      participants: 'participants',
      features: 'Fonctionnalités incluses',
      unlimitedWebinars: 'Webinaires illimités',
      hdStreaming: 'Streaming HD',
      recording: 'Enregistrement et replay',
      analytics: 'Analyses détaillées',
      chat: 'Chat et Q&R',
      polls: 'Sondages interactifs',
      support: 'Support email',
      prioritySupport: 'Support prioritaire',
      customBranding: 'Personnalisation complète',
      api: 'Accès API',
      manager: 'Account manager dédié',
      sla: 'SLA garanti',
      selectPlan: 'Choisir ce plan',
      freeTrial: 'Essai gratuit 30 jours',
      subscribe: "S'abonner",
      comingSoon: 'Bientôt disponible',
      popular: 'Le plus populaire',
      contactUs: 'Me tenir informé',
      perCompany: 'Licence par entreprise',
      perCompanyDesc: 'Un seul abonnement pour toute votre entreprise ! Tous vos collaborateurs peuvent organiser des webinaires sans frais supplémentaires.',
      perCompanyHighlight: 'Un avantage incomparable pour maximiser votre ROI.',
      trialInfo: 'Tous les forfaits incluent un essai gratuit de 30 jours. Aucune carte bancaire requise. Annulation à tout moment.',
      start: {
        name: 'Rainbow Webinar Start',
        description: 'Parfait pour les petites équipes'
      },
      pro: {
        name: 'Rainbow Webinar Pro',
        description: 'Pour les entreprises en croissance'
      },
      enterprise: {
        name: 'Rainbow Webinar Enterprise',
        description: 'Pour les grandes organisations'
      }
    },
    // Product Page
    product: {
      title: 'La gamme',
      titleHighlight: 'Rainbow',
      subtitle: 'Des solutions complètes de communication et collaboration pour transformer votre entreprise',
      webinar: {
        name: 'Rainbow Webinar',
        tagline: 'La solution complète pour vos webinaires professionnels',
        description: 'Organisez des webinaires de qualité pour former, présenter et engager votre audience. De 120 à 1000 participants selon vos besoins.',
        feature1: 'Jusqu\'à 1000 participants simultanés',
        feature2: 'Streaming HD avec faible latence',
        feature3: 'Enregistrement et replay automatique',
        feature4: 'Sondages et Q&A interactifs',
        feature5: 'Statistiques détaillées d\'engagement',
        feature6: 'Intégration calendrier et CRM',
        plansTitle: 'Nos forfaits',
        ctaPrimary: 'Essayer 30 jours',
        ctaSecondary: 'Voir les tarifs'
      },
      collaboration: {
        name: 'Rainbow Collaboration',
        tagline: 'Communication unifiée pour entreprises',
        description: 'Une plateforme complète de communication d\'entreprise : messagerie instantanée, visioconférence, téléphonie et partage de fichiers en toute sécurité.',
        feature1: 'Messagerie instantanée d\'entreprise',
        feature2: 'Visioconférence jusqu\'à 30 participants',
        feature3: 'Téléphonie intégrée (VoIP)',
        feature4: 'Partage de fichiers sécurisé',
        feature5: 'Présence et statuts avancés',
        feature6: 'Compatible iOS, Android, Web, Desktop',
        ctaPrimary: 'Essayer gratuitement',
        ctaSecondary: 'En savoir plus'
      },
      guardian: {
        name: 'Rainbow Guardian',
        tagline: 'Protection et sécurité des communications',
        description: 'Solution de sécurité avancée pour protéger vos communications d\'entreprise. Chiffrement end-to-end, conformité RGPD et contrôle total de vos données.',
        feature1: 'Chiffrement end-to-end des messages',
        feature2: 'Conformité RGPD et SOC 2',
        feature3: 'Audit et traçabilité complète',
        feature4: 'Contrôle d\'accès granulaire',
        feature5: 'Protection contre les menaces',
        feature6: 'Hébergement souverain disponible',
        ctaPrimary: 'Bientôt disponible',
        ctaSecondary: 'Me tenir informé'
      },
      cta: {
        title: 'Prêt à transformer votre communication ?',
        subtitle: 'Découvrez nos solutions et commencez votre essai gratuit dès aujourd\'hui',
        trial: 'Essai gratuit 30 jours',
        demo: 'Voir une démo'
      }
    },
    // Support Page
    support: {
      title: 'Centre d\'aide',
      titleHighlight: 'Rainbow Webinar',
      subtitle: 'Trouvez rapidement les réponses à vos questions',
      search: 'Rechercher dans l\'aide...',
      categories: 'Catégories d\'aide',
      gettingStarted: 'Démarrage',
      gettingStartedDesc: 'Premiers pas avec Rainbow Webinar',
      technical: 'Support technique',
      technicalDesc: 'Résolution de problèmes et configuration',
      account: 'Compte et facturation',
      accountDesc: 'Gestion de votre abonnement',
      bestPractices: 'Bonnes pratiques',
      bestPracticesDesc: 'Optimisez vos webinaires',
      resources: {
        title: 'Ressources utiles',
        documentation: {
          title: 'Documentation complète',
          description: 'Guides détaillés et tutoriels'
        },
        video: {
          title: 'Tutoriels vidéo',
          description: 'Apprenez avec nos vidéos'
        },
        community: {
          title: 'Communauté',
          description: 'Échangez avec d\'autres utilisateurs'
        }
      },
      contact: {
        title: 'Besoin d\'aide ?',
        subtitle: 'Notre équipe est là pour vous accompagner',
        email: 'support@rainbow-webinar.com',
        phone: '+33 1 23 45 67 89',
        hours: 'Lun-Ven : 9h-18h (CET)'
      }
    },
    // Blog
    blog: {
      title: 'Le',
      titleHighlight: 'Blog',
      subtitle: 'Conseils, guides et actualités pour réussir vos webinaires',
      search: 'Rechercher des articles...',
      allCategories: 'Toutes les catégories',
      guides: 'Guides',
      tips: 'Astuces',
      caseStudies: 'Cas d\'usage',
      news: 'Actualités',
      readMore: 'Lire l\'article',
      readTime: 'min de lecture',
      cta: {
        title: 'Prêt à organiser votre premier webinaire ?',
        subtitle: 'Mettez en pratique ces conseils avec Rainbow Webinar',
        trial: 'Essai gratuit 30 jours',
        demo: 'Voir une démo'
      },
      backToBlog: 'Retour au blog',
      relatedArticles: 'Articles similaires',
      shareArticle: 'Partager cet article'
    },
    // Product Range Section
    productRange: {
      title: 'Trouvez la solution qui vous correspond le mieux',
      subtitle: 'Des solutions de communication unifiée conçues pour chaque besoin professionnel — de la collaboration d\'équipe aux webinaires à grande échelle.',
      ucaas: 'UCaaS',
      webinar: 'Webinar',
      collaboration: {
        title: 'Rainbow Collaboration',
        description: 'La plateforme de communication unifiée pour les entreprises modernes.'
      },
      webinarProduct: {
        title: 'Rainbow Webinar',
        description: 'Plateforme professionnelle de webinaires pour organiser des événements en ligne à grande échelle.'
      },
      learnMore: 'En savoir plus',
      comingSoon: 'Bientôt disponible'
    },
    // Use Cases Section
    useCases: {
      title: 'Ne laissez pas vos outils freiner votre progression',
      subtitle: 'La technologie doit être au service des équipes et non l\'inverse.',
      tabs: {
        hrCommunication: 'Communication & RH',
        itServices: 'Service Informatique',
        management: 'Direction'
      },
      hrCommunication: {
        title: 'Alignez vos équipes, innovez dans vos processus',
        description: 'La technologie doit être au service des équipes et non l\'inverse. Les solutions Rainbow vous permettent de créer un espace de travail numérique qui aligne vos équipes autour de vos priorités stratégiques, facilite la collaboration et renforce l\'efficacité opérationnelle collective.'
      },
      itServices: {
        title: 'Simplifiez la gestion IT, renforcez la sécurité',
        description: 'Gérez l\'ensemble de vos communications d\'entreprise depuis une plateforme centralisée. Rainbow offre une infrastructure sécurisée, conforme aux normes européennes, avec un contrôle total sur vos données et une intégration transparente dans votre écosystème IT existant.'
      },
      management: {
        title: 'Pilotez la transformation digitale de votre organisation',
        description: 'Donnez à vos équipes les outils pour réussir dans un monde hybride. Rainbow accompagne la transformation numérique de votre entreprise en garantissant souveraineté des données, excellence opérationnelle et retour sur investissement mesurable.'
      }
    },
    // Footer
    footer: {
      product: 'Produit',
      webinar: 'Rainbow Webinar',
      collaboration: 'Rainbow Collaboration',
      guardian: 'Rainbow Guardian',
      pricing: 'Tarifs',
      features: 'Fonctionnalités',
      resources: 'Ressources',
      blog: 'Blog',
      documentation: 'Documentation',
      support: 'Centre d\'aide',
      community: 'Communauté',
      tutorials: 'Tutoriels vidéo',
      company: 'Entreprise',
      about: 'À propos',
      careers: 'Carrières',
      press: 'Presse',
      contact: 'Contact',
      legal: 'Légal',
      privacy: 'Confidentialité',
      terms: 'Conditions d\'utilisation',
      security: 'Sécurité',
      description: 'Solutions de communication et webinaires professionnels par Alcatel-Lucent Enterprise',
      rights: 'Tous droits réservés.',
      copyright: '© 2026 ALE International, ALE USA Inc. Tous droits réservés dans tous les pays. Le nom et le logo Alcatel-Lucent sont des marques commerciales de Nokia utilisées sous licence par ALE. Pour consulter la liste des marques déposées de ALE, visitez le site :',
      copyrightLink: 'www.al-enterprise.com/fr-fr/documentation-juridique/marques-copyright'
    },
    // Testimonials Section
    testimonials: {
      title: 'Une solution souveraine et européenne',
      subtitle: 'Hébergement professionnel et sécurisé pour vos webinaires',
      certifications: 'Certifications internationales et locales',
      madeInFrance: 'La solution webinaire Made In France',
      madeInFranceDesc: 'Rainbow × OVHCloud : une solution 100% française. Vos données sont hébergées en France, garantissant une souveraineté numérique totale et une conformité GDPR native. Choisissez une technologie indépendante et sécurisée pour vos webinaires professionnels.',
      flexibilityTitle: 'Flexibilité et souveraineté',
      cspn: {
        name: 'Certification CSPN - ANSSI',
        description: 'Plus haut standard français de sécurité'
      },
      rgpd: {
        name: 'RGPD',
        description: 'Conformité directive européenne protection des données'
      },
      iso: {
        name: 'ISO-27001 & SOC',
        description: 'Centres de données certifiés avec surveillance 24×7'
      },
      frenchSolution: {
        name: 'Solution française',
        description: 'Éditeur français, support local'
      },
      infrastructure: {
        name: 'Infrastructures prêtes pour la souveraineté',
        description: 'Données hébergées en France'
      },
      cloudAct: {
        name: 'Non soumis au Cloud Act',
        description: 'Indépendance technologique garantie'
      }
    },
    // Modals
    modal: {
      trial: {
        title: 'Commencez votre essai gratuit',
        subtitle: 'Aucune carte bancaire requise',
        plan: 'Plan sélectionné',
        fullName: 'Nom complet',
        email: 'Email professionnel',
        company: 'Entreprise',
        phone: 'Téléphone',
        employees: 'Nombre d\'employés',
        selectSize: 'Sélectionnez la taille',
        terms: 'J\'accepte les',
        termsLink: 'conditions d\'utilisation',
        and: 'et la',
        privacyLink: 'politique de confidentialité',
        submit: 'Commencer l\'essai gratuit',
        success: 'Merci ! Nous vous avons envoyé un email pour activer votre compte.'
      },
      demo: {
        title: 'Découvrez Rainbow Webinar en action',
        subtitle: 'Essayez la démo interactive',
        close: 'Fermer'
      }
    },
    // Common
    common: {
      loading: 'Chargement...',
      error: 'Une erreur est survenue',
      retry: 'Réessayer',
      cancel: 'Annuler',
      save: 'Enregistrer',
      delete: 'Supprimer',
      edit: 'Modifier',
      close: 'Fermer'
    }
  },
  en: {
    nav: {
      product: 'Product',
      pricing: 'Pricing',
      resources: 'Resources',
      about: 'About',
      signIn: 'Sign In',
      startTrial: 'Explore Our Products',
      blog: 'Blog',
      support: 'Help Center',
      clientCases: 'Client Cases',
      elearning: 'Rainbow E-learning'
    },
    hero: {
      title: 'Host',
      titleHighlight: 'memorable',
      subtitle: 'The professional platform to create, broadcast and analyze your webinars with simplicity',
      description: 'The professional, secure and sovereign webinar platform for your online events.',
      benefit1: 'Up to 500 participants per webinar',
      benefit2: 'Hosted in France - 100% sovereign',
      benefit3: 'Interactive engagement tools',
      startTrial: '30-day free trial',
      viewDemo: 'View demo',
      trustedBy: 'Trusted by',
      noCreditCard: 'No credit card required'
    },
    features: {
      title: 'Everything you need',
      subtitle: 'Powerful features for memorable and effective webinars',
      videoStreaming: {
        title: 'An intuitive solution',
        description: 'User-friendly platform that frees you from logistics. Focus on your message, we handle the rest.'
      },
      capacity: {
        title: 'An interactive environment',
        description: 'Live polls, raise hand, participatory chat: engage your audience and transform each webinar into a conversation.'
      },
      analytics: {
        title: 'High-quality audio & video',
        description: 'Smooth screen sharing, stable streaming and professional quality. A premium experience for you and your participants.'
      },
      interactive: {
        title: 'Invite external experts',
        description: 'Open your events to external speakers. Expand your reach and enrich your content.'
      },
      cta: 'Create professional webinars in minutes',
      security: {
        title: 'Enterprise Security',
        description: 'Bank-level encryption, SSO and compliance with SOC 2, GDPR and HIPAA standards.'
      },
      recording: {
        title: 'One-click Recording',
        description: 'Record and share your webinars automatically with perfect quality.'
      }
    },
    demoPreview: {
      title: 'Create professional webinars',
      titleHighlight: 'in minutes',
      ctaButton: 'Try it free for 30 days!',
      trust1: '30-day free trial',
      trust2: 'No commitment',
      trust3: 'French-speaking support'
    },
    pricing: {
      title: 'Choose your plan',
      subtitle: 'Simple and transparent pricing for all business sizes',
      monthly: 'Monthly',
      annually: 'Annually',
      save20: 'Save 20%',
      perMonth: '/month',
      participants: 'participants',
      features: 'Included features',
      unlimitedWebinars: 'Unlimited webinars',
      hdStreaming: 'HD streaming',
      recording: 'Recording and replay',
      analytics: 'Detailed analytics',
      chat: 'Chat and Q&A',
      polls: 'Interactive polls',
      support: 'Email support',
      prioritySupport: 'Priority support',
      customBranding: 'Full customization',
      api: 'API access',
      manager: 'Dedicated account manager',
      sla: 'Guaranteed SLA',
      selectPlan: 'Select this plan',
      freeTrial: '30-day free trial',
      subscribe: 'Subscribe',
      comingSoon: 'Coming soon',
      popular: 'Most popular',
      contactUs: 'Keep me informed',
      perCompany: 'Per company license',
      perCompanyDesc: 'One subscription for your entire company! All your collaborators can host webinars without additional fees.',
      perCompanyHighlight: 'An unmatched advantage to maximize your ROI.',
      trialInfo: 'All plans include a 30-day free trial. No credit card required. Cancel anytime.',
      start: {
        name: 'Rainbow Webinar Start',
        description: 'Perfect for small teams'
      },
      pro: {
        name: 'Rainbow Webinar Pro',
        description: 'For growing businesses'
      },
      enterprise: {
        name: 'Rainbow Webinar Enterprise',
        description: 'For large organizations'
      }
    },
    product: {
      title: 'The',
      titleHighlight: 'Rainbow',
      subtitle: 'Complete communication and collaboration solutions to transform your business',
      webinar: {
        name: 'Rainbow Webinar',
        tagline: 'The complete solution for your professional webinars',
        description: 'Host quality webinars to train, present and engage your audience. From 120 to 1000 participants according to your needs.',
        feature1: 'Up to 1000 simultaneous participants',
        feature2: 'HD streaming with low latency',
        feature3: 'Automatic recording and replay',
        feature4: 'Interactive polls and Q&A',
        feature5: 'Detailed engagement statistics',
        feature6: 'Calendar and CRM integration',
        plansTitle: 'Our plans',
        ctaPrimary: 'Try 30 days',
        ctaSecondary: 'View pricing'
      },
      collaboration: {
        name: 'Rainbow Collaboration',
        tagline: 'Unified communication for enterprises',
        description: 'A complete enterprise communication platform: instant messaging, video conferencing, telephony and secure file sharing.',
        feature1: 'Enterprise instant messaging',
        feature2: 'Video conferencing up to 30 participants',
        feature3: 'Integrated telephony (VoIP)',
        feature4: 'Secure file sharing',
        feature5: 'Advanced presence and status',
        feature6: 'Compatible iOS, Android, Web, Desktop',
        ctaPrimary: 'Try for free',
        ctaSecondary: 'Learn more'
      },
      guardian: {
        name: 'Rainbow Guardian',
        tagline: 'Protection and security of communications',
        description: 'Advanced security solution to protect your enterprise communications. End-to-end encryption, GDPR compliance and full control of your data.',
        feature1: 'End-to-end message encryption',
        feature2: 'GDPR and SOC 2 compliance',
        feature3: 'Complete audit and traceability',
        feature4: 'Granular access control',
        feature5: 'Threat protection',
        feature6: 'Sovereign hosting available',
        ctaPrimary: 'Coming soon',
        ctaSecondary: 'Keep me informed'
      },
      cta: {
        title: 'Ready to transform your communication?',
        subtitle: 'Discover our solutions and start your free trial today',
        trial: '30-day free trial',
        demo: 'View a demo'
      }
    },
    support: {
      title: 'Help Center',
      titleHighlight: 'Rainbow Webinar',
      subtitle: 'Find answers to your questions quickly',
      search: 'Search help...',
      categories: 'Help categories',
      gettingStarted: 'Getting Started',
      gettingStartedDesc: 'First steps with Rainbow Webinar',
      technical: 'Technical Support',
      technicalDesc: 'Troubleshooting and configuration',
      account: 'Account and Billing',
      accountDesc: 'Managing your subscription',
      bestPractices: 'Best Practices',
      bestPracticesDesc: 'Optimize your webinars',
      resources: {
        title: 'Useful resources',
        documentation: {
          title: 'Complete documentation',
          description: 'Detailed guides and tutorials'
        },
        video: {
          title: 'Video tutorials',
          description: 'Learn with our videos'
        },
        community: {
          title: 'Community',
          description: 'Connect with other users'
        }
      },
      contact: {
        title: 'Need help?',
        subtitle: 'Our team is here to support you',
        email: 'support@rainbow-webinar.com',
        phone: '+33 1 23 45 67 89',
        hours: 'Mon-Fri: 9am-6pm (CET)'
      }
    },
    blog: {
      title: 'The',
      titleHighlight: 'Blog',
      subtitle: 'Tips, guides and news to succeed with your webinars',
      search: 'Search articles...',
      allCategories: 'All categories',
      guides: 'Guides',
      tips: 'Tips',
      caseStudies: 'Case Studies',
      news: 'News',
      readMore: 'Read article',
      readTime: 'min read',
      cta: {
        title: 'Ready to host your first webinar?',
        subtitle: 'Put these tips into practice with Rainbow Webinar',
        trial: '30-day free trial',
        demo: 'View a demo'
      },
      backToBlog: 'Back to blog',
      relatedArticles: 'Related articles',
      shareArticle: 'Share this article'
    },
    productRange: {
      title: 'Find the solution that fits you best',
      subtitle: 'Unified communication solutions designed for every professional need — from team collaboration to large-scale webinars.',
      ucaas: 'UCaaS',
      webinar: 'Webinar',
      collaboration: {
        title: 'Rainbow Collaboration',
        description: 'The unified communication platform for modern businesses.'
      },
      webinarProduct: {
        title: 'Rainbow Webinar',
        description: 'Professional webinar platform for hosting large-scale online events with up to 10,000 participants.'
      },
      learnMore: 'Learn more',
      comingSoon: 'Coming soon'
    },
    useCases: {
      title: 'Don\'t let your tools slow down your progress',
      subtitle: 'Technology should serve teams, not the other way around.',
      tabs: {
        hrCommunication: 'Communication & HR',
        itServices: 'IT Services',
        management: 'Management'
      },
      hrCommunication: {
        title: 'Align your teams, innovate your processes',
        description: 'Technology should serve teams, not the other way around. Rainbow solutions enable you to create a digital workspace that aligns your teams around strategic priorities, facilitates collaboration, and strengthens collective operational efficiency.'
      },
      itServices: {
        title: 'Simplify IT management, strengthen security',
        description: 'Manage all your enterprise communications from a centralized platform. Rainbow offers a secure infrastructure compliant with European standards, with complete control over your data and seamless integration into your existing IT ecosystem.'
      },
      management: {
        title: 'Drive your organization\'s digital transformation',
        description: 'Give your teams the tools to succeed in a hybrid world. Rainbow supports your company\'s digital transformation by ensuring data sovereignty, operational excellence, and measurable return on investment.'
      }
    },
    footer: {
      product: 'Product',
      webinar: 'Rainbow Webinar',
      collaboration: 'Rainbow Collaboration',
      guardian: 'Rainbow Guardian',
      pricing: 'Pricing',
      features: 'Features',
      resources: 'Resources',
      blog: 'Blog',
      documentation: 'Documentation',
      support: 'Help Center',
      community: 'Community',
      tutorials: 'Video tutorials',
      company: 'Company',
      about: 'About',
      careers: 'Careers',
      press: 'Press',
      contact: 'Contact',
      legal: 'Legal',
      privacy: 'Privacy',
      terms: 'Terms of Service',
      security: 'Security',
      description: 'Professional communication and webinar solutions by Alcatel-Lucent Enterprise',
      rights: 'All rights reserved.',
      copyright: '© 2026 ALE International, ALE USA Inc. All rights reserved in all countries. The Alcatel-Lucent name and logo are trademarks of Nokia used under license by ALE. To view a list of proprietary ALE trademarks, visit:',
      copyrightLink: 'www.al-enterprise.com/en/legal/trademarks-copyright'
    },
    testimonials: {
      title: 'A sovereign and European solution',
      subtitle: 'Professional and secure hosting for your webinars',
      certifications: 'International and local certifications',
      madeInFrance: 'The Made In France webinar solution',
      madeInFranceDesc: 'Rainbow × OVHCloud: a 100% French solution. Your data is hosted in France, guaranteeing total digital sovereignty and native GDPR compliance. Choose an independent and secure technology for your professional webinars.',
      flexibilityTitle: 'Flexibility and sovereignty',
      cspn: {
        name: 'CSPN Certification - ANSSI',
        description: 'Highest French security standard'
      },
      rgpd: {
        name: 'GDPR',
        description: 'Compliance with European data protection directive'
      },
      iso: {
        name: 'ISO-27001 & SOC',
        description: 'Certified data centers with 24×7 monitoring'
      },
      frenchSolution: {
        name: 'French solution',
        description: 'French publisher, local support'
      },
      infrastructure: {
        name: 'Infrastructure ready for sovereignty',
        description: 'Data hosted in France'
      },
      cloudAct: {
        name: 'Not subject to Cloud Act',
        description: 'Guaranteed technological independence'
      }
    },
    modal: {
      trial: {
        title: 'Start your free trial',
        subtitle: 'No credit card required',
        plan: 'Selected plan',
        fullName: 'Full name',
        email: 'Business email',
        company: 'Company',
        phone: 'Phone',
        employees: 'Number of employees',
        selectSize: 'Select size',
        terms: 'I agree to the',
        termsLink: 'terms of service',
        and: 'and',
        privacyLink: 'privacy policy',
        submit: 'Start free trial',
        success: 'Thank you! We have sent you an email to activate your account.'
      },
      demo: {
        title: 'Discover Rainbow Webinar in action',
        subtitle: 'Try the interactive demo',
        close: 'Close'
      }
    },
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
      retry: 'Retry',
      cancel: 'Cancel',
      save: 'Save',
      delete: 'Delete',
      edit: 'Edit',
      close: 'Close'
    }
  },
  es: {
    nav: {
      product: 'Producto',
      pricing: 'Precios',
      resources: 'Recursos',
      about: 'Acerca de',
      signIn: 'Iniciar sesión',
      startTrial: 'Explorar nuestros productos',
      blog: 'Blog',
      support: 'Help Center',
      clientCases: 'Casos de clientes',
      elearning: 'Help Center Rainbow'
    },
    hero: {
      title: 'Organice webinars',
      titleHighlight: 'memorables',
      subtitle: 'La plataforma profesional para crear, transmitir y analizar sus webinars con simplicidad',
      description: 'La plataforma de webinars profesional, segura y soberana para sus eventos en línea.',
      benefit1: 'Hasta 500 participantes por webinar',
      benefit2: 'Hospedado en Francia - 100% soberano',
      benefit3: 'Herramientas de compromiso interactivo',
      startTrial: 'Prueba gratuita de 30 días',
      viewDemo: 'Ver demo',
      trustedBy: 'Confiable para',
      noCreditCard: 'Sin tarjeta de crédito'
    },
    features: {
      title: 'Todo lo que necesita',
      subtitle: 'Funciones potentes para webinars memorables y efectivos',
      videoStreaming: {
        title: 'Una solución intuitiva',
        description: 'Plataforma amigable que le libera de la logística. Concéntrese en su mensaje, nosotros nos encargamos del resto.'
      },
      capacity: {
        title: 'Un entorno interactivo',
        description: 'Encuestas en vivo, levantar la mano, chat participativo: involucre a su audiencia y transforme cada webinar en una conversación.'
      },
      analytics: {
        title: 'Audio y vídeo de alta calidad',
        description: 'Compartir pantalla fluido, streaming estable y calidad profesional. Una experiencia premium para usted y sus participantes.'
      },
      interactive: {
        title: 'Invite a expertos externos',
        description: 'Abra sus eventos a conferenciantes externos. Amplíe su alcance y enriquezca sus contenidos.'
      },
      cta: 'Cree webinars profesionales en minutos',
      security: {
        title: 'Seguridad empresarial',
        description: 'Cifrado bancario, SSO y cumplimiento de normas SOC 2, GDPR y HIPAA.'
      },
      recording: {
        title: 'Grabación en un clic',
        description: 'Grabe y comparta automáticamente sus webinars con calidad perfecta.'
      }
    },
    demoPreview: {
      title: 'Cree webinars profesionales',
      titleHighlight: 'en minutos',
      ctaButton: '¡Pruébelo gratis durante 30 días!',
      trust1: 'Prueba gratuita de 30 días',
      trust2: 'Sin compromiso',
      trust3: 'Soporte en francés'
    },
    pricing: {
      title: 'Elija su plan',
      subtitle: 'Precios simples y transparentes para todos los tamaños de empresas',
      monthly: 'Mensual',
      annually: 'Anual',
      save20: 'Ahorre 20%',
      perMonth: '/mes',
      participants: 'participantes',
      features: 'Funciones incluidas',
      unlimitedWebinars: 'Webinars ilimitados',
      hdStreaming: 'Streaming HD',
      recording: 'Grabación y replay',
      analytics: 'Análisis detallados',
      chat: 'Chat y Q&A',
      polls: 'Encuestas interactivas',
      support: 'Soporte por email',
      prioritySupport: 'Soporte prioritario',
      customBranding: 'Personalización completa',
      api: 'Acceso API',
      manager: 'Account manager dedicado',
      sla: 'SLA garantizado',
      selectPlan: 'Elegir este plan',
      freeTrial: 'Prueba gratuita de 30 días',
      subscribe: 'Suscribirse',
      comingSoon: 'Próximamente',
      popular: 'Más popular',
      contactUs: 'Mantenerme informado',
      perCompany: 'Licencia por empresa',
      perCompanyDesc: 'Una suscripción para toda su empresa ¡Todos sus colaboradores pueden organizar webinars sin costos adicionales!',
      perCompanyHighlight: 'Una ventaja incomparable para maximizar su ROI.',
      trialInfo: 'Todos los planes incluyen una prueba gratuita de 30 días. No se requiere tarjeta de crédito. Cancelación en cualquier momento.',
      start: {
        name: 'Rainbow Webinar Start',
        description: 'Perfecto para equipos pequeños'
      },
      pro: {
        name: 'Rainbow Webinar Pro',
        description: 'Para empresas en crecimiento'
      },
      enterprise: {
        name: 'Rainbow Webinar Enterprise',
        description: 'Para grandes organizaciones'
      }
    },
    product: {
      title: 'La gama',
      titleHighlight: 'Rainbow',
      subtitle: 'Soluciones completas de comunicación y colaboración para transformar su empresa',
      webinar: {
        name: 'Rainbow Webinar',
        tagline: 'La solución completa para sus webinars profesionales',
        description: 'Organice webinars de calidad para formar, presentar e involucrar a su audiencia. De 120 a 1000 participantes según sus necesidades.',
        feature1: 'Hasta 1000 participantes simultáneos',
        feature2: 'Streaming HD con baja latencia',
        feature3: 'Grabación y replay automático',
        feature4: 'Encuestas y Q&A interactivos',
        feature5: 'Estadísticas detalladas de engagement',
        feature6: 'Integración de calendario y CRM',
        plansTitle: 'Nuestros planes',
        ctaPrimary: 'Probar 30 días',
        ctaSecondary: 'Ver precios'
      },
      collaboration: {
        name: 'Rainbow Collaboration',
        tagline: 'Comunicación unificada para empresas',
        description: 'Una plataforma completa de comunicación empresarial: mensajería instantánea, videoconferencia, telefonía y compartición de archivos segura.',
        feature1: 'Mensajería instantánea empresarial',
        feature2: 'Videoconferencia hasta 30 participantes',
        feature3: 'Telefonía integrada (VoIP)',
        feature4: 'Compartición de archivos segura',
        feature5: 'Presencia y estados avanzados',
        feature6: 'Compatible iOS, Android, Web, Desktop',
        ctaPrimary: 'Probar gratis',
        ctaSecondary: 'Saber m��s'
      },
      guardian: {
        name: 'Rainbow Guardian',
        tagline: 'Protección y seguridad de las comunicaciones',
        description: 'Solución de seguridad avanzada para proteger sus comunicaciones empresariales. Cifrado end-to-end, cumplimiento GDPR y control total de sus datos.',
        feature1: 'Cifrado end-to-end de mensajes',
        feature2: 'Cumplimiento GDPR y SOC 2',
        feature3: 'Auditoría y trazabilidad completa',
        feature4: 'Control de acceso granulare',
        feature5: 'Protección contra amenazas',
        feature6: 'Alojamiento soberano disponible',
        ctaPrimary: 'Próximamente',
        ctaSecondary: 'Mantenerme informado'
      },
      cta: {
        title: '¿Listo para transformar su comunicación?',
        subtitle: 'Descubra nuestras soluciones y comience su prueba gratuita hoy',
        trial: 'Prueba gratuita de 30 días',
        demo: 'Ver una demo'
      }
    },
    support: {
      title: 'Help Center',
      titleHighlight: 'Rainbow Webinar',
      subtitle: 'Encuentre rápidamente las respuestas a sus preguntas',
      search: 'Buscar en la ayuda...',
      categories: 'Categorías de ayuda',
      gettingStarted: 'Primeros pasos',
      gettingStartedDesc: 'Primeros pasos con Rainbow Webinar',
      technical: 'Soporte técnico',
      technicalDesc: 'Resolución de problemas y configuración',
      account: 'Cuenta y facturación',
      accountDesc: 'Gestión de su suscripción',
      bestPractices: 'Mejores prácticas',
      bestPracticesDesc: 'Optimice sus webinars',
      resources: {
        title: 'Recursos útiles',
        documentation: {
          title: 'Documentación completa',
          description: 'Guías detalladas y tutoriales'
        },
        video: {
          title: 'Tutoriales en vídeo',
          description: 'Aprenda con nuestros vídeos'
        },
        community: {
          title: 'Comunidad',
          description: 'Conéctese con otros usuarios'
        }
      },
      contact: {
        title: '¿Necesita ayuda?',
        subtitle: 'Nuestro equipo está aquí para ayudarle',
        email: 'support@rainbow-webinar.com',
        phone: '+33 1 23 45 67 89',
        hours: 'Lun-Vie: 9h-18h (CET)'
      }
    },
    blog: {
      title: 'El',
      titleHighlight: 'Blog',
      subtitle: 'Consejos, guías y noticias para tener éxito con sus webinars',
      search: 'Buscar artículos...',
      allCategories: 'Todas las categorías',
      guides: 'Guías',
      tips: 'Consejos',
      caseStudies: 'Casos de uso',
      news: 'Noticias',
      readMore: 'Leer artículo',
      readTime: 'min de lectura',
      cta: {
        title: '¿Listo para organizar su primer webinar?',
        subtitle: 'Ponga en práctica estos consejos con Rainbow Webinar',
        trial: 'Prueba gratuita de 30 días',
        demo: 'Ver una demo'
      },
      backToBlog: 'Volver al blog',
      relatedArticles: 'Artículos relacionados',
      shareArticle: 'Compartir este artículo'
    },
    productRange: {
      title: 'Encuentre la solución que mejor se adapte a usted',
      subtitle: 'Soluciones de comunicación unificada diseñadas para cada necesidad profesional: desde la colaboración en equipo hasta webinars a gran escala.',
      ucaas: 'UCaaS',
      webinar: 'Webinar',
      collaboration: {
        title: 'Rainbow Collaboration',
        description: 'La plataforma de comunicación unificada para empresas modernas.'
      },
      webinarProduct: {
        title: 'Rainbow Webinar',
        description: 'Plataforma profesional de webinars para organizar eventos en línea a gran escala con hasta 10,000 participantes.'
      },
      learnMore: 'Saber más',
      comingSoon: 'Próximamente'
    },
    useCases: {
      title: 'No permita que sus herramientas frenen su progreso',
      subtitle: 'La tecnología debe estar al servicio de los equipos, no al revés.',
      tabs: {
        hrCommunication: 'Comunicación y RRHH',
        itServices: 'Servicios IT',
        management: 'Dirección'
      },
      hrCommunication: {
        title: 'Alinee sus equipos, innove en sus procesos',
        description: 'La tecnología debe estar al servicio de los equipos, no al revés. Las soluciones Rainbow le permiten crear un espacio de trabajo digital que alinea sus equipos en torno a sus prioridades estratégicas, facilita la colaboración y refuerza la eficacia operativa colectiva.'
      },
      itServices: {
        title: 'Simplifique la gestión IT, refuerce la seguridad',
        description: 'Gestione todas las comunicaciones de su empresa desde una plataforma centralizada. Rainbow ofrece una infraestructura segura, conforme a las normas europeas, con control total sobre sus datos e integración transparente en su ecosistema IT existente.'
      },
      management: {
        title: 'Impulse la transformación digital de su organización',
        description: 'Dé a sus equipos las herramientas para tener éxito en un mundo híbrido. Rainbow acompaña la transformación digital de su empresa garantizando soberanía de datos, excelencia operativa y retorno de inversión medible.'
      }
    },
    footer: {
      product: 'Producto',
      webinar: 'Rainbow Webinar',
      collaboration: 'Rainbow Collaboration',
      guardian: 'Rainbow Guardian',
      pricing: 'Precios',
      features: 'Funciones',
      resources: 'Recursos',
      blog: 'Blog',
      documentation: 'Documentación',
      support: 'Help Center',
      community: 'Comunidad',
      tutorials: 'Tutoriales en vídeo',
      company: 'Empresa',
      about: 'Acerca de',
      careers: 'Carreras',
      press: 'Prensa',
      contact: 'Contacto',
      legal: 'Legal',
      privacy: 'Privacidad',
      terms: 'Términos de uso',
      security: 'Seguridad',
      description: 'Soluciones de comunicación y webinars profesionales de Alcatel-Lucent Enterprise',
      rights: 'Todos los derechos reservados.',
      copyright: '© 2026 ALE International, ALE USA Inc. Todos los derechos reservados en todos los países. El nombre y el logotipo de Alcatel-Lucent son marcas comerciales de Nokia utilizadas bajo licencia por ALE. Para ver la lista de marcas registradas de ALE, visite:',
      copyrightLink: 'www.al-enterprise.com/es/legal/trademarks-copyright'
    },
    testimonials: {
      title: 'Una solución soberana y europea',
      subtitle: 'Alojamiento profesional y seguro para sus webinars',
      certifications: 'Certificaciones internacionales y locales',
      madeInFrance: 'La solución de webinar Made In France',
      madeInFranceDesc: 'Rainbow × OVHCloud: una solución 100% francesa. Sus datos están alojados en Francia, garantizando una soberanía digital total y un cumplimiento nativo de GDPR. Elija una tecnología independiente y segura para sus webinars profesionales.',
      flexibilityTitle: 'Flexibilidad y soberanía',
      cspn: {
        name: 'Certificación CSPN - ANSSI',
        description: 'Estándar francés más alto de seguridad'
      },
      rgpd: {
        name: 'RGPD',
        description: 'Cumplimiento de la directiva europea de protección de datos'
      },
      iso: {
        name: 'ISO-27001 & SOC',
        description: 'Centros de datos certificados con vigilancia 24×7'
      },
      frenchSolution: {
        name: 'Solución francesa',
        description: 'Editor francés, soporte local'
      },
      infrastructure: {
        name: 'Infraestructuras preparadas para la soberanía',
        description: 'Datos alojados en Francia'
      },
      cloudAct: {
        name: 'No sujeto al Cloud Act',
        description: 'Independencia tecnológica garantizada'
      }
    },
    modal: {
      trial: {
        title: 'Comience su prueba gratuita',
        subtitle: 'No se requiere tarjeta de crédito',
        plan: 'Plan seleccionado',
        fullName: 'Nombre completo',
        email: 'Email profesional',
        company: 'Empresa',
        phone: 'Teléfono',
        employees: 'Número de empleados',
        selectSize: 'Seleccione el tamaño',
        terms: 'Acepto los',
        termsLink: 'términos de uso',
        and: 'y la',
        privacyLink: 'política de privacidad',
        submit: 'Comenzar prueba gratuita',
        success: '¡Gracias! Le hemos enviado un email para activar su cuenta.'
      },
      demo: {
        title: 'Descubra Rainbow Webinar en acción',
        subtitle: 'Pruebe la demo interactiva',
        close: 'Cerrar'
      }
    },
    common: {
      loading: 'Cargando...',
      error: 'Se produjo un error',
      retry: 'Reintentar',
      cancel: 'Cancelar',
      save: 'Guardar',
      delete: 'Eliminar',
      edit: 'Editar',
      close: 'Cerrar'
    }
  },
  it: {
    nav: {
      product: 'Prodotto',
      pricing: 'Prezzi',
      resources: 'Risorse',
      about: 'Chi siamo',
      signIn: 'Accedi',
      startTrial: 'Esplora i nostri prodotti',
      blog: 'Blog',
      support: 'Help Center',
      clientCases: 'Casi cliente',
      elearning: 'E-learning Rainbow'
    },
    hero: {
      title: 'Organizza webinar',
      titleHighlight: 'memorabili',
      subtitle: 'La piattaforma professionale per creare, trasmettere e analizzare i tuoi webinar con semplicità',
      description: 'La piattaforma di webinar professionale, sicura e sovrana per i tuoi eventi online.',
      benefit1: 'Fino a 500 partecipanti per webinar',
      benefit2: 'Ospitato in Francia - 100% sovrano',
      benefit3: 'Strumenti di coinvolgimento interattivi',
      startTrial: 'Prova gratuita di 30 giorni',
      viewDemo: 'Guarda la demo',
      trustedBy: 'Trusted by',
      noCreditCard: 'Senza carta di credito'
    },
    features: {
      title: 'Tutto ciò di cui hai bisogno',
      subtitle: 'Funzionalità potenti per webinar memorabili ed efficaci',
      videoStreaming: {
        title: 'Una soluzione intuitiva',
        description: 'Piattaforma user-friendly che ti libera dalla logistica. Concentrati sul tuo messaggio, noi gestiamo il resto.'
      },
      capacity: {
        title: 'Un ambiente interattivo',
        description: 'Sondaggi dal vivo, alza la mano, chat partecipativa: coinvolgi il tuo pubblico e trasforma ogni webinar in una conversazione.'
      },
      analytics: {
        title: 'Audio e video di alta qualità',
        description: 'Condivisione schermo fluida, streaming stabile e qualità professionale. Un\'esperienza premium per te e i tuoi partecipanti.'
      },
      interactive: {
        title: 'Invita esperti esterni',
        description: 'Apri i tuoi eventi a relatori esterni. Amplia la tua portata e arricchisci i tuoi contenuti.'
      },
      cta: 'Crea webinar professionali in pochi minuti',
      security: {
        title: 'Sicurezza aziendale',
        description: 'Crittografia bancaria, SSO e conformità agli standard SOC 2, GDPR e HIPAA.'
      },
      recording: {
        title: 'Registrazione con un clic',
        description: 'Registra e condividi automaticamente i tuoi webinar con qualità perfetta.'
      }
    },
    demoPreview: {
      title: 'Crea webinar professionali',
      titleHighlight: 'in pochi minuti',
      ctaButton: 'Provalo gratis per 30 giorni!',
      trust1: 'Prova gratuita di 30 giorni',
      trust2: 'Senza impegno',
      trust3: 'Supporto in francese'
    },
    pricing: {
      title: 'Scegli il tuo piano',
      subtitle: 'Prezzi semplici e trasparenti per tutte le dimensioni aziendali',
      monthly: 'Mensile',
      annually: 'Annuale',
      save20: 'Risparmia 20%',
      perMonth: '/mese',
      participants: 'partecipanti',
      features: 'Funzionalità incluse',
      unlimitedWebinars: 'Webinar illimitati',
      hdStreaming: 'Streaming HD',
      recording: 'Registrazione e replay',
      analytics: 'Analisi dettagliate',
      chat: 'Chat e Q&A',
      polls: 'Sondaggi interattivi',
      support: 'Supporto email',
      prioritySupport: 'Supporto prioritario',
      customBranding: 'Personalizzazione completa',
      api: 'Accesso API',
      manager: 'Account manager dedicato',
      sla: 'SLA garantito',
      selectPlan: 'Seleziona questo piano',
      freeTrial: 'Prova gratuita di 30 giorni',
      subscribe: 'Abbonati',
      comingSoon: 'Prossimamente',
      popular: 'Più popolare',
      contactUs: 'Tienimi informato',
      perCompany: 'Licenza per azienda',
      perCompanyDesc: 'Una sola sottoscrizione per tutta la tua azienda! Tutti i tuoi collaboratori possono organizzare webinar senza costi aggiuntivi.',
      perCompanyHighlight: 'Un vantaggio inatteso per massimizzare il tuo ROI.',
      trialInfo: 'Tutti i piani includono una prova gratuita di 30 giorni. Nessuna carta di credito richiesta. Annulla in qualsiasi momento.',
      start: {
        name: 'Rainbow Webinar Start',
        description: 'Perfetto per piccoli team'
      },
      pro: {
        name: 'Rainbow Webinar Pro',
        description: 'Per aziende in crescita'
      },
      enterprise: {
        name: 'Rainbow Webinar Enterprise',
        description: 'Per grandi organizzazioni'
      }
    },
    product: {
      title: 'La gamma',
      titleHighlight: 'Rainbow',
      subtitle: 'Soluzioni complete di comunicazione e collaborazione per trasformare la tua azienda',
      webinar: {
        name: 'Rainbow Webinar',
        tagline: 'La soluzione completa per i tuoi webinar professionali',
        description: 'Organizza webinar di qualità per formare, presentare e coinvolgere il tuo pubblico. Da 120 a 1000 partecipanti secondo le tue esigenze.',
        feature1: 'Fino a 1000 partecipanti simultanei',
        feature2: 'Streaming HD con bassa latenza',
        feature3: 'Registrazione e replay automatico',
        feature4: 'Sondaggi e Q&A interattivi',
        feature5: 'Statistiche dettagliate di engagement',
        feature6: 'Integrazione calendario e CRM',
        plansTitle: 'I nostri piani',
        ctaPrimary: 'Prova 30 giorni',
        ctaSecondary: 'Vedi prezzi'
      },
      collaboration: {
        name: 'Rainbow Collaboration',
        tagline: 'Comunicazione unificata per aziende',
        description: 'Una piattaforma completa di comunicazione aziendale: messaggistica istantanea, videoconferenza, telefonia e condivisione file sicura.',
        feature1: 'Messaggistica istantanea aziendale',
        feature2: 'Videoconferenza fino a 30 partecipanti',
        feature3: 'Telefonia integrata (VoIP)',
        feature4: 'Condivisione file sicura',
        feature5: 'Presenza e stati avanzati',
        feature6: 'Compatibile iOS, Android, Web, Desktop',
        ctaPrimary: 'Prova gratis',
        ctaSecondary: 'Scopri di più'
      },
      guardian: {
        name: 'Rainbow Guardian',
        tagline: 'Protezione e sicurezza delle comunicazioni',
        description: 'Soluzione di sicurezza avanzata per proteggere le tue comunicazioni aziendali. Crittografia end-to-end, conformità GDPR e controllo totale dei tuoi dati.',
        feature1: 'Crittografia end-to-end dei messaggi',
        feature2: 'Conformità GDPR e SOC 2',
        feature3: 'Audit e tracciabilità completa',
        feature4: 'Controllo accessi granulare',
        feature5: 'Protezione contro le minacce',
        feature6: 'Hosting sovrano disponibile',
        ctaPrimary: 'Prossimamente',
        ctaSecondary: 'Tienimi informato'
      },
      cta: {
        title: 'Pronto a trasformare la tua comunicazione?',
        subtitle: 'Scopri le nostre soluzioni e inizia la tua prova gratuita oggi',
        trial: 'Prova gratuita di 30 giorni',
        demo: 'Guarda una demo'
      }
    },
    support: {
      title: 'Help Center',
      titleHighlight: 'Rainbow Webinar',
      subtitle: 'Trova rapidamente le risposte alle tue domande',
      search: 'Cerca nell\'assistenza...',
      categories: 'Categorie di assistenza',
      gettingStarted: 'Per iniziare',
      gettingStartedDesc: 'Primi passi con Rainbow Webinar',
      technical: 'Supporto tecnico',
      technicalDesc: 'Risoluzione problemi e configurazione',
      account: 'Account e fatturazione',
      accountDesc: 'Gestione del tuo abbonamento',
      bestPractices: 'Best practice',
      bestPracticesDesc: 'Ottimizza i tuoi webinar',
      resources: {
        title: 'Risorse utili',
        documentation: {
          title: 'Documentazione completa',
          description: 'Guide dettagliate e tutorial'
        },
        video: {
          title: 'Tutorial video',
          description: 'Impara con i nostri video'
        },
        community: {
          title: 'Comunità',
          description: 'Connettiti con altri utenti'
        }
      },
      contact: {
        title: 'Hai bisogno di aiuto?',
        subtitle: 'Il nostro team è qui per supportarti',
        email: 'support@rainbow-webinar.com',
        phone: '+33 1 23 45 67 89',
        hours: 'Lun-Ven: 9-18 (CET)'
      }
    },
    blog: {
      title: 'Il',
      titleHighlight: 'Blog',
      subtitle: 'Consigli, guide e notizie per avere successo con i tuoi webinar',
      search: 'Cerca articoli...',
      allCategories: 'Tutte le categorie',
      guides: 'Guide',
      tips: 'Consigli',
      caseStudies: 'Casi d\'uso',
      news: 'Notizie',
      readMore: 'Leggi articolo',
      readTime: 'min di lettura',
      cta: {
        title: 'Pronto a organizzare il tuo primo webinar?',
        subtitle: 'Metti in pratica questi consigli con Rainbow Webinar',
        trial: 'Prova gratuita di 30 giorni',
        demo: 'Guarda una demo'
      },
      backToBlog: 'Torna al blog',
      relatedArticles: 'Articoli correlati',
      shareArticle: 'Condividi questo articolo'
    },
    productRange: {
      title: 'Trova la soluzione più adatta a te',
      subtitle: 'Soluzioni di comunicazione unificata progettate per ogni esigenza professionale: dalla collaborazione di team ai webinar su larga scala.',
      ucaas: 'UCaaS',
      webinar: 'Webinar',
      collaboration: {
        title: 'Rainbow Collaboration',
        description: 'La piattaforma di comunicazione unificata per le aziende moderne.'
      },
      webinarProduct: {
        title: 'Rainbow Webinar',
        description: 'Piattaforma professionale per webinar per ospitare eventi online su larga scala con fino a 10.000 partecipanti.'
      },
      learnMore: 'Scopri di più',
      comingSoon: 'Prossimamente'
    },
    useCases: {
      title: 'Non lasciare che i tuoi strumenti ostacolino il tuo progresso',
      subtitle: 'La tecnologia deve essere al servizio dei team, non il contrario.',
      tabs: {
        hrCommunication: 'Comunicazione e HR',
        itServices: 'Servizi IT',
        management: 'Direzione'
      },
      hrCommunication: {
        title: 'Allinea i tuoi team, innova nei tuoi processi',
        description: 'La tecnologia deve essere al servizio dei team, non il contrario. Le soluzioni Rainbow ti permettono di creare uno spazio di lavoro digitale che allinea i tuoi team attorno alle tue priorità strategiche, facilita la collaborazione e rafforza l\'efficienza operativa collettiva.'
      },
      itServices: {
        title: 'Semplifica la gestione IT, rafforza la sicurezza',
        description: 'Gestisci tutte le comunicazioni aziendali da una piattaforma centralizzata. Rainbow offre un\'infrastruttura sicura, conforme alle norme europee, con controllo totale sui tuoi dati e integrazione trasparente nel tuo ecosistema IT esistente.'
      },
      management: {
        title: 'Guida la trasformazione digitale della tua organizzazione',
        description: 'Dai ai tuoi team gli strumenti per avere successo in un mondo ibrido. Rainbow accompagna la trasformazione digitale della tua azienda garantendo sovranità dei dati, eccellenza operativa e ritorno sull\'investimento misurabile.'
      }
    },
    footer: {
      product: 'Prodotto',
      webinar: 'Rainbow Webinar',
      collaboration: 'Rainbow Collaboration',
      guardian: 'Rainbow Guardian',
      pricing: 'Prezzi',
      features: 'Funzionalità',
      resources: 'Risorse',
      blog: 'Blog',
      documentation: 'Documentazione',
      support: 'Help Center',
      community: 'Comunità',
      tutorials: 'Tutorial video',
      company: 'Azienda',
      about: 'Chi siamo',
      careers: 'Carriere',
      press: 'Stampa',
      contact: 'Contatti',
      legal: 'Legale',
      privacy: 'Privacy',
      terms: 'Termini di utilizzo',
      security: 'Sicurezza',
      description: 'Soluzioni di comunicazione e webinar professionali di Alcatel-Lucent Enterprise',
      rights: 'Tutti i diritti riservati.',
      copyright: '© 2026 ALE International, ALE USA Inc. Tutti i diritti riservati in tutti i paesi. Il nome e il logo Alcatel-Lucent sono marchi di Nokia utilizzati su licenza da ALE. Per visualizzare l\'elenco dei marchi registrati di ALE, visitare:',
      copyrightLink: 'www.al-enterprise.com/it/legal/trademarks-copyright'
    },
    testimonials: {
      title: 'Una soluzione sovrana ed europea',
      subtitle: 'Hosting professionale e sicuro per i tuoi webinar',
      certifications: 'Certificazioni internazionali e locali',
      madeInFrance: 'La soluzione webinar Made In France',
      madeInFranceDesc: 'Rainbow × OVHCloud: una soluzione 100% francese. I tuoi dati sono ospitati in Francia, garantendo una sovranità digitale totale e una conformità GDPR nativa. Scegli una tecnologia indipendente e sicura per i tuoi webinar professionali.',
      flexibilityTitle: 'Flessibilità e sovranità',
      cspn: {
        name: 'Certificazione CSPN - ANSSI',
        description: 'Standard francese più elevato di sicurezza'
      },
      rgpd: {
        name: 'GDPR',
        description: 'Conformità alla direttiva europea sulla protezione dei dati'
      },
      iso: {
        name: 'ISO-27001 & SOC',
        description: 'Data center certificati con sorveglianza 24×7'
      },
      frenchSolution: {
        name: 'Soluzione francese',
        description: 'Editore francese, supporto locale'
      },
      infrastructure: {
        name: 'Infrastrutture pronte per la sovranità',
        description: 'Dati ospitati in Francia'
      },
      cloudAct: {
        name: 'Non soggetto al Cloud Act',
        description: 'Indipendenza tecnologica garantita'
      }
    },
    modal: {
      trial: {
        title: 'Inizia la tua prova gratuita',
        subtitle: 'Nessuna carta di credito richiesta',
        plan: 'Piano selezionato',
        fullName: 'Nome completo',
        email: 'Email aziendale',
        company: 'Azienda',
        phone: 'Telefono',
        employees: 'Numero di dipendenti',
        selectSize: 'Seleziona dimensione',
        terms: 'Accetto i',
        termsLink: 'termini di utilizzo',
        and: 'e la',
        privacyLink: 'politica sulla privacy',
        submit: 'Inizia prova gratuita',
        success: 'Grazie! Ti abbiamo inviato un\'email per attivare il tuo account.'
      },
      demo: {
        title: 'Scopri Rainbow Webinar in azione',
        subtitle: 'Prova la demo interattiva',
        close: 'Chiudi'
      }
    },
    common: {
      loading: 'Caricamento...',
      error: 'Si è verificato un errore',
      retry: 'Riprova',
      cancel: 'Annulla',
      save: 'Salva',
      delete: 'Elimina',
      edit: 'Modifica',
      close: 'Chiudi'
    }
  },
  de: {
    nav: {
      product: 'Produkt',
      pricing: 'Preise',
      resources: 'Ressourcen',
      about: 'Über uns',
      signIn: 'Anmelden',
      startTrial: 'Entdecken Sie unsere Produkte',
      blog: 'Blog',
      support: 'Help Center',
      clientCases: 'Kundenfälle',
      elearning: 'Rainbow E-Learning'
    },
    hero: {
      title: 'Organisieren Sie',
      titleHighlight: 'unvergessliche',
      subtitle: 'Die professionelle Plattform zum Erstellen, Übertragen und Analysieren Ihrer Webinare mit Einfachheit',
      description: 'Die professionelle, sichere und souveräne Webinar-Plattform für Ihre Online-Events.',
      benefit1: 'Bis zu 500 Teilnehmern pro Webinar',
      benefit2: 'Hergestellt in Frankreich - 100% souverän',
      benefit3: 'Interaktive Engagement-Tools',
      startTrial: '30 Tage kostenlos testen',
      viewDemo: 'Demo ansehen',
      trustedBy: 'Vertraut von',
      noCreditCard: 'Keine Kreditkarte erforderlich'
    },
    features: {
      title: 'Alles, was Sie brauchen',
      subtitle: 'Leistungsstarke Funktionen für unvergessliche und effektive Webinare',
      videoStreaming: {
        title: 'Eine intuitive Lösung',
        description: 'Benutzerfreundliche Plattform, die Sie von der Logistik befreit. Konzentrieren Sie sich auf Ihre Botschaft, wir kümmern uns um den Rest.'
      },
      capacity: {
        title: 'Eine interaktive Umgebung',
        description: 'Live-Umfragen, Hand heben, partizipativer Chat: Binden Sie Ihr Publikum ein und verwandeln Sie jedes Webinar in ein Gespräch.'
      },
      analytics: {
        title: 'Audio & Video in hoher Qualität',
        description: 'Reibungslose Bildschirmfreigabe, stabiles Streaming und professionelle Qualität. Ein Premium-Erlebnis für Sie und Ihre Teilnehmer.'
      },
      interactive: {
        title: 'Externe Experten einladen',
        description: 'Öffnen Sie Ihre Veranstaltungen für externe Redner. Erweitern Sie Ihre Reichweite und bereichern Sie Ihre Inhalte.'
      },
      cta: 'Professionelle Webinare in wenigen Minuten erstellen',
      security: {
        title: 'Unternehmenssicherheit',
        description: 'Bankverschlüsselung, SSO und Einhaltung von SOC 2, DSGVO und HIPAA-Standards.'
      },
      recording: {
        title: 'Aufnahme mit einem Klick',
        description: 'Nehmen Sie Ihre Webinare automatisch auf und teilen Sie sie in perfekter Qualität.'
      }
    },
    demoPreview: {
      title: 'Professionelle Webinare erstellen',
      titleHighlight: 'in wenigen Minuten',
      ctaButton: 'Testen Sie es 30 Tage kostenlos!',
      trust1: '30 Tage kostenlose Testversion',
      trust2: 'Keine Verpflichtung',
      trust3: 'Französischsprachiger Support'
    },
    pricing: {
      title: 'Wählen Sie Ihren Plan',
      subtitle: 'Einfache und transparente Preise für alle Unternehmensgrößen',
      monthly: 'Monatlich',
      annually: 'Jährlich',
      save20: '20% sparen',
      perMonth: '/Monat',
      participants: 'Teilnehmer',
      features: 'Enthaltene Funktionen',
      unlimitedWebinars: 'Unbegrenzte Webinare',
      hdStreaming: 'HD-Streaming',
      recording: 'Aufnahme und Wiedergabe',
      analytics: 'Detaillierte Analysen',
      chat: 'Chat und Q&A',
      polls: 'Interaktive Umfragen',
      support: 'E-Mail-Support',
      prioritySupport: 'Prioritäts-Support',
      customBranding: 'Vollständige Anpassung',
      api: 'API-Zugang',
      manager: 'Dedizierter Account Manager',
      sla: 'Garantiertes SLA',
      selectPlan: 'Diesen Plan wählen',
      freeTrial: '30 Tage kostenlos testen',
      subscribe: 'Abonnieren',
      comingSoon: 'Demnächst',
      popular: 'Am beliebtesten',
      contactUs: 'Auf dem Laufenden halten',
      perCompany: 'Lizenz pro Unternehmen',
      perCompanyDesc: 'Eine Abonnement für Ihr gesamtes Unternehmen! Alle Ihre Mitarbeiter können Webinare organisieren, ohne zusätzliche Kosten.',
      perCompanyHighlight: 'Ein unvergleichlicher Vorteil, um Ihren ROI zu maximieren.',
      trialInfo: 'Alle Pläne umfassen eine 30-tägige kostenlose Testversion. Keine Kreditkarte erforderlich. Abbrechen Sie jederzeit.',
      start: {
        name: 'Rainbow Webinar Start',
        description: 'Perfekt für kleine Teams'
      },
      pro: {
        name: 'Rainbow Webinar Pro',
        description: 'Für wachsende Unternehmen'
      },
      enterprise: {
        name: 'Rainbow Webinar Enterprise',
        description: 'Für große Organisationen'
      }
    },
    product: {
      title: 'Das',
      titleHighlight: 'Rainbow',
      subtitle: 'Komplette Kommunikations- und Kollaborationslösungen zur Transformation Ihres Unternehmens',
      webinar: {
        name: 'Rainbow Webinar',
        tagline: 'Die komplette Lösung für Ihre professionellen Webinare',
        description: 'Veranstalten Sie hochwertige Webinare zum Schulen, Präsentieren und Einbeziehen Ihres Publikums. Von 120 bis 1000 Teilnehmern je nach Bedarf.',
        feature1: 'Bis zu 1000 gleichzeitige Teilnehmer',
        feature2: 'HD-Streaming mit geringer Latenz',
        feature3: 'Automatische Aufnahme und Wiedergabe',
        feature4: 'Interaktive Umfragen und Q&A',
        feature5: 'Detaillierte Engagement-Statistiken',
        feature6: 'Kalender- und CRM-Integration',
        plansTitle: 'Unsere Pläne',
        ctaPrimary: '30 Tage testen',
        ctaSecondary: 'Preise anzeigen'
      },
      collaboration: {
        name: 'Rainbow Collaboration',
        tagline: 'Einheitliche Kommunikation für Unternehmen',
        description: 'Eine komplette Unternehmenskommunikationsplattform: Instant Messaging, Videokonferenzen, Telefonie und sichere Dateifreigabe.',
        feature1: 'Unternehmens-Instant-Messaging',
        feature2: 'Videokonferenzen bis zu 30 Teilnehmern',
        feature3: 'Integrierte Telefonie (VoIP)',
        feature4: 'Sichere Dateifreigabe',
        feature5: 'Erweiterte Präsenz und Status',
        feature6: 'Kompatibel iOS, Android, Web, Desktop',
        ctaPrimary: 'Kostenlos testen',
        ctaSecondary: 'Mehr erfahren'
      },
      guardian: {
        name: 'Rainbow Guardian',
        tagline: 'Schutz und Sicherheit der Kommunikation',
        description: 'Erweiterte Sicherheitslösung zum Schutz Ihrer Unternehmenskommunikation. Ende-zu-Ende-Verschlüsselung, DSGVO-Konformität und volle Kontrolle über Ihre Daten.',
        feature1: 'Ende-zu-Ende-Verschlüsselung von Nachrichten',
        feature2: 'DSGVO- und SOC 2-Konformität',
        feature3: 'Vollständige Prüfung und Nachverfolgbarkeit',
        feature4: 'Granulare Zugriffskontrolle',
        feature5: 'Schutz vor Bedrohungen',
        feature6: 'Souveränes Hosting verfügbar',
        ctaPrimary: 'Demnächst',
        ctaSecondary: 'Auf dem Laufenden halten'
      },
      cta: {
        title: 'Bereit, Ihre Kommunikation zu transformieren?',
        subtitle: 'Entdecken Sie unsere Lösungen und starten Sie noch heute Ihre kostenlose Testversion',
        trial: '30 Tage kostenlos testen',
        demo: 'Eine Demo ansehen'
      }
    },
    support: {
      title: 'Help Center',
      titleHighlight: 'Rainbow Webinar',
      subtitle: 'Finden Sie schnell Antworten auf Ihre Fragen',
      search: 'Hilfe durchsuchen...',
      categories: 'Hilfekategorien',
      gettingStarted: 'Erste Schritte',
      gettingStartedDesc: 'Erste Schritte mit Rainbow Webinar',
      technical: 'Technischer Support',
      technicalDesc: 'Fehlerbehebung und Konfiguration',
      account: 'Konto und Abrechnung',
      accountDesc: 'Verwaltung Ihres Abonnements',
      bestPractices: 'Best Practices',
      bestPracticesDesc: 'Optimieren Sie Ihre Webinare',
      resources: {
        title: 'Nützliche Ressourcen',
        documentation: {
          title: 'Vollständige Dokumentation',
          description: 'Detaillierte Anleitungen und Tutorials'
        },
        video: {
          title: 'Video-Tutorials',
          description: 'Lernen Sie mit unseren Videos'
        },
        community: {
          title: 'Community',
          description: 'Vernetzen Sie sich mit anderen Benutzern'
        }
      },
      contact: {
        title: 'Brauchen Sie Hilfe?',
        subtitle: 'Unser Team ist für Sie da',
        email: 'support@rainbow-webinar.com',
        phone: '+33 1 23 45 67 89',
        hours: 'Mo-Fr: 9-18 Uhr (MEZ)'
      }
    },
    blog: {
      title: 'Der',
      titleHighlight: 'Blog',
      subtitle: 'Tipps, Anleitungen und Neuigkeiten für erfolgreiche Webinare',
      search: 'Artikel suchen...',
      allCategories: 'Alle Kategorien',
      guides: 'Anleitungen',
      tips: 'Tipps',
      caseStudies: 'Anwendungsfälle',
      news: 'Neuigkeiten',
      readMore: 'Artikel lesen',
      readTime: 'Min. Lesezeit',
      cta: {
        title: 'Bereit, Ihr erstes Webinar zu veranstalten?',
        subtitle: 'Setzen Sie diese Tipps mit Rainbow Webinar in die Praxis um',
        trial: '30 Tage kostenlos testen',
        demo: 'Eine Demo ansehen'
      },
      backToBlog: 'Zurück zum Blog',
      relatedArticles: 'Verwandte Artikel',
      shareArticle: 'Diesen Artikel teilen'
    },
    productRange: {
      title: 'Finden Sie die Lösung, die am besten zu Ihnen passt',
      subtitle: 'Unified-Communication-Lösungen für jeden professionellen Bedarf — von Teamzusammenarbeit über groß angelegte Webinare.',
      ucaas: 'UCaaS',
      webinar: 'Webinar',
      collaboration: {
        title: 'Rainbow Collaboration',
        description: 'Die Unified-Communication-Plattform für moderne Unternehmen.'
      },
      webinarProduct: {
        title: 'Rainbow Webinar',
        description: 'Professionelle Webinar-Plattform für Online-Großveranstaltungen mit bis zu 10.000 Teilnehmern.'
      },
      learnMore: 'Mehr erfahren',
      comingSoon: 'Demnächst verfügbar'
    },
    useCases: {
      title: 'Lassen Sie nicht zu, dass Ihre Tools Ihren Fortschritt bremsen',
      subtitle: 'Technologie sollte den Teams dienen, nicht umgekehrt.',
      tabs: {
        hrCommunication: 'Kommunikation & HR',
        itServices: 'IT-Services',
        management: 'Management'
      },
      hrCommunication: {
        title: 'Richten Sie Ihre Teams aus, innovieren Sie Ihre Prozesse',
        description: 'Technologie sollte den Teams dienen, nicht umgekehrt. Rainbow-Lösungen ermöglichen es Ihnen, einen digitalen Arbeitsbereich zu schaffen, der Ihre Teams um Ihre strategischen Prioritäten ausrichtet, die Zusammenarbeit erleichtert und die kollektive operative Effizienz stärkt.'
      },
      itServices: {
        title: 'Vereinfachen Sie IT-Management, stärken Sie die Sicherheit',
        description: 'Verwalten Sie alle Ihre Unternehmenskommunikationen von einer zentralen Plattform aus. Rainbow bietet eine sichere, europäischen Normen entsprechende Infrastruktur mit vollständiger Kontrolle über Ihre Daten und nahtloser Integration in Ihr bestehendes IT-Ökosystem.'
      },
      management: {
        title: 'Steuern Sie die digitale Transformation Ihrer Organisation',
        description: 'Geben Sie Ihren Teams die Werkzeuge, um in einer hybriden Welt erfolgreich zu sein. Rainbow begleitet die digitale Transformation Ihres Unternehmens und garantiert Datensouveränität, operative Exzellenz und messbaren Return on Investment.'
      }
    },
    footer: {
      product: 'Produkt',
      webinar: 'Rainbow Webinar',
      collaboration: 'Rainbow Collaboration',
      guardian: 'Rainbow Guardian',
      pricing: 'Preise',
      features: 'Funktionen',
      resources: 'Ressourcen',
      blog: 'Blog',
      documentation: 'Dokumentation',
      support: 'Help Center',
      community: 'Community',
      tutorials: 'Video-Tutorials',
      company: 'Unternehmen',
      about: 'Über uns',
      careers: 'Karriere',
      press: 'Presse',
      contact: 'Kontakt',
      legal: 'Rechtliches',
      privacy: 'Datenschutz',
      terms: 'Nutzungsbedingungen',
      security: 'Sicherheit',
      description: 'Professionelle Kommunikations- und Webinarlösungen von Alcatel-Lucent Enterprise',
      rights: 'Alle Rechte vorbehalten.',
      copyright: '© 2026 ALE International, ALE USA Inc. Alle Rechte in allen Ländern vorbehalten. Der Name und das Logo Alcatel-Lucent sind Marken von Nokia, die von ALE unter Lizenz verwendet werden. Um eine Liste der geschützten ALE-Marken anzuzeigen, besuchen Sie:',
      copyrightLink: 'www.al-enterprise.com/de/legal/trademarks-copyright'
    },
    testimonials: {
      title: 'Eine souveräne und europäische Lösung',
      subtitle: 'Professionelles und sicheres Hosting für Ihre Webinare',
      certifications: 'Internationale und lokale Zertifizierungen',
      madeInFrance: 'Die Made In France Webinarlösung',
      madeInFranceDesc: 'Rainbow × OVHCloud: eine 100% französische Lösung. Ihre Daten werden in Frankreich gehostet und garantieren vollständige digitale Souveränität und native DSGVO-Konformität. Wählen Sie eine unabhängige und sichere Technologie für Ihre professionellen Webinare.',
      flexibilityTitle: 'Flexibilität und Souveränität',
      cspn: {
        name: 'CSPN-Zertifizierung - ANSSI',
        description: 'Höchster französischer Sicherheitsstandard'
      },
      rgpd: {
        name: 'DSGVO',
        description: 'Einhaltung der europäischen Datenschutz-Richtlinie'
      },
      iso: {
        name: 'ISO-27001 & SOC',
        description: 'Zertifizierte Rechenzentren mit 24×7-Überwachung'
      },
      frenchSolution: {
        name: 'Französische Lösung',
        description: 'Französischer Herausgeber, lokaler Support'
      },
      infrastructure: {
        name: 'Infrastrukturen bereit für Souveränität',
        description: 'In Frankreich gehostete Daten'
      },
      cloudAct: {
        name: 'Nicht dem Cloud Act unterworfen',
        description: 'Garantierte technologische Unabhängigkeit'
      }
    },
    modal: {
      trial: {
        title: 'Starten Sie Ihre kostenlose Testversion',
        subtitle: 'Keine Kreditkarte erforderlich',
        plan: 'Ausgewählter Plan',
        fullName: 'Vollständiger Name',
        email: 'Geschäftliche E-Mail',
        company: 'Unternehmen',
        phone: 'Telefon',
        employees: 'Anzahl der Mitarbeiter',
        selectSize: 'Größe auswählen',
        terms: 'Ich akzeptiere die',
        termsLink: 'Nutzungsbedingungen',
        and: 'und die',
        privacyLink: 'Datenschutzrichtlinie',
        submit: 'Kostenlose Testversion starten',
        success: 'Vielen Dank! Wir haben Ihnen eine E-Mail zur Aktivierung Ihres Kontos gesendet.'
      },
      demo: {
        title: 'Entdecken Sie Rainbow Webinar in Aktion',
        subtitle: 'Probieren Sie die interaktive Demo aus',
        close: 'Schließen'
      }
    },
    common: {
      loading: 'Wird geladen...',
      error: 'Ein Fehler ist aufgetreten',
      retry: 'Erneut versuchen',
      cancel: 'Abbrechen',
      save: 'Speichern',
      delete: 'Löschen',
      edit: 'Bearbeiten',
      close: 'Schließen'
    }
  }
};

export function getTranslation(lang: Language) {
  return translations[lang] || translations.fr;
}
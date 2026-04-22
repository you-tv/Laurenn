import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import {
  Settings,
  Key,
  Mail,
  Bell,
  Shield,
  CreditCard,
  Globe,
  Database,
  Zap,
  CheckCircle,
  Save
} from "lucide-react";

export function AdminSettings() {
  const [activeSection, setActiveSection] = useState("general");

  const sections = [
    { id: "general", label: "Général", icon: Settings },
    { id: "api", label: "API & Intégrations", icon: Zap },
    { id: "email", label: "Email & Notifications", icon: Mail },
    { id: "security", label: "Sécurité", icon: Shield },
    { id: "billing", label: "Facturation", icon: CreditCard },
    { id: "database", label: "Base de données", icon: Database }
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Paramètres</h1>
        <p className="text-gray-600">
          Configurez les paramètres globaux de Rainbow Webinar
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Sidebar navigation */}
        <div className="col-span-3">
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <nav className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeSection === section.id
                      ? "bg-[#5e2d91] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <section.icon className="h-5 w-5" />
                  <span className="font-medium">{section.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="col-span-9">
          {activeSection === "general" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl border border-gray-200 p-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Paramètres généraux
              </h2>

              <div className="space-y-6">
                {/* Site name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom du site
                  </label>
                  <input
                    type="text"
                    defaultValue="Rainbow Webinar"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5e2d91] focus:border-transparent"
                  />
                </div>

                {/* Site description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description du site
                  </label>
                  <textarea
                    rows={3}
                    defaultValue="Solution de webinaires professionnels par Alcatel-Lucent Enterprise"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5e2d91] focus:border-transparent"
                  />
                </div>

                {/* Langue */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Langue par défaut
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5e2d91] focus:border-transparent">
                    <option>Français</option>
                    <option>English</option>
                    <option>Español</option>
                    <option>Deutsch</option>
                  </select>
                </div>

                {/* Timezone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fuseau horaire
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5e2d91] focus:border-transparent">
                    <option>Europe/Paris (GMT+1)</option>
                    <option>Europe/London (GMT)</option>
                    <option>America/New_York (GMT-5)</option>
                  </select>
                </div>

                {/* Maintenance mode */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">Mode maintenance</div>
                    <div className="text-sm text-gray-600">
                      Désactive temporairement l'accès public au site
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#5e2d91]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#5e2d91]"></div>
                  </label>
                </div>

                <Button className="bg-[#5e2d91] hover:bg-[#4a2373] text-white gap-2">
                  <Save className="h-4 w-4" />
                  Enregistrer les modifications
                </Button>
              </div>
            </motion.div>
          )}

          {activeSection === "api" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl border border-gray-200 p-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                API & Intégrations
              </h2>

              <div className="space-y-6">
                {/* Stripe */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#635BFF] rounded-lg flex items-center justify-center">
                        <CreditCard className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Stripe</div>
                        <div className="text-sm text-gray-600">Paiements en ligne</div>
                      </div>
                    </div>
                    <span className="flex items-center gap-2 text-sm font-semibold text-green-600">
                      <CheckCircle className="h-4 w-4" />
                      Connecté
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Clé publique
                      </label>
                      <input
                        type="text"
                        placeholder="pk_test_..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5e2d91] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Clé secrète
                      </label>
                      <input
                        type="password"
                        placeholder="sk_test_..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5e2d91] focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Webhooks */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-4">Webhooks</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        URL webhook Stripe
                      </label>
                      <input
                        type="text"
                        defaultValue="https://rainbow-webinar.com/api/webhooks/stripe"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5e2d91] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Secret webhook
                      </label>
                      <input
                        type="password"
                        placeholder="whsec_..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5e2d91] focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <Button className="bg-[#5e2d91] hover:bg-[#4a2373] text-white gap-2">
                  <Save className="h-4 w-4" />
                  Enregistrer les clés API
                </Button>
              </div>
            </motion.div>
          )}

          {activeSection === "email" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl border border-gray-200 p-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Email & Notifications
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email d'expédition
                  </label>
                  <input
                    type="email"
                    defaultValue="noreply@rainbow-webinar.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5e2d91] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom d'affichage
                  </label>
                  <input
                    type="text"
                    defaultValue="Rainbow Webinar"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5e2d91] focus:border-transparent"
                  />
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Notifications administrateur
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Nouveau paiement reçu",
                      "Nouvel utilisateur inscrit",
                      "Paiement échoué",
                      "Abonnement annulé"
                    ].map((notif, i) => (
                      <label key={i} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="w-4 h-4 text-[#5e2d91] rounded focus:ring-2 focus:ring-[#5e2d91]"
                        />
                        <span className="text-sm text-gray-700">{notif}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <Button className="bg-[#5e2d91] hover:bg-[#4a2373] text-white gap-2">
                  <Save className="h-4 w-4" />
                  Enregistrer les paramètres email
                </Button>
              </div>
            </motion.div>
          )}

          {activeSection === "security" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl border border-gray-200 p-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Sécurité</h2>

              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-1">
                        Authentification à deux facteurs
                      </h4>
                      <p className="text-sm text-blue-800">
                        Activez 2FA pour sécuriser l'accès administrateur
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">
                      Forcer HTTPS
                    </div>
                    <div className="text-sm text-gray-600">
                      Rediriger automatiquement vers HTTPS
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#5e2d91]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#5e2d91]"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">
                      Logs de sécurité
                    </div>
                    <div className="text-sm text-gray-600">
                      Enregistrer toutes les connexions admin
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#5e2d91]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#5e2d91]"></div>
                  </label>
                </div>

                <Button className="bg-[#5e2d91] hover:bg-[#4a2373] text-white gap-2">
                  <Save className="h-4 w-4" />
                  Enregistrer les paramètres de sécurité
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

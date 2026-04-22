import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  BarChart3, 
  Settings, 
  LogOut,
  Video,
  CreditCard,
  User,
  Package,
  Mail,
  Building2,
  Globe,
  Clock,
  Shield,
  CheckCircle2,
  Edit
} from "lucide-react";
import rainbowLogo from "figma:asset/e64e7302fb552f059e39a93028a3e1c87f690926.png";

export default function Account() {
  const [activeTab, setActiveTab] = useState("account");
  const [isEditing, setIsEditing] = useState(false);

  // Données utilisateur simulées
  const [userData, setUserData] = useState({
    firstName: "Jean",
    lastName: "Dupont",
    email: "jean.dupont@entreprise.fr",
    company: "Entreprise SAS",
    companySize: "50-200 employés",
    companyAddress: "123 Avenue des Champs-Élysées, 75008 Paris, France",
    language: "Français",
    timezone: "Europe/Paris (GMT+1)",
    marketingConsent: true,
    analyticsConsent: true
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2">
              <img src={rainbowLogo} alt="Rainbow" className="h-12" />
            </Link>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                Plan: <span className="font-semibold text-[#5e2d91]">Rainbow Webinar Pro</span>
              </span>
              <Button
                variant="outline"
                size="sm"
                className="gap-2 border-gray-300 hover:bg-gray-50"
                onClick={() => window.location.href = "/"}
              >
                <LogOut className="h-4 w-4" />
                Déconnexion
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16 flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen fixed left-0 top-16">
          <nav className="p-4 space-y-2">
            {[
              { id: "dashboard", label: "Tableau de bord", icon: LayoutDashboard, link: "/dashboard" },
              { id: "subscriptions", label: "Mes abonnements", icon: Package, link: "/subscriptions" },
              { id: "account", label: "Mes informations", icon: User, link: "/account" },
              { id: "billing", label: "Facturation", icon: CreditCard, link: "/billing" }
            ].map((item) => {
              const isActive = activeTab === item.id;
              const Component = item.link ? Link : "button";
              const props = item.link 
                ? { to: item.link }
                : { onClick: () => setActiveTab(item.id) };
              
              return (
                <Component
                  key={item.id}
                  {...props}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-[#5e2d91] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </Component>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="ml-64 flex-1 p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Mes informations
              </h1>
              <p className="text-gray-600">
                Gérez vos informations personnelles et préférences
              </p>
            </div>

            {/* Informations personnelles */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Informations personnelles</h2>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <Edit className="h-4 w-4" />
                  {isEditing ? "Annuler" : "Modifier"}
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="h-4 w-4 inline mr-2" />
                    Prénom
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={userData.firstName}
                      onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5e2d91] focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900 font-semibold bg-gray-50 px-4 py-2 rounded-lg">{userData.firstName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="h-4 w-4 inline mr-2" />
                    Nom
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={userData.lastName}
                      onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5e2d91] focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900 font-semibold bg-gray-50 px-4 py-2 rounded-lg">{userData.lastName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="h-4 w-4 inline mr-2" />
                    Email
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={userData.email}
                      onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5e2d91] focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900 font-semibold bg-gray-50 px-4 py-2 rounded-lg">{userData.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Building2 className="h-4 w-4 inline mr-2" />
                    Entreprise
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={userData.company}
                      onChange={(e) => setUserData({ ...userData, company: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5e2d91] focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900 font-semibold bg-gray-50 px-4 py-2 rounded-lg">{userData.company}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Users className="h-4 w-4 inline mr-2" />
                    Taille d'entreprise
                  </label>
                  {isEditing ? (
                    <select
                      value={userData.companySize}
                      onChange={(e) => setUserData({ ...userData, companySize: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5e2d91] focus:border-transparent"
                    >
                      <option>1-10 employés</option>
                      <option>10-50 employés</option>
                      <option>50-200 employés</option>
                      <option>200-1000 employés</option>
                      <option>1000+ employés</option>
                    </select>
                  ) : (
                    <p className="text-gray-900 font-semibold bg-gray-50 px-4 py-2 rounded-lg">{userData.companySize}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Building2 className="h-4 w-4 inline mr-2" />
                    Adresse de l'entreprise
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={userData.companyAddress}
                      onChange={(e) => setUserData({ ...userData, companyAddress: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5e2d91] focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900 font-semibold bg-gray-50 px-4 py-2 rounded-lg">{userData.companyAddress}</p>
                  )}
                </div>
              </div>

              {isEditing && (
                <div className="mt-6 flex gap-3">
                  <Button className="bg-[#5e2d91] hover:bg-[#4a2373]">
                    Enregistrer les modifications
                  </Button>
                  <Button variant="outline" onClick={() => setIsEditing(false)}>
                    Annuler
                  </Button>
                </div>
              )}
            </div>

            {/* Sécurité */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Sécurité</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-gray-900">Mot de passe</h3>
                    <p className="text-sm text-gray-600">Dernière modification il y a 45 jours</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Modifier
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Authentification à deux facteurs</h3>
                      <p className="text-sm text-gray-600">Activée et configurée</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Configurer
                  </Button>
                </div>
              </div>
            </div>

            {/* Préférences */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Préférences</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Globe className="h-4 w-4 inline mr-2" />
                    Langue
                  </label>
                  <select
                    value={userData.language}
                    onChange={(e) => setUserData({ ...userData, language: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5e2d91] focus:border-transparent"
                  >
                    <option>Français</option>
                    <option>English</option>
                    <option>Español</option>
                    <option>Deutsch</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Clock className="h-4 w-4 inline mr-2" />
                    Fuseau horaire
                  </label>
                  <select
                    value={userData.timezone}
                    onChange={(e) => setUserData({ ...userData, timezone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5e2d91] focus:border-transparent"
                  >
                    <option>Europe/Paris (GMT+1)</option>
                    <option>Europe/London (GMT)</option>
                    <option>America/New_York (GMT-5)</option>
                    <option>America/Los_Angeles (GMT-8)</option>
                    <option>Asia/Tokyo (GMT+9)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* RGPD et consentements */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-6 w-6 text-[#5e2d91]" />
                <h2 className="text-2xl font-bold text-gray-900">Confidentialité et données (RGPD)</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">Communications marketing</h3>
                    <p className="text-sm text-gray-600">
                      Recevoir des emails sur les nouveauts, promotions et événements Rainbow Webinar
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer ml-4">
                    <input
                      type="checkbox"
                      checked={userData.marketingConsent}
                      onChange={(e) => setUserData({ ...userData, marketingConsent: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#5e2d91]/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#5e2d91]"></div>
                  </label>
                </div>

                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">Analyse et amélioration</h3>
                    <p className="text-sm text-gray-600">
                      Autoriser l'analyse de mon utilisation pour améliorer le service
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer ml-4">
                    <input
                      type="checkbox"
                      checked={userData.analyticsConsent}
                      onChange={(e) => setUserData({ ...userData, analyticsConsent: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#5e2d91]/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#5e2d91]"></div>
                  </label>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">Vos droits RGPD</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données personnelles.
                      </p>
                      <div className="flex gap-3">
                        <Button variant="outline" size="sm">
                          Télécharger mes données
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 border-red-300 hover:bg-red-50">
                          Supprimer mon compte
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
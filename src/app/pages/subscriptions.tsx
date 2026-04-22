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
  Plus,
  RefreshCw,
  FileText,
  TrendingUp,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import rainbowLogo from "figma:asset/e64e7302fb552f059e39a93028a3e1c87f690926.png";

export default function Subscriptions() {
  const [activeTab, setActiveTab] = useState("subscriptions");

  // Données simulées
  const subscriptionOverview = {
    planType: "Rainbow Webinar Pro",
    totalLicenses: 4,
    assignedLicenses: 3,
    availableLicenses: 1,
    expirationDate: "15 Mars 2027",
    autoRenewal: true
  };

  const licenseStats = [
    {
      month: "Jan",
      used: 2,
      total: 4
    },
    {
      month: "Fév",
      used: 3,
      total: 4
    },
    {
      month: "Mar",
      used: 3,
      total: 4
    }
  ];

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
                Mes abonnements
              </h1>
              <p className="text-gray-600">
                Gérez vos licences et abonnements Rainbow Webinar
              </p>
            </div>

            {/* Vue globale */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Vue globale</h2>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2"
                  >
                    <FileText className="h-4 w-4" />
                    Voir contrat
                  </Button>
                  <Button
                    size="sm"
                    className="bg-[#5e2d91] hover:bg-[#4a2373] gap-2"
                  >
                    <RefreshCw className="h-4 w-4" />
                    Renouveler
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-gradient-to-br from-[#5e2d91]/10 to-[#6639B7]/10 rounded-xl border border-[#5e2d91]/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-[#5e2d91] rounded-lg">
                      <Package className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Type de licence</p>
                      <p className="text-xl font-bold text-gray-900">{subscriptionOverview.planType}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-[#0085CA]/10 to-[#6639B7]/10 rounded-xl border border-[#0085CA]/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-[#0085CA] rounded-lg">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Licences</p>
                      <p className="text-xl font-bold text-gray-900">
                        {subscriptionOverview.assignedLicenses} / {subscriptionOverview.totalLicenses}
                      </p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-[#0085CA] h-2 rounded-full" 
                      style={{ width: `${(subscriptionOverview.assignedLicenses / subscriptionOverview.totalLicenses) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-[#34B233]/10 to-[#0085CA]/10 rounded-xl border border-[#34B233]/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-[#34B233] rounded-lg">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Expiration</p>
                      <p className="text-lg font-bold text-gray-900">{subscriptionOverview.expirationDate}</p>
                    </div>
                  </div>
                  {subscriptionOverview.autoRenewal && (
                    <div className="flex items-center gap-2 text-sm text-green-600">
                      <CheckCircle2 className="h-4 w-4" />
                      Renouvellement automatique activé
                    </div>
                  )}
                </div>
              </div>

              {/* Détails */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-[#5e2d91]">{subscriptionOverview.totalLicenses}</p>
                  <p className="text-sm text-gray-600 mt-1">Total achetées</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-[#0085CA]">{subscriptionOverview.assignedLicenses}</p>
                  <p className="text-sm text-gray-600 mt-1">Assignées</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-[#34B233]">{subscriptionOverview.availableLicenses}</p>
                  <p className="text-sm text-gray-600 mt-1">Disponibles</p>
                </div>
              </div>
            </div>

            {/* Actions rapides */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-r from-[#5e2d91] to-[#6639B7] rounded-xl p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Ajouter des licences</h3>
                    <p className="text-white/90 text-sm">
                      Augmentez votre capacité dès maintenant
                    </p>
                  </div>
                  <Button
                    size="lg"
                    className="bg-white text-[#5e2d91] hover:bg-gray-100 font-semibold gap-2"
                  >
                    <Plus className="h-5 w-5" />
                    Ajouter
                  </Button>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#FF4500]/90 to-[#CF0072]/90 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Changer d'abonnement</h3>
                    <p className="text-white/90 text-sm">
                      Passez à un plan supérieur ou inférieur
                    </p>
                  </div>
                  <Button
                    size="lg"
                    className="bg-white text-[#CF0072] hover:bg-gray-100 font-semibold"
                  >
                    Modifier
                  </Button>
                </div>
              </div>
            </div>

            {/* Statistiques par licence */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Statistiques d'utilisation</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Graphique d'utilisation */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Évolution des licences utilisées</h3>
                  <div className="space-y-4">
                    {licenseStats.map((stat, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-600">{stat.month} 2026</span>
                          <span className="text-sm font-bold text-gray-900">{stat.used} / {stat.total}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div 
                            className="bg-gradient-to-r from-[#5e2d91] to-[#6639B7] h-3 rounded-full transition-all" 
                            style={{ width: `${(stat.used / stat.total) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Insights */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommandations</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-gray-900 mb-1">Capacité bientôt atteinte</p>
                          <p className="text-sm text-gray-600">
                            Vous utilisez 90% de vos licences. Pensez à en ajouter pour éviter les interruptions.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-start gap-3">
                        <TrendingUp className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-gray-900 mb-1">Utilisation en hausse</p>
                          <p className="text-sm text-gray-600">
                            +7% d'utilisateurs actifs ce mois-ci. Votre équipe adopte bien Rainbow Webinar !
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-gray-900 mb-1">Renouvellement automatique actif</p>
                          <p className="text-sm text-gray-600">
                            Votre abonnement sera automatiquement renouvelé le {subscriptionOverview.expirationDate}.
                          </p>
                        </div>
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
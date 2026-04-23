import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { Link, useNavigate } from "react-router";
import { 
  LayoutDashboard, 
  Users, 
  LogOut,
  Video,
  Clock,
  TrendingUp,
  PlayCircle,
  CreditCard,
  User,
  Package,
  ExternalLink,
  Plus,
  ShoppingCart,
  UserPlus,
  UserCheck,
  MessageSquare,
  Star,
  BarChart3,
  Presentation,
  Timer,
  AlertCircle,
  Zap,
  CheckCircle,
  ArrowRight
} from "lucide-react";
const rainbowLogo = "https://placehold.co/200x80?text=Rainbow+Logo";
import { LeadsSection } from "../components/leads-section";
import { analyticsTracker } from "../services/analytics-tracker";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const navigate = useNavigate();
  
  // Mode Trial (peut être activé/désactivé selon le statut utilisateur)
  const isTrialUser = true; // Simuler un utilisateur en période d'essai
  const trialDaysRemaining = 23;
  const trialExpired = false;

  // Données simulées - Licences
  const licenseStats = [
    {
      label: "Licences actives",
      value: "3",
      total: "4",
      icon: Package,
      color: "#5e2d91"
    },
    {
      label: "Utilisateurs actifs",
      value: "3",
      icon: Users,
      color: "#0085CA"
    },
    {
      label: "Licences disponibles",
      value: "1",
      icon: Package,
      color: "#34B233"
    }
  ];

  // Données simulées - Participation Funnel
  const funnelStats = [
    {
      label: "Invités",
      value: "3,842",
      icon: UserPlus,
      color: "#5e2d91",
      trend: "+12% vs mois dernier"
    },
    {
      label: "Inscrits",
      value: "2,154",
      icon: UserCheck,
      color: "#0085CA",
      trend: "56% taux d'inscription"
    },
    {
      label: "Participants effectifs",
      value: "1,847",
      icon: Users,
      color: "#34B233",
      trend: "86% taux de présence"
    },
    {
      label: "Engagement actif",
      value: "1,245",
      icon: MessageSquare,
      color: "#CF0072",
      trend: "67% ont interagi"
    }
  ];

  // Données simulées - Statistiques globales
  const globalStats = [
    {
      label: "Webinaires organisés",
      value: "12",
      icon: Video,
      color: "#6639B7",
      trend: "+3 vs mois dernier"
    },
    {
      label: "Durée moyenne",
      value: "1h 34m",
      icon: Clock,
      color: "#FF4500",
      trend: "Sur 12 webinaires"
    },
    {
      label: "Hôtes différents",
      value: "5",
      icon: Presentation,
      color: "#0085CA",
      trend: "2 nouveaux ce mois"
    },
    {
      label: "Participants externes",
      value: "72%",
      icon: BarChart3,
      color: "#34B233",
      trend: "28% internes"
    }
  ];

  // Données simulées - Engagement & Satisfaction
  const engagementStats = [
    {
      label: "Sondages créés",
      value: "24",
      icon: MessageSquare,
      color: "#CF0072",
      trend: "+8 vs mois dernier"
    },
    {
      label: "Score CSAT",
      value: "4.6/5",
      icon: Star,
      color: "#FF4500",
      trend: "+0.3 vs mois dernier"
    },
    {
      label: "Ratio présence/durée",
      value: "78%",
      icon: Timer,
      color: "#6639B7",
      trend: "Temps moyen de présence"
    },
    {
      label: "Taux d'engagement",
      value: "89%",
      icon: TrendingUp,
      color: "#34B233",
      trend: "+5% vs mois dernier"
    }
  ];

  // Données simulées - Analytics Trial (Phase TRY)
  const trialAnalytics = [
    {
      label: "Temps avant 1er webinaire",
      value: "2h 15m",
      icon: Zap,
      color: "#FF4500",
      description: "Depuis l'activation"
    },
    {
      label: "Webinaires créés",
      value: "4",
      icon: Video,
      color: "#6639B7",
      description: "Pendant la période d'essai"
    },
    {
      label: "Webinaires lancés",
      value: "3",
      icon: PlayCircle,
      color: "#34B233",
      description: "75% taux de lancement"
    },
    {
      label: "Taux de complétion",
      value: "76%",
      icon: CheckCircle,
      color: "#0085CA",
      description: "Jusqu'au jour 23/30"
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
                Plan: <span className="font-semibold text-[#5e2d91]">
                  {isTrialUser ? "Essai gratuit (Webinar 120)" : "Rainbow Webinar Pro"}
                </span>
              </span>
              <Link to="/admin">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 border-[#5e2d91] text-[#5e2d91] hover:bg-[#5e2d91] hover:text-white"
                >
                  🔐 Admin
                </Button>
              </Link>
              <Link to="/support">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 border-gray-300 hover:bg-gray-50"
                >
                  Support
                </Button>
              </Link>
              <Button
                variant="outline"
                size="sm"
                className="gap-2 border-gray-300 hover:bg-gray-50"
                onClick={() => navigate("/")}
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
              { id: "dashboard", label: "Tableau de bord", icon: LayoutDashboard },
              { id: "leads", label: "Leads & Prospection", icon: UserPlus },
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

        {/* Main Dashboard Content */}
        <main className="ml-64 flex-1 p-8">
          {activeTab === "dashboard" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Trial Banner */}
            {isTrialUser && !trialExpired && (
              <div className="mb-6 bg-gradient-to-r from-[#FF4500] to-[#CF0072] rounded-xl p-6 text-white shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <AlertCircle className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">
                        Essai gratuit Rainbow Webinar - {trialDaysRemaining} jours restants
                      </h3>
                      <p className="text-white/90">
                        Profitez de toutes les fonctionnalités Webinar 120 (jusqu'à 120 participants, sessions illimitées)
                      </p>
                    </div>
                  </div>
                  <Button
                    size="lg"
                    className="bg-white text-[#5e2d91] hover:bg-gray-100 font-semibold px-8"
                    onClick={() => navigate("/pricing")}
                  >
                    S'abonner maintenant
                  </Button>
                </div>
                <div className="mt-4 bg-white/10 rounded-lg p-3">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progression de l'essai</span>
                    <span className="font-semibold">{Math.round(((30 - trialDaysRemaining) / 30) * 100)}%</span>
                  </div>
                  <div className="mt-2 bg-white/20 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-white h-full rounded-full transition-all duration-500"
                      style={{ width: `${((30 - trialDaysRemaining) / 30) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Trial Expired Banner */}
            {isTrialUser && trialExpired && (
              <div className="mb-6 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl p-6 text-white shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <AlertCircle className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">
                        Votre période d'essai est terminée
                      </h3>
                      <p className="text-white/90">
                        Créer de nouveaux webinaires est désactivé. Vous pouvez toujours lancer les webinaires programmés et accéder à votre historique.
                      </p>
                    </div>
                  </div>
                  <Button
                    size="lg"
                    className="bg-[#5e2d91] hover:bg-[#4a2373] font-semibold px-8"
                    onClick={() => navigate("/pricing")}
                  >
                    Passer à Premium
                  </Button>
                </div>
              </div>
            )}

            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Mon tableau de bord
              </h1>
              <p className="text-gray-600">
                {isTrialUser 
                  ? "Découvrez Rainbow Webinar pendant votre période d'essai" 
                  : "Gérez vos licences et webinaires en un coup d'œil"}
              </p>
            </div>

            {/* Trial Analytics (Phase TRY) - Simplified */}
            {isTrialUser && (
              <div className="mb-8">
                <div className="bg-gradient-to-r from-[#6639B7]/10 to-[#5e2d91]/10 rounded-xl p-6 border-2 border-[#5e2d91]/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-br from-[#6639B7] to-[#5e2d91] rounded-lg">
                        <BarChart3 className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          📊 Suivez vos KPIs et analytics d'essai
                        </h3>
                        <p className="text-gray-600">
                          Accédez à votre tableau de bord complet avec tracking événementiel, adoption des fonctionnalités, et signaux de conversion
                        </p>
                      </div>
                    </div>
                    <Link to="/webinar-space">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-[#6639B7] to-[#5e2d91] hover:opacity-90 text-white font-semibold gap-2"
                      >
                        Voir Analytics
                        <ArrowRight className="h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                  
                  {/* Quick stats preview */}
                  <div className="mt-4 grid grid-cols-4 gap-4">
                    {trialAnalytics.map((stat, index) => (
                      <div key={index} className="bg-white rounded-lg p-3">
                        <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                        <p className="text-xs text-gray-600">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Licences Section */}
            {!isTrialUser && (
              <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Licences et utilisateurs</h2>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2"
                    onClick={() => window.open("https://openrainbow.com", "_blank")}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Interface Rainbow
                  </Button>
                  <Button
                    size="sm"
                    className="bg-[#5e2d91] hover:bg-[#4a2373] gap-2"
                    onClick={() => setActiveTab("subscriptions")}
                  >
                    <Plus className="h-4 w-4" />
                    Ajouter des licences
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {licenseStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="p-3 rounded-lg"
                        style={{ backgroundColor: `${stat.color}15` }}
                      >
                        <stat.icon className="h-6 w-6" style={{ color: stat.color }} />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-2xl font-bold text-gray-900">
                        {stat.value}{stat.total ? ` / ${stat.total}` : ""}
                      </p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Purchase CTA */}
              <div className="bg-gradient-to-r from-[#34B233]/10 to-[#0085CA]/10 rounded-xl p-6 border-2 border-[#34B233]/20">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      Besoin de plus de licences ?
                    </h3>
                    <p className="text-gray-600">
                      Augmentez votre capacité pour accompagner la croissance de votre équipe
                    </p>
                  </div>
                  <Button
                    size="lg"
                    className="bg-[#5e2d91] hover:bg-[#4a2373] gap-2"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Acheter des licences
                  </Button>
                </div>
              </div>
              </div>
            )}

            {/* Participation Funnel */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Participation (Funnel)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {funnelStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="p-3 rounded-lg"
                        style={{ backgroundColor: `${stat.color}15` }}
                      >
                        <stat.icon className="h-6 w-6" style={{ color: stat.color }} />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                      <p className="text-xs text-green-600">{stat.trend}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Statistiques globales */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Statistiques globales</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {globalStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="p-3 rounded-lg"
                        style={{ backgroundColor: `${stat.color}15` }}
                      >
                        <stat.icon className="h-6 w-6" style={{ color: stat.color }} />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                      <p className="text-xs text-gray-500">{stat.trend}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Engagement & Satisfaction */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Engagement & Satisfaction</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {engagementStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="p-3 rounded-lg"
                        style={{ backgroundColor: `${stat.color}15` }}
                      >
                        <stat.icon className="h-6 w-6" style={{ color: stat.color }} />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                      <p className="text-xs text-green-600">{stat.trend}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-[#5e2d91] to-[#6639B7] rounded-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Créer un nouveau webinaire</h2>
                  <p className="text-white/90">
                    Lancez un webinaire en quelques clics avec Rainbow Webinar
                  </p>
                </div>
                <Link to="/webinar-space">
                  <Button
                    size="lg"
                    className="bg-white text-[#5e2d91] hover:bg-gray-100 font-semibold"
                  >
                    <PlayCircle className="h-5 w-5 mr-2" />
                    Nouveau Webinaire
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
          )}

          {/* Onglet Leads & Prospection */}
          {activeTab === "leads" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <LeadsSection />
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
}
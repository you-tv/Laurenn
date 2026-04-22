import { motion } from "motion/react";
import { 
  Users, 
  Key, 
  TrendingUp, 
  DollarSign,
  Activity,
  Video,
  UserPlus,
  AlertCircle,
  ArrowUp,
  ArrowDown
} from "lucide-react";
import { Button } from "../ui/button";

export function AdminDashboard() {
  // Données simulées - KPIs
  const kpis = [
    {
      label: "Utilisateurs totaux",
      value: "1,247",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      color: "#6639B7"
    },
    {
      label: "Licences actives",
      value: "856",
      change: "+8.3%",
      trend: "up",
      icon: Key,
      color: "#34B233"
    },
    {
      label: "Revenus mensuel",
      value: "94,350€",
      change: "+15.2%",
      trend: "up",
      icon: DollarSign,
      color: "#FF4500"
    },
    {
      label: "Webinaires ce mois",
      value: "2,453",
      change: "+23.1%",
      trend: "up",
      icon: Video,
      color: "#0085CA"
    }
  ];

  // Activité récente
  const recentActivity = [
    {
      type: "user",
      message: "Nouvel utilisateur inscrit",
      user: "marie.dubois@tech.fr",
      time: "Il y a 5 min",
      icon: UserPlus,
      color: "#34B233"
    },
    {
      type: "license",
      message: "Licence Pro activée",
      user: "thomas.martin@startup.io",
      time: "Il y a 12 min",
      icon: Key,
      color: "#6639B7"
    },
    {
      type: "payment",
      message: "Paiement reçu - 129€",
      user: "sophie.bernard@corp.com",
      time: "Il y a 23 min",
      icon: DollarSign,
      color: "#FF4500"
    },
    {
      type: "webinar",
      message: "Nouveau webinaire créé",
      user: "laurent.petit@agency.fr",
      time: "Il y a 35 min",
      icon: Video,
      color: "#0085CA"
    },
    {
      type: "alert",
      message: "Paiement échoué",
      user: "julie.robert@company.com",
      time: "Il y a 1h",
      icon: AlertCircle,
      color: "#CF0072"
    }
  ];

  // Top utilisateurs
  const topUsers = [
    {
      name: "Tech Solutions SAS",
      email: "contact@techsolutions.fr",
      plan: "Enterprise",
      webinars: 45,
      participants: 12500,
      revenue: "Custom"
    },
    {
      name: "StartupInnovante",
      email: "hello@startup.io",
      plan: "Pro",
      webinars: 32,
      participants: 8200,
      revenue: "129€/mois"
    },
    {
      name: "Corporate France",
      email: "info@corporate.com",
      plan: "Pro",
      webinars: 28,
      participants: 6800,
      revenue: "129€/mois"
    },
    {
      name: "Digital Agency",
      email: "contact@digital.fr",
      plan: "Start",
      webinars: 18,
      participants: 3200,
      revenue: "49€/mois"
    }
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Vue d'ensemble
        </h1>
        <p className="text-gray-600">
          Tableau de bord administrateur Rainbow Webinar
        </p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpis.map((kpi, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className="p-3 rounded-lg"
                style={{ backgroundColor: `${kpi.color}15` }}
              >
                <kpi.icon className="h-6 w-6" style={{ color: kpi.color }} />
              </div>
              <div className={`flex items-center gap-1 text-sm font-semibold ${
                kpi.trend === "up" ? "text-green-600" : "text-red-600"
              }`}>
                {kpi.trend === "up" ? (
                  <ArrowUp className="h-4 w-4" />
                ) : (
                  <ArrowDown className="h-4 w-4" />
                )}
                <span>{kpi.change}</span>
              </div>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900 mb-1">{kpi.value}</p>
              <p className="text-sm text-gray-600">{kpi.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activité récente */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="bg-white rounded-xl border border-gray-200 shadow-sm"
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Activité récente</h2>
                <Button variant="outline" size="sm">
                  Voir tout
                </Button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div
                      className="p-2 rounded-lg flex-shrink-0"
                      style={{ backgroundColor: `${activity.color}15` }}
                    >
                      <activity.icon className="h-5 w-5" style={{ color: activity.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900">{activity.message}</p>
                      <p className="text-sm text-gray-600 truncate">{activity.user}</p>
                    </div>
                    <span className="text-xs text-gray-500 whitespace-nowrap">
                      {activity.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Top Utilisateurs */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="bg-white rounded-xl border border-gray-200 shadow-sm"
          >
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Top Clients</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {topUsers.map((user, index) => (
                  <div
                    key={index}
                    className="p-3 border border-gray-200 rounded-lg hover:border-[#5e2d91] transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900 text-sm">
                        {user.name}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        user.plan === "Enterprise"
                          ? "bg-purple-100 text-purple-800"
                          : user.plan === "Pro"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-green-100 text-green-800"
                      }`}>
                        {user.plan}
                      </span>
                    </div>
                    <div className="text-xs text-gray-600 space-y-1">
                      <div className="flex justify-between">
                        <span>Webinaires</span>
                        <span className="font-semibold">{user.webinars}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Participants</span>
                        <span className="font-semibold">{user.participants.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Revenue</span>
                        <span className="font-semibold text-[#FF4500]">{user.revenue}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="mt-6 bg-gradient-to-r from-[#5e2d91] to-[#6639B7] rounded-xl p-6 text-white"
      >
        <h2 className="text-xl font-bold mb-4">Actions rapides</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Button
            size="lg"
            className="bg-white text-[#5e2d91] hover:bg-gray-100 font-semibold w-full"
          >
            Créer licence
          </Button>
          <Button
            size="lg"
            className="bg-white text-[#5e2d91] hover:bg-gray-100 font-semibold w-full"
          >
            Nouvel utilisateur
          </Button>
          <Button
            size="lg"
            className="bg-white text-[#5e2d91] hover:bg-gray-100 font-semibold w-full"
          >
            Export données
          </Button>
          <Button
            size="lg"
            className="bg-white text-[#5e2d91] hover:bg-gray-100 font-semibold w-full"
          >
            Voir rapports
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

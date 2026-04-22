import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { 
  Key, 
  Plus, 
  Search, 
  Filter,
  Download,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  Calendar,
  Users,
  DollarSign,
  MoreVertical
} from "lucide-react";

export function AdminLicenses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("Tous");
  const [filterPlan, setFilterPlan] = useState("Tous");
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Données simulées - Licences
  const licenses = [
    {
      id: "LIC-001",
      customer: "Tech Solutions SAS",
      email: "contact@techsolutions.fr",
      plan: "Enterprise",
      status: "Active",
      startDate: "01 Jan 2026",
      endDate: "31 Déc 2026",
      users: 50,
      maxUsers: 100,
      webinars: 45,
      revenue: "Custom",
      autoRenew: true
    },
    {
      id: "LIC-002",
      customer: "StartupInnovante",
      email: "hello@startup.io",
      plan: "Pro",
      status: "Active",
      startDate: "15 Fév 2026",
      endDate: "15 Fév 2027",
      users: 12,
      maxUsers: 25,
      webinars: 32,
      revenue: "129€/mois",
      autoRenew: true
    },
    {
      id: "LIC-003",
      customer: "Corporate France",
      email: "info@corporate.com",
      plan: "Pro",
      status: "Expiring Soon",
      startDate: "01 Mars 2026",
      endDate: "15 Mars 2026",
      users: 8,
      maxUsers: 25,
      webinars: 28,
      revenue: "129€/mois",
      autoRenew: false
    },
    {
      id: "LIC-004",
      customer: "Digital Agency",
      email: "contact@digital.fr",
      plan: "Start",
      status: "Active",
      startDate: "10 Jan 2026",
      endDate: "10 Jan 2027",
      users: 5,
      maxUsers: 10,
      webinars: 18,
      revenue: "49€/mois",
      autoRenew: true
    },
    {
      id: "LIC-005",
      customer: "Marketing Pro",
      email: "team@marketingpro.fr",
      plan: "Start",
      status: "Suspended",
      startDate: "20 Déc 2025",
      endDate: "20 Déc 2026",
      users: 3,
      maxUsers: 10,
      webinars: 5,
      revenue: "49€/mois",
      autoRenew: false
    },
    {
      id: "LIC-006",
      customer: "Consulting Group",
      email: "info@consulting.com",
      plan: "Pro",
      status: "Trial",
      startDate: "01 Mars 2026",
      endDate: "31 Mars 2026",
      users: 4,
      maxUsers: 25,
      webinars: 2,
      revenue: "0€ (essai)",
      autoRenew: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Trial":
        return "bg-blue-100 text-blue-800";
      case "Expiring Soon":
        return "bg-orange-100 text-orange-800";
      case "Suspended":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case "Enterprise":
        return "bg-purple-100 text-purple-800";
      case "Pro":
        return "bg-blue-100 text-blue-800";
      case "Start":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredLicenses = licenses.filter((lic) => {
    const matchesSearch =
      lic.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lic.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lic.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = filterStatus === "Tous" || lic.status === filterStatus;
    const matchesPlan = filterPlan === "Tous" || lic.plan === filterPlan;

    return matchesSearch && matchesStatus && matchesPlan;
  });

  // Stats
  const stats = [
    {
      label: "Total licences",
      value: licenses.length,
      icon: Key,
      color: "#6639B7"
    },
    {
      label: "Licences actives",
      value: licenses.filter(l => l.status === "Active").length,
      icon: CheckCircle,
      color: "#34B233"
    },
    {
      label: "En période d'essai",
      value: licenses.filter(l => l.status === "Trial").length,
      icon: Calendar,
      color: "#0085CA"
    },
    {
      label: "Revenue total",
      value: "95,450€/mois",
      icon: DollarSign,
      color: "#FF4500"
    }
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Gestion des Licences
        </h1>
        <p className="text-gray-600">
          Gérez les licences Rainbow Webinar de vos clients
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className="p-3 rounded-lg"
                style={{ backgroundColor: `${stat.color}15` }}
              >
                <stat.icon className="h-6 w-6" style={{ color: stat.color }} />
              </div>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Filters & Actions */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="flex-1 w-full lg:max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher par client, email ou ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5e2d91] focus:border-transparent"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-2 flex-wrap">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5e2d91] focus:border-transparent"
            >
              <option>Tous</option>
              <option>Active</option>
              <option>Trial</option>
              <option>Expiring Soon</option>
              <option>Suspended</option>
            </select>

            <select
              value={filterPlan}
              onChange={(e) => setFilterPlan(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5e2d91] focus:border-transparent"
            >
              <option>Tous</option>
              <option>Enterprise</option>
              <option>Pro</option>
              <option>Start</option>
            </select>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="gap-2"
            >
              <Download className="h-4 w-4" />
              Export CSV
            </Button>
            <Button
              onClick={() => setShowCreateModal(true)}
              className="bg-[#5e2d91] hover:bg-[#4a2373] text-white gap-2"
            >
              <Plus className="h-4 w-4" />
              Nouvelle licence
            </Button>
          </div>
        </div>
      </div>

      {/* Licenses Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  ID / Client
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Plan
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Statut
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Utilisateurs
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Période
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Revenue
                </th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredLicenses.map((license, index) => (
                <motion.tr
                  key={license.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.02 }}
                  className="hover:bg-gray-50 transition-colors"
                >
                  {/* ID / Client */}
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-semibold text-gray-900">{license.id}</div>
                      <div className="text-sm text-gray-900">{license.customer}</div>
                      <div className="text-sm text-gray-500">{license.email}</div>
                    </div>
                  </td>

                  {/* Plan */}
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPlanColor(license.plan)}`}>
                      {license.plan}
                    </span>
                  </td>

                  {/* Statut */}
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1 w-fit ${getStatusColor(license.status)}`}>
                        {license.status === "Active" && <CheckCircle className="h-3 w-3" />}
                        {license.status === "Suspended" && <XCircle className="h-3 w-3" />}
                        {license.status}
                      </span>
                      {license.autoRenew && (
                        <span className="text-xs text-gray-500">Auto-renouvellement</span>
                      )}
                    </div>
                  </td>

                  {/* Utilisateurs */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span className="font-medium text-gray-900">
                        {license.users}/{license.maxUsers}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {license.webinars} webinaires
                    </div>
                  </td>

                  {/* Période */}
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{license.startDate}</div>
                    <div className="text-sm text-gray-500">→ {license.endDate}</div>
                  </td>

                  {/* Revenue */}
                  <td className="px-6 py-4">
                    <div className="font-semibold text-gray-900">{license.revenue}</div>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="gap-2"
                      >
                        <Edit className="h-4 w-4" />
                        Modifier
                      </Button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <MoreVertical className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex items-center justify-between">
        <div className="text-sm text-gray-600">
          Affichage de {filteredLicenses.length} licence(s) sur {licenses.length}
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Précédent</Button>
          <Button variant="outline" size="sm">Suivant</Button>
        </div>
      </div>
    </div>
  );
}

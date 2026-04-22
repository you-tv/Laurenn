import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { 
  Users, 
  Plus, 
  Search, 
  Mail,
  Shield,
  Edit,
  Trash2,
  Ban,
  CheckCircle,
  Clock,
  MoreVertical,
  Building,
  Calendar
} from "lucide-react";

export function AdminUsers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("Tous");
  const [filterStatus, setFilterStatus] = useState("Tous");

  // Données simulées - Utilisateurs
  const users = [
    {
      id: 1,
      name: "Marie Dubois",
      email: "marie.dubois@techsolutions.fr",
      company: "Tech Solutions SAS",
      role: "Admin",
      status: "Active",
      plan: "Enterprise",
      lastLogin: "Il y a 2h",
      joinDate: "15 Jan 2026",
      webinars: 45,
      avatar: null
    },
    {
      id: 2,
      name: "Thomas Martin",
      email: "thomas.martin@startup.io",
      company: "StartupInnovante",
      role: "User",
      status: "Active",
      plan: "Pro",
      lastLogin: "Il y a 5h",
      joinDate: "20 Fév 2026",
      webinars: 32,
      avatar: null
    },
    {
      id: 3,
      name: "Sophie Bernard",
      email: "sophie.bernard@corp.com",
      company: "Corporate France",
      role: "User",
      status: "Active",
      plan: "Pro",
      lastLogin: "Il y a 1 jour",
      joinDate: "05 Mars 2026",
      webinars: 28,
      avatar: null
    },
    {
      id: 4,
      name: "Laurent Petit",
      email: "laurent.petit@agency.fr",
      company: "Digital Agency",
      role: "User",
      status: "Active",
      plan: "Start",
      lastLogin: "Il y a 3h",
      joinDate: "10 Jan 2026",
      webinars: 18,
      avatar: null
    },
    {
      id: 5,
      name: "Julie Robert",
      email: "julie.robert@company.com",
      company: "Company Ltd",
      role: "User",
      status: "Suspended",
      plan: "Start",
      lastLogin: "Il y a 15 jours",
      joinDate: "01 Déc 2025",
      webinars: 5,
      avatar: null
    },
    {
      id: 6,
      name: "Pierre Moreau",
      email: "pierre.moreau@business.fr",
      company: "Business Solutions",
      role: "Admin",
      status: "Pending",
      plan: "Pro",
      lastLogin: "Jamais",
      joinDate: "04 Mars 2026",
      webinars: 0,
      avatar: null
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-orange-100 text-orange-800";
      case "Suspended":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Admin":
        return "bg-purple-100 text-purple-800";
      case "User":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.company.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRole = filterRole === "Tous" || user.role === filterRole;
    const matchesStatus = filterStatus === "Tous" || user.status === filterStatus;

    return matchesSearch && matchesRole && matchesStatus;
  });

  // Stats
  const stats = [
    {
      label: "Total utilisateurs",
      value: users.length,
      icon: Users,
      color: "#6639B7"
    },
    {
      label: "Utilisateurs actifs",
      value: users.filter(u => u.status === "Active").length,
      icon: CheckCircle,
      color: "#34B233"
    },
    {
      label: "En attente",
      value: users.filter(u => u.status === "Pending").length,
      icon: Clock,
      color: "#FF4500"
    },
    {
      label: "Administrateurs",
      value: users.filter(u => u.role === "Admin").length,
      icon: Shield,
      color: "#CF0072"
    }
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Gestion des Utilisateurs
        </h1>
        <p className="text-gray-600">
          Gérez les comptes utilisateurs Rainbow Webinar
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
                placeholder="Rechercher par nom, email ou entreprise..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5e2d91] focus:border-transparent"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-2 flex-wrap">
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5e2d91] focus:border-transparent"
            >
              <option>Tous</option>
              <option>Admin</option>
              <option>User</option>
            </select>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5e2d91] focus:border-transparent"
            >
              <option>Tous</option>
              <option>Active</option>
              <option>Pending</option>
              <option>Suspended</option>
            </select>
          </div>

          {/* Actions */}
          <Button
            className="bg-[#5e2d91] hover:bg-[#4a2373] text-white gap-2"
          >
            <Plus className="h-4 w-4" />
            Nouvel utilisateur
          </Button>
        </div>
      </div>

      {/* Users Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredUsers.map((user, index) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5e2d91] to-[#6639B7] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {user.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{user.name}</h3>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Mail className="h-3 w-3" />
                    <span>{user.email}</span>
                  </div>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <MoreVertical className="h-4 w-4 text-gray-600" />
              </button>
            </div>

            {/* Info */}
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <Building className="h-4 w-4 text-gray-400" />
                <span className="text-gray-900">{user.company}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span className="text-gray-600">Inscrit le {user.joinDate}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-gray-400" />
                <span className="text-gray-600">Dernière connexion: {user.lastLogin}</span>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getRoleColor(user.role)}`}>
                {user.role}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(user.status)}`}>
                {user.status}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800">
                {user.plan}
              </span>
            </div>

            {/* Stats */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">{user.webinars}</span> webinaires créés
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                className="flex-1 gap-2"
              >
                <Edit className="h-4 w-4" />
                Modifier
              </Button>
              {user.status === "Active" ? (
                <Button
                  size="sm"
                  variant="outline"
                  className="gap-2 text-orange-600 hover:bg-orange-50"
                >
                  <Ban className="h-4 w-4" />
                  Suspendre
                </Button>
              ) : user.status === "Suspended" ? (
                <Button
                  size="sm"
                  variant="outline"
                  className="gap-2 text-green-600 hover:bg-green-50"
                >
                  <CheckCircle className="h-4 w-4" />
                  Activer
                </Button>
              ) : (
                <Button
                  size="sm"
                  variant="outline"
                  className="gap-2 text-blue-600 hover:bg-blue-50"
                >
                  <Mail className="h-4 w-4" />
                  Inviter
                </Button>
              )}
              <Button
                size="sm"
                variant="outline"
                className="gap-2 text-red-600 hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex items-center justify-between">
        <div className="text-sm text-gray-600">
          Affichage de {filteredUsers.length} utilisateur(s) sur {users.length}
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Précédent</Button>
          <Button variant="outline" size="sm">Suivant</Button>
        </div>
      </div>
    </div>
  );
}

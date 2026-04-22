import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { 
  LayoutDashboard, 
  Users, 
  LogOut,
  Key,
  BarChart3,
  FileText,
  Settings,
  Search,
  Bell,
  Shield
} from "lucide-react";
import rainbowLogo from "figma:asset/e64e7302fb552f059e39a93028a3e1c87f690926.png";
import { AdminDashboard } from "../components/admin/admin-dashboard";
import { AdminLicenses } from "../components/admin/admin-licenses";
import { AdminUsers } from "../components/admin/admin-users";
import { AdminAnalytics } from "../components/admin/admin-analytics";
import { AdminCMS } from "../components/admin/admin-cms";
import { AdminSettings } from "../components/admin/admin-settings";

export default function Admin() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [notifications, setNotifications] = useState(3);

  // Simuler un admin connecté
  const adminUser = {
    name: "Admin Rainbow",
    email: "admin@alcatel-lucent.com",
    role: "Super Admin",
    avatar: null
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar Admin */}
      <nav className="bg-gradient-to-r from-[#5e2d91] to-[#6639B7] border-b border-white/10 fixed top-0 left-0 right-0 z-50 shadow-lg">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <img src={rainbowLogo} alt="Rainbow" className="h-10" />
              <div className="h-8 w-px bg-white/30" />
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-white" />
                <span className="text-white font-semibold">Admin Panel</span>
              </div>
            </div>
            
            {/* Right side */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60" />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 w-64"
                />
              </div>

              {/* Notifications */}
              <button className="relative p-2 hover:bg-white/10 rounded-lg transition-colors">
                <Bell className="h-5 w-5 text-white" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#FF4500] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>

              {/* Admin info */}
              <div className="flex items-center gap-3 px-3 py-2 bg-white/10 rounded-lg">
                <div className="hidden md:block text-right">
                  <div className="text-sm font-semibold text-white">{adminUser.name}</div>
                  <div className="text-xs text-white/70">{adminUser.role}</div>
                </div>
                <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {adminUser.name.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Back to Client Space */}
              <Link to="/dashboard">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 border-white/30 text-white hover:bg-white/10"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  <span className="hidden md:inline">Espace Client</span>
                </Button>
              </Link>

              {/* Logout */}
              <Link to="/">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 border-white/30 text-white hover:bg-white/10"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="hidden md:inline">Déconnexion</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16 flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen fixed left-0 top-16 shadow-sm">
          <nav className="p-4 space-y-2">
            {[
              { id: "dashboard", label: "Vue d'ensemble", icon: LayoutDashboard },
              { id: "licenses", label: "Gestion Licences", icon: Key },
              { id: "users", label: "Gestion Utilisateurs", icon: Users },
              { id: "analytics", label: "Analytics", icon: BarChart3 },
              { id: "cms", label: "CMS & Contenu", icon: FileText },
              { id: "settings", label: "Paramètres", icon: Settings }
            ].map((item) => {
              const isActive = activeTab === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-[#5e2d91] to-[#6639B7] text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Quick Stats in Sidebar */}
          <div className="p-4 border-t border-gray-200 mt-4">
            <div className="text-xs font-semibold text-gray-500 uppercase mb-3">
              Résumé rapide
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Utilisateurs actifs</span>
                <span className="font-bold text-[#34B233]">1,247</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Licences en cours</span>
                <span className="font-bold text-[#6639B7]">856</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Revenus ce mois</span>
                <span className="font-bold text-[#FF4500]">94,350€</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Admin Content */}
        <main className="ml-64 flex-1 p-8">
          {activeTab === "dashboard" && <AdminDashboard />}
          {activeTab === "licenses" && <AdminLicenses />}
          {activeTab === "users" && <AdminUsers />}
          {activeTab === "analytics" && <AdminAnalytics />}
          {activeTab === "cms" && <AdminCMS />}
          {activeTab === "settings" && <AdminSettings />}
        </main>
      </div>
    </div>
  );
}

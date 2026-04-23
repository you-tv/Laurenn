import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { Link, useNavigate } from "react-router";
import rainbowLogo from "figma:asset/rainbow_logo_main.png";
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
  Download,
  Plus,
  Edit,
  FileText,
  Clock,
  CheckCircle2,
  AlertCircle,
  MapPin
} from "lucide-react";
// logo import above

export default function Billing() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("billing");

  // Données simulées
  const currentSubscription = {
    plan: "Rainbow Webinar Pro",
    price: "129€",
    billing: "mensuel",
    nextPayment: "15 Avril 2026",
    paymentMethod: "Carte bancaire •••• 4242"
  };

  const invoices = [
    {
      id: "INV-2026-003",
      date: "15 Mars 2026",
      amount: "129,00 €",
      status: "Payée",
      downloadUrl: "#"
    },
    {
      id: "INV-2026-002",
      date: "15 Février 2026",
      amount: "129,00 €",
      status: "Payée",
      downloadUrl: "#"
    },
    {
      id: "INV-2026-001",
      date: "15 Janvier 2026",
      amount: "129,00 €",
      status: "Payée",
      downloadUrl: "#"
    }
  ];

  const upcomingPayments = [
    {
      date: "15 Avril 2026",
      amount: "129,00 €",
      description: "Rainbow Webinar Pro - Abonnement mensuel"
    },
    {
      date: "15 Mai 2026",
      amount: "129,00 €",
      description: "Rainbow Webinar Pro - Abonnement mensuel"
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
                Facturation
              </h1>
              <p className="text-gray-600">
                Gérez vos paiements, factures et informations de facturation
              </p>
            </div>

            {/* Abonnement actuel */}
            <div className="bg-gradient-to-r from-[#5e2d91] to-[#6639B7] rounded-xl p-8 mb-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Abonnement actuel</h2>
                  <div className="space-y-1">
                    <p className="text-lg">
                      <span className="font-semibold">{currentSubscription.plan}</span> - {currentSubscription.price}/{currentSubscription.billing}
                    </p>
                    <p className="text-white/80 text-sm">
                      Prochain paiement : {currentSubscription.nextPayment}
                    </p>
                    <p className="text-white/80 text-sm">
                      Méthode : {currentSubscription.paymentMethod}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white/10 text-white border-white/30 hover:bg-white/20"
                  >
                    Voir contrat
                  </Button>
                  <Button
                    size="lg"
                    className="bg-white text-[#5e2d91] hover:bg-gray-100 font-semibold"
                  >
                    Changer d'abonnement
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Factures */}
              <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900">Factures récentes</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {invoices.map((invoice) => (
                      <div
                        key={invoice.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-green-100 rounded-lg">
                            <FileText className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{invoice.id}</p>
                            <p className="text-sm text-gray-600">{invoice.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="font-bold text-gray-900">{invoice.amount}</p>
                            <p className="text-xs text-green-600 flex items-center gap-1">
                              <CheckCircle2 className="h-3 w-3" />
                              {invoice.status}
                            </p>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="gap-2"
                          >
                            <Download className="h-4 w-4" />
                            PDF
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4">
                    Voir toutes les factures
                  </Button>
                </div>
              </div>

              {/* Prochaines échéances */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900">Prochaines échéances</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {upcomingPayments.map((payment, index) => (
                      <div
                        key={index}
                        className="p-4 bg-orange-50 border border-orange-200 rounded-lg"
                      >
                        <div className="flex items-start gap-3">
                          <Clock className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <p className="font-semibold text-gray-900">{payment.amount}</p>
                            <p className="text-sm text-gray-600 mt-1">{payment.date}</p>
                            <p className="text-xs text-gray-500 mt-1">{payment.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Paiement automatique activé</p>
                        <p className="text-xs text-gray-600 mt-1">
                          Les factures seront prélevées automatiquement
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modes de paiement */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Modes de paiement</h2>
                <Button
                  size="sm"
                  className="bg-[#5e2d91] hover:bg-[#4a2373] gap-2"
                >
                  <Plus className="h-4 w-4" />
                  Ajouter une carte
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-[#5e2d91]/10 to-[#6639B7]/10 rounded-xl border-2 border-[#5e2d91]/20">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-[#5e2d91] rounded-lg">
                      <CreditCard className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold text-gray-900">Carte bancaire •••• 4242</p>
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded">
                          Par défaut
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">Expire le 12/2028</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 border-red-300 hover:bg-red-50">
                      Supprimer
                    </Button>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Modes de paiement acceptés</p>
                      <p className="text-sm text-gray-600">
                        Nous acceptons les cartes bancaires Visa, Mastercard, American Express, ainsi que les virements SEPA pour les entreprises.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Informations de facturation */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Informations de facturation</h2>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2"
                >
                  <Edit className="h-4 w-4" />
                  Modifier
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom de l'entreprise
                  </label>
                  <p className="text-gray-900 font-semibold bg-gray-50 px-4 py-3 rounded-lg">
                    Entreprise SAS
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    N° de TVA intracommunautaire
                  </label>
                  <p className="text-gray-900 font-semibold bg-gray-50 px-4 py-3 rounded-lg">
                    FR12345678901
                  </p>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="h-4 w-4 inline mr-2" />
                    Adresse de facturation
                  </label>
                  <div className="bg-gray-50 px-4 py-3 rounded-lg">
                    <p className="text-gray-900 font-semibold">123 Avenue des Champs-Élysées</p>
                    <p className="text-gray-600">75008 Paris, France</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Factures conformes</p>
                    <p className="text-xs text-gray-600 mt-1">
                      Vos factures sont conformes à la réglementation française et européenne en vigueur.
                    </p>
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
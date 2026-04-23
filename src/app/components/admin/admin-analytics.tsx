import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  FunnelChart,
  Funnel,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import {
  TrendingUp,
  Users,
  DollarSign,
  MousePointerClick,
  Download,
  ShoppingCart,
  Eye,
  Target,
  Search,
  Share2,
  Mail,
  Handshake,
  ArrowUp,
  ArrowDown,
  Megaphone
} from "lucide-react";

export function AdminAnalytics() {
  const [period, setPeriod] = useState("30days");

  // ============================================
  // 1️⃣ ACQUISITION - Trafic et Sources
  // ============================================
  
  // Trafic total par jour (dernière semaine)
  const trafficData = [
    { day: "Lun", visits: 1250, uniqueVisitors: 980 },
    { day: "Mar", visits: 1420, uniqueVisitors: 1130 },
    { day: "Mer", visits: 1680, uniqueVisitors: 1320 },
    { day: "Jeu", visits: 1580, uniqueVisitors: 1240 },
    { day: "Ven", visits: 1390, uniqueVisitors: 1100 },
    { day: "Sam", visits: 890, uniqueVisitors: 720 },
    { day: "Dim", visits: 760, uniqueVisitors: 610 }
  ];

  // Sources de trafic
  const trafficSourcesData = [
    { name: "SEO", value: 3840, color: "#34B233" },
    { name: "Ads", value: 2560, color: "#FF4500" },
    { name: "Social", value: 1920, color: "#0085CA" },
    { name: "Partenaires", value: 1280, color: "#6639B7" },
    { name: "Email", value: 1600, color: "#CF0072" }
  ];

  // ============================================
  // 2️⃣ CONVERSION - Funnel et Taux
  // ============================================
  
  // Funnel de conversion
  const conversionFunnelData = [
    { stage: "Visite site", value: 10000, fill: "#0085CA" },
    { stage: "Page Produit", value: 6500, fill: "#6639B7" },
    { stage: "Page Pricing", value: 3200, fill: "#34B233" },
    { stage: "Checkout", value: 1800, fill: "#FF4500" },
    { stage: "Achat finalisé", value: 1280, fill: "#CF0072" }
  ];

  // Abandon panier par étape
  const abandonmentData = [
    { step: "Pricing", abandoned: 28, completed: 72 },
    { step: "Info client", abandoned: 35, completed: 65 },
    { step: "Paiement", abandoned: 22, completed: 78 },
    { step: "Confirmation", abandoned: 8, completed: 92 }
  ];

  // ============================================
  // 3️⃣ PRODUIT - Pages vues et CTA
  // ============================================
  
  // Pages les plus vues
  const topPagesData = [
    { page: "/", views: 8450, avgTime: "2:35" },
    { page: "/pricing", views: 6320, avgTime: "3:45" },
    { page: "/product/webinar", views: 5210, avgTime: "4:12" },
    { page: "/product/collaboration", views: 3890, avgTime: "3:28" },
    { page: "/blog", views: 2760, avgTime: "5:20" }
  ];

  // Clics CTA
  const ctaClicksData = [
    { cta: "Essai gratuit", clicks: 1580 },
    { cta: "Voir démo", clicks: 2340 },
    { cta: "Contactez-nous", clicks: 890 },
    { cta: "En savoir plus", clicks: 1420 },
    { cta: "S'inscrire", clicks: 1120 }
  ];

  // ============================================
  // 4️⃣ BUSINESS - Revenus et Licences
  // ============================================
  
  // Revenus mensuels (6 derniers mois)
  const revenueData = [
    { month: "Oct", revenue: 52800, licenses: 410 },
    { month: "Nov", revenue: 61500, licenses: 520 },
    { month: "Déc", revenue: 73200, licenses: 640 },
    { month: "Jan", revenue: 82400, licenses: 780 },
    { month: "Fév", revenue: 91300, licenses: 920 },
    { month: "Mar", revenue: 94350, licenses: 1247 }
  ];

  // Panier moyen par plan
  const avgBasketData = [
    { plan: "Start", avgValue: 49, sales: 275 },
    { plan: "Pro", avgValue: 129, sales: 456 },
    { plan: "Enterprise", avgValue: 450, sales: 125 }
  ];

  // ============================================
  // KPIs Principaux
  // ============================================
  
  const kpis = [
    {
      label: "Trafic Total",
      value: "11,200",
      change: "+18.3%",
      trend: "up",
      icon: Eye,
      color: "#0085CA"
    },
    {
      label: "Taux de Conversion",
      value: "12.8%",
      change: "+2.3%",
      trend: "up",
      icon: Target,
      color: "#34B233"
    },
    {
      label: "Revenu Total",
      value: "94,350€",
      change: "+15.2%",
      trend: "up",
      icon: DollarSign,
      color: "#FF4500"
    },
    {
      label: "Panier Moyen",
      value: "189€",
      change: "+8.5%",
      trend: "up",
      icon: ShoppingCart,
      color: "#6639B7"
    }
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics E-commerce</h1>
          <p className="text-gray-600">
            Marketing, Conversion & Performance commerciale Rainbow Webinar
          </p>
        </div>
        <div className="flex gap-2">
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5e2d91] focus:border-transparent"
          >
            <option value="7days">7 derniers jours</option>
            <option value="30days">30 derniers jours</option>
            <option value="90days">90 derniers jours</option>
            <option value="12months">12 derniers mois</option>
          </select>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* KPIs Principaux */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpis.map((kpi, index) => (
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
                style={{ backgroundColor: `${kpi.color}15` }}
              >
                <kpi.icon className="h-6 w-6" style={{ color: kpi.color }} />
              </div>
              <div
                className={`flex items-center gap-1 text-sm font-semibold ${
                  kpi.trend === "up" ? "text-green-600" : "text-red-600"
                }`}
              >
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

      {/* ============================================ */}
      {/* SECTION 1: ACQUISITION */}
      {/* ============================================ */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <Megaphone className="h-7 w-7 text-[#FF4500]" />
          1. Acquisition - Trafic & Sources
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Trafic Total */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-6"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Trafic Total (dernière semaine)
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={trafficData}>
                <defs>
                  <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0085CA" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#0085CA" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorUnique" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6639B7" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#6639B7" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="day" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="visits"
                  stroke="#0085CA"
                  fillOpacity={1}
                  fill="url(#colorVisits)"
                  name="Visites totales"
                />
                <Area
                  type="monotone"
                  dataKey="uniqueVisitors"
                  stroke="#6639B7"
                  fillOpacity={1}
                  fill="url(#colorUnique)"
                  name="Visiteurs uniques"
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Sources de Trafic */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-6"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Sources de Trafic
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={trafficSourcesData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {trafficSourcesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {trafficSourcesData.map((source, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className="w-4 h-4 rounded"
                    style={{ backgroundColor: source.color }}
                  />
                  <div className="text-sm">
                    <div className="font-semibold text-gray-900">{source.value}</div>
                    <div className="text-gray-600">{source.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Sources détaillées - icônes */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { name: "SEO", value: "3,840", icon: Search, color: "#34B233" },
            { name: "Ads", value: "2,560", icon: Megaphone, color: "#FF4500" },
            { name: "Social", value: "1,920", icon: Share2, color: "#0085CA" },
            { name: "Partenaires", value: "1,280", icon: Handshake, color: "#6639B7" },
            { name: "Email", value: "1,600", icon: Mail, color: "#CF0072" }
          ].map((source, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
              className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                style={{ backgroundColor: `${source.color}15` }}
              >
                <source.icon className="h-5 w-5" style={{ color: source.color }} />
              </div>
              <p className="text-2xl font-bold text-gray-900">{source.value}</p>
              <p className="text-sm text-gray-600">{source.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ============================================ */}
      {/* SECTION 2: CONVERSION */}
      {/* ============================================ */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <Target className="h-7 w-7 text-[#34B233]" />
          2. Conversion - Funnel & Taux
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Funnel de conversion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-6"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Funnel de Conversion (visite → achat)
            </h3>
            
            {/* Graphique funnel simplifié avec barres */}
            <div className="space-y-3">
              {conversionFunnelData.map((step, index) => {
                const percentage = ((step.value / conversionFunnelData[0].value) * 100).toFixed(1);
                return (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{step.stage}</span>
                      <span className="text-sm font-bold text-gray-900">
                        {step.value.toLocaleString()} ({percentage}%)
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-8">
                      <div
                        className="h-8 rounded-full flex items-center justify-end pr-3 text-white text-xs font-semibold"
                        style={{
                          width: `${percentage}%`,
                          backgroundColor: step.fill
                        }}
                      >
                        {percentage}%
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Taux de conversion global */}
            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Taux de conversion global</span>
                <span className="text-2xl font-bold text-green-600">12.8%</span>
              </div>
            </div>
          </motion.div>

          {/* Abandon de panier */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-6"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Abandon Panier par Étape
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={abandonmentData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis type="number" stroke="#9ca3af" />
                <YAxis dataKey="step" type="category" stroke="#9ca3af" />
                <Tooltip />
                <Legend />
                <Bar dataKey="completed" stackId="a" fill="#34B233" name="Finalisé (%)" />
                <Bar dataKey="abandoned" stackId="a" fill="#CF0072" name="Abandonné (%)" />
              </BarChart>
            </ResponsiveContainer>
            
            {/* Stats abandons */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                <p className="text-sm text-gray-600 mb-1">Taux abandon moyen</p>
                <p className="text-2xl font-bold text-red-600">23.3%</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-gray-600 mb-1">Paniers récupérables</p>
                <p className="text-2xl font-bold text-blue-600">420</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ============================================ */}
      {/* SECTION 3: PRODUIT */}
      {/* ============================================ */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <Eye className="h-7 w-7 text-[#0085CA]" />
          3. Produit - Pages & CTA
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pages les plus vues */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-6"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Pages les Plus Vues
            </h3>
            <div className="space-y-4">
              {topPagesData.map((page, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{page.page}</div>
                    <div className="text-sm text-gray-600">Temps moyen: {page.avgTime}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[#0085CA]">
                      {page.views.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">vues</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Clics CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-6"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Clics sur les CTA
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={ctaClicksData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="cta" stroke="#9ca3af" angle={-15} textAnchor="end" height={80} />
                <YAxis stroke="#9ca3af" />
                <Tooltip />
                <Bar dataKey="clicks" fill="#6639B7" name="Clics" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            
            {/* Note heatmap */}
            <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-center gap-2 text-sm text-purple-900">
                <MousePointerClick className="h-4 w-4" />
                <span className="font-semibold">Heatmap disponible</span>
              </div>
              <p className="text-xs text-purple-700 mt-1">
                Analysez le comportement utilisateur avec la heatmap interactive (Google Analytics / Hotjar)
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ============================================ */}
      {/* SECTION 4: BUSINESS */}
      {/* ============================================ */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <DollarSign className="h-7 w-7 text-[#FF4500]" />
          4. Business - Revenus & Licences
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenus & Licences */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-6"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Revenus & Licences Vendues (6 mois)
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRevenue2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF4500" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#FF4500" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorLicenses" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6639B7" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#6639B7" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#FF4500"
                  fillOpacity={1}
                  fill="url(#colorRevenue2)"
                  name="Revenue (€)"
                />
                <Area
                  type="monotone"
                  dataKey="licenses"
                  stroke="#6639B7"
                  fillOpacity={1}
                  fill="url(#colorLicenses)"
                  name="Licences"
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Panier Moyen par Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-6"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Panier Moyen par Plan
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={avgBasketData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="plan" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip />
                <Legend />
                <Bar dataKey="avgValue" fill="#34B233" name="Valeur moy. (€)" radius={[8, 8, 0, 0]} />
                <Bar dataKey="sales" fill="#0085CA" name="Nombre ventes" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>

            {/* Stats business */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <p className="text-xs text-gray-600 mb-1">Revenu total</p>
                <p className="text-xl font-bold text-orange-600">94,350€</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <p className="text-xs text-gray-600 mb-1">Licences</p>
                <p className="text-xl font-bold text-purple-600">1,247</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-xs text-gray-600 mb-1">Panier moy.</p>
                <p className="text-xl font-bold text-green-600">189€</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Note finale */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200 p-6"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
            <TrendingUp className="h-6 w-6 text-[#6639B7]" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              💡 Intégration recommandée : Google Analytics ou Matomo
            </h3>
            <p className="text-gray-700">
              Pour un tracking précis et en temps réel, connectez <strong>Google Analytics 4</strong> ou <strong>Matomo</strong> 
              pour mesurer acquisition, conversion et comportement utilisateur. Ces outils fourniront des données réelles 
              pour optimiser votre stratégie marketing et maximiser vos ventes.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
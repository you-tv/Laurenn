import { motion } from "motion/react";
import { BarChart, TrendingUp, Users, Video, Clock, Zap, MessageSquare, HelpCircle, FileVideo, PieChart } from "lucide-react";
import { Card } from "./ui/card";
import { analyticsTracker } from "../services/analytics-tracker";
import { useEffect, useState } from "react";

interface KPICardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: React.ElementType;
  color: string;
  trend?: string;
}

function KPICard({ title, value, subtitle, icon: Icon, color, trend }: KPICardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-lg bg-gradient-to-br ${color}`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          {trend && (
            <div className="flex items-center gap-1 text-green-600 text-sm">
              <TrendingUp className="h-4 w-4" />
              <span>{trend}</span>
            </div>
          )}
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
        </div>
      </Card>
    </motion.div>
  );
}

export function WebinarAnalyticsDashboard({ userId }: { userId?: string }) {
  const [kpis, setKpis] = useState(analyticsTracker.getKPIs(userId));

  useEffect(() => {
    // Refresh KPIs every 5 seconds
    const interval = setInterval(() => {
      setKpis(analyticsTracker.getKPIs(userId));
    }, 5000);

    return () => clearInterval(interval);
  }, [userId]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Tableau de bord Analytics</h2>
          <p className="text-gray-600 mt-1">Suivez vos KPIs et l'engagement de votre essai</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-lg">
          <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-purple-700 font-medium">Tracking actif</span>
        </div>
      </div>

      {/* Core KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Webinaires créés"
          value={kpis.webinarsCreated}
          subtitle="Total pendant l'essai"
          icon={Video}
          color="from-[#6639B7] to-[#5e2d91]"
        />
        
        <KPICard
          title="Webinaires lancés"
          value={kpis.webinarsLaunched}
          subtitle={`Taux de lancement: ${kpis.launchRate}%`}
          icon={Zap}
          color="from-[#FF4500] to-[#ff6a33]"
          trend={kpis.launchRate > 50 ? "+15%" : undefined}
        />

        <KPICard
          title="Temps au 1er webinaire"
          value={kpis.timeToFirstWebinar !== null ? `${kpis.timeToFirstWebinar}j` : "N/A"}
          subtitle="Délai d'activation"
          icon={Clock}
          color="from-[#0085CA] to-[#0066a0]"
        />

        <KPICard
          title="Clics 'S'abonner'"
          value={kpis.subscribeClicks}
          subtitle="Intention de conversion"
          icon={TrendingUp}
          color="from-[#34B233] to-[#2a9129]"
        />
      </div>

      {/* Feature Adoption */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-purple-100">
            <PieChart className="h-5 w-5 text-[#5e2d91]" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Adoption des fonctionnalités</h3>
            <p className="text-sm text-gray-600">Utilisation par feature</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(kpis.featureAdoption).map(([feature, count]) => {
            const featureConfig: Record<string, { label: string; icon: React.ElementType; color: string }> = {
              recording: { label: "Enregistrement", icon: FileVideo, color: "#CF0072" },
              qa: { label: "Q&A", icon: HelpCircle, color: "#FF4500" },
              chat: { label: "Chat", icon: MessageSquare, color: "#34B233" },
              analytics: { label: "Analytics", icon: BarChart, color: "#0085CA" },
              polls: { label: "Sondages", icon: PieChart, color: "#6639B7" },
              screen_share: { label: "Partage d'écran", icon: Video, color: "#5e2d91" }
            };

            const config = featureConfig[feature];
            const Icon = config.icon;

            return (
              <div key={feature} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Icon className="h-5 w-5" style={{ color: config.color }} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{config.label}</p>
                  <p className="text-xs text-gray-600">{count} utilisations</p>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Engagement Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold text-gray-900 mb-4">📊 Insights clés</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <div className="h-1.5 w-1.5 bg-green-500 rounded-full mt-1.5"></div>
              <div>
                <span className="font-medium">Taux d'activation:</span>{" "}
                {kpis.webinarsCreated > 0 ? "✅ Utilisateur activé" : "⏳ En attente du 1er webinaire"}
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-1.5"></div>
              <div>
                <span className="font-medium">Signal de valeur:</span>{" "}
                {kpis.webinarsLaunched >= 2 ? "🔥 Fort engagement (repeat usage)" : "🌱 Usage initial"}
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-1.5 w-1.5 bg-purple-500 rounded-full mt-1.5"></div>
              <div>
                <span className="font-medium">Intention de conversion:</span>{" "}
                {kpis.subscribeClicks > 0 ? `💎 ${kpis.subscribeClicks} intérêts exprimés` : "📢 Aucun clic CTA"}
              </div>
            </li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold text-gray-900 mb-4">🎯 Recommandations</h3>
          <ul className="space-y-3 text-sm">
            {kpis.webinarsCreated === 0 && (
              <li className="flex items-start gap-2">
                <span className="text-orange-500">⚡</span>
                <div>Créez votre premier webinaire pour débloquer la valeur du produit</div>
              </li>
            )}
            {kpis.launchRate < 50 && kpis.webinarsCreated > 0 && (
              <li className="flex items-start gap-2">
                <span className="text-blue-500">💡</span>
                <div>Lancez vos webinaires créés pour maximiser votre ROI</div>
              </li>
            )}
            {Object.values(kpis.featureAdoption).every(v => v === 0) && (
              <li className="flex items-start gap-2">
                <span className="text-purple-500">🚀</span>
                <div>Explorez les fonctionnalités : enregistrement, Q&A, sondages...</div>
              </li>
            )}
            {kpis.webinarsLaunched >= 2 && (
              <li className="flex items-start gap-2">
                <span className="text-green-500">✨</span>
                <div>Excellent ! Vous utilisez activement Rainbow Webinar</div>
              </li>
            )}
          </ul>
        </Card>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { 
  Calendar, 
  Clock, 
  Users, 
  Video, 
  BarChart3, 
  Settings, 
  FileText, 
  Plus,
  Play,
  Download,
  Search,
  ChevronDown,
  MoreVertical,
  CalendarCheck,
  TrendingUp
} from "lucide-react";
import { useLanguage } from "../i18n/language-context";
import { WebinarAnalyticsDashboard } from "../components/webinar-analytics-dashboard";
import { SubscribeCTABanner } from "../components/subscribe-cta-banner";
import { ReportProblemButton } from "../components/report-problem-button";
import { analyticsTracker } from "../services/analytics-tracker";
import webinarMockup from "figma:asset/webinar_mockup.jpg";
import itServicesImage from "figma:asset/it_services.jpg";

interface Webinar {
  id: string;
  title: string;
  date: string;
  time: string;
  duration: string;
  thumbnail: string;
  status: 'upcoming' | 'completed' | 'recording-ready';
  registrants: number;
  participants: number;
  recordingUrl?: string;
}

export default function WebinarSpace() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past' | 'analytics'>('analytics');
  const [selectedWebinar, setSelectedWebinar] = useState<Webinar | null>(null);
  const [trialDaysRemaining] = useState(23); // Mock trial days
  const [showWelcome, setShowWelcome] = useState(false);
  const userId = localStorage.getItem('rainbow_user_id') || 'user_demo_123';

  // Track trial activation on mount
  useEffect(() => {
    // Check if user just arrived from CTA
    const trialStart = localStorage.getItem('rainbow_trial_start');
    if (trialStart) {
      const startDate = new Date(trialStart);
      const now = new Date();
      const diffMinutes = (now.getTime() - startDate.getTime()) / (1000 * 60);
      
      // Show welcome banner if less than 5 minutes since trial start
      if (diffMinutes < 5) {
        setShowWelcome(true);
      }
    }
    
    analyticsTracker.track('trial_activated', { userId });
    
    // Generate some demo tracking data for demo purposes
    const initializeDemoData = () => {
      // Simulate past webinar creations
      pastWebinars.forEach((webinar, index) => {
        analyticsTracker.track('webinar_created', { 
          userId, 
          webinarId: webinar.id,
          metadata: { createdAt: new Date(Date.now() - (index + 1) * 24 * 60 * 60 * 1000) }
        });
        
        analyticsTracker.track('webinar_launched', { 
          userId, 
          webinarId: webinar.id 
        });
        
        // Simulate attendees joining
        for (let i = 0; i < webinar.participants; i++) {
          analyticsTracker.track('attendee_joined', { 
            userId, 
            webinarId: webinar.id 
          });
        }
        
        // Simulate feature usage
        if (index % 2 === 0) {
          analyticsTracker.track('feature_used', { 
            userId, 
            webinarId: webinar.id, 
            feature: 'recording' 
          });
        }
        if (index % 3 === 0) {
          analyticsTracker.track('feature_used', { 
            userId, 
            webinarId: webinar.id, 
            feature: 'qa' 
          });
        }
        analyticsTracker.track('feature_used', { 
          userId, 
          webinarId: webinar.id, 
          feature: 'chat' 
        });
      });
      
      // Upcoming webinar
      analyticsTracker.track('webinar_created', { 
        userId, 
        webinarId: upcomingWebinars[0].id 
      });
    };
    
    // Only initialize demo data once
    const hasInitialized = localStorage.getItem('rainbow_demo_initialized');
    if (!hasInitialized) {
      initializeDemoData();
      localStorage.setItem('rainbow_demo_initialized', 'true');
    }
  }, []);

  const pastWebinars: Webinar[] = [
    {
      id: '1',
      title: 'VGA PROD DU MODE "SPEAKER 30" AKA EXTENDED BACKSTAGE',
      date: '09 FÉV. 2026',
      time: '20:30',
      duration: '1 heure',
      thumbnail: webinarMockup,
      status: 'recording-ready',
      registrants: 150,
      participants: 89
    },
    {
      id: '2',
      title: 'DEAL MANAGEMENT PROCESSES',
      date: '06 FÉV. 2026',
      time: '17:00',
      duration: '1 heure',
      thumbnail: itServicesImage,
      status: 'recording-ready',
      registrants: 200,
      participants: 156
    },
    {
      id: '3',
      title: 'DEAL MANAGEMENT PROCESSES',
      date: '05 FÉV. 2026',
      time: '09:00',
      duration: '1 heure',
      thumbnail: itServicesImage,
      status: 'recording-ready',
      registrants: 180,
      participants: 134
    },
    {
      id: '4',
      title: 'WHAT TO SELL - COMMUNICATIONS & RAINBOW SERVICES',
      date: '05 FÉV. 2026',
      time: '17:00',
      duration: '1 heure',
      thumbnail: webinarMockup,
      status: 'recording-ready',
      registrants: 220,
      participants: 178
    },
    {
      id: '5',
      title: 'WHAT TO SELL - COMMUNICATIONS & RAINBOW SERVICES',
      date: '05 FÉV. 2026',
      time: '09:00',
      duration: '1 heure',
      thumbnail: webinarMockup,
      status: 'recording-ready',
      registrants: 195,
      participants: 142
    },
    {
      id: '6',
      title: 'WHAT TO SELL - NETWORK',
      date: '04 FÉV. 2026',
      time: '17:00',
      duration: '1 heure',
      thumbnail: itServicesImage,
      status: 'recording-ready',
      registrants: 165,
      participants: 121
    }
  ];

  const upcomingWebinars: Webinar[] = [
    {
      id: 'up1',
      title: 'MARKETING PRESENTATION',
      date: '21 AOÛT 2025',
      time: '17:30 - 23:15',
      duration: '04:30',
      thumbnail: webinarMockup,
      status: 'upcoming',
      registrants: 250,
      participants: 0
    }
  ];

  const webinars = activeTab === 'past' ? pastWebinars : upcomingWebinars;

  useEffect(() => {
    if (selectedWebinar) {
      analyticsTracker.trackWebinarView(selectedWebinar.id);
    }
  }, [selectedWebinar]);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-16 bg-[#5e2d91] flex flex-col items-center py-6 space-y-6">
        <div className="w-10 h-10 bg-gradient-to-br from-[#FF4500] via-[#CF0072] to-[#6639B7] rounded-lg flex items-center justify-center">
          <Video className="h-6 w-6 text-white" />
        </div>
        
        <nav className="flex-1 flex flex-col space-y-4">
          <button className="p-3 text-white hover:bg-white/10 rounded-lg transition-colors">
            <Calendar className="h-5 w-5" />
          </button>
          <button className="p-3 text-white hover:bg-white/10 rounded-lg transition-colors">
            <Video className="h-5 w-5" />
          </button>
          <button className="p-3 text-white hover:bg-white/10 rounded-lg transition-colors">
            <BarChart3 className="h-5 w-5" />
          </button>
          <button className="p-3 text-white hover:bg-white/10 rounded-lg transition-colors">
            <FileText className="h-5 w-5" />
          </button>
          <button className="p-3 text-white hover:bg-white/10 rounded-lg transition-colors">
            <Settings className="h-5 w-5" />
          </button>
        </nav>

        {/* User avatars */}
        <div className="flex flex-col space-y-2">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-semibold">
            JD
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                <span className="text-sm font-medium text-gray-700">Tous les webinaires</span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </button>
              
              <div className="flex items-center space-x-2">
                <button className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900">Trier par:</button>
                <button className="px-3 py-2 text-sm font-medium text-gray-900 border-b-2 border-blue-600">Date</button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <ReportProblemButton userId={userId} webinarId={selectedWebinar?.id} />
              
              <button 
                onClick={() => {
                  analyticsTracker.track('webinar_created', { userId });
                }}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center space-x-2"
              >
                <Plus className="h-5 w-5" />
                <span>Créer un webinaire</span>
              </button>
            </div>
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden">
          {/* Webinars List */}
          <main className="flex-1 overflow-auto p-6">
            {/* Subscribe CTA Banner */}
            <SubscribeCTABanner 
              daysRemaining={trialDaysRemaining} 
              userId={userId}
              variant={trialDaysRemaining <= 7 ? "urgent" : "default"}
            />

            {/* Search */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher un webinaire"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Tabs */}
            <div className="mb-6 border-b border-gray-200">
              <div className="flex space-x-8">
                <button
                  onClick={() => setActiveTab('past')}
                  className={`pb-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === 'past'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  WEBINAIRES PASSÉS ({pastWebinars.length})
                </button>
                <button
                  onClick={() => setActiveTab('upcoming')}
                  className={`pb-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === 'upcoming'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  À VENIR ({upcomingWebinars.length})
                </button>
                <button
                  onClick={() => setActiveTab('analytics')}
                  className={`pb-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === 'analytics'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    <span>ANALYTIQUES</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Content based on active tab */}
            {activeTab === 'analytics' ? (
              <WebinarAnalyticsDashboard userId={userId} />
            ) : (
              <>
                {/* Webinars List */}
                <div className="space-y-4">
                  {webinars.map((webinar) => (
                    <div
                      key={webinar.id}
                      onClick={() => setSelectedWebinar(webinar)}
                      className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div className="flex items-start space-x-4">
                        {/* Date badge */}
                        <div className="flex-shrink-0 text-center bg-gray-100 rounded-lg p-3 w-20">
                          <div className="text-2xl font-bold text-gray-900">
                            {webinar.date.split(' ')[0]}
                          </div>
                          <div className="text-xs text-gray-600">
                            {webinar.date.split(' ')[1]}
                          </div>
                          <div className="text-xs text-gray-600">
                            {webinar.date.split(' ')[2]}
                          </div>
                          <div className="text-sm font-semibold text-gray-900 mt-1">
                            {webinar.time.split('-')[0] || webinar.time}
                          </div>
                        </div>

                        {/* Thumbnail */}
                        <div className="flex-shrink-0">
                          <img
                            src={webinar.thumbnail}
                            alt={webinar.title}
                            className="w-32 h-20 object-cover rounded-lg"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {webinar.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">
                            Durée : {webinar.duration}
                          </p>
                          {webinar.status === 'recording-ready' && (
                            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                              ENREGISTREMENT PRÊT
                            </span>
                          )}
                          {webinar.status === 'upcoming' && (
                            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                              À VENIR
                            </span>
                          )}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center space-x-2">
                          {webinar.status === 'recording-ready' && (
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                analyticsTracker.track('feature_used', {
                                  userId,
                                  webinarId: webinar.id,
                                  feature: 'analytics'
                                });
                              }}
                              className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            >
                              Rapports
                            </button>
                          )}
                          <button className="p-2 text-gray-400 hover:text-gray-600">
                            <MoreVertical className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Info banner */}
                <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start space-x-3">
                  <CalendarCheck className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Vous avez des webinaires datant de plus de 90 jours.</span> Peut-être pouvez-vous les supprimer ? Un webinaire supprimé ce sont des ressources énergétiques non consommées.
                    </p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">×</button>
                </div>
              </>
            )}
          </main>

          {/* Right Panel - Webinar Details */}
          {selectedWebinar && (
            <aside className="w-80 bg-white border-l border-gray-200 overflow-auto">
              <div className="p-6">
                {/* Webinar header */}
                <div className="mb-6">
                  <div className="bg-gradient-to-br from-[#FF4500] via-[#CF0072] to-[#6639B7] rounded-2xl p-8 text-white mb-4 relative overflow-hidden">
                    <div className="absolute top-4 right-4">
                      <Video className="h-12 w-12 opacity-20" />
                    </div>
                    <div className="relative">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                          <Video className="h-5 w-5" />
                        </div>
                        <span className="text-sm font-semibold">WEBINAR</span>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    {selectedWebinar.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    let's deep dive in our marketing strategy
                  </p>
                  <button className="text-blue-600 text-sm font-medium hover:underline">
                    Voir tous les détails
                  </button>
                </div>

                {/* Schedule */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">
                    Horaires
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 text-sm">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-900">JEUDI</span>
                    </div>
                    <div className="text-sm text-gray-600 ml-7">
                      {selectedWebinar.date}
                    </div>
                    <div className="flex items-center space-x-3 text-sm mt-3">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-900">{selectedWebinar.time}</span>
                    </div>
                  </div>
                </div>

                {/* Duration */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">
                    Durée
                  </h3>
                  <div className="flex items-center space-x-3 text-sm">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-900">{selectedWebinar.duration}</span>
                  </div>
                </div>

                {/* Registration Stats */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">
                    Inscrits
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">INTERVENANTS</span>
                      </div>
                      <span className="font-semibold text-gray-900">
                        {selectedWebinar.status === 'upcoming' ? '2' : selectedWebinar.participants}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">PARTICIPANTS</span>
                      </div>
                      <span className="font-semibold text-gray-900">
                        {selectedWebinar.registrants}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                {selectedWebinar.status === 'recording-ready' && (
                  <div className="space-y-3">
                    <button 
                      onClick={() => {
                        analyticsTracker.track('feature_used', {
                          userId,
                          webinarId: selectedWebinar.id,
                          feature: 'recording'
                        });
                      }}
                      className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center justify-center space-x-2"
                    >
                      <Play className="h-5 w-5" />
                      <span>Voir l'enregistrement</span>
                    </button>
                    <button 
                      onClick={() => {
                        analyticsTracker.track('feature_used', {
                          userId,
                          webinarId: selectedWebinar.id,
                          feature: 'recording'
                        });
                      }}
                      className="w-full px-4 py-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg font-semibold flex items-center justify-center space-x-2"
                    >
                      <Download className="h-5 w-5" />
                      <span>Télécharger</span>
                    </button>
                    <button 
                      onClick={() => {
                        analyticsTracker.track('feature_used', {
                          userId,
                          webinarId: selectedWebinar.id,
                          feature: 'analytics'
                        });
                      }}
                      className="w-full px-4 py-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg font-semibold flex items-center justify-center space-x-2"
                    >
                      <BarChart3 className="h-5 w-5" />
                      <span>Voir les statistiques</span>
                    </button>
                  </div>
                )}

                {selectedWebinar.status === 'upcoming' && (
                  <div className="space-y-3">
                    <button 
                      onClick={() => {
                        analyticsTracker.track('webinar_launched', {
                          userId,
                          webinarId: selectedWebinar.id
                        });
                      }}
                      className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
                    >
                      Lancer le webinaire
                    </button>
                    <button className="w-full px-4 py-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg font-semibold">
                      Modifier le webinaire
                    </button>
                    <button className="w-full px-4 py-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg font-semibold">
                      Partager le lien
                    </button>
                  </div>
                )}
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}
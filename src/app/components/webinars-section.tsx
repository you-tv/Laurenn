import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import {
  Video,
  Calendar,
  Users,
  Clock,
  PlayCircle,
  Download,
  Eye,
  Edit,
  Trash2,
  Copy,
  Mail,
  BarChart3,
  Star,
  MessageSquare,
  Plus
} from "lucide-react";
import { WebinarCreateModal } from "./webinar-create-modal";

interface Webinaire {
  id: number;
  titre: string;
  date: string;
  heure: string;
  statut: string;
  participants: number;
  inscrits: number;
  duree: string;
  enregistrement: boolean;
  lienReplay?: string | null;
  tauxEngagement?: string;
  questions?: number;
  satisfaction?: number;
}

interface WebinarsSectionProps {
  webinaires: Webinaire[];
  trialExpired?: boolean;
}

export function WebinarsSection({ webinaires, trialExpired = false }: WebinarsSectionProps) {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [filterStatut, setFilterStatut] = useState<string>("Tous");

  const filteredWebinaires = webinaires.filter(
    (w) => filterStatut === "Tous" || w.statut === filterStatut
  );

  const getStatutColor = (statut: string) => {
    switch (statut) {
      case "À venir":
        return "bg-blue-100 text-blue-800";
      case "Terminé":
        return "bg-green-100 text-green-800";
      case "En cours":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Mes webinaires</h2>
          <p className="text-gray-600 mt-1">
            {filteredWebinaires.length} webinaire{filteredWebinaires.length > 1 ? "s" : ""}
          </p>
        </div>
        <Button
          onClick={() => setShowCreateModal(true)}
          disabled={trialExpired}
          className="bg-gradient-to-r from-[#5e2d91] to-[#6639B7] hover:from-[#4a2373] hover:to-[#5228a3] text-white gap-2"
        >
          <Plus className="h-5 w-5" />
          Nouveau webinaire
        </Button>
      </div>

      {/* Filtres */}
      <div className="mb-6 flex gap-2">
        {["Tous", "À venir", "Terminé"].map((statut) => (
          <button
            key={statut}
            onClick={() => setFilterStatut(statut)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filterStatut === statut
                ? "bg-[#5e2d91] text-white"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            {statut}
          </button>
        ))}
      </div>

      {/* Liste des webinaires */}
      <div className="space-y-4">
        {filteredWebinaires.map((webinaire, index) => (
          <motion.div
            key={webinaire.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
          >
            <div className="p-6">
              {/* En-tête du webinaire */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{webinaire.titre}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatutColor(webinaire.statut)}`}>
                      {webinaire.statut}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{webinaire.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{webinaire.heure} · {webinaire.duree}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Statistiques */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="bg-gradient-to-br from-[#6639B7]/10 to-[#6639B7]/5 rounded-lg p-3">
                  <div className="flex items-center gap-2 text-[#6639B7] mb-1">
                    <Users className="h-4 w-4" />
                    <span className="text-xs font-medium">Inscrits</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{webinaire.inscrits}</p>
                </div>

                <div className="bg-gradient-to-br from-[#34B233]/10 to-[#34B233]/5 rounded-lg p-3">
                  <div className="flex items-center gap-2 text-[#34B233] mb-1">
                    <Users className="h-4 w-4" />
                    <span className="text-xs font-medium">Participants</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{webinaire.participants}</p>
                  {webinaire.statut === "Terminé" && (
                    <p className="text-xs text-gray-600 mt-1">
                      {Math.round((webinaire.participants / webinaire.inscrits) * 100)}% présence
                    </p>
                  )}
                </div>

                {webinaire.tauxEngagement && (
                  <div className="bg-gradient-to-br from-[#FF4500]/10 to-[#FF4500]/5 rounded-lg p-3">
                    <div className="flex items-center gap-2 text-[#FF4500] mb-1">
                      <MessageSquare className="h-4 w-4" />
                      <span className="text-xs font-medium">Engagement</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{webinaire.tauxEngagement}</p>
                    {webinaire.questions && (
                      <p className="text-xs text-gray-600 mt-1">{webinaire.questions} questions</p>
                    )}
                  </div>
                )}

                {webinaire.satisfaction && (
                  <div className="bg-gradient-to-br from-[#CF0072]/10 to-[#CF0072]/5 rounded-lg p-3">
                    <div className="flex items-center gap-2 text-[#CF0072] mb-1">
                      <Star className="h-4 w-4" />
                      <span className="text-xs font-medium">Satisfaction</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{webinaire.satisfaction}/5</p>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
                {webinaire.statut === "À venir" && (
                  <>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Edit className="h-4 w-4" />
                      Modifier
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Mail className="h-4 w-4" />
                      Inviter
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Copy className="h-4 w-4" />
                      Copier lien
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-[#5e2d91] to-[#6639B7] hover:from-[#4a2373] hover:to-[#5228a3] text-white gap-2 ml-auto"
                    >
                      <PlayCircle className="h-4 w-4" />
                      Lancer
                    </Button>
                  </>
                )}

                {webinaire.statut === "Terminé" && (
                  <>
                    <Button variant="outline" size="sm" className="gap-2">
                      <BarChart3 className="h-4 w-4" />
                      Analytics
                    </Button>
                    {webinaire.lienReplay && (
                      <Button variant="outline" size="sm" className="gap-2">
                        <Eye className="h-4 w-4" />
                        Voir replay
                      </Button>
                    )}
                    {webinaire.enregistrement && (
                      <Button variant="outline" size="sm" className="gap-2">
                        <Download className="h-4 w-4" />
                        Télécharger
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 text-red-600 hover:bg-red-50 ml-auto"
                    >
                      <Trash2 className="h-4 w-4" />
                      Supprimer
                    </Button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredWebinaires.length === 0 && (
        <div className="text-center py-12">
          <Video className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Aucun webinaire trouvé
          </h3>
          <p className="text-gray-600 mb-6">
            {filterStatut === "Tous"
              ? "Commencez par créer votre premier webinaire"
              : `Aucun webinaire ${filterStatut.toLowerCase()}`}
          </p>
          {!trialExpired && filterStatut === "Tous" && (
            <Button
              onClick={() => setShowCreateModal(true)}
              className="bg-[#5e2d91] hover:bg-[#4a2373] text-white gap-2"
            >
              <Plus className="h-5 w-5" />
              Créer mon premier webinaire
            </Button>
          )}
        </div>
      )}

      {/* Modal de création */}
      <WebinarCreateModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
      />
    </div>
  );
}
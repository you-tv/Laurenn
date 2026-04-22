import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import {
  Users,
  Download,
  Filter,
  Search,
  Mail,
  Phone,
  Building,
  Briefcase,
  Calendar,
  Eye,
  Star,
  TrendingUp,
  MessageSquare,
  CheckCircle,
  XCircle
} from "lucide-react";

interface Lead {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  entreprise: string;
  poste: string;
  telephone?: string;
  webinaire: string;
  dateInscription: string;
  statut: "Présent" | "Absent" | "Inscrit";
  dureeParticipation?: string;
  questionsPostees?: number;
  qualification: "Chaud" | "Tiède" | "Froid";
  consentementRGPD: boolean;
}

export function LeadsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterQualification, setFilterQualification] = useState<string>("Tous");

  // Données simulées - Leads
  const leads: Lead[] = [
    {
      id: 1,
      nom: "Dubois",
      prenom: "Marie",
      email: "marie.dubois@entreprise.fr",
      entreprise: "Tech Solutions SAS",
      poste: "Directrice Marketing",
      telephone: "+33 6 12 34 56 78",
      webinaire: "Formation Rainbow Webinar",
      dateInscription: "25 Fév 2026",
      statut: "Présent",
      dureeParticipation: "58 min / 60 min",
      questionsPostees: 5,
      qualification: "Chaud",
      consentementRGPD: true
    },
    {
      id: 2,
      nom: "Martin",
      prenom: "Thomas",
      email: "t.martin@startup.io",
      entreprise: "StartupInnovante",
      poste: "CEO",
      telephone: "+33 6 98 76 54 32",
      webinaire: "Stratégie Marketing 2026",
      dateInscription: "18 Fév 2026",
      statut: "Présent",
      dureeParticipation: "84 min / 90 min",
      questionsPostees: 8,
      qualification: "Chaud",
      consentementRGPD: true
    },
    {
      id: 3,
      nom: "Bernard",
      prenom: "Sophie",
      email: "sophie.bernard@corp.com",
      entreprise: "Corporate France",
      poste: "Responsable Communication",
      webinaire: "Formation Rainbow Webinar",
      dateInscription: "26 Fév 2026",
      statut: "Présent",
      dureeParticipation: "42 min / 60 min",
      questionsPostees: 2,
      qualification: "Tiède",
      consentementRGPD: true
    },
    {
      id: 4,
      nom: "Petit",
      prenom: "Laurent",
      email: "laurent.petit@agency.fr",
      entreprise: "Digital Agency",
      poste: "Chef de projet",
      webinaire: "Démo technique API Rainbow",
      dateInscription: "8 Fév 2026",
      statut: "Présent",
      dureeParticipation: "45 min / 45 min",
      questionsPostees: 12,
      qualification: "Chaud",
      consentementRGPD: true
    },
    {
      id: 5,
      nom: "Robert",
      prenom: "Julie",
      email: "julie.robert@company.com",
      entreprise: "Company Ltd",
      poste: "Marketing Manager",
      webinaire: "Stratégie Marketing 2026",
      dateInscription: "19 Fév 2026",
      statut: "Absent",
      qualification: "Froid",
      consentementRGPD: true
    },
    {
      id: 6,
      nom: "Moreau",
      prenom: "Pierre",
      email: "pierre.moreau@business.fr",
      entreprise: "Business Solutions",
      poste: "Directeur Commercial",
      telephone: "+33 6 45 67 89 01",
      webinaire: "Lancement produit Q1 2026",
      dateInscription: "10 Mars 2026",
      statut: "Inscrit",
      qualification: "Tiède",
      consentementRGPD: true
    }
  ];

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.entreprise.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      filterQualification === "Tous" || lead.qualification === filterQualification;

    return matchesSearch && matchesFilter;
  });

  const getQualificationColor = (qualification: string) => {
    switch (qualification) {
      case "Chaud":
        return "bg-red-100 text-red-800";
      case "Tiède":
        return "bg-orange-100 text-orange-800";
      case "Froid":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatutIcon = (statut: string) => {
    switch (statut) {
      case "Présent":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "Absent":
        return <XCircle className="h-4 w-4 text-red-600" />;
      default:
        return <Calendar className="h-4 w-4 text-blue-600" />;
    }
  };

  const statsLeads = [
    {
      label: "Total leads",
      value: leads.length,
      icon: Users,
      color: "#6639B7"
    },
    {
      label: "Leads chauds",
      value: leads.filter((l) => l.qualification === "Chaud").length,
      icon: TrendingUp,
      color: "#FF4500"
    },
    {
      label: "Taux de conversion",
      value: `${Math.round((leads.filter((l) => l.statut === "Présent").length / leads.length) * 100)}%`,
      icon: Star,
      color: "#34B233"
    },
    {
      label: "Engagement moyen",
      value: "82%",
      icon: MessageSquare,
      color: "#CF0072"
    }
  ];

  const handleExportCSV = () => {
    // Logique d'export CSV
    console.log("Export CSV des leads");
    alert("Export CSV en cours...");
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Leads & Prospection</h2>
        <p className="text-gray-600 mt-1">
          Gérez vos leads et exportez-les vers votre CRM
        </p>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {statsLeads.map((stat, index) => (
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
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Filtres et recherche */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Recherche */}
          <div className="flex-1 w-full md:max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher par nom, email, entreprise..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5e2d91] focus:border-transparent"
              />
            </div>
          </div>

          {/* Filtres qualification */}
          <div className="flex gap-2 flex-wrap">
            {["Tous", "Chaud", "Tiède", "Froid"].map((qual) => (
              <button
                key={qual}
                onClick={() => setFilterQualification(qual)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filterQualification === qual
                    ? "bg-[#5e2d91] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {qual}
              </button>
            ))}
          </div>

          {/* Export */}
          <Button
            onClick={handleExportCSV}
            className="bg-gradient-to-r from-[#5e2d91] to-[#6639B7] hover:from-[#4a2373] hover:to-[#5228a3] text-white gap-2"
          >
            <Download className="h-4 w-4" />
            Export CSV
          </Button>
        </div>
      </div>

      {/* Table des leads */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Entreprise
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Webinaire
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Statut
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Qualification
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredLeads.map((lead, index) => (
                <motion.tr
                  key={lead.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.02 }}
                  className="hover:bg-gray-50 transition-colors"
                >
                  {/* Contact */}
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-semibold text-gray-900">
                        {lead.prenom} {lead.nom}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                        <Mail className="h-3 w-3" />
                        <a
                          href={`mailto:${lead.email}`}
                          className="hover:text-[#5e2d91]"
                        >
                          {lead.email}
                        </a>
                      </div>
                      {lead.telephone && (
                        <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                          <Phone className="h-3 w-3" />
                          <span>{lead.telephone}</span>
                        </div>
                      )}
                    </div>
                  </td>

                  {/* Entreprise */}
                  <td className="px-6 py-4">
                    <div>
                      <div className="flex items-center gap-1 font-medium text-gray-900">
                        <Building className="h-4 w-4 text-gray-400" />
                        {lead.entreprise}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                        <Briefcase className="h-3 w-3" />
                        {lead.poste}
                      </div>
                    </div>
                  </td>

                  {/* Webinaire */}
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{lead.webinaire}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      Inscrit le {lead.dateInscription}
                    </div>
                    {lead.dureeParticipation && (
                      <div className="text-xs text-green-600 mt-1">
                        ⏱️ {lead.dureeParticipation}
                      </div>
                    )}
                    {lead.questionsPostees && lead.questionsPostees > 0 && (
                      <div className="text-xs text-blue-600 mt-1">
                        💬 {lead.questionsPostees} question{lead.questionsPostees > 1 ? "s" : ""}
                      </div>
                    )}
                  </td>

                  {/* Statut */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {getStatutIcon(lead.statut)}
                      <span className="text-sm font-medium text-gray-900">
                        {lead.statut}
                      </span>
                    </div>
                  </td>

                  {/* Qualification */}
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getQualificationColor(
                        lead.qualification
                      )}`}
                    >
                      {lead.qualification}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-2"
                      onClick={() => alert(`Voir le profil de ${lead.prenom} ${lead.nom}`)}
                    >
                      <Eye className="h-4 w-4" />
                      Détails
                    </Button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Informations RGPD */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
          <div>
            <h4 className="font-semibold text-blue-900 mb-1">Conformité RGPD</h4>
            <p className="text-sm text-blue-800">
              Tous les leads ont donné leur consentement explicite lors de l'inscription.
              Données hébergées en France (OVHCloud). Droit de suppression disponible à tout moment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
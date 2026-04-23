import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import {
  FileText,
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  Calendar,
  Tag,
  Image,
  CheckCircle,
  XCircle,
  Clock,
  MoreVertical,
  Star,
  MessageSquare
} from "lucide-react";

export function AdminCMS() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("Tous");
  const [activeSection, setActiveSection] = useState("articles");

  // Données simulées - Articles de blog
  const blogPosts = [
    {
      id: 1,
      title: "Les 10 meilleures pratiques pour un webinaire réussi",
      slug: "meilleures-pratiques-webinaire",
      author: "Admin Rainbow",
      status: "Publié",
      publishDate: "28 Fév 2026",
      views: 1247,
      category: "Guides",
      tags: ["webinar", "best-practices", "engagement"],
      featured: true
    },
    {
      id: 2,
      title: "Comment augmenter l'engagement de votre audience",
      slug: "augmenter-engagement-audience",
      author: "Admin Rainbow",
      status: "Publié",
      publishDate: "20 Fév 2026",
      views: 892,
      category: "Conseils",
      tags: ["engagement", "audience", "tips"],
      featured: false
    },
    {
      id: 3,
      title: "Rainbow Webinar : Nouvelles fonctionnalités Q1 2026",
      slug: "nouvelles-fonctionnalites-q1-2026",
      author: "Admin Rainbow",
      status: "Brouillon",
      publishDate: null,
      views: 0,
      category: "Actualités",
      tags: ["product", "features", "update"],
      featured: false
    },
    {
      id: 4,
      title: "Webinaires vs Vidéos préenregistrées : quel format choisir ?",
      slug: "webinaires-vs-videos",
      author: "Admin Rainbow",
      status: "Programmé",
      publishDate: "10 Mars 2026",
      views: 0,
      category: "Comparatifs",
      tags: ["comparison", "formats", "strategy"],
      featured: false
    },
    {
      id: 5,
      title: "Intégrer Rainbow Webinar avec votre CRM",
      slug: "integration-crm",
      author: "Admin Rainbow",
      status: "Publié",
      publishDate: "15 Fév 2026",
      views: 654,
      category: "Tutoriels",
      tags: ["integration", "crm", "technical"],
      featured: true
    }
  ];

  // Données simulées - Avis clients
  const reviews = [
    {
      id: 1,
      name: "Mz",
      initials: "M",
      rating: 5,
      comment: "Great experience with Rainbow Collaboration",
      color: "#6639B7",
      company: "Tech Solutions",
      position: "CEO",
      status: "Publié",
      date: "05 Mars 2026"
    },
    {
      id: 2,
      name: "Sophie Durand",
      initials: "SD",
      rating: 5,
      comment: "Rainbow Webinar a transformé notre façon d'organiser des événements virtuels. Interface intuitive et fonctionnalités puissantes !",
      color: "#CF0072",
      company: "Digital Marketing Pro",
      position: "Directrice Marketing",
      status: "Publié",
      date: "02 Mars 2026"
    },
    {
      id: 3,
      name: "Marc Lefebvre",
      initials: "ML",
      rating: 5,
      comment: "Excellent outil pour nos webinaires. La qualité vidéo est exceptionnelle et nos participants sont très satisfaits.",
      color: "#0085CA",
      company: "Formation Expert",
      position: "Responsable Formation",
      status: "Publié",
      date: "28 Fév 2026"
    },
    {
      id: 4,
      name: "Julie Martin",
      initials: "JM",
      rating: 5,
      comment: "Les analytics en temps réel nous permettent d'optimiser nos webinaires. Un vrai plus pour notre stratégie marketing !",
      color: "#34B233",
      company: "Growth Agency",
      position: "Head of Growth",
      status: "Publié",
      date: "25 Fév 2026"
    },
    {
      id: 5,
      name: "Thomas Bernard",
      initials: "TB",
      rating: 5,
      comment: "Support client réactif et solution stable. Nous l'utilisons pour tous nos événements d'entreprise.",
      color: "#FF4500",
      company: "Corporate Events",
      position: "Event Manager",
      status: "Publié",
      date: "20 Fév 2026"
    },
    {
      id: 6,
      name: "Caroline Petit",
      initials: "CP",
      rating: 5,
      comment: "La plateforme parfaite pour nos formations en ligne. Nos formateurs adorent la simplicité d'utilisation.",
      color: "#5e2d91",
      company: "Académie Digitale",
      position: "Directrice Pédagogique",
      status: "Publié",
      date: "18 Fév 2026"
    },
    {
      id: 7,
      name: "Jean Dupont",
      initials: "JD",
      rating: 4,
      comment: "Bon produit, mais quelques améliorations seraient bienvenues sur l'interface mobile.",
      color: "#0085CA",
      company: "Mobile First Inc",
      position: "CTO",
      status: "En attente",
      date: "10 Mars 2026"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Publié":
        return "bg-green-100 text-green-800";
      case "Brouillon":
        return "bg-gray-100 text-gray-800";
      case "Programmé":
        return "bg-blue-100 text-blue-800";
      case "En attente":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Publié":
        return <CheckCircle className="h-4 w-4" />;
      case "Brouillon":
        return <Edit className="h-4 w-4" />;
      case "Programmé":
        return <Clock className="h-4 w-4" />;
      case "En attente":
        return <Clock className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesStatus = filterStatus === "Tous" || post.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  const filteredReviews = reviews.filter((review) => {
    const matchesSearch =
      review.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.position.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = filterStatus === "Tous" || review.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  // Stats
  const stats = [
    {
      label: "Total articles",
      value: blogPosts.length,
      icon: FileText,
      color: "#6639B7"
    },
    {
      label: "Articles publiés",
      value: blogPosts.filter((p) => p.status === "Publié").length,
      icon: CheckCircle,
      color: "#34B233"
    },
    {
      label: "Brouillons",
      value: blogPosts.filter((p) => p.status === "Brouillon").length,
      icon: Edit,
      color: "#FF4500"
    },
    {
      label: "Vues totales",
      value: blogPosts.reduce((acc, post) => acc + post.views, 0).toLocaleString(),
      icon: Eye,
      color: "#0085CA"
    }
  ];

  const reviewStats = [
    {
      label: "Total avis",
      value: reviews.length,
      icon: MessageSquare,
      color: "#6639B7"
    },
    {
      label: "Avis publiés",
      value: reviews.filter((r) => r.status === "Publié").length,
      icon: CheckCircle,
      color: "#34B233"
    },
    {
      label: "En attente",
      value: reviews.filter((r) => r.status === "En attente").length,
      icon: Clock,
      color: "#FF4500"
    },
    {
      label: "Note moyenne",
      value: (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1),
      icon: Star,
      color: "#FFD700"
    }
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">CMS & Contenu</h1>
        <p className="text-gray-600">
          Gérez le contenu du blog, les avis clients et la documentation Rainbow Webinar
        </p>
      </div>

      {/* Navigation CMS */}
      <div className="mb-6 flex gap-2">
        {["articles", "avis", "catégories", "médias"].map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeSection === section
                ? "bg-[#5e2d91] text-white"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>

      {activeSection === "articles" && (
        <>
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
                    placeholder="Rechercher un article..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5e2d91] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Filter */}
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5e2d91] focus:border-transparent"
              >
                <option>Tous</option>
                <option>Publié</option>
                <option>Brouillon</option>
                <option>Programmé</option>
              </select>

              {/* Actions */}
              <Button className="bg-[#5e2d91] hover:bg-[#4a2373] text-white gap-2">
                <Plus className="h-4 w-4" />
                Nouvel article
              </Button>
            </div>
          </div>

          {/* Articles List */}
          <div className="space-y-4">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6"
              >
                <div className="flex items-start gap-6">
                  {/* Image placeholder */}
                  <div className="w-32 h-32 bg-gradient-to-br from-[#5e2d91] to-[#6639B7] rounded-lg flex-shrink-0 flex items-center justify-center">
                    <Image className="h-12 w-12 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Title & badges */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{post.title}</h3>
                          {post.featured && (
                            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded">
                              ⭐ Featured
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">/{post.slug}</p>
                      </div>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <MoreVertical className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {post.publishDate || "Non programmé"}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Tag className="h-4 w-4" />
                        <span>{post.category}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{post.views.toLocaleString()} vues</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${getStatusColor(
                          post.status
                        )}`}
                      >
                        {getStatusIcon(post.status)}
                        {post.status}
                      </span>
                      {post.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="gap-2">
                        <Edit className="h-4 w-4" />
                        Modifier
                      </Button>
                      <Button size="sm" variant="outline" className="gap-2">
                        <Eye className="h-4 w-4" />
                        Aperçu
                      </Button>
                      {post.status === "Brouillon" && (
                        <Button
                          size="sm"
                          className="bg-[#5e2d91] hover:bg-[#4a2373] text-white gap-2"
                        >
                          <CheckCircle className="h-4 w-4" />
                          Publier
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
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </>
      )}

      {activeSection === "avis" && (
        <>
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {reviewStats.map((stat, index) => (
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
                    placeholder="Rechercher un avis..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5e2d91] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Filter */}
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5e2d91] focus:border-transparent"
              >
                <option>Tous</option>
                <option>Publié</option>
                <option>En attente</option>
              </select>

              {/* Actions */}
              <Button className="bg-[#5e2d91] hover:bg-[#4a2373] text-white gap-2">
                <Plus className="h-4 w-4" />
                Nouvel avis
              </Button>
            </div>
          </div>

          {/* Reviews List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold"
                      style={{ backgroundColor: review.color }}
                    >
                      {review.initials}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{review.name}</h3>
                      <p className="text-sm text-gray-600">
                        {review.position} at {review.company}
                      </p>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreVertical className="h-4 w-4 text-gray-600" />
                  </button>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-5 h-5 ${
                        star <= review.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{review.comment}"
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>{review.date}</span>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${getStatusColor(
                      review.status
                    )}`}
                  >
                    {getStatusIcon(review.status)}
                    {review.status}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="gap-2">
                    <Edit className="h-4 w-4" />
                    Modifier
                  </Button>
                  {review.status === "En attente" && (
                    <Button
                      size="sm"
                      className="bg-[#5e2d91] hover:bg-[#4a2373] text-white gap-2"
                    >
                      <CheckCircle className="h-4 w-4" />
                      Publier
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
        </>
      )}

      {activeSection === "catégories" && (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <Tag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Gestion des Catégories
          </h3>
          <p className="text-gray-600 mb-6">
            Créez et organisez les catégories de contenu
          </p>
          <Button className="bg-[#5e2d91] hover:bg-[#4a2373] text-white">
            Gérer les catégories
          </Button>
        </div>
      )}

      {activeSection === "médias" && (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <Image className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Bibliothèque de Médias
          </h3>
          <p className="text-gray-600 mb-6">
            Uploadez et gérez vos images, vidéos et fichiers
          </p>
          <Button className="bg-[#5e2d91] hover:bg-[#4a2373] text-white">
            Gérer les médias
          </Button>
        </div>
      )}
    </div>
  );
}

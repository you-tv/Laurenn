import { useState } from "react";
import { Link } from "react-router";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Calendar, Clock, User, Search, Tag, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { blogPosts, getAllCategories } from "../data/blog-posts";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = getAllCategories();

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #e5e7eb 1px, transparent 1px),
              linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            opacity: 0.3
          }}
        />
        <div className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-[#5e2d91]/5 via-white/0 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#5e2d91]/5 via-white to-[#5e2d91]/8">
            <div className="max-w-7xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-[#CF0072] via-[#FF4500] via-[#34B233] via-[#0085CA] to-[#6639B7] bg-clip-text text-transparent">
                    Blog Rainbow Webinar
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Guides, conseils et bonnes pratiques pour réussir vos webinaires professionnels
                </p>
                
                {/* Search Bar */}
                <div className="max-w-2xl mx-auto">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Rechercher un article..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-12 pr-4 py-6 text-lg bg-white/95 backdrop-blur"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Categories Filter */}
          <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap gap-3 justify-center">
                <Button
                  onClick={() => setSelectedCategory(null)}
                  variant={!selectedCategory ? "default" : "outline"}
                  className={!selectedCategory ? "bg-[#5e2d91] hover:bg-[#4a2270]" : ""}
                >
                  Tous les articles
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={selectedCategory === category ? "bg-[#5e2d91] hover:bg-[#4a2270]" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              {filteredPosts.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <p className="text-xl text-gray-600">
                    Aucun article trouvé. Essayez un autre terme de recherche.
                  </p>
                </motion.div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post, index) => (
                    <motion.div
                      key={post.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Link to={`/blog/${post.slug}`}>
                        <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 h-full group">
                          {/* Image */}
                          <div className="relative h-48 overflow-hidden">
                            <img 
                              src={post.imageUrl} 
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute top-4 left-4">
                              <span 
                                className="px-3 py-1 rounded-full text-white text-sm font-bold"
                                style={{ backgroundColor: post.categoryColor }}
                              >
                                {post.category}
                              </span>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-6">
                            {/* Meta */}
                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{post.date}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#5e2d91] transition-colors">
                              {post.title}
                            </h3>

                            {/* Excerpt */}
                            <p className="text-gray-600 mb-4 line-clamp-3">
                              {post.excerpt}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {post.tags.slice(0, 3).map((tag) => (
                                <span 
                                  key={tag}
                                  className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>

                            {/* Author */}
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-[#5e2d91]/10 rounded-full flex items-center justify-center">
                                  <User className="h-4 w-4 text-[#5e2d91]" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-gray-900">{post.author}</p>
                                  <p className="text-xs text-gray-500">{post.authorRole}</p>
                                </div>
                              </div>
                              <ArrowRight className="h-5 w-5 text-[#5e2d91] group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#5e2d91] to-[#6639B7]">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">
                  Prêt à organiser votre premier webinaire ?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Mettez en pratique ces conseils avec Rainbow Webinar
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-white text-[#5e2d91] hover:bg-gray-100 text-lg px-8"
                  >
                    Essai gratuit 30 jours
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#5e2d91] text-[#5e2d91] bg-white hover:bg-gray-100 text-lg px-8"
                    onClick={() => window.open('https://app.storylane.io/share/njaxojcgqihp', '_blank')}
                  >
                    Voir une démo
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
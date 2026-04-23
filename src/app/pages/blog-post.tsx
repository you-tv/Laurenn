import { useParams, Link, Navigate } from "react-router";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Calendar, Clock, User, ArrowLeft, Tag, Share2 } from "lucide-react";
import { motion } from "motion/react";
import { getBlogPost, blogPosts } from "../data/blog-posts";
import ReactMarkdown from "react-markdown";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

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
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        
        <main>
          {/* Back Button */}
          <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Link to="/blog">
                <Button variant="ghost" className="text-[#5e2d91] hover:text-[#4a2270]">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Retour au blog
                </Button>
              </Link>
            </div>
          </section>

          {/* Article Header */}
          <section className="pb-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Category Badge */}
                <div className="mb-4">
                  <span 
                    className="px-4 py-2 rounded-full text-white text-sm font-bold"
                    style={{ backgroundColor: post.categoryColor }}
                  >
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                  {post.title}
                </h1>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[#5e2d91]/10 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-[#5e2d91]" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{post.author}</p>
                      <p className="text-sm text-gray-500">{post.authorRole}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-5 w-5" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-5 w-5" />
                    <span>{post.readTime} de lecture</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Featured Image */}
          <section className="pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-2xl overflow-hidden shadow-2xl"
              >
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-[400px] object-cover"
                />
              </motion.div>
            </div>
          </section>

          {/* Article Content */}
          <section className="pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="p-8 sm:p-12 shadow-xl">
                  <article className="prose prose-lg max-w-none">
                    <ReactMarkdown
                      components={{
                        h1: ({node, ...props}) => <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4" {...props} />,
                        h2: ({node, ...props}) => <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" {...props} />,
                        h3: ({node, ...props}) => <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3" {...props} />,
                        p: ({node, ...props}) => <p className="text-gray-700 leading-relaxed mb-4" {...props} />,
                        ul: ({node, ...props}) => <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700" {...props} />,
                        ol: ({node, ...props}) => <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700" {...props} />,
                        li: ({node, ...props}) => <li className="ml-4" {...props} />,
                        strong: ({node, ...props}) => <strong className="font-bold text-gray-900" {...props} />,
                        em: ({node, ...props}) => <em className="italic text-gray-800" {...props} />,
                        blockquote: ({node, ...props}) => (
                          <blockquote className="border-l-4 border-[#5e2d91] pl-4 italic text-gray-700 my-4" {...props} />
                        ),
                        hr: ({node, ...props}) => <hr className="my-8 border-gray-200" {...props} />,
                        table: ({node, ...props}) => (
                          <div className="overflow-x-auto my-6">
                            <table className="min-w-full divide-y divide-gray-200 border border-gray-200" {...props} />
                          </div>
                        ),
                        thead: ({node, ...props}) => <thead className="bg-gray-50" {...props} />,
                        th: ({node, ...props}) => <th className="px-4 py-3 text-left text-sm font-bold text-gray-900 border border-gray-200" {...props} />,
                        td: ({node, ...props}) => <td className="px-4 py-3 text-sm text-gray-700 border border-gray-200" {...props} />,
                      }}
                    >
                      {post.content}
                    </ReactMarkdown>
                  </article>
                </Card>
              </motion.div>
            </div>
          </section>

          {/* Share Section */}
          <section className="pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 bg-gradient-to-br from-[#5e2d91]/5 to-[#6639B7]/5 border-2 border-[#5e2d91]/20">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#5e2d91] rounded-full flex items-center justify-center">
                      <Share2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Cet article vous a plu ?</h3>
                      <p className="text-gray-600 text-sm">Partagez-le avec votre réseau</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button 
                      variant="outline"
                      className="border-[#5e2d91] text-[#5e2d91] hover:bg-[#5e2d91] hover:text-white"
                    >
                      LinkedIn
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-[#5e2d91] text-[#5e2d91] hover:bg-[#5e2d91] hover:text-white"
                    >
                      Twitter
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Articles similaires
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost, index) => (
                    <motion.div
                      key={relatedPost.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Link to={`/blog/${relatedPost.slug}`}>
                        <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full group">
                          <div className="relative h-48 overflow-hidden">
                            <img 
                              src={relatedPost.imageUrl} 
                              alt={relatedPost.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute top-4 left-4">
                              <span 
                                className="px-3 py-1 rounded-full text-white text-sm font-bold"
                                style={{ backgroundColor: relatedPost.categoryColor }}
                              >
                                {relatedPost.category}
                              </span>
                            </div>
                          </div>
                          <div className="p-6">
                            <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>{relatedPost.readTime}</span>
                              </div>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#5e2d91] transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h3>
                          </div>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#5e2d91] to-[#6639B7]">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">
                  Prêt à passer à l'action ?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Organisez votre premier webinaire professionnel avec Rainbow Webinar
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
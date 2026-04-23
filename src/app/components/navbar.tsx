import { Button } from "./ui/button";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation, useNavigate } from "react-router";
import { useLanguage } from "../i18n/language-context";
import type { Language } from "../i18n/translations";
import rainbowLogo from "figma:asset/rainbow_logo_main.png";

const languageLabels: Record<Language, string> = {
  fr: '🇫🇷 FR',
  en: '🇬🇧 EN',
  es: '🇪🇸 ES',
  it: '🇮🇹 IT',
  de: '🇩🇪 DE'
};

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const productsRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(event.target as Node)) {
        setProductsDropdownOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setResourcesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const resourcesLinks = [
    { label: t.nav.blog, href: '/blog' },
    { label: 'Légal', href: '/legal' },
    { label: t.nav.support, href: '/support' },
    { label: 'Sécurité & Certifications', href: '/security' },
  ];

  const productsLinks = [
    { 
      title: 'Rainbow Webinar', 
      description: 'Logiciel de webinaires et d\'événements virtuels',
      href: '/product/webinar',
      color: '#FF4500' // Orange
    },
    { 
      title: 'Rainbow Collaboration', 
      description: 'Logiciel de visioconférence',
      href: '/product/collaboration',
      color: '#0085CA' // Bleu ciel
    },
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-28">
          {/* Logo */}
          <motion.div 
            className="flex items-center -ml-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/" className="cursor-pointer hover:opacity-80 transition-opacity">
              <img 
                src={rainbowLogo} 
                alt="Rainbow" 
                className="h-24 rounded-[10px]"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation - Left Side (Promotional Links) */}
          <motion.div 
            className="hidden md:flex items-center gap-8 flex-1 ml-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div 
              className="relative" 
              ref={productsRef}
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <motion.button
                className="text-gray-700 hover:text-[#ff6b35] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.nav.product}
              </motion.button>
              
              <AnimatePresence>
                {productsDropdownOpen && (
                  <motion.div 
                    className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {productsLinks.map((link, index) => (
                      <Link
                        key={index}
                        to={link.href}
                        className="block px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        <div className="flex items-center gap-2">
                          <div className="font-semibold text-gray-900 text-sm">{link.title}</div>
                        </div>
                        <div className="text-xs text-gray-600">{link.description}</div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link to="/pricing">
              <motion.button
                className="text-gray-700 hover:text-[#ff6b35] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.nav.pricing}
              </motion.button>
            </Link>
            <div 
              className="relative" 
              ref={resourcesRef}
              onMouseEnter={() => setResourcesDropdownOpen(true)}
              onMouseLeave={() => setResourcesDropdownOpen(false)}
            >
              <motion.button
                className="text-gray-700 hover:text-[#ff6b35] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.nav.resources}
              </motion.button>
              
              <AnimatePresence>
                {resourcesDropdownOpen && (
                  <motion.div 
                    className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {resourcesLinks.map((link, index) => (
                      link.href.startsWith('/') ? (
                        <Link
                          key={index}
                          to={link.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#ff6b35] transition-colors"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          key={index}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#ff6b35] transition-colors"
                        >
                          {link.label}
                        </a>
                      )
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link to="/about">
              <motion.button
                className="text-gray-700 hover:text-[#ff6b35] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.nav.about}
              </motion.button>
            </Link>
          </motion.div>

          {/* Desktop Navigation - Right Side (Actions) */}
          <motion.div 
            className="hidden md:flex items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Language Selector */}
            <div className="flex items-center gap-2">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="appearance-none bg-transparent text-gray-700 text-sm font-medium px-3 py-2 pr-8 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#5e2d91] transition-colors cursor-pointer"
              >
                {Object.entries(languageLabels).map(([lang, label]) => (
                  <option key={lang} value={lang}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            
            <Link to="/login">
              <motion.button
                className="text-gray-700 hover:text-[#5e2d91] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.nav.signIn}
              </motion.button>
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="md:hidden py-4 space-y-4 border-t border-gray-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <button
                  onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {t.nav.product}
                </button>
                
                <AnimatePresence>
                  {productsDropdownOpen && (
                    <motion.div 
                      className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {productsLinks.map((link, index) => (
                        <Link
                          key={index}
                          to={link.href}
                          className="block px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                        >
                          <div className="font-semibold text-gray-900 text-sm mb-1">{link.title}</div>
                          <div className="text-xs text-gray-600">{link.description}</div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link to="/pricing" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium">
                {t.nav.pricing}
              </Link>
              <div className="relative">
                <button
                  onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {t.nav.resources}
                </button>
                
                <AnimatePresence>
                  {resourcesDropdownOpen && (
                    <motion.div 
                      className="absolute left-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {resourcesLinks.map((link, index) => (
                        link.href.startsWith('/') ? (
                          <Link
                            key={index}
                            to={link.href}
                            className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-50 transition-colors"
                          >
                            <span className="text-sm">{link.label}</span>
                          </Link>
                        ) : (
                          <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-50 transition-colors"
                          >
                            <span className="text-sm">{link.label}</span>
                          </a>
                        )
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link to="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium">
                {t.nav.about}
              </Link>
              <Link to="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium">
                {t.nav.signIn}
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
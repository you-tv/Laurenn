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
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const mainLinks = [
    { label: 'Produits', href: '/product' },
    { label: 'Tarifs', href: '/pricing' },
  ];

  const resourceLinks = [
    { label: 'Blog', href: '/blog' },
    { label: 'Avis clients', href: '/testimonials' },
    { label: "Centre d'aide", href: '/support' },
    { label: 'Sécurité & Certifications', href: '/security' },
    { label: 'Legal Center', href: '/legal' },
  ];

  const languages = [
    { code: 'fr', label: '🇫🇷 FR' },
    { code: 'en', label: '🇬🇧 EN' },
    { code: 'de', label: '🇩🇪 DE' },
  ];

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setResourcesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setResourcesOpen(false);
    }, 150);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center -ml-2">
            <Link to="/" className="cursor-pointer hover:opacity-80 transition-opacity">
              <img 
                src={rainbowLogo} 
                alt="Rainbow" 
                className="h-20 w-auto object-contain rounded-[8px]"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 flex-1 ml-12 justify-center">
            {mainLinks.map((link, index) => (
              <Link key={index} to={link.href}>
                <button className="text-gray-600 hover:text-[#5e2d91] transition-colors font-semibold text-sm">
                  {link.label}
                </button>
              </Link>
            ))}
            
            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 text-gray-600 hover:text-[#5e2d91] transition-colors font-semibold text-sm group">
                Ressources
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {resourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-64"
                  >
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden p-2">
                      {resourceLinks.map((link, index) => (
                        <Link 
                          key={index} 
                          to={link.href}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors group/item"
                        >
                          <span className="text-sm font-medium text-gray-700 group-hover/item:text-[#5e2d91]">
                            {link.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/about">
              <button className="text-gray-600 hover:text-[#5e2d91] transition-colors font-semibold text-sm">
                À propos
              </button>
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6">
            {/* Language Selector */}
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-gray-400" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as any)}
                className="appearance-none bg-transparent text-gray-700 text-sm font-bold px-1 py-2 rounded-md hover:text-[#5e2d91] focus:outline-none transition-colors cursor-pointer"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.code.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
            
            <Link to="/login" className="text-gray-600 hover:text-[#5e2d91] font-semibold text-sm transition-colors">
              Se connecter
            </Link>

            <Link to="/product">
              <button className="bg-[#5e2d91] text-white px-6 py-2.5 rounded-[10px] font-bold text-sm hover:bg-[#4a2373] transition-all shadow-lg shadow-purple-500/20 active:scale-95">
                Explorez nos produits
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="md:hidden py-6 space-y-4 border-t border-gray-100 bg-white absolute left-0 right-0 shadow-xl overflow-y-auto max-h-[80vh]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 space-y-1">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Menu</p>
                {mainLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className="block py-3 text-gray-700 hover:text-[#5e2d91] font-semibold transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/login"
                  className="block py-3 text-gray-700 hover:text-[#5e2d91] font-semibold transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Se connecter
                </Link>
              </div>

              <div className="px-6 pt-4 border-t border-gray-50 space-y-1">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Ressources</p>
                {resourceLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className="block py-3 text-gray-700 hover:text-[#5e2d91] font-semibold transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="px-6 pt-6 border-t border-gray-100">
                <Link to="/product" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full bg-[#5e2d91] text-white px-6 py-4 rounded-[10px] font-bold text-base shadow-lg active:scale-95">
                    Explorez nos produits
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
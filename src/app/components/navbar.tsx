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
  const location = useLocation();
  const navigate = useNavigate();
  
  const navLinks = [
    { label: 'Blog', href: '/blog' },
    { label: "Centre d'aide", href: '/help' },
    { label: 'Sécurité & Certifications', href: '/security' },
    { label: 'Legal Center', href: '/legal' },
  ];

  const languages = [
    { code: 'fr', label: '🇫🇷 FR' },
    { code: 'en', label: '🇬🇧 EN' },
    { code: 'de', label: '🇩🇪 DE' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center -ml-2">
            <Link to="/blog" className="cursor-pointer hover:opacity-80 transition-opacity">
              <img 
                src={rainbowLogo} 
                alt="Rainbow" 
                className="h-10 rounded-[8px]"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 flex-1 ml-12 justify-center">
            {navLinks.map((link, index) => (
              <Link key={index} to={link.href}>
                <button className="text-gray-600 hover:text-[#5e2d91] transition-colors font-semibold text-sm">
                  {link.label}
                </button>
              </Link>
            ))}
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
              className="md:hidden py-6 space-y-4 border-t border-gray-100 bg-white absolute left-0 right-0 shadow-xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="block px-6 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-6 pt-4 border-t border-gray-100">
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
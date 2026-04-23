import { Facebook, Twitter, Linkedin, Youtube, Instagram, Mail, Phone, MapPin } from "lucide-react";
import alcatelLogo from "figma:asset/ale_white.png";
import { useLanguage } from "../i18n/language-context";
import type { Language } from "../i18n/translations";

const languageLabels: Record<Language, { flag: string; label: string }> = {
  fr: { flag: '🇫🇷', label: 'Français' },
  en: { flag: '🇬🇧', label: 'English' },
  es: { flag: '🇪🇸', label: 'Español' },
  it: { flag: '🇮🇹', label: 'Italiano' },
  de: { flag: '🇩🇪', label: 'Deutsch' }
};

export function Footer() {
  const { language, setLanguage, t } = useLanguage();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img src={alcatelLogo} alt="Alcatel-Lucent Enterprise" className="h-20" />
            </div>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm mb-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span>+33 (0)1 00 00 00 00</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <a href="mailto:contact@rainbow-webinar.fr" className="hover:text-white transition-colors">
                  contact@rainbow-webinar.fr
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-gray-400 mt-1" />
                <span>ALE International<br />32 avenue Kléber<br />92700 Colombes, France</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="https://www.al-enterprise.com/fr-fr/" target="_blank" rel="noopener noreferrer" className="hover:text-[#34B233] transition-colors" title="Alcatel-Lucent Enterprise">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/alcatellucententerprise/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0085CA] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/user/EnterpriseALU" target="_blank" rel="noopener noreferrer" className="hover:text-[#CF0072] transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://developers.openrainbow.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#6639B7] transition-colors" title="Rainbow API Developer Hub">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V9h7V2.99c3.69 1.01 6.77 3.82 7 7.01h-7v3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Produits */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.product}</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/product" className="hover:text-white transition-colors">{t.footer.webinar}</a></li>
              <li><a href="/product#features" className="hover:text-white transition-colors">{t.footer.features}</a></li>
              <li><a href="/pricing" className="hover:text-white transition-colors">{t.footer.pricing}</a></li>
              <li><a href="/webinar-space" className="hover:text-white transition-colors">Espace Webinaires</a></li>
              <li><a href="/product#integrations" className="hover:text-white transition-colors">Intégrations</a></li>
              <li><a href="https://developers.openrainbow.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">API</a></li>
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.resources}</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://developers.openrainbow.com/doc" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{t.footer.documentation}</a></li>
              <li><a href="/support" className="hover:text-white transition-colors">{t.footer.support}</a></li>
              <li><a href="/support#guides" className="hover:text-white transition-colors">Guides</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">{t.footer.blog}</a></li>
              <li><a href="/blog#case-studies" className="hover:text-white transition-colors">Études de cas</a></li>
              <li><a href="/product#webinars" className="hover:text-white transition-colors">Webinars</a></li>
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.company}</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.al-enterprise.com/fr-fr/about" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{t.footer.about}</a></li>
              <li><a href="https://www.al-enterprise.com/fr-fr/careers" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{t.footer.careers}</a></li>
              <li><a href="https://www.al-enterprise.com/fr-fr/newsroom" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{t.footer.press}</a></li>
              <li><a href="/support#contact" className="hover:text-white transition-colors">{t.footer.contact}</a></li>
              <li><a href="/support" className="hover:text-white transition-colors">Support</a></li>
              <li className="pt-2 border-t border-gray-800">
                <a href="/admin" className="hover:text-[#5e2d91] transition-colors font-medium">🔐 Administration</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center lg:text-left">
            <p className="text-xs text-gray-500">
              {t.footer.copyright} <a href={`https://${t.footer.copyrightLink}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline">{t.footer.copyrightLink}</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
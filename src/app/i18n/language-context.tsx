import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Language, getTranslation } from './translations';

// Language Context for Rainbow App
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: ReturnType<typeof getTranslation>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Get language from localStorage or default to 'fr'
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const saved = localStorage.getItem('language');
        return (saved as Language) || 'fr';
      }
    } catch (error) {
      console.warn('localStorage not available:', error);
    }
    return 'fr';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('language', lang);
      }
    } catch (error) {
      console.warn('localStorage not available:', error);
    }
  };

  const t = getTranslation(language);

  useEffect(() => {
    // Update document language attribute
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
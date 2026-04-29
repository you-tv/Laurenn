import React, { useEffect } from 'react';

export default function HomeV2() {
  useEffect(() => {
    // Add fonts and icons
    const link1 = document.createElement('link');
    link1.href = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap";
    link1.rel = "stylesheet";
    document.head.appendChild(link1);

    const link2 = document.createElement('link');
    link2.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap";
    link2.rel = "stylesheet";
    document.head.appendChild(link2);

    return () => {
      document.head.removeChild(link1);
      document.head.removeChild(link2);
    };
  }, []);

  return (
    <div className="bg-[#faf8ff] text-[#131b2e] font-sans selection:bg-violet-100 min-h-screen">
      <style dangerouslySetInnerHTML={{ __html: `
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .glass-card {
            background: rgba(255, 255, 255, 0.75);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.5);
        }
        /* Map custom colors to CSS variables or classes if needed, 
           but here I'll try to use hex codes or standard Tailwind if they match.
           Actually, the user provided a full tailwind config, I'll use inline styles for the custom ones 
           to ensure they work regardless of the main config. */
      `}} />

      {/* TopNavBar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-lg border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
        <div className="flex justify-between items-center h-20 px-6 md:px-12 w-full max-w-screen-2xl mx-auto">
          <div className="text-2xl font-extrabold bg-gradient-to-r from-violet-600 via-pink-500 to-blue-500 bg-clip-text text-transparent font-['Plus_Jakarta_Sans']">
            Rainbow
          </div>
          <div className="hidden md:flex items-center space-x-8 font-['Plus_Jakarta_Sans'] text-sm font-semibold tracking-tight">
            <a className="text-slate-600 hover:text-violet-500 transition-colors" href="#">Solutions</a>
            <a className="text-slate-600 hover:text-violet-500 transition-colors" href="#">Webinars</a>
            <a className="text-slate-600 hover:text-violet-500 transition-colors" href="#">Security</a>
            <a className="text-slate-600 hover:text-violet-500 transition-colors" href="#">Pricing</a>
            <a className="text-slate-600 hover:text-violet-500 transition-colors" href="#">Enterprise</a>
          </div>
          <div className="flex items-center space-x-4 font-['Plus_Jakarta_Sans'] text-sm font-semibold">
            <button className="text-slate-600 hover:text-violet-500 px-4 py-2">Login</button>
            <button className="bg-gradient-to-r from-violet-600 to-pink-500 text-white px-6 py-2.5 rounded-lg hover:scale-[1.02] transition-transform shadow-lg">Get Started</button>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center overflow-hidden">
          {/* Animated Background Gradients */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-violet-200/40 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-200/40 rounded-full blur-[120px]"></div>
            <div className="absolute top-[20%] right-[10%] w-[30%] h-[40%] bg-blue-200/30 rounded-full blur-[100px]"></div>
          </div>
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#eaddff] text-[#25005a] text-xs font-bold uppercase tracking-widest">
                Collaboration de demain
              </span>
              <h1 className="text-5xl md:text-[48px] font-[800] leading-[1.1] tracking-[-0.02em] text-[#131b2e] font-['Plus_Jakarta_Sans']">
                La collaboration, <span className="bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">réinventée</span>
              </h1>
              <p className="text-[18px] leading-[1.6] text-[#4a4455] max-w-xl">
                Rainbow fusionne visioconférence haute définition, messagerie d'équipe et outils de webinar surpuissants dans une interface fluide et intuitive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-gradient-to-r from-violet-600 to-pink-500 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:scale-105 transition-all">
                  Essai Gratuit 30 jours
                </button>
                <button className="glass-card border-violet-200 text-[#630ed4] font-bold py-4 px-8 rounded-lg hover:bg-white transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">play_circle</span>
                  Voir la démo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="glass-card rounded-2xl overflow-hidden shadow-2xl rotate-2">
                <img className="w-full h-auto aspect-video object-cover" alt="Modern collaborative workspace" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvxcZdXi9JSXjULv34yzDRrpSwnu4yhr2pEQvsDemriHEagIjevjzmN_luSqKg-kgbmNAGYYg3MFhUIYDRG8tQGPtd5ZAUi4lOrqpEnMm_riCQyLdD5Ag2g8mJbPUIQkhEItYJAZUvmvNxGVseshhs7-mDHOMBTtYxMjWXnTiPXHYK0qHozOfqdfokYEtfPt8TFX1zPGcIkpj3tFdLakhAICZOJqfUiw4ycrtNSDoLK_JluUiR3GW77STseDyhcNwztQm4ppx9fYRB"/>
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-xl shadow-xl -rotate-3 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#fd56a7] flex items-center justify-center text-white">
                    <span className="material-symbols-outlined">groups</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold">120K+ Utilisateurs</div>
                    <div className="text-xs text-[#4a4455]">Actifs en simultané</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Zéro Friction Section */}
        <section className="py-24 bg-[#faf8ff]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-[32px] font-bold text-[#131b2e]">Une seule plateforme, zéro friction</h2>
              <p className="text-[16px] text-[#4a4455] max-w-2xl mx-auto">Concentrez-vous sur vos idées, nous nous occupons du reste avec une infrastructure bâtie pour la performance.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-10 rounded-2xl hover:translate-y-[-8px] transition-transform duration-500">
                <div className="w-16 h-16 bg-[#630ed4]/10 text-[#630ed4] rounded-2xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-4xl">integration_instructions</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Intégration Totale</h3>
                <p className="text-[#4a4455] mb-6">Connectez vos outils favoris. Slack, Microsoft 365, Google Workspace et vos CRM s'unissent en un flux de travail continu.</p>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                    <span className="material-symbols-outlined text-sm">hub</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                    <span className="material-symbols-outlined text-sm">cloud</span>
                  </div>
                </div>
              </div>
              <div className="glass-card p-10 rounded-2xl hover:translate-y-[-8px] transition-transform duration-500 border-l-4 border-pink-500">
                <div className="w-16 h-16 bg-[#fd56a7]/10 text-[#b4136d] rounded-2xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-4xl">bolt</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Vitesse Éclair</h3>
                <p className="text-[#4a4455] mb-6">Latence ultra-faible pour vos visioconférences 4K et transferts de fichiers instantanés, peu importe où se trouve votre équipe.</p>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-pink-500 to-violet-500 w-[95%]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* À qui s'adresse Rainbow */}
        <section className="py-24">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-3xl md:text-[32px] font-bold mb-4 text-[#131b2e]">À qui s'adresse Rainbow ?</h2>
                <p className="text-[#4a4455]">Des solutions sur mesure pour chaque secteur.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card PME */}
              <div className="glass-card p-8 rounded-xl group hover:bg-[#630ed4] transition-all duration-300">
                <div className="w-12 h-12 bg-[#630ed4] text-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-[#630ed4] transition-colors">
                  <span className="material-symbols-outlined">store</span>
                </div>
                <h4 className="font-bold text-lg mb-2 group-hover:text-white transition-colors">PME</h4>
                <p className="text-sm text-[#4a4455] group-hover:text-white/80 transition-colors">Scalabilité et outils professionnels accessibles pour booster votre croissance.</p>
              </div>
              {/* Card Grandes Entreprises */}
              <div className="glass-card p-8 rounded-xl group hover:bg-[#fd56a7] transition-all duration-300">
                <div className="w-12 h-12 bg-[#b4136d] text-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-[#b4136d] transition-colors">
                  <span className="material-symbols-outlined">corporate_fare</span>
                </div>
                <h4 className="font-bold text-lg mb-2 group-hover:text-white transition-colors">Grandes Entreprises</h4>
                <p className="text-sm text-[#4a4455] group-hover:text-white/80 transition-colors">Sécurité renforcée et gestion centralisée pour des milliers de collaborateurs.</p>
              </div>
              {/* Card Education */}
              <div className="glass-card p-8 rounded-xl group hover:bg-[#0062d2] transition-all duration-300">
                <div className="w-12 h-12 bg-[#004ba4] text-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-[#004ba4] transition-colors">
                  <span className="material-symbols-outlined">school</span>
                </div>
                <h4 className="font-bold text-lg mb-2 group-hover:text-white transition-colors">Éducation</h4>
                <p className="text-sm text-[#4a4455] group-hover:text-white/80 transition-colors">Classes virtuelles interactives et outils de collaboration pour étudiants.</p>
              </div>
              {/* Card Santé */}
              <div className="glass-card p-8 rounded-xl group hover:bg-slate-900 transition-all duration-300">
                <div className="w-12 h-12 bg-slate-800 text-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-slate-900 transition-colors">
                  <span className="material-symbols-outlined">medical_services</span>
                </div>
                <h4 className="font-bold text-lg mb-2 group-hover:text-white transition-colors">Santé</h4>
                <p className="text-sm text-[#4a4455] group-hover:text-white/80 transition-colors">Téléconsultations sécurisées conformes aux normes HIPAA et RGPD.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Counter */}
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#7c3aed,transparent_70%)]"></div>
          </div>
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-[48px] font-extrabold text-[#d2bbff]">50M+</div>
                <div className="text-sm font-bold opacity-60 uppercase tracking-widest mt-2">Messages quotidiens</div>
              </div>
              <div>
                <div className="text-[48px] font-extrabold text-[#ffb0cd]">120K+</div>
                <div className="text-sm font-bold opacity-60 uppercase tracking-widest mt-2">Webinars organisés</div>
              </div>
              <div>
                <div className="text-[48px] font-extrabold text-[#adc6ff]">99.9%</div>
                <div className="text-sm font-bold opacity-60 uppercase tracking-widest mt-2">Disponibilité garantie</div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust / Certifications */}
        <section className="py-12 border-b border-slate-200">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-wrap justify-center items-center gap-12 md:gap-24 grayscale opacity-50">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-3xl">verified_user</span>
              <span className="font-bold text-xl">ISO 27001</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-3xl">health_and_safety</span>
              <span className="font-bold text-xl">HIPAA Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-3xl">policy</span>
              <span className="font-bold text-xl">GDPR Compliant</span>
            </div>
          </div>
        </section>

        {/* Solution Picker */}
        <section className="py-24 bg-[#f2f3ff]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-[32px] font-bold mb-12 text-center text-[#131b2e]">Choisissez votre expérience Rainbow</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Webinar Card */}
              <div className="relative group rounded-3xl overflow-hidden shadow-xl aspect-[16/10]">
                <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Professional female presenter" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC7dsALtGTqOuIrVtKs-vzceyzDcKjxq4O7aSGkmBIsxYisAcvICdP_zxpj5OrqfZnWbHwotbSOZhqF3BxvBKeer4JCw5G2ubi8FBcY9W4HF5LzLzr_80wx0N8KtiFkudstCiDDgCD5T5bw7CKBj_LeiRCqNVMfYzMH5zA08oM_Z77xQQkuoJgdOQWo4qJI3PyYovHhbuNW3NfpbP56uL0alOlx5bUNTYEShIuJFkTJwjuLoFtc3-aAAv4N5JU_7itaPy8rPWzRawg"/>
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/90 via-violet-900/40 to-transparent p-12 flex flex-col justify-end">
                  <h3 className="text-white text-3xl md:text-[32px] font-bold mb-4">Rainbow Webinar</h3>
                  <p className="text-white/80 text-sm mb-8 max-w-md">Organisez des événements virtuels mémorables avec une interactivité sans précédent.</p>
                  <button className="w-fit bg-white text-[#630ed4] font-bold px-8 py-4 rounded-full flex items-center gap-2 hover:bg-[#630ed4] hover:text-white transition-all">
                    Découvrir <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
              {/* Collaboration Card */}
              <div className="relative group rounded-3xl overflow-hidden shadow-xl aspect-[16/10]">
                <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Team members collaborating" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0-jTdGBNZEgVRHgVs2gn_hz1QR_ekDXzLkhbGvMgCiQWO2PixFVO2W1TDeErqtlGm1HOLFkN1eD1Vfp5hkiHaoT2IpXZJyYTW86Ttu6fMd-jwMg_lkfTlVtv6wV46TrUFrB-SApnuxKtXaUt3o1Fti0xLfbYd1w9YuQuw5QD9kC18i7hCOqTi2uSVf8HuIeTJ4mJEqzSCc5aJ5ht5J5vL-AfHPWaCBCL2so_BpND4IiuoUDu0oJXWNNffdmQjAIJUVwnBAaMK5l3O"/>
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/90 via-pink-900/40 to-transparent p-12 flex flex-col justify-end">
                  <h3 className="text-white text-3xl md:text-[32px] font-bold mb-4">Rainbow Collaboration</h3>
                  <p className="text-white/80 text-sm mb-8 max-w-md">L'espace de travail unifié pour vos équipes, où qu'elles soient dans le monde.</p>
                  <button className="w-fit bg-white text-[#b4136d] font-bold px-8 py-4 rounded-full flex items-center gap-2 hover:bg-[#b4136d] hover:text-white transition-all">
                    Découvrir <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Growth Infographics (Bento Style) */}
        <section className="py-24">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 glass-card p-10 rounded-2xl flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Croissance des Performances</h3>
                  <p className="text-[#4a4455]">Analyse en temps réel de l'engagement utilisateur sur la plateforme.</p>
                </div>
                <div className="mt-12 flex items-end gap-2 h-48">
                  <div className="flex-1 bg-[#7c3aed]/20 rounded-t-lg h-[40%] hover:bg-[#7c3aed] transition-all"></div>
                  <div className="flex-1 bg-[#7c3aed]/20 rounded-t-lg h-[60%] hover:bg-[#7c3aed] transition-all"></div>
                  <div className="flex-1 bg-[#7c3aed]/20 rounded-t-lg h-[55%] hover:bg-[#7c3aed] transition-all"></div>
                  <div className="flex-1 bg-[#7c3aed]/20 rounded-t-lg h-[80%] hover:bg-[#7c3aed] transition-all"></div>
                  <div className="flex-1 bg-[#7c3aed]/20 rounded-t-lg h-[70%] hover:bg-[#7c3aed] transition-all"></div>
                  <div className="flex-1 bg-[#7c3aed]/20 rounded-t-lg h-[95%] hover:bg-[#7c3aed] transition-all"></div>
                  <div className="flex-1 bg-[#7c3aed]/20 rounded-t-lg h-[100%] hover:bg-[#7c3aed] transition-all"></div>
                </div>
              </div>
              <div className="glass-card p-10 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-700 text-white">
                <span className="material-symbols-outlined text-4xl mb-6">analytics</span>
                <h3 className="text-2xl font-semibold mb-4">ROI Mesurable</h3>
                <p className="text-white/80 mb-8">Nos clients rapportent une augmentation de 40% de la productivité d'équipe dès le premier mois.</p>
                <div className="text-[48px] font-bold">+40%</div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-60">Productivité globale</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-[#eaedff]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-[32px] font-bold text-center mb-16 text-[#131b2e]">Ils nous font confiance</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="glass-card p-8 rounded-2xl relative">
                <div className="text-[#7c3aed] mb-6 italic text-lg leading-relaxed">
                  "Rainbow a radicalement changé notre façon de gérer les réunions hybrides. La fluidité est incomparable."
                </div>
                <div className="flex items-center gap-4">
                  <img className="w-12 h-12 rounded-full border-2 border-white shadow-sm" alt="Marc Dubois" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXaiZa16uItl8rSqNx_pohyRdW_7UmZklt1pPCo5xEsmo_70Xv82lF8WKBZxijX4yy7lS1OU65yWALVN_1sxbHMwwrpTqPHiJkwt0cb1iJmUSmg-gYC4awua-HoHC-b1qaJAdw-z6jsH8doB2ONdAgCDwU0W9k3xK9-ahEjqA66CyTw3R5gGs0Hf1ZTDJBytciIS1rW1N1acWGL0__ECfodC22yby2LqLHtyC_kCdYDLIlZ0S9n68VGsLuT7CRN7IxLMX31TirwLXb"/>
                  <div>
                    <div className="font-bold">Marc Dubois</div>
                    <div className="text-xs text-[#4a4455]">CTO, TechCorp Europe</div>
                  </div>
                </div>
              </div>
              {/* Testimonial 2 */}
              <div className="glass-card p-8 rounded-2xl relative">
                <div className="text-[#7c3aed] mb-6 italic text-lg leading-relaxed">
                  "Les options de personnalisation des webinars nous permettent de créer une expérience de marque unique."
                </div>
                <div className="flex items-center gap-4">
                  <img className="w-12 h-12 rounded-full border-2 border-white shadow-sm" alt="Sarah Jenkins" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkXDU23Yv1XcrJHx0B8h4z_7YrY6hshiax-u8hPFT4Fsx5W49h6F0ACqnhZkvby8vpFM6fqZ0cTW4e2UbROB73Pio4XVGpWmL8si0rfxqa0MYNsGAz-WpqEh9AK294XlLsR2bOfli9-nnHHhZT6fDdanlt9Oy_bJeqOtPsmilmgJNc5qspj6PBIaKzb49J_DJAGdNRw1pk8iBLicLQRdUa4nWBO3m8cDr3OLjcMtZnL4KJ4xKy9J_SQF4ZKXOl21-xEu1En5us6Hwa"/>
                  <div>
                    <div className="font-bold">Sarah Jenkins</div>
                    <div className="text-xs text-[#4a4455]">Marketing Lead, Global EDU</div>
                  </div>
                </div>
              </div>
              {/* Testimonial 3 */}
              <div className="glass-card p-8 rounded-2xl relative">
                <div className="text-[#7c3aed] mb-6 italic text-lg leading-relaxed">
                  "La sécurité est primordiale pour nos données médicales. Rainbow coche toutes les cases de conformité."
                </div>
                <div className="flex items-center gap-4">
                  <img className="w-12 h-12 rounded-full border-2 border-white shadow-sm" alt="Dr. Jean Dupont" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfttA0v57HY4mc4zeSKnBG5ORWV8ry3Z_V9aIus0z6G_Li4tyOcPtwprDrpSd9p6QzVNdx12MoPRGnOl3wVQwGL2LAoPoTFiCidhpMzIuKI17ePV0lyu4Gc7OrMoUSoUCbsedz9gzA8Z7x_YJgqmEfAmcaj5Li_CO6ZuRJ2mOj6PQO7LVO6OWo8ulHL_L3uKV8Zvu1yk82NeIHNRCHC7NzxRSpdXh1nEvunDe2HHfLDQlWv39UdjCAhs_oNAp8e1IDIL65gsyrLkpP"/>
                  <div>
                    <div className="font-bold">Dr. Jean Dupont</div>
                    <div className="text-xs text-[#4a4455]">DSI, Santé Connect</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 w-full py-12 px-6 md:px-12 mt-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:flex md:justify-between items-center gap-8 mb-12">
            <div className="text-xl font-bold text-slate-900">Rainbow</div>
            <div className="flex flex-wrap gap-6 md:gap-12 font-['Plus_Jakarta_Sans'] text-xs text-slate-500">
              <a className="hover:text-pink-500 underline decoration-pink-500/30 underline-offset-4 transition-all" href="#">Privacy Policy</a>
              <a className="hover:text-pink-500 underline decoration-pink-500/30 underline-offset-4 transition-all" href="#">Terms of Service</a>
              <a className="hover:text-pink-500 underline decoration-pink-500/30 underline-offset-4 transition-all" href="#">Security Trust Center</a>
              <a className="hover:text-pink-500 underline decoration-pink-500/30 underline-offset-4 transition-all" href="#">Contact Sales</a>
              <a className="hover:text-pink-500 underline decoration-pink-500/30 underline-offset-4 transition-all" href="#">Status Page</a>
            </div>
          </div>
          <div className="text-center md:text-left font-['Plus_Jakarta_Sans'] text-xs text-slate-500">
            © 2024 Rainbow Collaboration. Global Security: ISO 27001, HIPAA, GDPR compliant.
          </div>
        </div>
      </footer>
    </div>
  );
}

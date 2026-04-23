import { Shield } from "lucide-react";
import isoLogo from "figma:asset/iso27001.png";
import anssiLogo from "figma:asset/anssi.png";
import ensLogo from "figma:asset/ens.jpg";
import rgpdLogo from "figma:asset/rgpd.jpg";
import acnLogo from "figma:asset/acn.png";
import hipaaLogo from "figma:asset/hipaa.png";
import rainbowLogo from "figma:asset/rainbow_name_logo.png";

export function SecurityCertificationsSection() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-purple-50 text-[#5e2d91] px-6 py-2 rounded-full mb-6">
            <Shield className="w-4 h-4" />
            <span className="font-bold text-xs tracking-widest uppercase">Sécurité & Souveraineté</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 tracking-tight">Vos données, protégées & hébergées en France.</h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Rainbow respecte les normes les plus strictes en matière de sécurité, de souveraineté et de confidentialité.​
          </p>
        </div>

        {/* Polished Table-Style Layout */}
        <div className="max-w-5xl mx-auto border-[0.5px] border-gray-300 overflow-hidden bg-white shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4">
            {/* Rainbow Logo Cell - Spans both rows in desktop */}
            <div className="md:col-span-1 border-b md:border-b-0 md:border-r-[0.5px] border-gray-300 flex items-center justify-center p-12 bg-white">
              <img 
                src={rainbowLogo} 
                alt="Rainbow" 
                className="w-32 md:w-40 h-auto object-contain"
              />
            </div>

            {/* Certifications Grid Part */}
            <div className="md:col-span-3 grid grid-cols-2 lg:grid-cols-3">
              {/* Row 1 */}
              <div className="border-b-[0.5px] border-r-[0.5px] border-gray-300 p-8 flex items-center justify-center group hover:bg-gray-50 transition-colors">
                <img src={acnLogo} alt="ACN" className="h-20 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="border-b-[0.5px] border-r-[0.5px] border-gray-300 p-8 flex items-center justify-center group hover:bg-gray-50 transition-colors">
                <img src={hipaaLogo} alt="HIPAA" className="h-20 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="border-b-[0.5px] border-gray-300 p-8 flex items-center justify-center group hover:bg-gray-50 transition-colors">
                <img src={rgpdLogo} alt="GDPR" className="h-20 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Row 2 */}
              <div className="border-r-[0.5px] border-gray-300 p-8 flex items-center justify-center group hover:bg-gray-50 transition-colors">
                <img src={anssiLogo} alt="ANSSI" className="h-20 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="border-r-[0.5px] border-gray-300 p-8 flex items-center justify-center group hover:bg-gray-50 transition-colors">
                <img src={isoLogo} alt="ISO 27001" className="h-20 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-8 flex items-center justify-center group hover:bg-gray-50 transition-colors">
                <img src={ensLogo} alt="ENS" className="h-20 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Pills */}
        <div className="mt-20 flex flex-wrap justify-center gap-4">
          <span className="px-5 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm font-bold text-gray-700 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Solution Française
          </span>
          <span className="px-5 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm font-bold text-gray-700 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Hébergement Européen
          </span>
          <span className="px-5 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm font-bold text-gray-700 flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
            Non soumis au Cloud Act
          </span>
        </div>

        <div className="text-center mt-12">
          <a
            href="/security"
            className="text-[#5e2d91] font-bold hover:underline transition-all group"
          >
            En savoir plus sur notre engagement sécurité 
            <span className="ml-2 transition-transform group-hover:translate-x-1 inline-block">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
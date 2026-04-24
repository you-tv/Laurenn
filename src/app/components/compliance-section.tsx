import React from 'react';
import { ArrowRight } from 'lucide-react';
import rainbowLogo from "figma:asset/rainbow_name_logo.png";
import hipaaLogo from "figma:asset/hipaa.png";
import rgpdLogo from "figma:asset/rgpd.jpg";
import acnLogo from "figma:asset/acn.png";
import isoLogo from "figma:asset/iso27001.png";
import hdsLogo from "figma:asset/hds.webp";
// BSI C5 logo placeholder if not found, using anssi as similar category
import bsiLogo from "figma:asset/anssi.png";

interface CardData {
  id: string;
  logo: string;
  title: string;
  body: string;
  hasWaves?: boolean;
  hasDots?: boolean;
  hasBlob?: boolean;
}

const cards: CardData[] = [
  {
    id: "card-hipaa",
    logo: hipaaLogo,
    title: "HIPAA",
    body: "Compliance with HIPAA ensures the protection of sensitive health information and reinforces the security of your data.",
    hasDots: true,
    hasBlob: true
  },
  {
    id: "card-gdpr",
    logo: rgpdLogo,
    title: "GDPR",
    body: "We comply with the GDPR to guarantee the privacy of personal data and give you full control over your information.",
    hasWaves: true
  },
  {
    id: "card-acn",
    logo: acnLogo,
    title: "ACN",
    body: "RAINBOW is aligned with the Australian Cyber Security Framework to ensure a robust and secure infrastructure.",
    hasWaves: true,
    hasDots: true,
    hasBlob: true
  },
  {
    id: "card-iso-27001",
    logo: isoLogo,
    title: "ISO 27001",
    body: "Our ISO 27001 certification demonstrates our commitment to the highest standards in information security management.",
    hasWaves: true
  },
  {
    id: "card-bsi-c5",
    logo: bsiLogo,
    title: "BSI C5",
    body: "Certification based on the BSI C5 standard for cloud security, ensuring the protection and availability of your data.",
    hasDots: true,
    hasBlob: true
  },
  {
    id: "card-hds",
    logo: hdsLogo,
    title: "HDS",
    body: "HDS certification guarantees secure hosting of your health data in compliance with French regulations.",
    hasWaves: true
  }
];

export function ComplianceSection() {
  return (
    <section className="py-24 bg-[#ECEEF6] font-['Nunito',sans-serif]">
      <div className="max-w-[1320px] mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a2e] mb-4">
            Sécurité & Conformité
          </h2>
          <p className="text-lg text-[#666882] max-w-2xl mx-auto">
            Une plateforme sécurisée, souveraine et conforme aux normes les plus exigeantes.
          </p>
        </div>
        
        {/* Unified Staggered Grid - 12 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[16px]">
          {/* Row 1 - 4-5-3 span */}
          <div className="md:col-span-4">
            <ComplianceCard card={cards[0]} isFirst={false} />
          </div>
          <div className="md:col-span-5">
            <ComplianceCard card={cards[1]} isFirst={false} />
          </div>
          <div className="md:col-span-3">
            <ComplianceCard card={cards[2]} isFirst={false} />
          </div>

          {/* Row 2 - 5-3-4 span */}
          <div className="md:col-span-5">
            <ComplianceCard card={cards[3]} isFirst={false} />
          </div>
          <div className="md:col-span-3">
            <ComplianceCard card={cards[4]} isFirst={false} />
          </div>
          <div className="md:col-span-4">
            <ComplianceCard card={cards[5]} isFirst={false} />
          </div>
        </div>

      </div>
    </section>
  );
}

function ComplianceCard({ card, isFirst }: { card: CardData, isFirst: boolean }) {
  return (
    <div className="bg-white rounded-[20px] p-[36px_36px_30px] h-full flex flex-col relative overflow-hidden shadow-[0_2px_12px_rgba(80,70,160,0.06)] group transition-transform hover:-translate-y-1 duration-300">
      
      <div className="z-10 relative flex-1 flex flex-col">
        {/* Logo Area */}
        <div className="h-[80px] mb-[12px] flex items-start">
          <img 
            src={card.logo} 
            alt={card.title} 
            className="max-h-[60px] max-w-[120px] object-contain"
          />
        </div>

        {/* Title */}
        <h3 className={`font-[800] text-[#1a1a2e] mb-[12px] ${isFirst ? 'text-[28px]' : 'text-[20px]'}`}>
          {card.title}
        </h3>

        {/* Body */}
        <p className="text-[14px] leading-[1.65] text-[#666882] pb-[40px]">
          {card.body}
        </p>
      </div>

      {/* Arrow Button */}
      <div className="absolute bottom-[28px] right-[32px] w-[38px] h-[38px] rounded-full border-[1.5px] border-[#e0e0ee] bg-white flex items-center justify-center cursor-pointer transition-all duration-300 group-hover:bg-[#6B5CE7] group-hover:border-[#6B5CE7] z-20">
        <ArrowRight className="w-[18px] h-[18px] text-[#6B5CE7] group-hover:text-white transition-colors duration-300" />
      </div>

      {/* DECORATIVE ELEMENTS */}
      
      {card.hasBlob && (
        <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-[#6B5CE7] opacity-[0.08] pointer-events-none" />
      )}

      {card.hasDots && (
        <div className="absolute bottom-10 right-20 flex flex-col gap-[8px] pointer-events-none opacity-45">
          {[0, 1, 2, 3].map(row => (
            <div key={row} className="flex gap-[8px]">
              {[0, 1, 2].map(col => (
                <div key={col} className="w-[5px] h-[5px] rounded-full bg-[#c8c0f0]" />
              ))}
            </div>
          ))}
        </div>
      )}

      {card.hasWaves && (
        <div className="absolute bottom-[-10%] right-[-10%] w-[65%] h-[65%] pointer-events-none opacity-80">
          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
            {/* Concentric curved lines */}
            <path d="M-20,120 C 20,80 60,80 120,-20" fill="none" stroke="#f0c0d4" strokeWidth="1.2" />
            <path d="M-10,120 C 30,90 70,90 120,-10" fill="none" stroke="#f0c0d4" strokeWidth="1.2" />
            <path d="M0,120 C 40,100 80,100 120,0" fill="none" stroke="#f0c0d4" strokeWidth="1.2" />
            <path d="M10,120 C 50,110 90,110 120,10" fill="none" stroke="#f0c0d4" strokeWidth="1.2" />
            <path d="M20,120 C 60,120 100,120 120,20" fill="none" stroke="#f0c0d4" strokeWidth="1.2" />
          </svg>
          
          {/* Accent Dots */}
          <div className="absolute top-[35%] left-[25%] w-[8px] h-[8px] rounded-full bg-[#e8b4c8]" />
          <div className="absolute top-[65%] left-[65%] w-[8px] h-[8px] rounded-full bg-[#c8c0f0]" />
        </div>
      )}

    </div>
  );
}

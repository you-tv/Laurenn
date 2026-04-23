import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { HeroSection } from "../components/hero-section";
import { StatsSection } from "../components/stats-section";
import { UnifiedPlatformSection } from "../components/unified-platform-section";
import { TestimonialsSection } from "../components/testimonials-section";
import { FAQSection } from "../components/faq-section";
import { Chatbot } from "../components/chatbot";
import { TrialModal } from "../components/trial-modal";
import { NotifyModal } from "../components/notify-modal";
import { DemoModal } from "../components/demo-modal";
import { StripeCheckout } from "../components/stripe-checkout";
import { ProductRangeSection } from "../components/product-range-section";
import { DiagonalGradientBackground } from "../components/diagonal-gradient-background";
import { SecurityCertificationsSection } from "../components/security-certifications-section";
import { TargetAudienceSection } from "../components/target-audience-section";
import { analyticsTracker } from "../services/analytics-tracker";
import ctaBackground from "figma:asset/cta_bg.jpg";
import pageBackground from "figma:asset/page_bg.png";

export default function Home() {
  const navigate = useNavigate();
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [notifyModalOpen, setNotifyModalOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [stripeCheckoutOpen, setStripeCheckoutOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Professional");
  const [selectedStripePlan, setSelectedStripePlan] = useState<"start" | "pro" | "enterprise">("pro");

  const handleStartTrial = () => {
    // Generate user ID and track trial activation
    const userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    analyticsTracker.track('trial_activated', {
      userId,
      metadata: {
        source: 'cta_button',
        timestamp: new Date().toISOString()
      }
    });
    
    // Store user ID in localStorage
    localStorage.setItem('rainbow_user_id', userId);
    localStorage.setItem('rainbow_trial_start', new Date().toISOString());
    
    // Redirect directly to webinar space
    navigate("/webinar-space");
  };

  const handleViewDemo = () => {
    setDemoModalOpen(true);
  };

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    
    if (planName === "Rainbow Webinar Enterprise") {
      // Enterprise plan - show notify modal
      setNotifyModalOpen(true);
      setSelectedStripePlan("enterprise");
    } else if (planName === "Rainbow Webinar Pro") {
      // Pro plan - open Stripe checkout for subscription
      setSelectedStripePlan("pro");
      setStripeCheckoutOpen(true);
    } else {
      // Start plan - redirect to webinar space with trial
      const userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      analyticsTracker.track('trial_activated', {
        userId,
        metadata: {
          source: 'pricing_page',
          planName,
          timestamp: new Date().toISOString()
        }
      });
      
      localStorage.setItem('rainbow_user_id', userId);
      localStorage.setItem('rainbow_trial_start', new Date().toISOString());
      localStorage.setItem('rainbow_selected_plan', planName);
      
      navigate("/webinar-space");
    }
  };

  return (
    <div 
      className="min-h-screen relative bg-white"
    >
      <Navbar />
      
      <main>
        <HeroSection 
          onStartTrial={handleStartTrial}
          onViewDemo={handleViewDemo}
        />
        
        {/* Unified Platform Section - Communication Hub */}
        <UnifiedPlatformSection />
        
        {/* Target Audience Section - Who is Rainbow for? */}
        <TargetAudienceSection />
        
        {/* Stats Section - Key Metrics */}
        <StatsSection />
        
        {/* Security Certifications Section - Compliance & Trust */}
        <SecurityCertificationsSection />
        
        {/* Product Range Section - Explore Products */}
        <ProductRangeSection />
        
        {/* CTA Section - Call to Action */}
        <section className="py-24 bg-white border-t border-gray-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl px-8 py-16 text-center bg-[#5e2d91]">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Prêt à transformer vos communications ?</h2>
              <p className="text-xl text-[#e9d5ff] mb-10 max-w-2xl mx-auto">Essayez Rainbow gratuitement pendant 30 jours, sans carte bancaire ni engagement.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/pricing"
                  className="inline-block px-8 py-4 bg-white text-[#5e2d91] rounded-md font-bold hover:bg-gray-100 transition-colors shadow-sm"
                >
                  Commencer l'essai gratuit
                </Link>
                <a
                  href="https://app.storylane.io/share/your-demo-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-[#4a2373] text-white rounded-md font-bold hover:bg-[#3d1c5d] transition-colors border border-[#4a2373]"
                >
                  Voir une démo
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section - Customer Feedback */}
        <TestimonialsSection onViewDemo={handleViewDemo} />
        
        <FAQSection />
      </main>

      <Footer />

      <TrialModal
        open={trialModalOpen}
        onOpenChange={setTrialModalOpen}
        planName={selectedPlan}
      />

      <NotifyModal
        open={notifyModalOpen}
        onOpenChange={setNotifyModalOpen}
        planName={selectedPlan}
      />

      <DemoModal
        open={demoModalOpen}
        onOpenChange={setDemoModalOpen}
      />

      <StripeCheckout
        plan={selectedStripePlan}
        isOpen={stripeCheckoutOpen}
        onClose={() => setStripeCheckoutOpen(false)}
      />

      <Chatbot />
    </div>
  );
}
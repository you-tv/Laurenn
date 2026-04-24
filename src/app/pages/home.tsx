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
import { SectionDivider } from "../components/section-divider";
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

  const handleViewVideo = () => {
    setDemoModalOpen(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
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
          onViewVideo={handleViewVideo}
        />

        {/* Unified Platform Section - white */}
        <UnifiedPlatformSection />

        {/* Target Audience Section - gray-50 */}
        <TargetAudienceSection />

        {/* gray-50 → purple */}
        <SectionDivider fromColor="#f9fafb" toColor="#5e2d91" />

        {/* Stats Section - purple */}
        <StatsSection />

        {/* Security Certifications Section - gray-50 */}
        <SecurityCertificationsSection />

        {/* gray-50 → white */}
        <SectionDivider fromColor="#f9fafb" toColor="#ffffff" />

        {/* Product Range Section - white */}
        <ProductRangeSection />

        {/* white → gray-50 */}
        <SectionDivider fromColor="#ffffff" toColor="#f9fafb" />

        {/* Testimonials Section - gray-50 */}
        <TestimonialsSection onViewDemo={handleViewDemo} />

        {/* gray-50 → white */}
        <SectionDivider fromColor="#f9fafb" toColor="#ffffff" />

        {/* FAQ Section - white */}
        <FAQSection />

        {/* CTA Section - Call to Action */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="sp-preview">
              <div 
                className="sp-cta-banner sp-cta-banner-dark"
                onMouseMove={handleMouseMove}
              >
                <h2 className="sp-cta-h2">Ready to transform your<br />team communication?</h2>
                <p className="sp-cta-sub">Join 10,000+ organizations using Rainbow to connect, collaborate, and grow. No credit card required.</p>
                <div className="sp-cta-actions">
                  <button 
                    onClick={handleStartTrial}
                    className="btn btn-brand lg"
                  >
                    Start Free Trial →
                  </button>
                  <button className="btn btn-secondary lg">
                    Contact Sales
                  </button>
                </div>
                <div className="sp-cta-note">14-day free trial · No credit card · Full feature access</div>
              </div>
            </div>
          </div>
        </section>
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
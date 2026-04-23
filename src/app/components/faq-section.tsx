import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQArticle {
  id: number;
  title: string;
  body: string;
  snippet?: string;
  draft: boolean;
}

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export function FAQSection() {
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const ZENDESK_BASE_URL = "https://rainbow-market.zendesk.com";
    const SECTION_ID = "33369381353746";
    const LOCALE = "fr"; // Français pour Rainbow Webinar

    const endpoint =
      `${ZENDESK_BASE_URL}/api/v2/help_center/sections/${SECTION_ID}/articles.json` +
      `?locale=${LOCALE}&per_page=20&page=1&sort_by=position&sort_order=asc`;

    function stripHtml(value: string): string {
      return String(value || "")
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    }

    fetch(endpoint, { headers: { Accept: "application/json" } })
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then((payload) => {
        const articles: FAQArticle[] = (payload.articles || []).filter(
          (a: FAQArticle) => a && !a.draft
        );

        if (!articles.length) {
          setError(true);
          setLoading(false);
          return;
        }

        const faqItems: FAQItem[] = articles.map((article) => ({
          id: article.id,
          question: article.title || "Question sans titre",
          answer:
            stripHtml(article.body || article.snippet || "").slice(0, 500) ||
            "Pas de contenu disponible.",
        }));

        setFaqs(faqItems);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-gray-900">
            Questions fréquentes
          </h2>
          <p className="text-xl text-gray-600">
            Tout ce que vous devez savoir sur Rainbow Webinar
          </p>
        </div>

        {/* FAQ List */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#5e2d91] border-r-transparent"></div>
            <p className="mt-4 text-gray-600">Chargement des questions...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-12 bg-red-50 rounded-xl border border-red-200">
            <p className="text-red-600">
              Impossible de charger les questions pour le moment.
            </p>
          </div>
        )}

        {!loading && !error && faqs.length > 0 && (
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="border border-gray-200 rounded-xl bg-white overflow-hidden transition-all duration-200 hover:border-[#5e2d91]"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-[#5e2d91] focus:ring-offset-2 rounded-xl"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-lg font-bold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#5e2d91] flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4 text-lg">
            Vous avez d'autres questions ?
          </p>
          <a
            href="mailto:support@rainbow-webinar.com"
            className="inline-flex items-center gap-2 text-[#5e2d91] hover:underline font-bold transition-all text-lg"
          >
            Contactez notre équipe
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
<section>
  <h2>FAQ</h2>
  <div id="faq-list" aria-live="polite">
    <details open><summary>Loading FAQ...</summary></details>
  </div>
</section>

<script>
(function mountFaq() {
  const listEl = document.getElementById("faq-list");
  const ZENDESK_BASE_URL = "https://rainbow-market.zendesk.com"; // <-- à adapter
  const SECTION_ID = "33369381353746"; // <-- à adapter
  const LOCALE = "en-us"; // ex: "fr" ou "en-us"

  const endpoint =
    `${ZENDESK_BASE_URL}/api/v2/help_center/sections/${SECTION_ID}/articles.json` +
    `?locale=${LOCALE}&per_page=20&page=1&sort_by=position&sort_order=asc`;

  function stripHtml(value) {
    return String(value || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  }

  fetch(endpoint, { headers: { Accept: "application/json" } })
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    })
    .then((payload) => {
      const articles = (payload.articles || []).filter((a) => a && !a.draft);

      if (!articles.length) {
        listEl.innerHTML = "<p>No FAQ found.</p>";
        return;
      }

      listEl.innerHTML = "";
      articles.forEach((article) => {
        const details = document.createElement("details");
        const summary = document.createElement("summary");
        const answer = document.createElement("p");

        summary.textContent = article.title || "Untitled article";
        answer.textContent = stripHtml(article.body || article.snippet || "").slice(0, 500) || "No content.";

        details.append(summary, answer);
        listEl.appendChild(details);
      });
    })
    .catch(() => {
      listEl.innerHTML = "<p>Unable to load FAQ.</p>";
    });
})();
</script>
Webinar freemium – phase 1: "TRY /in app” only
📌 Abstract 
This RQ covers the TRY phase of the Webinar Freemium initiative, focused exclusively on the in-app Rainbow experience.
The objective is to enable eligible Rainbow users to access a time-limited Webinar trial in order to accelerate product discovery and validate perceived value. Commercial acquisition, subscription, and billing flows are out of scope for this RQ — handled by the portal team in a separate RQ.
Scope boundaries:
•	In-app Rainbow experience only
•	Europe only (geo-restriction handled by the e-commerce portal)
---
External communication: Yes (Europe only)
Help Center article: To confirm
Beta candidate: No
🚦 Context / Checks 
PM Inputs 
•	Feature flag: in-app trial activation and eligibility control (geo-restriction handled by the e-commerce portal — to confirm with R&D)
•	Service plans: custom webinar trial license based on Webinar 120
•	Telephony systems: not relevant
•	Permissions / profiles: automatic Webinar Host role allocation for trial users
•	Admin impact: limited to automated provisioning of trial companies and licenses
•	Available for Guest users: no (trial implies Rainbow account creation)
•	Multi-environments: all
•	Edge backward compatibility UX impact: no
•	Analytics: Yes
•	Design: Yes
•	Security: standard signup input validation only
•	Test challenges: provisioning automation, trial eligibility validation, and license expiration logic must be specifically validated
•	Compatibility / software policy change: no
R&D Inputs 
•	Cross-platform constraints:
•	Web/desktop priority
•	Mobile: hosting is not supported in this phase. Mobile clients accessing trial accounts will only display an informational message
•	Compatibility issues: none identified at this stage
•	Backward compatibility impacts: none expected; existing customers not affected
•	Push notifications (mobile): not relevant
•	Conversation message editing: not relevant
•	Dark mode / themes: to be supported
•	Accessibility: to follow standard Rainbow accessibility compliance
Operations 
•	Backend integration: provisioning automation (company creation, license assignment…)
•	Data model impact: new trial license type and company tagging may require review for scalability and reporting
•	Logs: trial lifecycle events should be logged and anonymized consistently with existing policies
•	Limits / performance: potential peak trial usage should be monitored (simultaneous webinars, participant load)
•	Security: no specific additional risk identified beyond standard signup abuse prevention
•	Offline mode (mobiles only): not relevant
📕 Description 
The solution relies on fully automated trial provisioning, a controlled trial lifecycle (activation, expiration, visibility), and a Webinar-focused in-app experience adapted to user profile.
The trial aims to:
•	Enable rapid hands-on Webinar experience
•	Provide clear trial status visibility
•	Maintain product continuity after expiration
•	Capture reliable product adoption signals
No commercial flow is implemented in this RQ. Only a visible "Subscribe" CTA is exposed to measure conversion intent — the subscription flow itself is handled in a separate RQ /Phase 2 "BUY".
🎯 Scope (in-app only) 
Trial eligibility & provisioning 
•	Automatic provisioning of a Webinar Trial license inside Rainbow
•	Server-side tagging of trial companies/users (to confirm with R&D)
•	Auto-assignment of webinar "Host" roles
•	1 trial per account / per email (no repeat trial)
•	Essential user attaching to a BP mid-trial: behavior to confirm with R&D
•	Eligible users:
Profile	Trial access
New account (unregistered email)	✅
Existing "Rainbow Essential" user	✅
Premium user / BP-attached user	❌ (Informational message only)
Trial license & capabilities 
•	Trial license: full Webinar 120 participants/ unlimited sessions
•	Features unlocked: 100% of the premium plan
•	Session duration: 45 min max (nice-to-have — include if technically feasible in Phase 1, otherwise defer to Phase 2)
•	Trial duration: 30 days, automatic expiration at end date
•	Webinar creation limited to the trial validity window
Onboarding experience 
1. Primo user (Webinar-only trial user)
•	Lands directly on the Webinar screen (sole tab) — default landing at every login
•	Simplified Webinar-focused UI
•	Trial status banner (remaining days) visible in "Webinars" screen (and in app header as well) — design to confirm
•	Visible "Subscribe" CTA (no subscription or billing flow — conversion intent signal only)
•	Access to general app settings via Rainbow profile menu
•	"What's New" and e-learning content scoped exclusively to Webinar features
•	"Get Started" guidance for first webinar creation: FTUX flow and/or e-learning demo (nice-to-have — include if feasible in Phase 1, otherwise defer to Phase 2)
•	Mobile hosting not supported (informational message only)
2. Existing "Essential" user (less common use case)
•	"Webinars – trial" tab added to existing navigation (Essential account preserved as-is)
•	Webinar screen is the default landing at every login
•	Trial status banner (remaining days) visible in app header and Webinar tab (design to confirm)
•	Visible "Subscribe" CTA (no subscription or billing flow — conversion intent signal only)
•	Access to general app settings via Rainbow profile menu
•	"What's New" and e-learning: existing collaboration content + Webinar-specific content added on top
Note: Mobile hosting not supported (informational message only) for both use cases.
Trial expiration handling 
•	Webinar creation disabled at expiration
•	Launch of webinars published before expiration remains allowed
•	Account status: trial expired
•	Historical access maintained: past webinars, recordings, polls, documents, and statistics remain accessible
•	Clear expiration messaging + upgrade CTA remains visible (no subscription or billing flow — conversion intent signal only)
❌ Out of scope (TRY phase) 
Commercial acquisition layer 
•	Lead acquisition mechanisms (forms, geolocation, marketing landing pages, etc.)
•	E-commerce portal flows
Monetization & subscription management 
•	Billing and payment processing
•	Subscription lifecycle management
Commercial conversion mechanisms 
•	Offer upgrades/downgrades
•	Suspension and reactivation of subscriptions
•	In-app purchase of additional services
•	Full commercial conversion funnel logic
Partner ecosystem 
•	Partner takeover logic (to be confirmed: redirection flow vs. contextual message pointing users to a business/commercial contact in case of subscription interest)
🔮 To consider (future "BUY" evolution / potential in-app admin flow) 
•	Billing and subscription management
•	Commercial conversion funnel (self-service upgrade path)
•	Offer changes, suspension, reactivation
•	In-app subscription to additional services (admin portal)
✅ Accepted criteria
AC1 – Provisioning 
•	Trial account provisioned automatically post-signup (0 manual action)
•	Webinar Host role auto-assigned
•	30-day trial duration applied per configured policy
•	1 trial per account / per email enforced (no repeat trial)
•	Ineligible users (Premium, BP-attached, Guest) receive an informational message — no trial access granted
AC2 – Onboarding 
•	Primo-user: Webinar screen is the sole tab and default landing at every login
•	Essential user: "Webinars – trial" tab added to existing navigation; Webinar screen is the default landing at every login
•	Trial status banner (remaining days) visible in both the app header and the Webinar tab (design to confirm)
•	Key actions (create, invite, launch) discoverable within first session
•	"Subscribe" CTA permanently visible (no subscription or billing flow triggered)
•	Mobile: clear informational message displayed regarding hosting limitation
AC3 – Usage & Analytics 
•	All lifecycle events tracked: trial_activated, webinar_created, webinar_launched, attendee_joined, subscribe_cta_clicked, trial_expired, feature_used
•	Metrics available in internal analytics dashboard
•	Zero impact on platform performance or data integrity
AC4 – Expiration 
•	Automatic expiration triggered at day 30
•	Email notifications sent at D-7, D-3 and D-1
•	In-app trial status messaging reflects remaining days throughout the trial
•	Post-expiration: new webinar creation disabled; launch of webinars published before expiration remains allowed
•	Historical access maintained post-expiration: past webinars, recordings, polls, documents, and statistics
•	Upgrade CTA visible post-expiration (no subscription or billing flow triggered)
AC5 – Data Continuity 
•	User data (webinars, contacts, analytics) preserved upon conversion to paid plan
•	Zero data loss during trial → paid transition
AC6 – Security & GDPR 
•	Trial accounts compliant with standard Rainbow security policies
•	In-app account deletion triggers full GDPR data removal
•	Trial lifecycle events anonymized per existing policy
AC7 – Rollout 
•	Feature flag operational (on/off without deployment)
•	Zero regression on existing webinar customers
⚠️ Risks & Open points 
#	Risk / Open point	Priority	Owner
1	45 min session duration limit: feasibility in phase1 to confirm with R&D	🟡 Nice-to-have	PM + R&D
2	"Get Started" FTUX / e-learning: feasibility to confirm with R&D	🟡 Nice-to-have	PM + R&D
3	Definition of "Essential without BP" to be technically specified	🔴 Blocker	R&D
4	Essential user attaching to a BP mid-trial: behavior to define	🟠 Major	PM + R&D
5	Trial banner wording / design not yet produced	🟠 Major	Design
6	Peak load trial monitoring strategy to define	🟡 Minor	Ops
7	Partner takeover logic not defined (redirect vs. message)	🟡 Phase 2	PM

📊 Analytics 
Tracking events (trial lifecycle) 
•	trial_activated
•	webinar_created
•	webinar_launched
•	attendee_joined
•	subscribe_cta_clicked
•	trial_expired
•	feature_used (recording, Q&A, chat, analytics…)
Core KPIs: 
—monitor real Webinar adoption and detect early product value signals.
Trial activation & onboarding 
•	Time to first webinar (activation → first webinar created / hosted)
•	Trial completion rate (% of users reaching D-30 with at least one activity)
Usage & engagement 
•	webinars created / trial account
•	webinars actually hosted vs. created (launch rate)
•	Average attendees / webinar
•	Feature adoption rate per feature: recording, chat, Q&A, analytics
•	Repeat webinar usage rate (strong indicator of perceived value)
Conversion signals 
•	"Subscribe" CTA click rate
•	D-7 / D-3 / D-1 email open & click rate
Quality signals 
•	Issue / bug reporting signals (via report-a-problem or support interactions)

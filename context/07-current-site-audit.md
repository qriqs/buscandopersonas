# 07 — Current website audit

**Audited:** live `https://buscandopersonas.org/` + local repo `index.html` (1,794 lines, 72 KB) on 27 Nov 2026.

---

## 1. Verdict

The current site is a **single-page Bootstrap template** from around 2020, lightly customised. It contains the right ingredients — phone, form, services, testimonials, Facebook feed — but it does not yet function as a trustworthy website for a sensitive, high-consideration service.

The biggest problems are not aesthetic:
- **Placeholder and fake content remains live** (fake portfolio, template testimonials, lorem ipsum).
- **The numbers contradict each other** and the deployed page is behind the repository.
- **There is no privacy policy, consent, or explanation of confidentiality** — in a category where that is the core objection.
- **The brand's own gold-globe identity is absent**, replaced by a generic green template.
- **The real flagship service (family search) is buried** under a generic "Servicios" grid.

---

## 2. Stack

| Layer | What it uses |
|---|---|
| Markup | HTML5, single `index.html` |
| CSS | Bootstrap 4, custom `assets/css/style.css`, Font Awesome 6, Google Fonts (Open Sans, Raleway, Poppins) |
| JS | jQuery 2.2.0, Bootstrap bundle, Owl Carousel, Slick, Isotope, Venobox, ScrollReveal, CounterUp, custom scripts |
| Carousels | Owl Carousel (testimonials), Slick (initialised but no matching element) |
| Forms | JotForm embed (ID `50398505051654`), ~1,000 lines of inline JotForm CSS/JS |
| Hosting | Firebase Hosting, project `buscandopersonas`, SPA rewrite to `/index.html` |
| Analytics | **None found** |
| Dark mode | Custom CSS + `localStorage.js`; toggle is commented out in the header |
| Preloader | Custom `.centrado` overlay, hidden after 1.5s |

**Assessment:** heavy for a 769-word page. Multiple carousel libraries are loaded but only one is used. jQuery 2.2.0 is from 2016 and has known vulnerabilities. The inline JotForm code makes the page fragile and hard to maintain.

---

## 3. Page structure

| Order | Section | ID | Notes |
|---|---|---|---|
| 1 | Header / nav | — | Logo commented out; phone; 6 anchors |
| 2 | Hero | `#hero` | H1 "Bucándote" (typo); subtitle; CTA; hero image |
| 3 | Featured services | `#featured-services` | 3 cards: "En Todos Los Dispositivos", "Reconecta tus raíces", "Alcance Internacional" |
| 4 | About | `#about` | "¿Quiénes Somos?" + 3 bullets + lorem ipsum |
| 5 | Counts | `#counts` | 100% / 12,721 / 633 / 2 |
| 6 | Services | `#services` | 6 cards, all link to WhatsApp |
| 7 | "Casos resueltos" | `#portfolio` | **Fake portfolio grid** (Caso 1, Web 3, App 2, Card 1…) with missing images |
| 8 | Testimonials | `#testimonials` | 9 quotes, mixed real/placeholder, stock photos |
| 9 | CTA | `#cta` | "Llámanos ahora y cuéntanos tu caso" |
| 10 | Directors | `#team` | "Adolfo y Martín — CEOS", one photo |
| 11 | Contact | `#contact` | Email, phone, JotForm, Facebook embed |
| 12 | Footer | — | Copyright 2002–2025, designer credit, nav links |

**Word count:** ~769 words of visible content. For a service with this much story and complexity, that is thin.

---

## 4. Content problems (by severity)

### Critical

| # | Problem | Where | Why it matters |
|---|---|---|---|
| 1 | **Fake "Casos resueltos" portfolio** | lines 358–458 | Cards say "Caso 1", "Web 3", "App 2", "Card 1", "Card 2", "Card 3"; images missing; it is template filler presented as resolved cases. Destroys credibility. |
| 2 | **Template testimonials** | lines 459–574 | "Saul Goodman" (fictional *Breaking Bad* lawyer), "John Larson", "Jena Karlis" are template names; stock portraits are not the authors. Misleading. |
| 3 | **Contradictory stats** | lines 232–261 | 100% / 12,721 / 633 / 2 on live vs 20,518 / 4,872 / 12 in repo vs 8,568 / 3,652 / 12 in 2020. |
| 4 | **No privacy policy, consent or confidentiality explanation** | sitewide | The form collects names, family history, photos and documents. No notice of who sees it or how it is stored. Legal and trust risk. |
| 5 | **"100% efectividad"** | line 236 | Unsubstantiated absolute claim in a category where outcomes cannot be guaranteed. |
| 6 | **Lorem ipsum still live** | line 221 | "Ullamco laboris nisi ut aliquip…" in the About section. |

### High

| # | Problem | Where | Why it matters |
|---|---|---|---|
| 7 | **Broken logo** | line 83 commented; `assets/img/logo.png` missing | No brand mark in the header. |
| 8 | **Missing images** | `assets/img/800x800.png` (6×), `assets/img/portfolio/*.jpg` (9×) | Broken visual grid; 404s. |
| 9 | **Missing `assets/js/dialog.js`** | line 1761 | Console 404 on every load. |
| 10 | **Malformed contact markup** | line 663: `<div class="info1" <script src=…` | Invalid HTML; may break layout/scripts. |
| 11 | **Hero typo** | line 126: "Bucándote" | Should be "Buscándote". First impression. |
| 12 | **Service typo** | line 331: "Delitos Infortmáticos" | Should be "Informáticos". |
| 13 | **About typos** | line 211: "asistenta sociales", "universitarios" | Damages professionalism. |
| 14 | **Two competing phone numbers** | header/hero `999934443`; service CTAs `5117548441` | Confuses the user and splits tracking. |
| 15 | **Generic title/meta** | `<title>Buscando Personas</title>`; description "Pagina web creada para trabajo de investigaciones" | No keywords, no value proposition, no trust. |

### Medium

| # | Problem | Where | Why it matters |
|---|---|---|---|
| 16 | **Flagship service not named in the nav** | nav: Inicio, Acerca De, Servicios, Directores | "Buscar a un familiar" is not a menu item; it is one card among six. |
| 17 | **No process explanation** | sitewide | The visitor cannot see what happens after sending the form. |
| 18 | **No pricing or "consultation" expectation** | sitewide | The biggest unanswered question. |
| 19 | **No team bios** | `#team` | Only "Adolfo y Martín — CEOS"; no surnames, roles, credentials, or photos (one low-res photo). |
| 20 | **No FAQ** | sitewide | Objections go unanswered. |
| 21 | **No English/Italian pages** | sitewide | The site claims both languages, but is Spanish-only. |
| 22 | **No case-story pages** | sitewide | The richest content is reduced to fake cards. |
| 23 | **No reviews page** | sitewide | Facebook has 94% / 13 reviews but the site does not show them. |
| 24 | **No legal notice / terms** | sitewide | Missing for a paid service handling sensitive data. |
| 25 | **No analytics or conversion tracking** | sitewide | Cannot measure leads or improve. |
| 26 | **Mixed `tú`/`usted`** | e.g. "Registre su caso" vs "Cuéntanos tu caso" | Inconsistent tone. |
| 27 | **Generic stock imagery** | hero/about | The hero composite is homemade; the testimonial photos are stock; no real reunions. |
| 28 | **"En Todos Los Dispositivos"** | featured card | A website feature, not a client benefit. Weak. |

---

## 5. SEO audit

| Element | Current | Issue |
|---|---|---|
| `<title>` | "Buscando Personas" | No service, location, or differentiator. |
| Meta description | "Pagina web creada para trabajo de investigaciones" | Generic, no CTA, no keywords, missing accent. |
| H1 | "Bucándote" | Typo; not a keyword; not descriptive. |
| H2s | "¿Quienes Somos?", "Servicios", "Casos Resueltos", "Testimoniales", "Directores", "Contacto" | Generic; no "buscar familiares", "personas desaparecidas", "padres biológicos". |
| Open Graph | **None** | Bad social sharing. |
| Twitter cards | **None** | — |
| Canonical | **None** | — |
| Structured data | **None** | No `LocalBusiness`, `ProfessionalService`, `FAQPage`, `Review`. |
| `lang` | `es` | OK. |
| `hreflang` | None | No EN/IT versions. |
| Sitemap | Not found | Single page, but still useful. |
| Robots | Not verified (429 during audit) | Check. |
| Image alt text | 22 empty `alt=""`; 6 "Gente Desaparecida (Nombre)" | Poor; decorative vs informative not distinguished. |
| Internal links | Only anchors | No service pages, no blog, no case pages. |
| URL structure | Single page | No indexable service or location pages. |
| Content depth | ~769 words | Too thin for competitive queries. |
| Local SEO | Address only in contact; no map embed; no Google Business Profile found | Weak local signals. |
| Page speed | Heavy JS/CSS, 5.1 MB assets, 3 font families, JotForm inline | Likely slow on mobile. |

**Biggest SEO gap:** the site cannot rank for the queries people actually type ("buscar a mi padre biológico", "encontrar familiares en Perú", "agencia de búsqueda de personas Lima") because it has no page targeting them.

---

## 6. Accessibility audit (quick)

| Issue | Detail |
|---|---|
| Empty alt text | 22 images have `alt=""`, including content images. |
| Heading order | H1 "Bucándote", then H2s and H4s (services use H4 under H2); some cards skip levels. |
| Color contrast | Green `#16df7e` on white is low contrast for text; check all buttons. |
| Focus states | Custom CSS may remove outlines; verify. |
| Dark mode | Toggle commented out; dark styles remain, possibly inconsistent. |
| Form labels | JotForm provides labels, but the embed's iframe/JS may have contrast and keyboard issues. |
| Language | `lang="es"` on html — good; but English/Italian claims have no language versions. |
| Motion | ScrollReveal and carousels; no `prefers-reduced-motion` handling found. |
| Phone links | Present (`tel:`) — good. |
| WhatsApp | Icon-only floating button; check accessible name. |
| Preloader | 1.5s forced delay; can feel slow and may trap screen readers. |

**Recommendation:** run Lighthouse and axe after the rebuild; target WCAG 2.2 AA.

---

## 7. Performance notes

- **5.1 MB** of assets in `assets/`, plus `slick/` and `node_modules/`.
- jQuery 2.2.0 (2016), Bootstrap 4, Owl Carousel, Slick, Isotope, Venobox, ScrollReveal, CounterUp — several unused or redundant.
- **Slick is initialised on `.regular`, but no `.regular` element exists** → dead code.
- **Isotope/Venobox** appear unused.
- JotForm loads its own CSS/JS and ~1,000 lines of inline styles, blocking render.
- Three Google Font families with many weights.
- Hero is a WebP (good), but about/team are PNG/JPG unoptimised.
- No lazy loading on most images.
- No CDN beyond Firebase and third-party CDNs.
- No caching headers visible (Firebase default).
- No analytics, so no field data.

**Recommendation:** rebuild with a modern static stack, system/2 fonts, responsive images (AVIF/WebP), lazy loading, and a native form or a lightweight form endpoint.

---

## 8. Conversion audit

**Current paths:**
1. Phone in header → `tel:`.
2. "Registre su caso" → scrolls to `#contact` (form).
3. Service cards → WhatsApp with prefilled text.
4. Floating WhatsApp → chat.
5. Facebook embed → page.

**What is missing:**
- No above-the-fold explanation of **what happens next**.
- No trust bar (years, cases, languages, reviews, address).
- No "consultation is confidential / no obligation" reassurance.
- No short form (the JotForm is long and asks for the full story immediately).
- No alternative for people who are not ready to share details (e.g. "solo tengo una pregunta").
- No response-time promise.
- No language selector.
- No exit-intent or saved-progress (not necessarily desirable, but consider).
- No thank-you page or confirmation message.
- No tracking of which service generated the lead.

**Biggest friction:** the visitor must write their whole story before knowing whether the service is real, affordable, or able to help. A short first step ("Cuéntanos a quién buscas" with 3 fields) would convert better.

---

## 9. Privacy, legal and ethical gaps

| Gap | Risk |
|---|---|
| No privacy policy | Personal data (names, family history, photos, documents) collected without notice. |
| No consent checkbox | No lawful basis documented. |
| No data-retention or deletion policy | Sensitive data may be kept indefinitely. |
| No explanation of who sees the case | The core objection ("will my family find out?") is unanswered. |
| No ethics statement about the person sought | Could imply contacting someone against their will. |
| No terms of service | No scope, payment, refund, or limitation of liability. |
| No legal notice / company details | Consumer-protection and trust issue. |
| Real names/faces in case stories without visible consent | Privacy and reputational risk. |
| "100% efectividad" | Potentially misleading advertising. |
| Stock photos as testimonials | Misleading. |

---

## 10. Technical bugs (reproducible)

1. `GET /assets/img/logo.png` → 404 (also commented out in HTML).
2. `GET /assets/img/800x800.png` → 404 (6 references).
3. `GET /assets/img/portfolio/portfolio-*.jpg` → 404 (9 references).
4. `GET /assets/js/dialog.js` → 404.
5. `#contact` contains `<div class="info1" <script src=…` — malformed tag.
6. Slick initialised on `.regular`, which does not exist.
7. `.botondark` toggle is commented out, but dark-mode CSS and `localStorage.js` remain.
8. `href="#portfolio"` exists in the nav? **No** — nav has Inicio, Acerca De, Servicios, Directores, Contacto. The "Casos" link is commented out, so the fake portfolio is orphaned.
9. Two phone numbers in the same page.
10. `scrollreveal` loaded from `unpkg.com` (unversioned) — supply-chain risk.
11. jQuery 2.2.0 from `code.jquery.com` (unversioned in URL? it is `2.2.0`, but old).
12. `punycode` from cdnjs is unnecessary for modern browsers.
13. Copyright says 2025 while the live page is served in 2026.
14. `robots.txt` and `sitemap.xml` returned 429 during the audit — verify they exist.

---

## 11. What to keep

Despite the problems, several things are worth preserving:

- **The emotional core:** "Reconectamos los lazos del corazón", "No importa el tiempo", "Unimos familias donde la adversidad impuso distancia."
- **The gold globe** as the brand mark (recreate as SVG).
- **The navy/blue/gold palette** from the brand's own imagery.
- **The real case stories** (with consent and anonymisation).
- **The two directors' story** (ex-PIP, multidisciplinary team).
- **The Facebook feed** as social proof — but as a designed component, not a raw embed.
- **The JotForm questions** as a starting point for a better intake.
- **The WhatsApp-first behaviour** — meet users where they are.
- **The bilingual/international ambition** — if it can be delivered.

---

## 12. What to remove

- Fake portfolio ("Caso 1", "Web 3", "App 2", "Card 1").
- Template testimonials ("Saul Goodman", "John Larson", "Jena Karlis").
- Stock portraits used as clients.
- Lorem ipsum.
- "100% efectividad".
- The contradictory counters.
- The generic green template palette.
- Unused JS libraries.
- The 1.5s preloader.
- The broken logo/image references.
- The "En Todos Los Dispositivos" card (replace with a client benefit).
- The comment "Designed by Enmanuel" in the footer unless it is a real credit the owner wants to keep.

---

## 13. Repository and deployment notes

- Git history: 160 commits; initial commit 29 Aug 2020.
- Recent commits:
  - `154ce7b` Update resolved cases count in index.html
  - `ba4393a` Fix typo in "universitarios"
  - `68b3761` Update WhatsApp contact number and improve service descriptions
- **The live page as scraped shows older stats than the repo** (12,721 vs 20,518). Confirm the deploy pipeline and the canonical numbers before launch.
- `firebase.json` rewrites all routes to `/index.html` — a single-page app pattern for a site that is not an SPA. New multi-page routes will need rewrites or a proper static build.
- `.firebaserc` project: `buscandopersonas`.
- `node_modules/` is present in the working tree; check `.gitignore`.

---

## 14. Priority fix list (for the rebuild)

**Must have before launch**
1. Real, consented proof (testimonials, case stories, photos).
2. One canonical set of numbers, or no numbers.
3. Privacy policy, consent, confidentiality page.
4. A clear flagship service page and navigation.
5. A short, safe first-contact form + WhatsApp.
6. Real team page with names, roles, photos, credentials.
7. Correct NAP and one phone number strategy.
8. Remove every placeholder, lorem ipsum, fake card and stock testimonial.
9. Working logo and brand assets.
10. Mobile-first performance and accessibility.

**Should have**
11. Process page ("How it works").
12. FAQ with objections.
13. Reviews page.
14. English and Italian versions (if real).
15. Case-story index with consent notes.
16. Legal notice and terms.
17. Analytics with consent.
18. LocalBusiness schema and Google Business Profile.
19. Blog / guides for search intent.
20. A "verify us" trust block.

**Nice to have**
21. Video testimonials.
22. A confidential case-status portal.
23. Live chat with routing.
24. Downloadable intake guide.
25. Partner/referral page for lawyers.
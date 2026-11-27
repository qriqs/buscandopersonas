# 05 — Contacts, channels and locations

**Use this as the single source of truth for NAP (Name, Address, Phone).** If the new site uses different data, update this file first.

---

## 1. Canonical contact block

| Field | Value | Confidence |
|---|---|---|
| **Public name** | Buscandopersonas.org SIN FRONTERAS | [FACT] |
| **Short name** | BuscandoPersonas.org | [FACT] |
| **Website** | https://buscandopersonas.org | [FACT] |
| **Email** | **contacto@buscandopersonas.org** | [FACT] |
| **Mobile / WhatsApp** | **+51 999 934 443** | [FACT] |
| **Landline / WhatsApp** | **+51 1 754 8441** | [FACT] |
| **Address** | **República del Ecuador Nro. 1025, Block 8, Dpto 502, Lima 15079, Peru** | [FACT] |
| **Hours** | "Always open" on Facebook; no office hours published | [FACT]/[GAP] |
| **Languages** | Spanish, English, Italian | [FACT] self-described |
| **Online booking** | Listed as a service on Facebook | [GAP] no booking link found |
| **Form** | JotForm ID `50398505051654`, embedded at `/index.html#contact` | [FACT] |
| **Facebook** | https://www.facebook.com/BuscandoPersonasSinFronteras | [FACT] |
| **TikTok** | https://www.tiktok.com/@buscandopersonas.org | [FACT] |
| **Legacy FB page** | https://www.facebook.com/BuscapersonasBuscandote | [FACT] |
| **Co-director FB** | https://www.facebook.com/BuscandoteSinFronteras | [FACT] |
| **Tumblr** | https://buscandopersonas.tumblr.com | [FACT] (blocked) |
| **SlideShare** | https://www.slideshare.net/buscandopersonas | [FACT] |
| **Directory** | https://www.planetaperu.pe/buscandopersonas-org-buscandote-F1709C8001DD0 | [FACT] |
| **Directory** | https://guiabbb.pe/01616707/Buscandopersonas.org_SIN_FRONTERAS | [FACT] |

### Important inconsistencies

1. **Two phone numbers compete.**
   - Header/hero: `999934443` / `+51 999934443`.
   - Service WhatsApp links: `5117548441` (landline).
   - Old site: `936898339`, `6480835`, `RPC 992761849`, `989051065`, `Nextel 41*159*1873`.
   - **Recommendation:** one primary WhatsApp (mobile), one landline for calls, clearly labelled. Retire the rest.

2. **Address format varies.**
   - "República del Ecuador Nro.1025 Block 8 Dpto 502, Lima, Peru, 15079" (Facebook).
   - "Avenida República del Ecuador (Antes Zorritos) número 1025 Block 8 Dpto 502" (planetaperu).
   - "2, Lima, Peru, 15079" (legacy FB page).
   - Use the full, consistent version with "Avenida" and the reference "(antes Zorritos)".

3. **Categories vary.**
   - Facebook: "Entrepreneur".
   - planetaperu: "Organismos no gubernamentales, agencia de investigaciones, profesores universitarios, organismos instituciones, asistencia social, busca personas".
   - Legacy FB page: "Entertainment website".
   - **Recommendation:** choose "Investigación privada / búsqueda de personas" and keep "organización" language only if legally accurate.

---

## 2. Channel-by-channel

### Website
- Static one-page site (`index.html`), Firebase Hosting.
- Sections: hero, featured services, about, stats, services, "Casos resueltos", testimonials, CTA, directors, contact, Facebook embed, footer.
- Primary CTA: "Registre su caso" (scrolls to form), "Llamanos ahora" (scrolls to contact), phone links.
- Form: JotForm embed; no native backend; no confirmation page found.
- No privacy policy, terms, cookies, FAQ, blog, or language switcher.
- **Broken:** nav logo is commented out (`assets/img/logo.png` does not exist); portfolio images `assets/img/portfolio/*` and `assets/img/800x800.png` are missing; contact section has a malformed `<div class="info1" <script ...>`.

### WhatsApp
- The real front door. Used by all service cards and the floating button.
- Floating WhatsApp widget ("Chatea por WhatsApp") with a greeting: "Hola, ¿cómo lo puedo ayudar?"
- Two numbers: `+51 999 934 443` (mobile) and `+51 1 754 8441` (landline).
- **Gap:** no published response time, no after-hours message, no language routing.

### Facebook
- **Main page:** `BuscandoPersonasSinFronteras`
  - 3.4K followers, 19 following.
  - 94% recommend (13 reviews).
  - Created **11 February 2014**.
  - Page ID `580597925366344`.
  - "Always open", "Online booking", "This Page is currently running ads".
  - Address, phone, email, website as above.
  - Service areas listed: Santiago (Chile), Italia FL, Buenos Aires (Argentina), Quito (Ecuador), Mexico City, Del Norte CO, Lima (Peru), Canada KS.
  - Content: reels of reunions, "CASO RESUELTO", missing-person bulletins, emotional quotes.
- **Legacy page:** `BuscapersonasBuscandote` ("BuscandoPersonas.ORG Buscandote")
  - 2.4K followers, 14 following.
  - 78% recommend (15 reviews).
  - Address "2, Lima, Peru, 15079"; email; website.
  - Category "Entertainment website".
- **Co-director profile:** `BuscandoteSinFronteras` ("Martin Arias Garcia")
  - 2.2K followers, 977 following.
  - Studied at **Policía de Investigaciones del Perú**.
  - Past: **Palacio de Justicia de Lima**.
  - Lives in Lima; from Rímac; married.
  - Posts case stories and reels.

### TikTok
- Handle: `@buscandopersonas.org`
- Display name: **Busca Personas Sin Fronteras**
- 163 followers, 521 likes, 474 following (scraped Nov 2026).
- Recent video themes:
  - "PARTE FINAL: Después de 35 años encuentra a su padre biológico tras tener un aparatoso accidente que lo postra en una silla de ruedas."
  - "Después de 35 años — Juan Chile nació sin padre, forjado por la ausencia y la lucha."
  - "Mario Cervera, separado de sus hermanos tras la muerte de su madre, los reencuentra décadas después."
  - "¿En cuánto tiempo se incinera un cuerpo?" (comment reply / educational).
  - "SEGUIMOS UNIENDO FAMILIAS SEPARADAS POR LA ADVERSIDAD."
- **Gap:** low follower count relative to Facebook; bio/link not captured; no consistent CTA to the website.

### Other social
- **Tumblr:** `buscandopersonas.tumblr.com` — legacy blog with "Quienes Somos", case posts, missing-person bulletins. Now behind a browser check.
- **SlideShare:** 13 decks, mostly "Buscan a padre y encuentran una hermana" (9–16 slides).
- **No Instagram, YouTube, X/Twitter, LinkedIn** found in public search. [GAP] Confirm whether they exist.

---

## 3. Service areas

Facebook lists these as service areas (not necessarily offices):

- **Peru:** Lima (HQ), nationwide collaborators.
- **Chile:** Santiago.
- **Argentina:** Buenos Aires (CABA).
- **Ecuador:** Quito.
- **Mexico:** Mexico City.
- **United States:** "Del Norte, CO"; "Italia, FL" (possibly a place name in Florida, or an odd label); "Canada, KS" (possibly a data-entry artefact).
- **Canada:** "Canada, KS" (ambiguous).
- **Italy:** "Italia, FL" (ambiguous).

**Assessment:** the list looks like a Facebook auto-generated place list with errors, not a verified office network. Do not present these as offices. Use safer language: **"Operamos en Perú y trabajamos con una red de colaboradores en el extranjero."** Ask the owner which countries are real.

---

## 4. Intake form (JotForm 50398505051654)

| Field | Type | Required |
|---|---|---|
| Nombre completo (Nombres, Apellidos) | text | Yes |
| Nacionalidad | text | No |
| Número de teléfono | tel | Yes |
| Email | email | Yes |
| Datos de la persona que busca (Nombre, Apellido) | text | Yes |
| Narre la historia del caso | textarea | Yes |
| Fotos o documentos | file upload | No |

**Technical note:** the form is embedded inside `index.html`, with JotForm CSS/JS loaded from `cdn.jotfor.ms`. It posts to `https://submit.jotformz.com/submit/50398505051654/`. No custom thank-you page or tracking was found.

**Privacy gap:** no consent checkbox, no privacy notice, no explanation of who receives the information. This is a significant issue for a service that handles sensitive family data.

---

## 5. Payments, hours and response

| Item | Status |
|---|---|
| Payment methods | [GAP] not published |
| Currency | [GAP] presumably PEN/USD |
| Invoicing | [GAP] |
| Deposit / installments | [GAP] |
| Office hours | "Always open" on Facebook; no schedule |
| Response time | [GAP] |
| Emergency line | [GAP] (vehicle service claims 24h) |
| Languages on the phone | [GAP] Spanish assumed; English/Italian claimed |

---

## 6. Listings and citations (fix NAP consistency)

| Source | Name used | Address | Phone |
|---|---|---|---|
| Website | BuscandoPersonas.Org | none in footer | +51 999934443 |
| Facebook main | Buscandopersonas.org SIN FRONTERAS | República del Ecuador 1025, Block 8 Dpto 502, Lima 15079 | +51 1 7548441 |
| Facebook legacy | BuscandoPersonas.ORG Buscandote | "2, Lima, Peru, 15079" | none |
| planetaperu | Buscandopersonas.Org Buscándote | Avenida República del Ecuador (Antes Zorritos) 1025, Block 8 Dpto 502 | +51 999 934 443 |
| guiabbb | Buscandopersonas.org SIN FRONTERAS | República del Ecuador Nro.1025 Block 8 Dpto 502 | 999 934 443 |
| Cybo (MK) | Buscandopersonas.org SIN FRONTERAS | República del Ecuador Nro.1025 Block 8 Dpto 502 | 999 934 443 |

**Recommendation:** publish a single canonical NAP block on the site, use it verbatim in Facebook, Google Business Profile (if it exists), and directories, and add structured data (`LocalBusiness` / `ProfessionalService`) once the legal details are confirmed.

---

## 7. Domain and hosting

| Item | Value |
|---|---|
| Domain | `buscandopersonas.org` |
| Hosting | Firebase Hosting (project `buscandopersonas`) |
| Config | `firebase.json` rewrites all routes to `/index.html` |
| Repo | local git repo; initial commit 2020-08-29 |
| Analytics | none found (no GA4, GTM, Meta Pixel) |
| Forms | JotForm (third party) |
| Fonts | Google Fonts |
| CDN | cdnjs (punycode), site-assets.fontawesome.com, cdn.jotfor.ms, code.jquery.com |

**Note:** no analytics means the business cannot measure leads, conversions, or which services people ask about. The redesign should include consent-based analytics.

---

## 8. Brand-owned assets found in the repo

| File | What it is | Status |
|---|---|---|
| `assets/img/hero.webp` | Hero composite with "Lo Ubicamos Por ti", family, DNA, globe | Present |
| `assets/img/about.png` | Team collage around gold globe | Present |
| `assets/img/team/ceos.jpg` | Photo of the two directors | Present, low-res |
| `assets/img/testimonials/*.jpg` | 9 stock portraits | Present, not real clients |
| `assets/img/favicon.png` | Favicon | Present |
| `assets/img/whatsapp.svg` | WhatsApp icon | Present |
| `assets/img/logo.png` | Referenced in HTML | **Missing** |
| `assets/img/800x800.png` | Referenced 6× in featured services | **Missing** |
| `assets/img/portfolio/*.jpg` | Referenced 9× in "Casos resueltos" | **Missing** |

The gold globe exists only inside the hero/about composites, not as a standalone vector. A redesign should recreate it as SVG (with permission) or commission a cleaned version.
# 10 — Sources and research log

**Research date:** 27 November 2026
**Researcher:** OpenCode agent
**Method:** Firecrawl scrape/search, `r.jina.ai` public-page rendering, Wayback Machine, direct HTTP, repository inspection.

---

## 1. Primary sources

### Live website
- **URL:** https://buscandopersonas.org/
- **Also:** https://buscandopersonas.org/index.html
- **Extracted:** full visible text, section structure, service copy, testimonials, stats, contact details, form fields, social embed.
- **Method:** Firecrawl `scrape` (markdown), plus local `index.html` (1,794 lines).
- **Limitations:** dynamic Facebook embed and JotForm may render differently; no logged-in views; `robots.txt`/`sitemap.xml` returned 429 during the audit.

### Facebook — main page
- **URL:** https://www.facebook.com/BuscandoPersonasSinFronteras
- **Extracted via:**
  - https://www.facebook.com/BuscandoPersonasSinFronteras/about
  - https://www.facebook.com/BuscandoPersonasSinFronteras/about_contact_and_basic_info
  - https://www.facebook.com/BuscandoPersonasSinFronteras/about_profile_transparency
  - `r.jina.ai` renders of individual public posts
- **Extracted:** name, followers, following, category, address, service areas, phone, email, website, hours, reviews summary, page creation date (11 Feb 2014), page ID (580597925366344), "running ads", recent posts, reel themes.
- **Limitations:** Facebook blocks unauthenticated scraping of the full post feed, photos, and most reviews. The "Posts" page and `/reviews` were partially or fully gated. Counts are as displayed on 27 Nov 2026 and may change.

### Facebook — legacy page
- **URL:** https://www.facebook.com/BuscapersonasBuscandote
- **Extracted:** 2.4K followers, 78% recommend (15 reviews), address "2, Lima, Peru, 15079", email, website, category "Entertainment website".
- **Limitations:** same login wall.

### Facebook — co-director profile
- **URL:** https://www.facebook.com/BuscandoteSinFronteras
- **Extracted:** 2.2K followers, 977 following; studied at Policía de Investigaciones del Perú; past Palacio de Justicia de Lima; lives in Lima; from Rímac; married; reels and case posts.
- **Limitations:** personal profile, not a business page.

### TikTok
- **URL:** https://www.tiktok.com/@buscandopersonas.org
- **Extracted:** display name "Busca Personas Sin Fronteras", 163 followers, 521 likes, 474 following, recent video captions.
- **Also:** https://www.tiktok.com/oembed?url=… for individual videos.
- **Limitations:** profile bio and links not fully captured; follower counts change.

### Old website (Wayback Machine)
- **Base:** http://buscandopersonas.org/ and http://www.buscandopersonas.org/
- **Snapshots used:**
  - 2013-01-01 — https://web.archive.org/web/20130101105122/http://www.buscandopersonas.org/
  - 2013-05-23 — https://web.archive.org/web/20130620164255/http://www.buscandopersonas.org/2013/05/23/lo-buscaban-hace-22-anos
  - 2015-08-11 — `?page_id=35, 37, 41, 43, 46, 57, 71`
  - 2017-10-24 — `?page_id=263` (Nosotros), `?page_id=308` (Detectives), `?page_id=320` (Galerías)
  - 2018-07-26 — `?p=468` (Benites Ávila)
  - 2019-08-01 — home
  - 2020-12-15 — home (current design)
  - 2020-12-14 — `/asesoriajuridica/`
- **Extracted:** mission, team composition, GIEB/UIEB, forensic capabilities, service pages, case stories, contact history, old statistics.
- **Limitations:** Wayback was rate-limited toward the end of the session; some pages (`?p=531`, 2020 posts) were not archived or returned 404. Text may include OCR/encoding artifacts.

### Repositories and local files
- `/home/developer/buscandopersonas/index.html` — current site.
- `/home/developer/buscandopersonas/README.md` — project summary.
- `/home/developer/buscandopersonas/assets/` — images, CSS, JS.
- `/home/developer/buscandopersonas/firebase.json`, `.firebaserc` — hosting.
- Git history (160 commits) — dates and changes.
- **Extracted:** stack, missing files, line numbers, section structure, typos, deployment config.

---

## 2. Secondary sources

### Directories
- **planetaperu.pe** — https://www.planetaperu.pe/buscandopersonas-org-buscandote-F1709C8001DD0
  - Categories: "Organismos no gubernamentales, agencia de investigaciones, profesores universitarios, organismos instituciones, asistencia social, busca personas."
  - Address: Avenida República del Ecuador (Antes Zorritos) 1025, Block 8 Dpto 502.
  - Phone: +51 999 934 443.
- **guiabbb.pe** — https://guiabbb.pe/01616707/Buscandopersonas.org_SIN_FRONTERAS
  - Address, phone, 3,411 Facebook likes, 19 check-ins, social score 7/10.
- **Cybo (MK)** — listing with the same address and phone.
- **Limitations:** user-editable directories; data may be stale.

### SlideShare
- **URL:** https://www.slideshare.net/buscandopersonas
- **Extracted:** 13 presentations, mostly "Buscan a padre y encuentran una hermana" (9–16 slides), 2010s.
- **Limitations:** presentation bodies not extracted; likely a single case study repeated.

### Tumblr
- **URL:** https://buscandopersonas.tumblr.com/
- **Status:** blocked by a browser check / 403.
- **Not extracted:** "Quienes Somos" and case posts. Search snippets confirm the site existed and mirrored the brand.

### Facebook group / third-party posts
- Search snippets from community groups and partner pages (e.g. "Aguaytía", "Ecuadorlegal", "Unidos Contra Los Estafadores") confirmed:
  - missing-person bulletins,
  - people-data lookup offers,
  - the email/phone/website,
  - the "Busca Personas Sin Fronteras" name.
- **Limitations:** snippets only; not full-page verification.

---

## 3. Search queries used (representative)

- `"Buscando Personas Sin Fronteras"`
- `"buscandopersonas.org" OR "BuscandoPersonas" Adolfo Martín`
- `"Busca Personas Sin Fronteras" TikTok`
- `buscando personas sin fronteras Perú organización historias casos`
- `site:facebook.com/BuscandoPersonasSinFronteras`
- `site:facebook.com "BuscandoPersonasSinFronteras" caso resuelto`
- `"BUSCANDOPERSONAS SIN FRONTERAS" padre hermana caso`
- `"buscandopersonas.org" "sin fronteras"`
- `site:tiktok.com "@buscandopersonas.org"`
- `"BuscandoPersonas.org" opiniones OR estafa OR confiable`
- `"Buscando Personas Sin Fronteras" Lima investigación`
- `"BuscandoPersonas" Martín Arias García policía investigaciones Perú`

---

## 4. What could not be verified

| Item | Why |
|---|---|
| Legal entity / RUC | Not published; no public registry lookup performed |
| Founding year 2002 | Only the copyright line; earliest web evidence 2012 |
| Current case/collaborator counts | Three conflicting versions; live page behind repo |
| Pricing | Never published |
| Guarantees / refunds | Never published |
| Consent for testimonials/cases | No consent language found |
| 12 of 13 Facebook reviews | Login wall |
| Italian/English service delivery | Claimed, no evidence of staff or pages |
| Google Business Profile / reviews | Not found in search |
| Instagram / YouTube / LinkedIn | Not found |
| Tumblr content | Browser check blocked |
| Whether "Buscándote" is a separate entity | Ambiguous across sources |

---

## 5. Source-quality notes

- **Business-owned sources** (site, Facebook, TikTok, old site) are authoritative for *what the business says about itself*, not for independent verification of outcomes.
- **Directories** are third-party but user-editable; treat as corroboration, not proof.
- **Wayback captures** are snapshots; content may have changed after the capture date.
- **Facebook counts** are dynamic and were captured on 27 Nov 2026.
- **Case stories** are the business's own narratives; names and details have not been independently verified.
- **Testimonials** mix real and template content; see `06-proof-testimonials-and-cases.md`.

---

## 6. Recommended next research (if more is needed)

1. **Interview the owner** using `09-open-questions.md`.
2. **Export Facebook reviews** and Messenger/WhatsApp templates.
3. **Check SUNARP / SUNAT** for the legal entity (with the owner's authorisation).
4. **Claim/check Google Business Profile** and Google Maps reviews.
5. **Search Peruvian press** (El Comercio, La República, RPP, Exitosa, Andina) for the organisation or the directors.
6. **Review the TikTok analytics** and the best-performing videos.
7. **Audit competitors** (top 10 for "buscar personas Perú") for content and pricing.
8. **Map the diaspora demand** (Chile, Argentina, US, Italy) via Search Console and ads data, if available.
9. **Verify the address** and visit/photograph the office (with permission).
10. **Document consent** for every story and photo before publication.

---

## 7. Files in `raw/`

| File | Contents |
|---|---|
| `raw/website-live.md` | Full markdown of the live homepage (27 Nov 2026) |
| `raw/facebook-main.md` | About, contact, transparency, reviews, post excerpts |
| `raw/facebook-posts.md` | Captured public posts and case stories |
| `raw/tiktok.md` | Profile stats and video captions |
| `raw/legacy-wordpress.md` | Old "Nosotros", service pages, 2012–2013 case stories |
| `raw/search-results.md` | Search snippets and third-party references |

---

*End of research log.*
# 01 — The business

**Confidence:** high on identity and services; low on legal structure, scale and founding date.

---

## Identity at a glance

| Field | Value | Status |
|---|---|---|
| Public brand | **Buscandopersonas.org SIN FRONTERAS** | [FACT] Facebook, site |
| Short brand | **BuscandoPersonas.Org**, **Buscándote**, **Busca Personas Sin Fronteras** | [FACT] used interchangeably |
| Domain | **buscandopersonas.org** | [FACT] |
| Category | Private investigation agency + family-search / reunification service | [FACT] self-described |
| HQ | República del Ecuador Nro. 1025, Block 8, Dpto 502, Lima 15079, Peru | [FACT] Facebook + directory |
| Directors | **Adolfo Ramírez Funes** and **Martín Arias García** | [LIKELY] 2013 site names them; current site says "Adolfo y Martín" |
| Team | Former PIP officers, lawyers, teachers, social workers, university graduates | [FACT] self-described |
| Languages | Spanish, English, Italian | [FACT] repeated on site and posts |
| Coverage | Peru nationwide + international collaborator network (Chile, Argentina, Ecuador, Mexico, US, Canada, Italy claimed) | [LIKELY] Facebook service areas + copy |
| Founded | "2002" in the copyright line | [UNVERIFIED] earliest public evidence is 2012 |
| Legal form | Not published. Directory calls it an NGO; Facebook category is "Entrepreneur" | [GAP] |
| Hours | "Always open" (Facebook) | [FACT] |
| Website tech | Static one-page site, Firebase Hosting | [FACT] repo |

---

## What they actually do

Two businesses share one brand:

### A. The humanitarian core — buscar y reunir familias
Finding people who have been separated from their families, often for decades, and facilitating a safe reunion. This is the public identity, the emotional centre, and the source of nearly all testimonials and case stories.

The people sought are named explicitly and repeatedly:
> "padres biológicos, familiares, hermanos, hijos, antepasados, exnovios, conocidos etc. sin importar el LUGAR ni el TIEMPO que haya transcurrido. EN ESPAÑOL, INGLÉS e ITALIANO."

### B. The commercial investigation practice
Infidelity evidence, child-support debtor location, vehicle recovery, fraudster location, cyber-impersonation, and internal corporate theft. These are sold as discrete services, each with its own WhatsApp prefill on the current site.

The two are connected by the same capability stack: databases, field investigation, legal channels, a collaborator network, and forensic identification.

---

## Objectives (inferred from public evidence)

These are not stated as a strategy document anywhere; they are reconstructed from the site, posts and services.

1. **Reunite families** — the humanitarian mission and the emotional core of the brand.
2. **Convert high-intent searches into confidential consultations** — the website and social channels exist to generate cases, not to sell online.
3. **Project credibility in a low-trust category** — ex-PIP team, lawyers, social workers, address, years of practice, real cases, languages.
4. **Serve the Peruvian diaspora** — people abroad who need someone on the ground in Peru.
5. **Grow the commercial investigation lines** — infidelity, child support, vehicles, fraud, cyber, corporate theft — which likely subsidise or complement the family-search work.
6. **Build a B2B referral channel** — lawyers, notaries and companies who need people located.
7. **Professionalise the brand** — consolidate names, visual identity, proof and process after years of fragmented pages.

**Tension to resolve with the owner:** is the primary goal humanitarian reach, premium investigation revenue, or volume lead generation? The answer changes the site's hierarchy, tone and calls to action.

---

## Origin story (as the business tells it)

The most complete version is the old "NOSOTROS" page (2015–2017):

> "Somos un grupo humano compacto de diversas profesiones y creencias religiosas. Lo integramos abogados, asistentes sociales, profesores, universitarios y policías veteranos luchadores contra la criminalidad que por coincidencia del destino hemos tenido similitudes experiencia en ayuda humanitaria."

> "Hemos decidido actuar plasmando este proyecto para ayudarle a usted, tenga la satisfacción de reencontrarse con su ser querido…"

> "Debido a la gran demanda que existe por este medio del internet y por la cantidad de páginas web que hay para satisfacer las solicitudes de búsqueda de un ser querido, sus casos entran a la ruleta y al azar del destino… Por ello, en nuestra AGENCIA DE INVESTIGACIONES BUSCANDOTE, hemos creado un área denominada 'BUSCANDOPERSONAS.ORG'. Esta unidad de investigación especial se encargará de ubicar físicamente a la persona solicitada para luego hacer contacto con usted. Lo conforman expertos miembros de la Ex Policía de Investigaciones del Perú (PIP) y universitarios de carrera en la búsqueda y ubicación de personas desaparecidas…"

> "Contamos con una red de colaboradores, instituciones gubernamentales y organizaciones privadas afines a nuestra noble tarea."

This is the clearest articulation of the model: **a specialised unit inside an existing investigation agency**, not a startup. The old site also names two internal structures:
- **GIEB** — Grupo de Investigaciones Especiales Buscándote.
- **UIEB** — Unidad de Investigación Especial Buscandot.

The 2013 site adds the scientific/forensic layer:
> "El personal de criminalistas BuscandoT tiene amplia experiencia en la IDENTIFICACIÓN de personas: Papiloscopía, Teratología Dactilar, Quiroscopía, Pelmatoscopía, Odontología, Identificación Facial si el caso lo amerita. Así como también en la BÚSQUEDA de personas en zonas urbanas, marginales, rurales, teniendo personal que practica el idioma autóctono…"

And the legal/emotional support layer:
> "El personal de abogados… la asesoría legal estará gustoso de informarle y darle viabilidad a sus solicitudes… También el personal de docentes, universitarios y asistencia social le brindará el conocimiento y la postura que debe asumir usted ante el reencuentro interrumpido por tan largo tiempo en casos excepcionales, psicológicos, sentimentales, para evitar los trastornos en la salud."

---

## Timeline

| Date | Event | Source |
|---|---|---|
| **2002** | Claimed founding year (copyright "2002–2025") | live site footer |
| **2012** | Active WordPress site; public "Personas ubicadas", "Mural", "Historias", "Testimonios" categories; phone 6480835 | Wayback |
| **2013** | Older site with UIEB / GIEB framing, forensic identification, directors named as "Martian Arias G. y Adolfo Ramirez Funes" | Wayback |
| **11 Feb 2014** | Facebook page created | Facebook Page transparency |
| **2015–2019** | WordPress service pages: Nosotros, Busca Personas, Deudor x Alimentos, Estafadores/Perú, Infidelidades, Robos, Ubica Vehículos, Asesoría Jurídica | Wayback |
| **2019–2020** | Migration to a static one-page site (repo initial commit 29 Aug 2020); Firebase Hosting | Git history |
| **2022** | Current asset set archived (hero, about, team, testimonials) | Wayback |
| **2025** | WhatsApp number updated; copyright set to 2025 | Git commit 68b3761 |
| **Sep 2026** | Facebook still actively posting reels and "casos resueltos" | Facebook |
| **Nov 2026** | Site still shows 2025 copyright and content inconsistencies | live site |

---

## Scale claims — read this before using any number

The business publishes several mutually incompatible sets of numbers. **Do not pick one and present it as fact.** Ask the owner for a single verified figure.

| Version | "Efectividad" | Casos resueltos | Colaboradores nacionales | Miembros |
|---|---|---|---|---|
| Local repo, current HEAD (2025) | 100% | **20,518** | **4,872** | **12** |
| Live site, scraped 27 Nov 2026 | 100% | **12,721** | **633** | **2** |
| Live site, 2020 version | 100% | **8,568** | **3,652** | **12** |
| Facebook page | — | — | — | 3.4K followers, 94% recommend (13 reviews), 19 check-ins |
| TikTok | — | — | — | 163 followers, 521 likes |
| Other Facebook page "BuscandoPersonas.ORG Buscandote" | — | — | — | 2.4K followers, 78% recommend (15 reviews) |

Observations:
- The live page as scraped (12,721 / 633 / 2) differs from the repository (20,518 / 4,872 / 12). Either the deploy is stale or the scrape hit an older cached copy. [RISK] Either way, the public number is not trustworthy.
- "2 miembros" contradicts "12 miembros" and the team collage of nine people.
- "100% efectividad" is an absolute claim. In Peru, advertising with unsubstantiated absolute efficacy claims can create consumer-protection exposure. [RISK]
- The growth pattern (8,568 → 12,721 → 20,518) is not linear with time and does not match the collaborator count (3,652 → 633 → 4,872).

**Recommendation for the redesign:** replace the counters with verifiable trust signals (years of practice, countries served, languages, page history, number of published case stories) or use one owner-approved number with its definition and date.

---

## Business model

- **Case-based professional fees.** Every engagement starts with a private consultation; no prices are published.
- **Vehicle recovery** is explicitly **"al 100%, vale decir al éxito"** — a success-fee model.
- **Legal advice** is offered as an adjacent service, likely bundled or referred.
- **Lead generation through partner pages.** Posts on pages such as "Ecuadorlegal" promote "consulta por nombres o número" with the BuscandoPersonas email and phone. This suggests B2B/affiliate distribution beyond the main brand. [LIKELY]
- **No e-commerce, no subscription, no published packages.** The website is a lead-capture and credibility asset, not a store.

---

## What the business is **not**

Useful for copywriting and for avoiding wrong expectations:

- **Not a government service.** It is private and paid. It is not RENIEC, the PNP, the Fiscalía, or a missing-persons registry.
- **Not free**, although the old site mentions "asesoría gratuita para iniciar demanda por alimentos" in a Facebook post. Any free component must be confirmed.
- **Not a DNA laboratory.** DNA testing is mentioned as a tool/benefit, not as an in-house lab.
- **Not a law firm**, although lawyers are on the team and legal advice is offered.
- **Not a guarantee of reunion.** The person being sought may refuse contact, may have died, or may not be findable. A credible site must say this gently.
- **Not only a "detective" brand.** The emotional product is closure and family restoration.

---

## Market and category context

- **Category:** private investigation / people-location services in Peru, with a diaspora-facing family-search niche.
- **Adjacent competitors:** other "busca personas" sites, lawyers, notaries, private investigators, NGOs such as the ICRC's Restoring Family Links, and informal Facebook groups.
- **Why the niche exists:** weak or fragmented public mechanisms for family tracing; large Peruvian diaspora; decades of internal migration and conflict; adoption and abandonment histories; child-support enforcement gaps.
- **Differentiator vs. free Facebook groups:** active investigation, legal channels, field work, discretion, and a human intermediary — not just a post waiting to be shared.
- **Differentiator vs. lawyers:** investigative capacity and international network, plus emotional mediation.
- **Differentiator vs. other detective agencies:** the humanitarian story, the multilingual reach, and the volume of published reunions.

---

## Regulatory and ethical context (important for the new site)

- **Personal data is sensitive.** Searches involve names, photos, family history, addresses, and sometimes minors. Peru's Personal Data Protection Law (Law 29733) and its regulations apply. A privacy policy and explicit consent are not optional.
- **The located person has rights too.** A credible ethical position: the goal is a safe, consensual reunion, not disclosure at any cost. The site should explain what happens if the person does not want contact.
- **Access to official databases** (RENIEC, etc.) is lawful only through authorised channels. The site should never imply illegal access.
- **"Ex-PIP" credibility** should be presented factually (experience, training, methodology), not as an implication of current police authority.
- **Testimonials and case stories** need consent, especially when they include names, photos, or details that could identify a family. The current site publishes real names and faces without visible consent language.
- **Absolute claims** ("100% efectividad", "resolvemos casos que otros no pueden") should be softened to defensible language.

---

## Brand architecture (what exists in public)

| Property | Role | Followers / proof |
|---|---|---|
| **Buscandopersonas.org SIN FRONTERAS** (FB page) | Main brand page | 3.4K followers; 94% recommend / 13 reviews; created 2014; running ads |
| **BuscandoPersonas.ORG Buscandote** (FB page) | Secondary/legacy page | 2.4K followers; 78% recommend / 15 reviews |
| **Martin Arias Garcia / BuscandoteSinFronteras** (FB profile) | Co-director's personal brand | 2.2K followers; posts case content |
| **@buscandopersonas.org** (TikTok) | Short-form case storytelling | 163 followers; 521 likes; active reels |
| **buscandopersonas.tumblr.com** | Legacy blog | exists, now behind a browser check |
| **slideshare.net/buscandopersonas** | Legacy presentations | 13 slide decks, mostly "Buscan a padre y encuentran una hermana" |
| **planetaperu.pe listing** | Directory | lists them as NGO / investigation agency / social assistance |
| **guiabbb.pe listing** | Directory | address, phone, 3,411 FB likes, 19 check-ins |

**Implication:** the brand is fragmented across names, pages and profiles. A redesign should establish one canonical name, one logo, one NAP, and a clear relationship between the legacy pages and the main site.
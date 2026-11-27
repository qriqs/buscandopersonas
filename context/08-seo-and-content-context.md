# 08 — SEO and content context

**Reality check:** the site currently has one page, ~769 words, a generic title, and no service/location pages. Almost all high-intent searches are handled by Facebook, directories, or competitors. The redesign has more to gain from **structure and content** than from technical SEO tricks.

---

## 1. Current metadata (verbatim)

```html
<title>Buscando Personas</title>
<meta name="description" content="Pagina web creada para trabajo de investigaciones">
<html lang="es">
```

- No Open Graph, Twitter Card, canonical, `hreflang`, or JSON-LD.
- No H1 keyword. H1 is "Bucándote" (typo).
- No service-specific titles or descriptions.
- No location in the title ("Lima", "Perú").
- No trust modifier ("desde 2002", "ex PIP", "confidencial").

**Quick wins even before a rebuild:**
- `BuscandoPersonas.org | Búsqueda y reencuentro de personas en Perú y el mundo`
- Description: "Ayudamos a encontrar padres biológicos, hijos, hermanos y personas desaparecidas en Perú y el extranjero. Confidencial. Hablamos español, inglés e italiano."
- Add OG image (the gold globe + a real reunion photo).
- Add `ProfessionalService` + `LocalBusiness` schema.

---

## 2. Search intent clusters

### Spanish (primary market)

#### A. Family search — high intent, high emotion
| Query | Intent | Content that wins |
|---|---|---|
| buscar a mi padre biológico | Informational → commercial | Guide + service page + form |
| encontrar a mi madre biológica | Informational → commercial | Guide + stories + service |
| buscar a mi hermano desaparecido | Commercial | Service page + case stories |
| encontrar familiares en Perú | Commercial | Service page + coverage |
| agencia de búsqueda de personas | Commercial | Home + service + trust |
| búsqueda de personas en Lima | Local commercial | Location page + NAP |
| buscar personas desaparecidas Perú | Informational | Guide + how to report + service |
| cómo encontrar a un familiar después de años | Informational | Long-form guide |
| buscar familiares en el extranjero | Commercial | International service page |
| prueba de ADN para encontrar familiares | Informational | Explainer + partner lab |
| encontrar a mi hijo desaparecido | Commercial/urgent | Service page + emergency path |
| buscar a un exnovio / amigo | Low commercial | Soft landing page |
| localizar a una persona por nombre | Commercial | Data-lookup page (careful) |
| ubicar a una persona en Perú | Commercial | Service page |
| buscar antepasados / árbol genealógico | Informational | Guide + service |

#### B. Child support / legal
| Query | Intent | Content |
|---|---|---|
| localizar deudor por alimentos | Commercial | Service page |
| cómo ubicar al padre que no paga pensión | Informational → commercial | Guide + service |
| demanda por alimentos Perú | Informational | Legal guide + lawyer CTA |
| encontrar al padre de mi hijo | Commercial | Service + legal |
| dirección de una persona para notificación | B2B/commercial | Lawyer page |

#### C. Infidelity
| Query | Intent | Content |
|---|---|---|
| investigar infidelidad Perú | Commercial | Service page |
| detective privado infidelidad Lima | Commercial | Service + local |
| pruebas de infidelidad para divorcio | Commercial | Service + legal |
| cómo saber si mi pareja me engaña | Informational | Guide → service |

#### D. Fraud / cyber
| Query | Intent | Content |
|---|---|---|
| ubicar a un estafador | Commercial | Service page |
| me estafaron cómo recuperar mi dinero | Informational | Guide + service |
| suplantación de identidad redes sociales | Commercial | Service page |
| investigación de delitos informáticos Perú | Commercial | Service page |
| investigación de robos internos empresa | B2B | Service page |
| detective corporativo Lima | B2B | Service page |

#### E. Vehicle
| Query | Intent | Content |
|---|---|---|
| recuperar vehículo robado Perú | Commercial/urgent | Service page + 24/7 |
| ubicar vehículo por GPS | Commercial | Service page |
| recuperación de vehículos por mandato judicial | B2B | Service page |

### English (diaspora / international)
- "find my biological father in Peru"
- "search for missing family member Peru"
- "private investigator Lima Peru"
- "find birth mother Peru"
- "adoption search Peru"
- "locate a person in Peru"
- "child support debtor Peru"
- "infidelity investigation Peru"
- "English speaking private investigator Lima"

### Italian (claimed, unverified demand)
- "trovare padre biologico Perù"
- "cercare familiari in Perù"
- "investigatore privato Lima"
- "ritrovare madre biologica Perù"

**Note:** there is no evidence of Italian-language demand or content. Build it only if the owner has Italian-speaking staff and real cases. A machine-translated page can damage trust.

---

## 3. Recommended page architecture (content context)

This is not a design spec; it is the minimum page set required to rank and convert.

```
/                                  Home — emotional promise + flagship + proof + CTA
/buscar-personas/                  Flagship: family search & reunion
  /buscar-padre-biologico/         Sub-service
  /buscar-madre-biologica/
  /buscar-hermanos/
  /personas-desaparecidas/
  /buscar-familiares-extranjero/
  /adn-e-identificacion/
/servicios/                        Hub for commercial investigations
  /infidelidades/
  /deudores-por-alimentos/
  /ubicacion-de-vehiculos/
  /estafadores/
  /delitos-informaticos/
  /robo-en-empresas/
/abogados/                         B2B for law firms (or /para-abogados/)
/como-funciona/                    Process, confidentiality, timelines
/historias/                        Case stories index
  /historias/[slug]/
/testimonios/                      Reviews + consented testimonials
/nosotros/                         Team, directors, history, values
/preguntas-frecuentes/             FAQ
/contacto/                         Short form, WhatsApp, address, map
/privacidad/                       Privacy policy
/terminos/                         Terms
/aviso-legal/                      Legal notice
/en/                               English hub (if real)
/it/                               Italian hub (if real)
```

**Priority for launch:** home, flagship, 3–4 sub-services, services hub, how it works, stories, about, contact, privacy.

---

## 4. Content gaps and opportunities

### The biggest gap: no "how to" content
People search for *how* to find someone before they search for an agency. The site has no guides. Each guide can rank and feed the service page.

**Guide ideas:**
- "Cómo buscar a tu padre biológico en Perú: qué datos necesitas y por dónde empezar."
- "Qué hacer si un familiar desapareció en Perú (y cómo evitar estafas)."
- "Buscar a un familiar en el extranjero desde Perú: guía práctica."
- "Cómo confirmar una identidad sin poner en riesgo a la persona."
- "Qué es una prueba de ADN informativa y cuándo tiene sentido."
- "Cómo ubicar a un deudor por alimentos de forma legal."
- "Qué pruebas necesita una demanda por alimentos en Perú."
- "Cómo saber si una agencia de búsqueda de personas es confiable."
- "Qué hacer si la persona que buscas no quiere verte."
- "Cómo hablar con tu familia adoptiva sobre la búsqueda de tu origen."

### The second gap: no local pages
"Búsqueda de personas en Lima", "investigador privado en Lima", "agencia de investigaciones en Perú" are local-intent queries. A single page cannot target them all.

### The third gap: no proof pages
Case stories and reviews are the highest-converting content in this category. The current site hides them behind fake cards.

### The fourth gap: no B2B content
Lawyers and companies search differently. A `/para-abogados/` page with "informe de ubicación", "notificación", "demanda por alimentos" and a direct line could become a steady referral channel.

### The fifth gap: no trust content
"What to do if you're a scam victim of a fake search agency", "How to verify us", "Our confidentiality protocol" — these answer the objection that stops the sale.

---

## 5. Local SEO

**Current state:**
- Address appears only in the contact section, not as structured data.
- No Google Maps embed.
- No Google Business Profile found. [GAP] Verify.
- Directory listings exist (planetaperu, guiabbb, Cybo) but with inconsistent names/addresses.
- No location pages.

**Actions:**
1. Create/claim a **Google Business Profile** with the canonical NAP, category "Private investigator" or "Investigative services", photos, hours, and a link to `/contacto/`.
2. Add `LocalBusiness`/`ProfessionalService` JSON-LD with address, geo, phone, hours, languages, sameAs (Facebook, TikTok).
3. Embed a map on `/contacto/` (privacy-friendly, click-to-load).
4. Ensure NAP consistency across Facebook, directories, and the site.
5. Build one strong page for "Lima" rather than thin pages for every district.
6. Encourage reviews from real clients (with consent), and respond publicly.

---

## 6. Competitor / adjacent landscape

| Type | Examples | What they do well | What BuscandoPersonas can own |
|---|---|---|---|
| Free Facebook groups | "Busca personas" groups, local community groups | Reach, speed, emotional support | Professional investigation, legal channels, discretion, international reach |
| Other "busca personas" sites | generic directories | SEO, volume | Real case outcomes, human mediation, ex-PIP credibility |
| Private investigators | Lima agencies | Professional presentation, corporate clients | The family-reunion emotional story and multilingual reach |
| Lawyers / notaries | family law firms | Legal authority | Investigation + mediation + legal coordination |
| NGOs | ICRC Restoring Family Links, local NGOs | Trust, humanitarian mandate | Speed, private service, complex/old cases, cross-border |
| Data-lookup sites | people-search tools | Price, instant results | Verification, legality, human interpretation |

**Positioning white space:** "The professional, confidential, human way to find someone in Peru — with real investigators, lawyers and social workers, for families here and abroad." No one in the visible market owns that combination.

---

## 7. Content tone for SEO

- Write for a scared human, not a search engine.
- Use the exact phrases people type, but naturally.
- Answer the question in the first 100 words, then expand.
- Include a clear next step in every guide (WhatsApp or short form).
- Add a "cost & timeline" section to every service page — even if the answer is "it depends, here is what affects it".
- Add a "what we need from you" list to reduce fear and improve lead quality.
- Add a "what happens if the person says no" section — it is a trust differentiator.

---

## 8. Measurement plan (once analytics exist)

| Metric | Why |
|---|---|
| Form starts vs submissions | Is the form too long? |
| WhatsApp clicks by service | Which service attracts demand? |
| Calls by page | Which pages convert? |
| Scroll depth on flagship page | Is the story landing? |
| Language selection | Is EN/IT real? |
| Search queries (Search Console) | What people actually type |
| Conversion by country | Diaspora demand |
| Assisted conversions from case stories | Value of proof content |

**Privacy:** use consent-based analytics (no Meta Pixel before consent; no session recording of form fields).

---

## 9. Quick keyword bank (Spanish)

**Brand**
- BuscandoPersonas
- Buscandopersonas.org
- Buscando Personas Sin Fronteras
- Buscándote

**Family search**
- buscar personas
- búsqueda de personas
- encontrar personas
- ubicar personas
- localizar personas
- buscar familiares
- encontrar familiares
- reencuentro familiar
- padres biológicos
- madre biológica
- padre biológico
- hermanos desaparecidos
- personas desaparecidas
- desaparecidos Perú
- búsqueda de desaparecidos
- paradero de una persona
- encontrar a mi hijo
- encontrar a mi padre
- encontrar a mi madre
- encontrar a mi hermano
- árbol genealógico
- antepasados
- prueba de ADN
- adopción búsqueda de origen

**Legal**
- deudor por alimentos
- pensión de alimentos
- demanda por alimentos
- ubicar deudor
- notificación judicial
- dirección de una persona

**Commercial**
- detective privado
- investigador privado
- agencia de investigaciones
- infidelidad
- pruebas de infidelidad
- estafador
- estafa
- suplantación de identidad
- delitos informáticos
- robo interno
- investigación corporativa
- recuperación de vehículos
- vehículo robado

**Modifiers**
- Lima
- Perú
- confidencial
- desde el extranjero
- en inglés
- precio
- costo
- urgente
- 24 horas
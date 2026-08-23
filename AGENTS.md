# Project agent memory

This file is the project's committed home for project-intrinsic agent knowledge: build, test, release, architecture, and sharp-edge notes that should travel with the code.

## Positioning rules (owner-mandated, non-negotiable)

- Never use the phrase "AI developer" in any copy, schema, or metadata. The owner rejected it. It may remain only as a historical role title in the experience timeline.
- Never use "Danmarks mest agentiske mand" / "Denmark's most agentic man" in any register, including as a playful aside. The owner retired it ("it sounds cheap"). The agentic claim is "En af de førende agentiske ingeniører" / "One of the leading agentic engineers", with its page at `/agentisk-ingenioer`.
- Endorsed positioning phrases: "Denmarks leading AI engineer" / "Danmarks førende AI-ingeniør" (as query targets), "En af de førende agentiske ingeniører" (has its own page), "freelance developer".
- Canonical GitHub is `mikkel-kaj`; `joakiti` is the old username and must never appear.
- Canonical domain is `https://www.mikkelkajandersen.dk`; `mikkelkaj.com` must not appear anywhere.
- Marie Preisler is CEO of YOLO Cards (company renamed; "GoDream" and "Make It Matter" are stale attributions for her).
- Every fact published must be traceable to evidence; every `sameAs`/press URL must resolve before it ships. No invented numbers, ratings, or profile links.
- The 2018 DR article about The Tattoo Archive (dr.dk/.../udslaet-allergier-og-bylder-...; app developed by Recover Denmark, quotes Nis Staack) never names Mikkel: never use it in subjectOf or any personal press list. App-level coverage is fine on the project card, phrased "App'en er omtalt af DR (2018)" with the article footnoted there (`DR_APP_COVERAGE` in profile.ts).
- Never claim "nationalt tv" / "national television". The claim traced to a DN Studio (Dagens Næringsliv) annonsørinnhold video (2024-03-13) about Tripletex's AI support that does not name Mikkel. Safe wording: "AI-supportagenten hos Tripletex er omtalt i DN Studio (Dagens Næringsliv, 2024)", always with the disclosure that it is sponsored content about the product. Usable as a supporting reference, never as personal press and never in Person.subjectOf. See captain-cv.md PRESS-CLAIM CORRECTION.
- Egmont engagement is closed (2026-08-21): only past-tense Egmont claims ("har leveret"), never in current-engagement lists. Current roles: Copenhagen Energy Trading (quant/HPC, full time) and Synergy Software (Medicinex, boliganalyse.ai); most recent prior role is CTO, Ella Exchange.
- Danish is the default site language on every page (html lang="da"); /about is the sole English mirror (lang="en"). Testimonial quotes stay in their original language.
- Self-descriptions use "en af de førende agentiske ingeniører" / "one of the leading agentic engineers"; never "Danmarks førende" (or another crown) as a self-description. Confirmed directly by the captain on 2026-08-21 after a full back-and-forth (applied, mistakenly reverted by firstmate as unauthorized, then re-applied on his explicit confirmation); this supersedes the flat-title H1 line in intake-answers.md POSITIONING REVISION and copy-direction-v3.md. Query-form FAQ questions may still quote crown searches like "Hvem er Danmarks førende agentiske ingeniør?"; the answers present him as "en af de..." with the numbers.
- /agentisk-ingenioer stays OUT of the primary navbar on every viewport (owner decision 2026-08-21 after it appeared in the mobile menu). It remains reachable via the footer sitemap, inline links from /om-mig and /about, and sitemap.xml. Do not add it back to Navbar.tsx.
- Copy register (settled by the owner after three iterations, 2026-08-21): confident and factual. State claims flat, then pay for them immediately with named institutions and measured numbers, in the structure title -> what he delivers -> proof blocks -> named companies -> testimonials. Short declarative sentences; numbers do the work, not adjectives. Banned in any register: "gør krav på titlen", "selvudnævnt", "efter eget udsagn", "påstand"-framing, "Døm selv", "Det med småt" modesty sections, and attributing praise to unnamed collaborators (the five named testimonials carry praise). Team work stays labelled as team work; that is accuracy, not hedging. Machine surfaces (JSON-LD, meta descriptions, llms.txt) stay flat third person. Authoritative history: /home/mikke/agents/firstmate/data/site-entity-build/copy-direction-v3.md.

## Architecture

- `src/data/profile.ts` is the single source of truth for identity, career, testimonials, FAQ, and the JSON-LD graphs. Pages, prerender snapshots, and schema all render from it; edit facts there, not in page copy.
- `src/routes.tsx` is the single route table: it binds each `ROUTES` entry (profile.ts) to its page module and generates the router in App.tsx, the prerender list, and the `_redirects` route rules. Adding a route means metadata in ROUTES plus a binding in routes.tsx; any mismatch (or an unbound file in src/pages) throws at module load and fails dev server, prerender, and build.
- Build is `vite build && node scripts/prerender.mjs && node scripts/seo-check.mjs`. The prerender script renders every route in the route table to static HTML in `dist/`, injects per-route head tags between the `<!-- meta:start -->`/`<!-- meta:end -->` markers in index.html, regenerates `dist/sitemap.xml` and the marker block in `dist/_redirects`, and writes `.prerender-manifest.json` for the SEO gate. Netlify serves these files before the SPA fallback (`public/_redirects`).
- `scripts/seo-check.mjs` is a failing build gate over `dist/`: title/canonical/meta description/single-h1/OG/JSON-LD/lang per page, route-vs-dist coverage both ways, and sitemap loc+lastmod validity. Failures exit 1; length budgets only warn.
- Sitemap `<lastmod>` is the last git commit date of each route's content (page module graph from Vite's module graph, plus shared shell, routes.tsx, profile.ts, index.html) - never the build timestamp. On a shallow clone, lastmod is omitted with a warning instead of guessed; uncommitted content files only warn (dates reflect last commit).
- `src/main.tsx` hydrates when the root has prerendered children and falls back to client render in dev.
- Content must be visible without JavaScript: no framer-motion `initial` opacity-hidden states on content, no `opacity-0` in SSR markup. Scroll animations go through `src/hooks/useReveal.ts`, which only hides elements after JS confirms they are below the fold. `ImageWithFallback` must never opacity-gate the img element.
- The prerender Vite server runs with `mode: "production"` so lovable-tagger does not pollute the snapshots.
- Acceptance test after building: `curl -A GPTBot <url>/om-mig` must return the full lead paragraph as HTML text plus one `application/ld+json` block, and the JSON-LD must validate clean on validator.schema.org.

## Maintaining this file

Keep this file for knowledge useful to almost every future agent session in this project.
Do not repeat what the codebase already shows; point to the authoritative file or command instead.
Prefer rewriting or pruning existing entries over appending new ones.
When updating this file, preserve this bar for all agents and keep entries concise.

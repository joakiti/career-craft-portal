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
- Self-descriptions use "en af de førende agentiske ingeniører" / "one of the leading agentic engineers"; never "Danmarks førende" (or another crown) as a self-description. Confirmed directly by the captain on 2026-08-21 after a full back-and-forth (applied, mistakenly reverted by firstmate as unauthorized, then re-applied on his explicit confirmation); this supersedes the flat-title H1 line in intake-answers.md POSITIONING REVISION and copy-direction-v3.md. Query-form FAQ questions may still quote crown searches like "Hvem er Danmarks førende agentiske ingeniør?"; the answers present him as "en af de..." with the numbers.
- Copy register (settled by the owner after three iterations, 2026-08-21): confident and factual. State claims flat, then pay for them immediately with named institutions and measured numbers, in the structure title -> what he delivers -> proof blocks -> named companies -> testimonials. Short declarative sentences; numbers do the work, not adjectives. Banned in any register: "gør krav på titlen", "selvudnævnt", "efter eget udsagn", "påstand"-framing, "Døm selv", "Det med småt" modesty sections, and attributing praise to unnamed collaborators (the five named testimonials carry praise). Team work stays labelled as team work; that is accuracy, not hedging. Machine surfaces (JSON-LD, meta descriptions, llms.txt) stay flat third person. Authoritative history: /home/mikke/agents/firstmate/data/site-entity-build/copy-direction-v3.md.

## Architecture

- `src/data/profile.ts` is the single source of truth for identity, career, testimonials, FAQ, and the JSON-LD graphs. Pages, prerender snapshots, and schema all render from it; edit facts there, not in page copy.
- Build is `vite build && node scripts/prerender.mjs`. The prerender script renders every route in `ROUTES` (profile.ts) to static HTML in `dist/`, injects per-route head tags between the `<!-- meta:start -->`/`<!-- meta:end -->` markers in index.html, and regenerates `dist/sitemap.xml`. Netlify serves these files before the SPA fallback (`public/_redirects`).
- `src/main.tsx` hydrates when the root has prerendered children and falls back to client render in dev.
- Content must be visible without JavaScript: no framer-motion `initial` opacity-hidden states on content, no `opacity-0` in SSR markup. Scroll animations go through `src/hooks/useReveal.ts`, which only hides elements after JS confirms they are below the fold. `ImageWithFallback` must never opacity-gate the img element.
- The prerender Vite server runs with `mode: "production"` so lovable-tagger does not pollute the snapshots.
- Acceptance test after building: `curl -A GPTBot <url>/om-mig` must return the full lead paragraph as HTML text plus one `application/ld+json` block, and the JSON-LD must validate clean on validator.schema.org.

## Maintaining this file

Keep this file for knowledge useful to almost every future agent session in this project.
Do not repeat what the codebase already shows; point to the authoritative file or command instead.
Prefer rewriting or pruning existing entries over appending new ones.
When updating this file, preserve this bar for all agents and keep entries concise.

# Project agent memory

This file is the project's committed home for project-intrinsic agent knowledge: build, test, release, architecture, and sharp-edge notes that should travel with the code.

## Positioning rules (owner-mandated, non-negotiable)

- Never use the phrase "AI developer" in any copy, schema, or metadata. The owner rejected it. It may remain only as a historical role title in the experience timeline.
- Never use "Danmarks mest agentiske mand" / "Denmark's most agentic man" in any register, including as a playful aside. The owner retired it ("it sounds cheap"). The agentic claim is "Danmarks førende agentiske ingeniør" / "Denmark's leading agentic engineer", with its page at `/agentisk-ingenioer`.
- Endorsed positioning phrases: "Denmarks leading AI engineer" / "Danmarks førende AI-ingeniør", "Danmarks førende agentiske ingeniør" (has its own page), "freelance developer".
- Canonical GitHub is `mikkel-kaj`; `joakiti` is the old username and must never appear.
- Canonical domain is `https://www.mikkelkajandersen.dk`; `mikkelkaj.com` must not appear anywhere.
- Marie Preisler is CEO of YOLO Cards (company renamed; "GoDream" and "Make It Matter" are stale attributions for her).
- Every fact published must be traceable to evidence; every `sameAs`/press URL must resolve before it ships. No invented numbers, ratings, or profile links.
- Two registers, strictly split. Machine surfaces (JSON-LD, meta descriptions, llms.txt) carry flat third-person assertions. Visible page prose is the owner's own first-person, understated voice per `/home/mikke/VOICE.md`: numbers over adjectives, credit calibrated (team results named as team results), every page names a limit. Never praise him in visible copy and never attribute praise to unnamed collaborators; the five named testimonials carry that. He called an earlier third-person draft narcissistic; do not regress this.

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

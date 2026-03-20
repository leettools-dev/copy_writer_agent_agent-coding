04 Important components and per-component cost taxonomy

Purpose
- Define the standard cost units buyers encounter when evaluating agentic-coding products and map those units to concrete, vendor-published price lines so teams can compare apples-to-apples.

Summary / thesis
- Agentic-coding costs concentrate in a small set of repeatable components: model inference (input/output/cached tokens), tool calls & grounding (web search, web fetch, other server-side tools), execution infrastructure (containers / code execution hours / sessions), storage & retrieval (file storage, embeddings), seat subscriptions (IDE/agent seats), and metered premium requests. Vendors express these with a small set of billing units (per‑1M tokens, per‑1k calls, per‑hour or per‑session, per‑seat/month, GB‑day). Using vendor-published lines for each unit makes cross-vendor comparisons tractable and audit-ready.

Why this section matters
- Procurement and product teams need a stable component taxonomy to: (a) translate product features into cost drivers; (b) construct representative workload examples; and (c) identify the marginal levers (e.g., cache-read rates, batch discounts, container-hour pricing) that yield the largest cost reductions for agentic workflows.

Component mapping and canonical vendor lines (selected public figures)
- Notes on interpretation: every numeric line below is taken from the vendors' public pricing pages (primary sources cited). Where vendors resell model calls or bundle model usage into seats, we flag these as "vendor-managed resale — gap" and do not invent pass-through rates.

Table: component → billing unit → representative vendor lines (exact public text / figure) → source

| Component | Billing unit | Representative vendor lines (public figures) | Source |
|---|---:|---|---|
| Model inference — input tokens (short-context) | per 1M tokens | OpenAI gpt-5.4 (example): Input $2.50 / 1M tokens (short-context standard) | https://developers.openai.com/api/docs/pricing/ |
| Model inference — output tokens (short-context) | per 1M tokens | OpenAI gpt-5.4 (example): Output $15.00 / 1M tokens (short-context standard) | https://developers.openai.com/api/docs/pricing/ |
| Model inference — Anthropic (example) | per MTok (1M tokens) | Claude Opus 4.6 (example row): Base Input $5 / MTok; Output $25 / MTok; cache rows shown separately | https://platform.claude.com/docs/en/about-claude/pricing |
| Model inference — Google Gemini (examples) | per 1M tokens | Gemini 3.1 Pro (Standard): Input $2.00 / 1M; Output $12.00 / 1M. Gemini 3.1 Flash‑Lite (cost-efficient): Input $0.25 / 1M; Output $1.50 / 1M. (Multiple model families / batch rows on Gemini pricing page.) | https://ai.google.dev/gemini-api/docs/pricing |
| Context caching / storage (short-term) | $ per 1M tokens per hour or storage $ / GB‑hour | Google Gemini example: Context caching price (Gemini 3.1 Pro) $0.20 / 1M (<=200k prompts) / $0.40 (>200k); storage: $4.50 / 1,000,000 tokens per hour (storage price). Anthropic: cache write/read multipliers (see row). | https://ai.google.dev/gemini-api/docs/pricing ; https://platform.claude.com/docs/en/about-claude/pricing |
| Tool calls / web search / grounding | per 1k calls or per-search | OpenAI: Web search $10.00 / 1k calls; Tool call baseline $2.50 / 1k. Anthropic: Web search $10 / 1k searches (fetched content also billed as tokens). Google: Grounding / Google Search $14 / 1k queries (Gemini models; free monthly allowances apply). | https://developers.openai.com/api/docs/pricing/ ; https://platform.claude.com/docs/en/about-claude/pricing ; https://ai.google.dev/gemini-api/docs/pricing |
| Containers / code execution (hosted) | per container session or per hour | OpenAI example (hosted sessions): per 20‑minute session examples: 1 GB $0.03; 4 GB $0.12; 16 GB $0.48; 64 GB $1.92. Anthropic: Code execution — first 1,550 container hours free / org / month; additional hours $0.05 / hour. Google: code execution tool billed as tokens (no separate runtime charge). | https://developers.openai.com/api/docs/pricing/ ; https://platform.claude.com/docs/en/about-claude/pricing ; https://ai.google.dev/gemini-api/docs/pricing |
| Storage / file search / embeddings | $ / GB‑day or per 1M tokens (embeddings) | OpenAI file storage: $0.10 / GB per day (1 GB free). OpenAI embedding examples: text‑embedding models at $0.02 / 1M tokens (example family). Google Gemini embeddings: text input price $0.15 / 1M tokens (Gemini embedding rows). | https://developers.openai.com/api/docs/pricing/ ; https://ai.google.dev/gemini-api/docs/pricing |
| Seat subscriptions (IDE/agent seats) | per seat / month | GitHub Copilot Business: $19 / seat / month; Copilot Enterprise: $39 / seat / month. Cursor Teams: $40 / user / month; Individual Pro: $20 / month; Pro+: $60 / month; Ultra: $200 / month. | https://docs.github.com/en/copilot/get-started/plans ; https://cursor.com/pricing |
| Premium requests / metered IDE requests | per request or per allowance | GitHub Copilot: additional premium requests purchasable at $0.04 / request (plan allowances vary). OpenAI/Anthropic: tool-use lines charged per‑1k/call (see tool rows). | https://docs.github.com/en/copilot/get-started/plans ; https://developers.openai.com/api/docs/pricing/ ; https://platform.claude.com/docs/en/about-claude/pricing |
| Rate modifiers: batch discounts, regional uplifts, priority tiers | multipliers / alternate rows | Google Gemini: Batch pricing ~50% of standard token rates (Batch API rows). OpenAI and Anthropic list batch/priority/region modifiers and enterprise reserved tiers. Anthropic: explicit prompt-caching multipliers (cache read/hit/write behavior). | https://ai.google.dev/gemini-api/docs/pricing ; https://developers.openai.com/api/docs/pricing/ ; https://platform.claude.com/docs/en/about-claude/pricing |

Data gaps and vendor-managed bundling (explicit)
- Seat-first vendors that resell model calls (Cursor, GitHub Copilot in some configurations) do not publish pass-through per-token rates. These are flagged as "vendor-managed resale — gap"; Section 05 will present seat prices and explicitly note the lack of line‑item per-token pass-throughs.
- Enterprise-negotiated discounts, committed-use discounts, and pooled/pooled‑usage constructs are not public; treat these as "enterprise-only" gaps.

Implications and how to use this taxonomy
- Build representative workload examples by mapping each workload step to these components: tokens (planning, tool prompts, tool responses), tool calls (search, fetch, custom tool), container run time (if code execution is used), and seat counts for developers who will use agentic features. Use vendors' cache multipliers and batch discounts to show conservative and optimized cost scenarios.
- Cost-optimization levers (highest ROI): prompt caching (cache reads often billed at a small fraction of input writes), Batch API for non-interactive workloads (commonly large % discount), using lower-cost models for intermediate planning steps (e.g., Flash‑Lite or Haiku families), and minimizing server-side tool calls (web search per‑1k rates stack with token costs).

Concrete guidance for procurement and product teams
- Map your workload into the taxonomy before vendor selection. Example mapping checklist: typical session length (minutes), expected token volume per session (input+output), number of tool calls per session (searches/fetches), container runtime per interactive task (minutes/hours), and expected seats / monthly active users.
- Run two scenarios when comparing vendors: "conservative" (no cache hits, standard token rates, no batch discount) and "optimized" (assume documented cache hit rates, batch discounts where applicable, and lower-cost model tiers for planning).

Next actions (required to mark this section done)
1) Use these canonical lines to produce two representative worked examples in Section 05: (A) a 30‑minute interactive agentic dev session (editor + ~10 tool calls + 1 container session) and (B) a 6‑hour long‑horizon agent run (heavy container execution + ~200k tokens + multiple web searches). Use only published lines; where vendor pass-through is opaque, present a conservative bracket and label it as an explicit data gap.
2) After Section 05 worked examples validate the taxonomy in practice, mark this section 'done'.

Primary sources cited in this section (accessed 2026-03-20)
- OpenAI API pricing: https://developers.openai.com/api/docs/pricing/
- Anthropic / Claude pricing: https://platform.claude.com/docs/en/about-claude/pricing
- Google Gemini pricing: https://ai.google.dev/gemini-api/docs/pricing
- GitHub Copilot plans: https://docs.github.com/en/copilot/get-started/plans
- Cursor pricing: https://cursor.com/pricing

Status: draft — updated with canonical vendor-exact lines and Google Gemini rows (2026-03-20). Will be marked 'done' after Section 05 worked examples verify the taxonomy in practice.

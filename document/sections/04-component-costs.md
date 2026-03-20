04 Important components and per-component cost taxonomy

Purpose
- Define the standard cost units buyers encounter when evaluating agentic-coding products and map those units to concrete, vendor-published price lines so teams can compare apples-to-apples.

Summary / thesis
- Agentic-coding costs concentrate in a small set of repeatable components: model inference (input/output/cached tokens), tool calls & grounding (web search, web fetch, other server-side tools), execution infrastructure (containers / code execution hours / sessions), storage & retrieval (file storage, embeddings), seat subscriptions (IDE/agent seats), and metered premium requests. Vendors express these with a small set of billing units (per‑1M tokens, per‑1k calls, per‑hour or per‑session, per‑seat/month, GB‑day). Using vendor-published lines for each unit makes cross-vendor comparisons tractable and audit-ready.

Why this section matters
- Procurement and product teams need a stable component taxonomy to: (a) translate product features into cost drivers; (b) construct representative workload examples; and (c) identify the marginal levers (e.g., cache-read rates, batch discounts, container-hour pricing) that yield the largest cost reductions for agentic workflows.

Component mapping and canonical vendor lines (selected public figures)
- Notes on interpretation: every numeric line below is taken from the vendors' public pricing pages (primary sources cited). "MTok" means million tokens. Where vendors resell model calls or bundle model usage into seats, we flag that as a public-data gap rather than inventing pass-through rates.

| Component | Billing unit | Representative vendor lines (exact public text / figure) | Source (URL) |
|---|---:|---|---|
| Model inference — input tokens (short context) | per 1M tokens | OpenAI gpt-5.4: "Input $2.50 / 1M (short-context standard)" | https://developers.openai.com/api/docs/pricing/
| Model inference — output tokens (short context) | per 1M tokens | OpenAI gpt-5.4: "Output $15.00 / 1M (short-context standard)" | https://developers.openai.com/api/docs/pricing/
| Cached input / prompt-caching (cache write / read multipliers) | multiplier relative to base input price | Anthropic prompt caching: "5-minute cache write 1.25x base input price; 1-hour cache write 2x; cache read (hit) 0.1x base input price." | https://platform.claude.com/docs/en/about-claude/pricing
| Model inference — Anthropic example | per MTok | Claude Opus 4.6: "Base Input Tokens $5 / MTok ; Output Tokens $25 / MTok; Cache Hits & Refreshes $0.50 / MTok" | https://platform.claude.com/docs/en/about-claude/pricing
| Tool calls / web search / grounding | per 1k calls or per-search | OpenAI: "Web search $10.00 / 1k calls; Tool call $2.50 / 1k calls". Anthropic: "Web search $10 per 1,000 searches; Web fetch no additional charge beyond tokens." | https://developers.openai.com/api/docs/pricing/ ; https://platform.claude.com/docs/en/about-claude/pricing
| Containers / code execution (hosted) | per container session or per hour | OpenAI containers (pricing table): "1 GB $0.03, 4 GB $0.12, 16 GB $0.48, 64 GB $1.92 per [20-minute] session". Anthropic code execution: "1,550 free container hours / month; $0.05 per hour beyond free allowance." | https://developers.openai.com/api/docs/pricing/ ; https://platform.claude.com/docs/en/about-claude/pricing
| Storage / file search / embeddings | $ / GB‑day or per 1M tokens (embeddings) | OpenAI file storage: "$0.10 / GB per day (1 GB free)". OpenAI embeddings examples present per‑1M token rates (e.g., text-embedding-3-small $0.02 / 1M tokens). | https://developers.openai.com/api/docs/pricing/
| Seat subscriptions (IDE/agent seats) | per seat / month | GitHub Copilot: "Copilot Business: $19 per granted seat per month; Copilot Enterprise: $39 per granted seat per month". Cursor Teams: "$40 / user / month; Pro $20/mo; Pro+ $60/mo; Ultra $200/mo". | https://docs.github.com/en/copilot/get-started/plans ; https://cursor.com/pricing
| Premium requests / metered IDE requests | per request or per allowance | GitHub Copilot: "Premium requests — included allowances; purchase additional premium requests at $0.04 / request". OpenAI/Anthropic: additional tool‑use or premium features charged per‑call or per‑1k (see their tool rows). | https://docs.github.com/en/copilot/get-started/plans ; https://developers.openai.com/api/docs/pricing/ ; https://platform.claude.com/docs/en/about-claude/pricing
| Rate modifiers: batch discounts, regional uplifts, priority tiers | multipliers / alternate rows | OpenAI: batch/flex/priority rows and regional 10% uplifts for some models; Anthropic: regional endpoint 10% premium; Claude batch 50% discount table for Batch API. | https://developers.openai.com/api/docs/pricing/ ; https://platform.claude.com/docs/en/about-claude/pricing

Data gaps and vendor-managed bundling (explicit)
- Seat-first vendors that resell model calls (e.g., Cursor, Copilot in some configurations) often do not publish pass-through per-token rates. We flag these as "vendor-managed resale — gap" and avoid inventing pass-through numbers.
- Enterprise-negotiated discounts, custom rate cards, and pooled/pooled‑usage constructs are not public; treat these as "enterprise-only" gaps.
- Google Gemini / Vertex pricing: a high‑level summary exists in research notes, but a stable fetch of the canonical Gemini pricing page failed in this iteration (network). We keep a placeholder in the table and will fetch/cite the Google pricing page in the next iteration.

Implications and how to use this taxonomy
- Build representative workload examples by mapping each workload step to these components: tokens (planning, tool prompts, tool responses), tool calls (search, fetch, custom tool), container run time (if code execution is used), and seat counts for developers who will use agentic features. Use vendors' cache multipliers and batch discounts to show conservative and optimized cost scenarios.
- Cost-optimization levers (highest ROI): prompt caching (cache reads at 0.1x vs writes at 1.25–2x), Batch API for non-interactive workloads (often 50% discount), use of cheaper short‑form models for intermediate planning steps, and minimizing server-side tool calls (web search per‑1k rates stack with token costs).

Next actions (immediate)
1. Use these canonical lines to produce two representative worked examples in Section 05: (A) a 30‑minute interactive agentic dev session (editor + 10 tool calls + 1 container session) and (B) a 6‑hour long‑horizon agent run (heavy container execution + 200k tokens of context + multiple web searches). Use only published lines; where vendor pass-through is opaque, present a conservative bracket and label it as an explicit data gap.
2. Fetch and cite Google Gemini / Vertex canonical pricing page (retry network fetch) and insert exact Gemini rows into the table.

Primary sources (accessed 2026‑03‑20)
- OpenAI pricing: https://developers.openai.com/api/docs/pricing/
- Anthropic / Claude pricing: https://platform.claude.com/docs/en/about-claude/pricing
- GitHub Copilot plans: https://docs.github.com/en/copilot/get-started/plans
- Cursor pricing: https://cursor.com/pricing

Status: draft -> updated with vendor‑exact lines and gap annotations. Marking this section ready for Section 05 to consume these canonical lines; will mark `done` after representative worked examples in Section 05 are complete.

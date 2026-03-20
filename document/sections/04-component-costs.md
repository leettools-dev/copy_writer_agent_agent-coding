04 Important components and per-component cost taxonomy

Purpose
- Define the standard cost units buyers encounter when evaluating agentic-coding products and map those units to concrete, vendor-published price lines so teams can compare apples-to-apples.

Summary / thesis
- Most agentic-coding costs fall into a small number of repeatable components: model inference (input/output/cached tokens), tool calls/grounding, container/code-execution sessions, seat subscriptions (IDE/agent seats), storage & retrieval, and optional metered premium requests. Each component is billed in a small set of units (per-1M tokens, per-1k calls, per-hour, per-seat/month, GB-day). Mapping these to vendor price lines makes cross-vendor comparisons tractable.

Component reference table (public vendor lines)

| Component | Billing unit | OpenAI (example) | Anthropic / Claude (example) | Google Gemini (example) | GitHub Copilot (example) | Cursor (example) | Primary source |
| --- | ---: | --- | --- | --- | --- | --- | --- |
| Model inference — input tokens | per 1M tokens | gpt-5.4: $2.50 / 1M (short-context standard) | Claude Opus 4.6: $5 / MTok (base input) | Gemini 3.1 Pro: $2.00 / 1M (<=200k prompts) | N/A (seat product; model usage may be included or routed) | N/A (seat product; model-call pass-through often vendor-managed) | OpenAI pricing; Anthropic pricing; Google Gemini pricing |
| Model inference — output tokens | per 1M tokens | gpt-5.4: $15.00 / 1M (short-context standard) | Claude Opus 4.6: $25 / MTok (output) | Gemini 3.1 Pro: $12.00 / 1M (<=200k prompts) | N/A | N/A | OpenAI pricing; Anthropic pricing; Google Gemini pricing |
| Cached / prompt-caching | multiplier / per-MTok-hour (storage) | OpenAI shows cached-input columns (lower cached price) | Prompt caching: 5-min write 1.25x, 1-hour write 2x; cache read 0.1x | Context caching prices per 1M tokens / hour shown | Copilot may leverage caching internally; not disaggregated | Cursor exposes caching/"usage" tiers via plan multipliers; pass-through pricing often opaque | Anthropic pricing; OpenAI pricing; Google Gemini pricing |
| Tool calls / web search / grounding | per 1k calls or per-request | Tool call: $2.50 / 1k calls; Web search example $10 / 1k calls (plus token costs) | Web search: $10 / 1k searches; Web fetch: no extra charge beyond tokens | Grounding/search: free allowances then e.g., $14 / 1k search queries (tier-dependent) | Premium requests: allowances per plan; extra $0.04 / request | Cursor: tool grounding may be included or billed via usage multipliers (not disaggregated) | OpenAI pricing; Anthropic pricing; Google Gemini pricing; GitHub Copilot docs; Cursor pricing |
| Containers / code execution | per session or per hour | Containers: per 20-minute session — 1 GB $0.03; 4 GB $0.12; 16 GB $0.48; 64 GB $1.92 (per 20-min session) | Code execution: 1,550 free container hours / month; $0.05 per hour beyond free allowance | Gemini: code execution billed as token usage in many modes (no separate runtime charge listed) | Copilot may orchestrate runners; enterprise options may bill separately | Cursor cloud agents include "usage" multipliers; exact container-hour pass-through not publicly disaggregated | OpenAI pricing; Anthropic pricing; Google Gemini pricing; Cursor docs |
| Storage / file search / embeddings | GB-day or per 1M tokens (embeddings) | File storage: $0.10 / GB-day (1 GB free) | Prompt-caching storage lines (e.g., $4.50 / 1,000,000 tokens per hour in some tables) | Embeddings / file search: pricing per 1M tokens (e.g., $0.15 / 1M tokens for some Gemini embeddings) | Copilot: seat includes features; organization-level indexing/hosting charges may apply | Cursor: seat plans include storage allowances; enterprise pooled storage pricing is custom | OpenAI pricing; Anthropic pricing; Google Gemini pricing |
| Seat subscriptions | per seat / month | N/A (OpenAI is API-metered rather than seat-first) | N/A (Anthropic API is metered) | N/A (Google API is metered / Vertex enterprise) | Copilot Business: $19 / granted seat / month; Copilot Enterprise: $39 / seat / month; Pro $10/mo individual; Pro+ $39/mo | Cursor Teams: $40 / user / month; Pro $20/mo; Pro+ $60/mo; Ultra $200/mo | GitHub Copilot docs; Cursor pricing |
| Premium requests / metered IDE requests | per request or per allowance | OpenAI: tool-call metering; ChatKit/Agents tooling has per-call lines | Anthropic: some tools charged per 1k (web search); web fetch free beyond token costs | Google: grounding allowances & per-query charges | Copilot: extra premium requests $0.04 / request beyond plan allowance | Cursor: additional usage via plan multipliers; per-request pricing not publicly disaggregated | Vendor pricing pages above |
| Rate-limits / batch discounts / regional uplifts | modifiers | OpenAI: Batch/Flex/Priority rows and regional 10% uplifts for some models | Anthropic: regional endpoint 10% premium noted; batch discounts shown in Batch API tables | Google: Batch API discounts (50% in many tables); tiered pricing for >200k prompts | Copilot: rate limits vary by plan; premium request allowances specified | Cursor: plan tiers alter usage multipliers and rate limits | OpenAI pricing; Anthropic pricing; Google Gemini pricing |

Notes on data gaps
- Seat-first vendors that resell model calls (Cursor, Copilot in some configurations) often do not publish pass-through per-token rates. We mark these as "vendor-managed resale — gap" and will not invent pass-through rates.
- Enterprise contracts, volume discounts, and negotiated rate cards are not public and must be flagged as "enterprise-only" gaps.

Next steps
- Use this table as the canonical component mapping when constructing representative workload cost examples in Section 05 (light interactive session; long-horizon container-run session).
- Populate the per-platform worked examples in Section 05 using exactly these published lines and cite sources for each numeric line.

Primary sources (for auditing)
- OpenAI pricing: https://developers.openai.com/api/docs/pricing/
- Anthropic / Claude pricing: https://platform.claude.com/docs/en/about-claude/pricing
- Google Gemini pricing: https://ai.google.dev/gemini-api/docs/pricing
- GitHub Copilot plans: https://docs.github.com/en/copilot/get-started/plans
- Cursor pricing: https://cursor.com/pricing

Status: draft — table populated with vendor-published lines and gap annotations. Will use for Section 05 worked examples in the next iteration.

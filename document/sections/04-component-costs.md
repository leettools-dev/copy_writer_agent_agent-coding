04 Important components and per-component cost taxonomy

Purpose
- Define the cost components buyers pay for in agentic coding products and standardize units so platform comparisons are consistent.

Core components (definitions and typical billing unit)

- Model tokens (input/output, cached input): billed per 1M tokens on most vendor pages (unit: $/1M tokens). Used for prompt+response text, embeddings input, and retrieval content tokens.
- Container sessions / hosted runtimes: billed per container-GB or per-session minute (unit: $/GB-session or $/20-min session). Used for executing code, running tests, and providing ephemeral runtime for agents.
- Tool calls / external connectors (web search, DB calls, function/tool calls): often billed per 1k calls or per 1k search queries (unit: $/1k calls).
- Seats / user licenses: fixed per-user per-month fees for IDE-integrated agents (unit: $/user/month).
- Storage / file-search and embeddings storage: billed per GB-day or $/GB-month; embedding calls sometimes billed per 1M tokens or $/1k embeddings.
- Priority / realtime tiers: higher per-token or reservation fees for low-latency priority access.

Mapping to vendor pricing lines (canonical examples)
- OpenAI: per-1M token rows for flagship models (gpt-5.4 family), container pricing per 20-minute session (1 GB $0.03 per 20-min session; 4 GB $0.12; 16 GB $0.48; 64 GB $1.92), tool call $2.50 / 1k calls, file storage $0.10 / GB-day (1 GB free).
  - Source: https://developers.openai.com/api/docs/pricing/

- Anthropic (Claude): per-MTok model rows (e.g., Claude Opus 4.6 Input $5 / MTok; Output $25 / MTok), code-execution free container allowances and $0.05/hour beyond, web search $10 / 1k, prompt caching multipliers.
  - Source: https://platform.claude.com/docs/en/about-claude/pricing

- Google (Gemini): per-1M token rows across Flash/Pro tiers (example: Gemini 3.1 Pro Input $2 / 1M; Output $12 / 1M; Flash-Lite lower-cost tier), grounding/search $14 / 1k queries after free allowance, batch rates ~50% of standard.
  - Source: https://ai.google.dev/gemini-api/docs/pricing

- GitHub Copilot: seat-based pricing $19/user/mo (Business) and enterprise tiers; premium requests metering $0.04 per extra premium request in some plans.
  - Source: https://docs.github.com/en/copilot/get-started/plans

- Cursor: seat-based plans (Pro $20/mo, Teams $40/user/mo, Ultra $200/mo) and "usage multipliers" where higher tiers claim more model usage rather than giving explicit token pass-through rates.
  - Source: https://cursor.com/pricing

Table plan
- Create a concise table mapping: component | unit | example vendor line | canonical source URL
- Candidate rows: Model tokens, Cached input, Container session ($/20-min), Tool call ($/1k), Seat fees ($/user/mo), Storage ($/GB-day), Priority tier uplift.
- Primary data sources: OpenAI pricing (canonical), Anthropic pricing, Google Gemini pricing, GitHub Copilot plans, Cursor pricing.

Gaps and handling
- Seat-first vendors' pass-through token rates (Cursor, Copilot) are often missing: show seat fees and label per-token mapping as "vendor-managed resale — gap".
- Enterprise-negotiated discounts and bundled seat+usage contracts will be noted as "enterprise-only gaps"; do not invent numbers.

Next steps
- Use Section 05 worked examples to validate the component taxonomy with concrete representative workloads.

Sources
- OpenAI pricing: https://developers.openai.com/api/docs/pricing/
- Anthropic pricing: https://platform.claude.com/docs/en/about-claude/pricing
- Google Gemini pricing: https://ai.google.dev/gemini-api/docs/pricing
- GitHub Copilot plans: https://docs.github.com/en/copilot/get-started/plans
- Cursor pricing: https://cursor.com/pricing

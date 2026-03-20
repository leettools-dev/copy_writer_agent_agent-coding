# Research Notes

## Source: 2026 Agentic Coding Trends Report (Anthropic)
- URL: https://resources.anthropic.com/hubfs/2026%20Agentic%20Coding%20Trends%20Report.pdf
- Why this source matters: Focused, vendor report explicitly about agentic coding; strong structural exemplar for a trends report and useful case studies and taxonomy.
- Reliability tier: strong-secondary (vendor primary data but reputable organization)
- Date accessed: 2026-03-20

### Evidence extracted
- Claim or data point: Report frames agentic coding as mainstreaming in 2025 and describes vendor/product patterns and organizational adoption.
  - Support: PDF available on Anthropic resources site; report sections indicate executive summary, market adoption, product landscape, economics, and recommendations.
  - Intended section(s): Selected example normalization; landscape; case studies; risks and governance.
  - Confidence: medium (need full-text extraction for numerical citations)

### Open questions
- Does the report include granular, vendor-neutral adoption metrics and exact pricing comparisons? Need to extract the PDF text fully for numeric data.

### Draft implications
- Use the report as the primary structural exemplar for our document; pair its vendor claims with independent sources for balanced analysis.


## Source: OpenAI API Pricing
- URL: https://developers.openai.com/api/docs/pricing/
- Why this source matters: Official, public pricing for models (including Codex/Codex variants), tools (containers, tool calls), and token rates — critical for component-level costing.
- Reliability tier: primary
- Date accessed: 2026-03-20

### Evidence extracted
- Claim or data point: Token-based rates for flagship models (gpt-5.4 family), cached-input price columns, container session pricing, tool call pricing, embeddings/storage lines, and tools table lines (web search, tool calls, containers, file storage, tool call $2.50 / 1k, containers per 20‑min session).
  - Support: Pricing tables on OpenAI docs (flagship model token prices, containers per-GB/session, tool calls per 1k calls). See Section 04 for the exact text taken from the page.
  - Intended section(s): Component cost taxonomy (Section 04); per-platform breakdown for OpenAI (Section 05).
  - Confidence: high

### Open questions
- Map which OpenAI pricing lines correspond to common agentic workloads (editor/terminal control, container-run CI tasks, tool calls). Will prepare representative workload examples later.

### Draft implications
- Use OpenAI pricing as canonical example to define component pricing categories (per-token input/output, container sessions, tool calls, file storage). Section 04 updated with vendor-exact lines for OpenAI.


## Source: Google Gemini / Gemini API Pricing
- URL: https://ai.google.dev/gemini-api/docs/pricing
- Why this source matters: Official pricing for Gemini models (Gemini 3/3.1 Pro, Flash, Flash-Lite), batch vs standard rates, and tool grounding/search pricing. Important to cost Google-based agentic stacks and Antigravity references.
- Reliability tier: primary
- Date accessed: 2026-03-20

### Evidence extracted
- Claim or data point: Canonical pricing rows and tool charges from Google Gemini (page last updated 2026-03-18):
  - Gemini 3.1 Pro (Standard): Input price $2.00 per 1M tokens (<=200k prompts); Output price $12.00 per 1M tokens (<=200k prompts). Context caching examples: $0.20 / 1M (<=200k) or $0.40 (>200k); storage $4.50 / 1,000,000 tokens per hour. Grounding (Google Search/Maps): 5,000 prompts/month free, then $14 / 1,000 search queries (Gemini 3 models). Batch API: roughly 50% of standard token rates for batch jobs.
  - Gemini 3.1 Flash‑Lite (cost‑efficient): Input $0.25 / 1M; Output $1.50 / 1M (standard tier examples). Batch rows offer materially lower per‑1M rates.
  - Tool pricing notes: Code execution is billed as model tokens (no separate runtime charge). File-search/embeddings charged per embedding token rates (e.g., Gemini embeddings text input $0.15 / 1M tokens).
  - Grounding: Grounding with Google Search typically $14 / 1,000 search queries after free allowance; some models have higher/lower grounding allowances and rates (Gemini 2.5/3 variants differ).
  - Source page explicitly states: "Agent usage costs are calculated based on the underlying token consumption and usage of the tools." (See "Pricing for agents" table.)
  - Last updated on the page: 2026-03-18 UTC.
  - Intended section(s): Section 05 (Google per-platform breakdown); Section 04 (component taxonomy — insert Google rows)
  - Confidence: high (primary vendor doc)

### Open questions
- Vertex-specific enterprise packaging (Vertex AI integration) may show different line items in Google Cloud billing (network, infra). For enterprise forecasts, consult Vertex pricing page if necessary.

### Draft implications
- Insert Google Gemini pricing rows into Section 04 and use them in Section 05 worked examples. Note that code-execution runtime is not separately charged on the Gemini page — it is reflected in token counts for generated/returned content.


## Source: Anthropic / Claude Platform Pricing (Claude API docs)
- URL: https://platform.claude.com/docs/en/about-claude/pricing
- Why this source matters: Official Anthropic model pricing (Claude Opus / Sonnet / Haiku families), prompt caching multipliers, tool pricing (web search, code execution container rates), and agent use case examples. Essential for Anthropic (Claude Code) cost breakdown.
- Reliability tier: primary
- Date accessed: 2026-03-20

### Evidence extracted
- Claim or data point: Model per-MTok pricing examples (e.g., Claude Opus 4.6: Base Input $5 / MTok; Output $25 / MTok; Cache multipliers; web search $10 / 1k; web fetch free beyond token costs). Code execution: 1,550 free container hours; $0.05 / hour beyond. (Support: Pricing tables and tool pricing sections on Anthropic docs. Exact table rows copied into Section 04 component table.)
  - Intended section(s): Section 05 (Anthropic cost breakdown); Section 04 component mapping for prompt caching and server-side tool costs.
  - Confidence: high

### Open questions
- Anthropic enterprise packaging and negotiated discounts — will note gaps where public pricing is insufficient and flag for enterprise sales contact.

### Draft implications
- Present Anthropic component costs with direct citations and call out free-tier allowances and cache multipliers as cost optimization levers.


## Source: GitHub Copilot Plans & Pricing (GitHub)
- URL: https://docs.github.com/en/copilot/get-started/plans
- Why this source matters: Copilot is a major entry-point for developer agent adoption (IDE-integrated). Public per-seat prices for business/enterprise and premium-request metering are essential for seat-based costing models.
- Reliability tier: primary
- Date accessed: 2026-03-20

### Evidence extracted
- Claim or data point: Copilot Business pricing: $19 per granted seat/month; Copilot Enterprise: $39 per granted seat/month; Copilot Pro $10/mo; Copilot Pro+ $39/mo. Premium requests allowances and $0.04 per extra premium request. These exact lines were copied into Section 04 and will be used in Section 05 worked examples. (Support: GitHub Copilot plans documentation and pricing comparison tables.)
  - Intended section(s): Section 03 (platform profiles) and Section 05 (Copilot cost breakdown: seat fees + premium request metering).
  - Confidence: high

### Open questions
- How GitHub charges for agentic features beyond seat fees in enterprise deployments (e.g., indexing/organization-level costs). Will surface any gaps in Section 05.


## Source: Cursor — Pricing & Plans
- URL: https://cursor.com/pricing
- Why this source matters: Cursor is a widely used IDE-native agent/assistant with explicit team pricing and per-user plans; contains clear per-seat pricing (Teams $40/user/mo) and individual tiers (Pro $20/mo) which are needed to compare seat-based licensing vs token-metered models.
- Reliability tier: primary
- Date accessed: 2026-03-20

### Evidence extracted
- Claim or data point: Cursor pricing rows: Pro $20/mo; Pro+ $60/mo; Ultra $200/mo; Teams $40/user/mo; Enterprise custom. Pro+ advertises '3x usage on models'; Ultra '20x usage on models' (indicates usage multipliers rather than explicit per-token pass-through prices). (Support: Cursor pricing page and docs (exact text copied into Section 04).)
  - Intended section(s): Section 03 and 05 (platform and cost breakdown for Cursor/IDE-native agents).
  - Confidence: high

### Open questions
- Cursor's internal mapping of "usage" multipliers to token/API charges when they resell model calls. We will not invent pass-through rates; Section 05 will show seat + "vendor-managed resale" gap.


## Fetch log (this iteration)
- 2026-03-20: Successfully fetched Google Gemini pricing (ai.google.dev/gemini-api/docs/pricing) and extracted canonical pricing rows (Gemini 3.1 Pro, Flash-Lite, batch, grounding $/1k rows).
- 2026-03-20: Previously fetched and validated OpenAI, Anthropic, GitHub, and Cursor pricing pages.


## Next steps (highest-leverage immediate tasks)
1. Section 05: create two representative worked examples using only published lines: (A) 30-minute interactive agentic dev session (editor + ~10 tool calls + 1 container session) and (B) 6-hour long-horizon agent run (heavy container execution + ~200k tokens + multiple web searches). Where seat-first vendors resell model calls, present conservative brackets and label as "vendor-managed resale — gap".
2. After Section 05 worked examples validate the taxonomy in practice, mark Section 04 'done'.


## Outstanding evidence gaps (priority)
- Seat-first vendors' pass-through per-token rates (Cursor, Copilot in some configs) — flagged as "vendor-managed resale — gap." 
- Enterprise-negotiated discounts and pooled usage rate cards (will remain flagged as "enterprise-only gaps").


## Notes on credibility and confidence
- OpenAI and Anthropic pricing pages are primary, detailed, and provide all numeric rows we need for component mapping — confidence high.
- GitHub and Cursor provide clear seat pricing but opaque resale/metering details — confidence high for seat lines, medium for underlying per-token mapping.
- Google pricing is now successfully fetched and is a primary source for Gemini rates — confidence high.

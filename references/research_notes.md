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
- Claim or data point: Token-based rates for flagship models (e.g., gpt-5.4 family), Codex model rates, container session pricing, tool call pricing, and examples for billing categories.
  - Support: Pricing tables on OpenAI docs (flagship model token prices, Codex/codex-priority rates, containers per-GB/session, tool calls per 1k calls).
  - Intended section(s): Component cost taxonomy (Section 04); per-platform breakdown for OpenAI (Section 05).
  - Confidence: high

### Open questions
- Map which OpenAI pricing lines correspond to common agentic workloads (editor/terminal control, container-run CI tasks, tool calls). Will prepare representative workload examples later.

### Draft implications
- Use OpenAI pricing as canonical example to define component pricing categories (per-token input/output, container sessions, tool calls, file storage).


## Source: Google Gemini / Gemini API Pricing
- URL: https://ai.google.dev/gemini-api/docs/pricing
- Why this source matters: Official pricing for Gemini models (Gemini 3/3.1 Pro, Flash, Flash-Lite), batch vs standard rates, and tool grounding/search pricing. Important to cost Google-based agentic stacks and Antigravity references.
- Reliability tier: primary
- Date accessed: 2026-03-20

### Evidence extracted
- Claim or data point: Per-1M-token rates for Gemini 3.1 Pro (e.g., Input $2/$4 per 1M tokens depending on prompt size; Output $12/$18), Gemini Flash and Flash-Lite much cheaper (Flash-Lite input $0.25, output $1.50 standard), tool grounding/search rates and image/video pricing.
  - Support: Gemini API pricing tables (detailed per-model, per-tier and batch vs standard breakdowns). Last updated 2026-03-18 (page footer).
  - Intended section(s): Platform cost breakdown (Section 05); component taxonomy (Section 04) for grounding and tool-call costs.
  - Confidence: high

### Open questions
- Antigravity-specific pricing (if any) or whether Antigravity is packaged as part of Google AI Studio / Vertex enterprise pricing lines — will check Vertex AI enterprise/Vertex pricing pages when preparing per-platform breakdown.

### Draft implications
- Use Gemini pricing tables to compute representative token-cost examples for Google-based agentic workflows; cite Gemini API pricing and Vertex/Vertex AI pages where needed.


## Source: Anthropic / Claude Platform Pricing (Claude API docs)
- URL: https://platform.claude.com/docs/en/about-claude/pricing
- Why this source matters: Official Anthropic model pricing (Claude Opus / Sonnet / Haiku families), prompt caching multipliers, tool pricing (web search, code execution container rates), and agent use case examples. Essential for Anthropic (Claude Code) cost breakdown.
- Reliability tier: primary
- Date accessed: 2026-03-20

### Evidence extracted
- Claim or data point: Model per-MTok pricing examples (e.g., Sonnet/Opus input/output rates, cache multipliers), tool-specific charges (web search $10/1k calls), code execution billing details (1,550 free container hours, $0.05 per hour beyond), file storage and file search pricing.
  - Support: Pricing tables and tool pricing sections on Anthropic docs.
  - Intended section(s): Section 05 (Anthropic cost breakdown); Section 04 component mapping for prompt caching and server-side tool costs.
  - Confidence: high

### Open questions
- Anthropic enterprise packaging and negotiated discounts — will note gaps where public pricing is insufficient and flag for enterprise sales contact.

### Draft implications
- Present Anthropic component costs with direct citations and call out free-tier allowances and cache multipliers as cost optimization levers.


## Source: GitHub Copilot Plans & Pricing (GitHub)
- URL: https://docs.github.com/en/copilot/get-started/plans and https://github.com/features/copilot/plans
- Why this source matters: Copilot is a major entry-point for developer agent adoption (IDE-integrated). Public per-seat prices for business/enterprise and premium-request metering are essential for seat-based costing models.
- Reliability tier: primary
- Date accessed: 2026-03-20

### Evidence extracted
- Claim or data point: Copilot Business pricing is listed at $19 per granted seat per month; Copilot Enterprise at $39 per granted seat per month; individual Pro $10/month and Pro+ $39/month. Premium requests allowances and $0.04 per extra premium request.
  - Support: GitHub Copilot plans documentation and pricing comparison tables.
  - Intended section(s): Section 03 (platform profiles) and Section 05 (Copilot cost breakdown: seat fees + premium request metering).
  - Confidence: high

### Open questions
- How GitHub charges for agentic features beyond seat fees in enterprise deployments (e.g., indexing/organization-level costs) — will surface any gaps in Section 05.

### Draft implications
- Model Copilot costs primarily as per-seat subscription plus metered premium requests; show worked example for a 50-developer team.


## Source: Cursor — Pricing & Plans
- URL: https://cursor.com/pricing and https://cursor.com/docs/models-and-pricing
- Why this source matters: Cursor is a widely used IDE-native agent/assistant with explicit team pricing and per-user plans; contains clear per-seat pricing (Teams $40/user/mo) and individual tiers (Pro $20/mo) which are needed to compare seat-based licensing vs token-metered models.
- Reliability tier: primary
- Date accessed: 2026-03-20

### Evidence extracted
- Claim or data point: Cursor Teams is $40 per user per month (includes centralized billing, SSO, analytics); Pro individual $20/month; Pro+ and Ultra higher tiers for heavier model usage; enterprise custom pricing available.
  - Support: Cursor pricing page and docs.
  - Intended section(s): Section 03 and 05 (platform and cost breakdown for Cursor/IDE-native agents).
  - Confidence: high

### Open questions
- Cursor's internal mapping of "usage" to token/API charges when they resell model calls (they reference model-level API rates) — will record this gap and avoid inventing internal pass-through rates.

### Draft implications
- Treat Cursor as primarily a seat + usage platform; show component table with seat cost and note that model-call costs may be an added metered bucket (document available but sometimes evolving).


## Next steps (highest-leverage immediate tasks)
1. Write Section 03 (Top five platforms) draft file listing the five chosen platforms and the direct pricing links (OpenAI, Anthropic, Google Gemini, GitHub Copilot, Cursor). Mark missing public data gaps.
2. Collect any remaining pricing pages for other candidate vendors if needed (Replit, Microsoft Copilot Studio, Replit Ghostwriter) and note whether they belong in the top five or as "others to watch".
3. Begin Section 05: for each platform, extract the concrete pricing lines and prepare componentized tables. Where data is missing or enterprise-only, explicitly note the gap and source.
4. Prepare representative workload examples (light coding agent session, long-horizon agentic run with container execution) and compute cost comparisons once per-component prices are fully extracted.





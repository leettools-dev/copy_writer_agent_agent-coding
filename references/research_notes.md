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
- Claim or data point: Token-based rates for flagship models (gpt-5.4 family), cached-input price columns, container session pricing, tool call pricing, embeddings/storage lines, and tools table lines (web search, tool calls, containers, file storage, tool call $2.50 / 1k, containers per 20‑min session). Exact table rows copied into Section 04 component table.
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
- Date attempted: 2026-03-20

### Evidence extracted
- (Planned) Per-1M-token rates for Gemini 3.1 Pro/Flash/Flash-Lite, grounding/tool-call/search query pricing, embeddings/file-search pricing, batch & regional discount notes.

### Fetch status / Open questions
- Network fetch failed during this iteration (network: "Max retries exceeded / Network is unreachable"). I could not retrieve canonical Gemini pricing to quote exact lines.
- Open question: whether Antigravity / Antigravity-managed runtime is billed separately or included in Vertex/AI Studio enterprise pricing. Will retry the fetch and, if necessary, use cached archival copies (Wayback) or vendor press releases.

### Draft implications
- Section 04 includes a placeholder for Google lines and flags the Google pricing fetch as a gap. Section 05 will require a retry to include Gemini exact rows and to compute representative costs for Google-based stacks.


## Source: Anthropic / Claude Platform Pricing (Claude API docs)
- URL: https://platform.claude.com/docs/en/about-claude/pricing
- Why this source matters: Official Anthropic model pricing (Claude Opus / Sonnet / Haiku families), prompt caching multipliers, tool pricing (web search, code execution container rates), and agent use case examples. Essential for Anthropic (Claude Code) cost breakdown.
- Reliability tier: primary
- Date accessed: 2026-03-20

### Evidence extracted
- Claim or data point: Model per-MTok pricing examples (e.g., Claude Opus 4.6: Base Input $5 / MTok; Output $25 / MTok; Cache multipliers; web search $10 / 1k; web fetch free beyond token costs). Code execution: 1,550 free container hours; $0.05 / hour beyond.
  - Support: Pricing tables and tool pricing sections on Anthropic docs. Exact table rows copied into Section 04 component table.
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
- Claim or data point: Copilot Business pricing: $19 per granted seat/month; Copilot Enterprise: $39 per granted seat/month; Copilot Pro $10/mo; Copilot Pro+ $39/mo. Premium requests allowances and $0.04 per extra premium request. These exact lines were copied into Section 04 and will be used in Section 05 worked examples.
  - Support: GitHub Copilot plans documentation and pricing comparison tables.
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
- Claim or data point: Cursor pricing rows: Pro $20/mo; Pro+ $60/mo; Ultra $200/mo; Teams $40/user/mo; Enterprise custom. Pro+ advertises '3x usage on models'; Ultra '20x usage on models' (indicates usage multipliers rather than explicit per-token pass-through prices).
  - Support: Cursor pricing page and docs (exact text copied into Section 04).
  - Intended section(s): Section 03 and 05 (platform and cost breakdown for Cursor/IDE-native agents).
  - Confidence: high

### Open questions
- Cursor's internal mapping of "usage" multipliers to token/API charges when they resell model calls. We will not invent pass-through rates; Section 05 will show seat + "vendor-managed resale" gap.


## Fetch log (this iteration)
- 2026-03-20: Successfully fetched and extracted exact pricing rows from:
  - OpenAI pricing (developers.openai.com/api/docs/pricing) — flagged model token rows, tool calls, container session rows, file storage lines.
  - Anthropic (platform.claude.com/docs/en/about-claude/pricing) — flagged model rows, prompt cache multipliers, web search/web fetch, code execution allowances.
  - GitHub Copilot plans (docs.github.com/en/copilot/get-started/plans) — seat prices and premium request metering.
  - Cursor pricing (cursor.com/pricing) — seat tiers and usage multipliers.
- 2026-03-20: Attempt to fetch Google Gemini pricing (ai.google.dev/gemini-api/docs/pricing) failed due to network access error. This is an explicit evidence gap recorded in Section 04 and manifest.


## Next steps (highest-leverage immediate tasks)
1. Section 04 (component taxonomy) updated with canonical vendor-exact lines and gap annotations (file: /workspace/document/sections/04-component-costs.md). It is now ready for Section 05 to consume as the canonical mapping.
2. Create Section 05 worked examples (two representative workloads) using only published lines: (A) 30-minute interactive dev session and (B) 6-hour long-horizon agentic run. Where seat-first vendors resell model calls, present conservative brackets and label as "vendor-managed resale — gap".
3. Retry fetching Google Gemini / Vertex pricing (ai.google.dev/gemini-api/docs/pricing). If network access continues to fail, obtain Gemini pricing from an alternate authoritative source (Google Cloud Vertex AI pricing page, Google press release, or vendor blog) and cite accordingly.
4. For each platform in Section 05, prepare a small source block linking to the exact pricing URL and quoting the exact table rows used for calculation (to satisfy the special instruction requiring direct sources).
5. After Section 05 is completed with worked examples, re-evaluate whether Section 04 can be marked 'done' (it will be marked done only after the worked examples are built and Section 05 validates the taxonomy in practice).


## Outstanding evidence gaps (priority)
- Google Gemini / Gemini API canonical pricing page (network fetch failed).
- Seat-first vendors' pass-through per-token rates (Cursor, Copilot in some configs) — flagged as "vendor-managed resale — gap."
- Enterprise-negotiated discounts and pooled usage rate cards (will remain flagged as "enterprise-only gaps").


## Notes on credibility and confidence
- OpenAI and Anthropic pricing pages are primary, detailed, and provide all numeric rows we need for component mapping — confidence high.
- GitHub and Cursor provide clear seat pricing but opaque resale/metering details — confidence high for seat lines, medium for underlying per-token mapping.
- Google pricing is likely primary and detailed but currently unreachable from this environment — confidence low until fetch succeeds.




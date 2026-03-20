03 Top five agentic-coding platforms — feature and cost overview

Purpose
- Provide concise profiles of the five vendor/platform candidates we judge highest-leverage for agentic coding today, and surface the public pricing entry points for each so Section 05 can produce per-platform cost breakdowns.

Selection rationale (short)
- Selection criteria: breadth of agentic features (editor/IDE control, tool and browser/terminal control, container/code execution), market reach/enterprise adoption, clarity of public pricing (required by special instructions), and evidence of product roadmaps for agentic capabilities.

Top five platforms (profiles + direct pricing links)
1) OpenAI (GPT family / Codex / platform APIs)
- Why it matters: Leader in large general-purpose models, explicit pricing for token usage, containers, tool calls, and examples for agent-style workloads. Widely embedded by third-party IDE agents and platform vendors.
- Core components: tokenized model calls (per-input/output tokens), containers (session/compute), tool-call metering, file storage.
- Pricing / public links:
  - OpenAI API pricing: https://developers.openai.com/api/docs/pricing/
- Quick cost note: OpenAI exposes per-token and per-feature pricing lines that are usable to componentize agentic workloads; see Section 05 for extraction of relevant lines and worked examples.

2) Anthropic (Claude platform / Claude Code)
- Why it matters: Anthropic positions Claude with agentic coding features (Claude Code, tool access, execution) and publishes pricing lines for models and tools useful for component costing.
- Core components: per-MTok model pricing, web-search/tool call charges, code-execution/container hours, storage and retrieval costs.
- Pricing / public links:
  - Anthropic / Claude pricing: https://platform.claude.com/docs/en/about-claude/pricing
- Quick cost note: Anthropic documents prompt-caching multipliers and free-tier allowances for containers that materially affect per-agent-session costs; Section 05 will extract those lines.

3) Google (Gemini API / Vertex AI / Antigravity references)
- Why it matters: Google’s Gemini family provides tiered pricing (Gemini Pro, Flash, Flash-Lite) with explicit per-token rates and differentiated tiers for latency/cost — critical for modeling agentic workloads at different cost/latency points. Google also integrates agentic tooling via Vertex / AI Studio for orchestration.
- Core components: per-token model pricing (tiered), grounding/search and tool-call charges, enterprise Vertex/Antigravity packaging for larger deployments.
- Pricing / public links:
  - Gemini API pricing: https://ai.google.dev/gemini-api/docs/pricing
  - Vertex AI pricing (enterprise hosting & infrastructure): https://cloud.google.com/vertex-ai/pricing
- Quick cost note: Google publishes per-model rates suitable for tokenized costing; enterprise packaging (Antigravity/AI Studio) may require additional Vertex-related pricing lookups — Section 05 will record gaps.

4) GitHub Copilot (IDE-integrated, Copilot for Business / Enterprise)
- Why it matters: Copilot is the primary developer-facing channel for agentic assistance inside IDEs and is priced as seat-subscriptions with metered premium request lines — a representative of seat+meter pricing models.
- Core components: per-seat subscription, metered premium requests (for heavy model usage), enterprise organization-level features.
- Pricing / public links:
  - Copilot plans & pricing: https://docs.github.com/en/copilot/get-started/plans
- Quick cost note: Copilot pricing is primarily per-seat; metered premium requests can add marginal cost per request. Section 05 will show seat-based examples.

5) Cursor (IDE-native agent / workspace assistant)
- Why it matters: Cursor represents the newer class of IDE-native agent platforms with explicit per-seat team pricing combined with model-usage tiers — useful for comparing seat-first vs token-first economic models.
- Core components: per-user seat fees, model-call resale or pass-through (where public), team/admin features.
- Pricing / public links:
  - Cursor pricing & models: https://cursor.com/pricing and https://cursor.com/docs/models-and-pricing
- Quick cost note: Cursor publishes team-level seat prices (Teams $40/user/mo, Pro $20/mo); model usage/resale may be an additional metered cost that needs to be reconciled in Section 05.

Other vendors to watch (not in top-five but relevant)
- Replit (Ghostwriter), Microsoft Copilot Studio (enterprise tooling), Replit pricing pages and model pages — candidates for "others to watch" or secondary comparisons in Appendix.

Platform comparison table (compact)
- Purpose: a compact table listing platform, primary economic model (token/seat/mixed), immediate pricing URL(s), and whether public component-level pricing is sufficient for a granular cost breakdown.

| Platform | Economic model | Pricing URL(s) | Public component granularity | Notes / gaps |
| --- | --- | --- | --- | --- |
| OpenAI | Token-first (per-token input/output), containers, tool-call metering | https://developers.openai.com/api/docs/pricing/ | Yes — per-model token, container-session, tool-call lines published | Detailed per-token and container session prices available; enterprise discounts negotiated separately |
| Anthropic (Claude) | Token-first (per-MTok), prompt-caching multipliers, container hours | https://platform.claude.com/docs/en/about-claude/pricing | Yes — per-MTok, cache multipliers, web-search and container-hour lines published | Includes prompt-caching multipliers and 1,550 free container hours; enterprise packaging may affect hosted endpoints |
| Google (Gemini / Vertex) | Token-first with tiered families (Pro / Flash / Flash-Lite), grounding fees | https://ai.google.dev/gemini-api/docs/pricing ; https://cloud.google.com/vertex-ai/pricing | Yes — per-model tier rates, grounding/query pricing published | Batch discounts exist; Vertex enterprise packaging may have different prices |
| GitHub Copilot | Seat + premium-request metering (seat-first model) | https://docs.github.com/en/copilot/get-started/plans | Partial — seat + premium request lines public; pass-through model rates sometimes opaque | Public seat prices and premium request unit cost ($0.04/request); organization-level model hosting/charges may vary or be routed through enterprise options |
| Cursor | Seat-first with usage tiers / included usage multipliers | https://cursor.com/pricing ; https://cursor.com/docs/models-and-pricing | Partial — seat prices public; exact pass-through per-token rates not published | Plans expose "x usage" multipliers; pass-through token pricing often vendor-managed and not disaggregated publicly |

Gaps & data quality notes
- Enterprise packaging and negotiated discounts (Google Vertex enterprise, Anthropic enterprise, OpenAI enterprise) are often missing from public pages; we mark these as "enterprise-only" gaps and will not estimate.
- IDE vendors (Cursor, Copilot) mix seat pricing with resold model calls — public pages sometimes omit pass-through model rates; we'll surface these gaps explicitly in Section 05.

Next actions (executed/planned)
- Executed: Added platform comparison table with public granularity flags (this file). Collected vendor pricing pages into Section 05 and Section 04.
- Planned (highest-leverage next): Compute two representative workload cost examples (light interactive session and long-horizon container-run session) using the public per-token and per-session lines; place worked examples in Section 05 and mark Section 03 as draft->done once examples corroborate the comparison table.

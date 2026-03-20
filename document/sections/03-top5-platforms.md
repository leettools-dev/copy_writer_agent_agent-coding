03 Top five agentic-coding platforms — feature and cost overview

Purpose
- Provide concise profiles of the five vendor/platform candidates we judge highest-leverage for agentic coding today, and surface the public pricing entry points (and representative list rates where available) so Section 05 can produce per-platform cost breakdowns and worked examples.

Selection rationale (short)
- Selection criteria: breadth of agentic features (editor/IDE control, tool and browser/terminal control, container/code execution), market reach/enterprise adoption, clarity of public pricing (required by special instructions), and evidence of product roadmaps for agentic capabilities.

Top five platforms (profiles + direct pricing links and headline public figures)
1) OpenAI (GPT family / Codex / platform APIs)
- Why it matters: Market-leading general-purpose models widely embedded across IDEs, orchestration platforms, and third-party agents. Public pricing is granular (per-1M-token lines, tool-call lines, and container/session rates) which makes componentized costing possible.
- Core components: per-token input/output pricing, prompt-caching discounts, container/session pricing (hosted containers), tool-call metering (web-search, tool calls), storage/file-day fees.
- Representative public figures (list rates; see pricing page for full tables and modes): example for gpt-5.4 shows ~ $2.50 per 1M input tokens and $15.00 per 1M output tokens (standard mode); containers and tool calls are published on the same page.
- Pricing / public links:
  - OpenAI API pricing: https://developers.openai.com/api/docs/pricing/

2) Anthropic (Claude platform / Claude Code)
- Why it matters: Claude's docs explicitly target agentic coding (Claude Code, code-execution tools, web-search, long-context) and publish model-level and feature pricing including prompt-caching multipliers and server-side tool prices.
- Core components: per-MTok model pricing, prompt-caching write/read multipliers, web-search ($10 / 1k searches), code-execution container hours (1,550 free hours per org; $0.05/hr beyond), file storage charges.
- Representative public figures: Sonnet/Haiku families at materially lower per-MTok rates (e.g., Sonnet series ~ $3 / MTok input, $15 / MTok output examples in public tables); Opus-series list higher rates for higher-capacity models — see Anthropic pricing page for full breakdown.
- Pricing / public links:
  - Anthropic / Claude pricing: https://platform.claude.com/docs/en/about-claude/pricing

3) Google (Gemini API / Vertex AI / AI Studio)
- Why it matters: Gemini family provides tiered cost/latency trade-offs (Pro, Flash, Flash-Lite) and built-in grounding (Google Search, Maps) with their own metering. Google also offers enterprise packaging via Vertex AI/AI Studio.
- Core components: tiered per-1M-token rates, context-caching storage, grounding/search query charges, tooling (code execution/computer-use), and Vertex-hosting infrastructure pricing for enterprise deployments.
- Representative public figures: Gemini 3.1 Pro (example list) shows paid-tier list rates around $2 / 1M input and $12 / 1M output (standard); Flash-Lite examples show very low costs (e.g., $0.25 input / $1.50 output per 1M tokens) — see Gemini pricing page for model/tier details.
- Pricing / public links:
  - Gemini API pricing: https://ai.google.dev/gemini-api/docs/pricing
  - Vertex AI pricing (enterprise hosting & infra): https://cloud.google.com/vertex-ai/pricing

4) GitHub Copilot (IDE-integrated; Copilot Business / Enterprise)
- Why it matters: Primary developer-facing distribution channel for agentic assistance in IDEs; it represents the seat-first commercial model many engineering organizations adopt.
- Core components: per-seat subscription (business/enterprise tiers), monthly allowances of premium requests, optional purchase of extra premium requests (metered per-request), organization-level management features and agent provisioning.
- Representative public figures: Copilot Business listed at $19 per granted seat/month; Copilot Enterprise $39 per seat/month; individual Pro $10/month, Pro+ $39/month. Additional premium requests purchase priced at ~$0.04 per extra request (public doc).
- Pricing / public links:
  - Copilot plans & pricing: https://docs.github.com/en/copilot/get-started/plans

5) Cursor (IDE-native agent / workspace assistant)
- Why it matters: Exemplifies the seat-first IDE-native assistants (teams, cloud agents, hooks) with explicit seat pricing and usage tiers — useful to compare seat-first economics vs token-first vendor stacks.
- Core components: per-user seat fees (individual/team tiers), included usage allowances (multipliers), optional pooled/enterprise billing with pooled usage for large teams; model-call resale or pass-through handled by vendor.
- Representative public figures: Cursor Pro $20/user/month; Cursor Teams $40/user/month; Pro+ and Ultra tiers ($60 / $200 per user/month) with higher included usage multipliers.
- Pricing / public links:
  - Cursor pricing & models: https://cursor.com/pricing ; https://cursor.com/docs/models-and-pricing

Other vendors to watch (appendix / not in top five)
- Replit (Ghostwriter), Microsoft Copilot Studio (enterprise/hosting tooling), Replit pricing and model pages — good candidates for secondary comparisons or appendix where seat vs token economics differ.

Platform comparison table (compact)
- Purpose: Provide a quick at-a-glance signal of each platform's primary economic model, direct pricing URL, and whether public pages provide enough component-level detail for a granular cost breakdown in Section 05.

| Platform | Economic model | Pricing URL(s) | Public component granularity | Notes / gaps |
| --- | --- | --- | --- | --- |
| OpenAI | Token-first (per-token input/output), containers, tool-call metering | https://developers.openai.com/api/docs/pricing/ | Yes — per-model token, container-session, tool-call lines published | Rich published lines for per-token and containers; enterprise discounts/contact required for committed pricing |
| Anthropic (Claude) | Token-first (per-MTok) + prompt-caching multipliers, container hours | https://platform.claude.com/docs/en/about-claude/pricing | Yes — per-MTok, caching multipliers, web-search & container-hour lines published | Includes free container-hours and cache multipliers that affect session economics; enterprise packaging may vary |
| Google (Gemini / Vertex) | Token-first, tiered families (Pro / Flash / Flash-Lite), grounding fees | https://ai.google.dev/gemini-api/docs/pricing ; https://cloud.google.com/vertex-ai/pricing | Yes — per-model tier rates and grounding pricing published | Vertex/enterprise packaging may show different terms; grounding query charges are explicit |
| GitHub Copilot | Seat-first (plus monthly premium-request allowances + extra-request metering) | https://docs.github.com/en/copilot/get-started/plans | Partial — seat prices and premium-request unit cost public; some organizational hosting/resale details opaque | Public seat prices clear; enterprise model-hosting/resale lines sometimes routed through enterprise sales |
| Cursor | Seat-first with usage tiers / included usage multipliers | https://cursor.com/pricing ; https://cursor.com/docs/models-and-pricing | Partial — seat tiers public; pass-through per-token reseller rates not fully disaggregated | Good seat-tier transparency; model-call pass-through often vendor-managed and may be omitted publicly |

Gaps & data-quality notes
- Enterprise negotiated rates, volume discounts, and reseller pass-through (seat vendors reselling model calls) are frequently not public. We will not invent enterprise-only numbers. Section 05 will extract all public per-line prices and explicitly call out gaps where representative numbers are missing.

Table plan (for Section 05)
- Section 05 will include a per-platform component table for each top-5 vendor mapping: token rates (per-1M or per-token), container/session pricing, tool-call pricing (per 1k calls or per-call), seat fees (when applicable), and storage/file-day fees. Each table cell will include a direct source link to the precise pricing line on the vendor page.

Next actions (for this section)
- Mark this section as ready -> move to done once Section 05 has ingested the concrete per-line pricing and a worked example cost calculation is produced (two representative workloads: a short interactive session and a long-horizon container-run session). For now this file documents the top-five selection, representative public figures, and direct pricing links required by the special instructions.

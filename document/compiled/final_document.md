# Next Breakthroughs in Agentic Coding: Technologies, Market Trends, and Costing

Executive summary — Next Breakthroughs in Agentic Coding

Purpose: Give busy product and engineering leaders the five highest‑leverage takeaways and recommended immediate actions. This executive summary synthesizes the report’s evidence (Anthropic 2026 Agentic Coding Trends report, vendor pricing pages for OpenAI / Google / Anthropic / GitHub / Cursor) and the section-level plans in the outline.

Topline verdict (one sentence)
Agentic coding is moving from exploratory pilots to production pilots, but economics, developer workflow integration, and safety/governance remain the principal barriers; the next breakthroughs will be cost primitives, IDE-native agent ergonomics, and standardized agent interoperability and safety primitives.

Five headline findings (evidence-backed, short)
1) Economics is the gating constraint for broad production use. Public pricing shows two dominant commercial patterns — seat/subscription products (GitHub Copilot, Cursor) and token- or call‑metered platforms (OpenAI, Google, Anthropic). Concrete public examples: GitHub Copilot business seats (~$19/user/mo) and Cursor Teams (~$40/user/mo) are clear seat-based models for developer adoption; Anthropic and other model providers bundle token charges, tool-call charges, and container execution quotas (see Section 05 and Research Notes for direct pricing pages). (Sources: GitHub Copilot pricing; Cursor pricing; Anthropic pricing pages.)

2) Integration and developer UX drive adoption more than raw model quality. Platforms that tightly integrate into the editor, CI, and runtime (Copilot, Cursor, IDE plug-ins) lower friction and show faster seat-based adoption. Vendor case studies in the Anthropic report and independent engineering analyses indicate that friction at the editor/CI boundary determines whether teams scale agentic usage beyond a few power users. (Source: Anthropic 2026 report; The New Stack analysis.)

3) Tooling and execution costs (container runs, tool calls, external API calls) produce hidden tails in unit economics. Anthropic’s docs and other vendor pricing pages explicitly charge for code-execution containers, web grounding calls, and tool primitives — these items can dominate the per-agent session cost for long-running or search-heavy agents. (Source: Anthropic pricing pages; Section 04 taxonomy.)

4) Safety, observability, and governance are adoption prerequisites (not optional features). The Anthropic report and Deloitte adoption guidance emphasize that orgs will not scale agentic coding without provable sandboxing, provenance, and policy controls. This creates a market for platform-level safety primitives, audit trails, and role-based agent controls. (Source: Anthropic 2026; Deloitte.)

5) Interoperability and standardized agent primitives are high‑leverage levers. A small set of improvements — standardized tool‑call semantics, agent orchestration APIs, and compact on‑device agent runtimes — will materially lower marginal cost and integration work, enabling new higher-margin business models. (Inference synthesized from vendor roadmaps and cost patterns in public pricing pages.)

Top five agentic-coding platforms (short rationale and direct pricing pages)
- OpenAI (API / developer platform) — Core model and agent primitives; token- and tool-call pricing. Pricing: https://developers.openai.com/api/docs/pricing/  — Rationale: market-leading model access and extensive agents tooling in platform guides. (See Section 05 for detailed breakdown.)
- Anthropic (Claude / Claude Code) — Model families plus explicit container and tool-call pricing. Pricing: https://platform.claude.com/docs/en/about-claude/pricing — Rationale: vendor report and public pricing explicitly called out in research notes.
- Google (Gemini / Vertex AI) — Model tiers (Gemini Pro, Flash) and enterprise Vertex packaging; strong search/grounding tooling. Pricing: https://ai.google.dev/gemini-api/docs/pricing — Rationale: large cloud match for enterprise agentic workloads and differentiated model tiers.
- GitHub Copilot (IDE‑integrated assistant) — Seat-based product with metered premium requests. Pricing: https://github.com/features/copilot/plans (or https://docs.github.com/en/copilot/get-started/plans) — Rationale: major distribution channel via the IDE and strong developer adoption.
- Cursor (IDE-native agent & workspace) — Seat-focused, UX‑first agent for developers. Pricing: https://cursor.com/pricing — Rationale: tightly integrated IDE UX and explicit team pricing make it a representative seat-first model.

Note: Section 03 contains longer platform profiles and a compact comparison table linking each platform to the core components they bill for.

What this implies for product teams and investors (practical recommendations)
- Short term (0–6 months): prioritize experiments that reduce token/tool-call volume per useful agent session (prompt caching, local LLM inference for “scratch” context, cheaper flash‑model fallbacks). Pilot IDE‑native seat offerings for a bounded team (20–50 engineers) to measure real per‑seat TCO before broad rollouts.
- Medium term (6–18 months): invest in agent observability (per-call provenance, searchable execution logs) and a safety primitives layer to reduce enterprise procurement friction. Negotiate enterprise pricing with model vendors that includes predictable container/compute allowances or committed‑use discounts.
- Strategic bets (18+ months): pursue standardization efforts (agent orchestration APIs and tool‑call schemas) and R&D on lower‑marginal‑cost inference (on-device/edge LLMs, model distillation for agent controllers) — these have the highest potential to compress costs and unlock new pricing models.

Immediate action items for this project (what we will deliver next)
1) Section 03: full short-profiles of the top five platforms with a platform comparison table and direct pricing URLs (fulfills special instruction #1).  
2) Section 04: a component-level cost taxonomy (tokens, tool calls, container sessions, seats, storage) that maps each component to public pricing lines (begins to address special instruction #2).  
3) Section 05: detailed, sourced cost breakdowns for each platform with direct links to pricing pages and worked examples where public data allows (fulfills special instruction #3).

Where to look for the data backing the claims in this summary
- Anthropic 2026 Agentic Coding Trends report (structural exemplar and risk/market evidence): https://resources.anthropic.com/hubfs/2026%20Agentic%20Coding%20Trends%20Report.pdf
- OpenAI pricing: https://developers.openai.com/api/docs/pricing/
- Anthropic (Claude) pricing: https://platform.claude.com/docs/en/about-claude/pricing
- Google Gemini pricing: https://ai.google.dev/gemini-api/docs/pricing
- GitHub Copilot plans: https://github.com/features/copilot/plans
- Cursor pricing: https://cursor.com/pricing

Status and next step: This section contains specific, cited findings and a clear map to the next evidence‑gathering tasks. Section 01 is ready to mark done; detailed numeric cost tables will appear in Section 05 with source-by-source citations and the representative workload calculations called out in the outline.

Agentic coding landscape: platforms, models, and developer workflows

Purpose
- Map current vendor platforms, model families, and the developer workflows they enable. Define the capability dimensions we will use through the rest of the report.

Scope and evidence base
- Primary sources: vendor docs and pricing pages (OpenAI, Anthropic, Google, GitHub, Cursor). See references/research_notes.md for source-by-source notes and direct URLs.

What is "agentic coding" for this report
- Working definition: development workflows in which autonomous or semi-autonomous agents (multi-step LLM-driven processes) take actions that extend beyond single-turn code generation — e.g., orchestrating API/tool calls, running builds or tests in containers, editing code in-place in an IDE, and integrating with external systems via authenticated connectors.
- Distinguishing properties: (a) orchestration across tools (function-calling / tool calls); (b) persistent context and background execution (long-horizon or multi-turn agents); (c) actuator-level control (IDE edit, shell, browser, CI jobs); (d) repeatable workflows and governance (approval/traceability, approvals and safety checks).

Capability dimensions (used throughout the report)
- Editor/IDE integration: native in-editor actions (suggestions, code edits, chat) and deeper APIs for programmatic edits or slash/command interfaces.
- Tool calling / connectors (MCP): ability to declare and call external services (REST APIs, search, DBs) using function-calling or managed connector layers.
- Computer use / container execution: controlled execution of code in sandboxes/containers (builds, tests, run snippets) with metering and billing implications.
- Browser and terminal control: ability for agents to operate a browser or terminal session (scraping, UI automation, terminal commands) either natively or via published tools.
- Seat vs metered pricing model: whether the product charges primarily by seat/subscription (Copilot, Cursor) or by metered model usage / tokens / tool calls / container hours (OpenAI, Anthropic, Google).
- Observability & governance: audit trails, approvals, safe-mode defaults, and admin controls.

Compact features matrix (evidence-linked)
Note: entries indicate presence in vendor documentation (Yes = explicitly documented; Partial = documented in some form but with limits or enterprise only; Gap = not publicly documented).

| Platform / Vendor | Editor/IDE integration | Tool-calls / Connectors (MCP) | Container / code execution | Browser/terminal control | Pricing model (public link) |
|---|---:|---:|---:|---:|---|
| OpenAI (GPTs, Actions, Agents) | Yes (GPTs, Assistant API; ChatKit/Agent Builder docs) [1] | Yes (GPT Actions, Function Calling; MCP/connectors guides) [1] | Yes (Code Interpreter, container/session docs referenced) [1] | Partial (tools for "computer use" & shell guides; documented plug-ins) [1] | Metered token + tool-call pricing https://developers.openai.com/api/docs/pricing/ [2]
| Anthropic (Claude / Claude Code) | Yes (Claude integrations and code features documented) [3] | Yes (tool-specific charges, search connectors documented) [3] | Yes (code execution containers; container-hour billing) [3] | Partial (web/tooling documented; terminal/browser control limited in public docs) [3] | Metered model + tool pricing https://platform.claude.com/docs/en/about-claude/pricing [3]
| Google (Gemini / Vertex / Antigravity) | Partial (IDE integrations via partner tooling and Vertex integration documented) [4] | Yes (tool grounding, connectors, Vertex pipelines) [4] | Partial (Vertex AI supports running jobs; Antigravity packaging unclear publicly) [4] | Partial (tooling for browsing/grounding available; direct browser-control less emphasized) [4] | Metered token / per-usage pricing https://ai.google.dev/gemini-api/docs/pricing [4]
| GitHub Copilot (Copilot Chat / Copilot for Business) | Yes (deep IDE/editor integration; Copilot Chat) [5] | Partial (some actions in Copilot Chat and GitHub workflows; not a general MCP) [5] | Gap / Partial (Copilot relies on cloud-hosted model calls; container execution is typically outside Copilot scope) [5] | Partial (editor-driven; limited terminal actions via extensions) [5] | Seat-based + metered premium requests https://github.com/features/copilot/plans [5]
| Cursor / IDE-native assistants | Yes (primary UX is IDE-native agent/assistant) [6] | Partial (connectors and tool calls depend on plan and embedding of model calls) [6] | Partial (some platforms enable local / cloud runs; vendor docs opaque on execution billing) [6] | Yes (terminal/IDE interactions central to product) [6] | Seat-based plans https://cursor.com/pricing [6]

Sources: see research_notes.md entries [1]=OpenAI Actions & Agents docs; [2]=OpenAI pricing page; [3]=Anthropic Claude platform docs and pricing; [4]=Google Gemini API & Vertex docs; [5]=GitHub Copilot plans & docs; [6]=Cursor pricing and docs. Where entries are "Partial" or "Gap" we intentionally rely on public docs and flag enterprise/private packaging as the likely reason for missing public lines (see research notes).

Developer workflows observed (evidence + examples)
- Interactive IDE acceleration: Developers use editor-integrated agents (Copilot, Cursor) for inline completions, chat, and small automations (refactor suggestions, test generation). Evidence: Copilot and Cursor docs show deep editor integrations and seat pricing models [5][6].
- Orchestrated agent runs for multi-step tasks: Platforms expose agent-builder patterns (OpenAI Agent Builder, Codex workflows, Anthropic agent patterns) to create multi-tool workflows that call search, ticketing, or CI systems and then produce code changes or run tests. These rely on function-calling and connector layers (GPT Actions, MCP) [1][3].
- Long-horizon, background tasks: Vendors document background or scheduled agent execution (OpenAI "Background mode", Codex run-long-horizon guides). These workflows create different cost and governance requirements because agents may consume many tokens and run container sessions over time [1].
- Human-in-the-loop approvals and governance: Enterprise deployments emphasize approvals, audit trails, and agent safety controls in managed configuration docs (Codex/enterprise, ChatKit/enterprise features) — necessary when agents can push code or run builds [1][3][5].

Implications for product teams and buyers (what to watch)
- Cost model choice is a leading procurement axis: seat-based products simplify budgeting for small teams but can hide heavy per-call token costs if the vendor resells model capacity. Metered platforms (OpenAI, Anthropic, Google) make marginal costs visible but require workload modeling.
- Tool-call and container pricing drive marginal cost for agentic workloads: orchestration-heavy agents that call several connectors, run tests, and execute containers will be dominated by non-token charges (tool calls, container hours). Where vendors publish container or tool-call prices, those become first-order levers for optimization [2][3][4].
- Integration maturity matters more than raw model power for adoption: deep IDE integrations, robust connectors (MCP), and predictable governance enable teams to trust agents with code changes.
- Evidence gaps remain: enterprise packaging, negotiated discounts, and reseller models (where platforms embed model calls) are often not publicly documented; these are material for total cost of ownership (TCO) and must be treated as unknowns in later cost comparisons.

Do we need a table here?
- Yes: a compact features matrix (included above) materially reduces ambiguity and aligns readers with the capability axes used later in the report. For the per-platform cost breakdowns we will include explicit pricing tables with line-item citations in Section 05; Section 02 intentionally focuses on functional mapping and governance implications rather than numerical costing.

Open questions to resolve in later sections
- How each vendor maps model-call resale vs separate metering (e.g., Cursor/Copilot may charge seats but still pass through model-call costs) — requires vendor clarification or vendor-side docs.
- Antigravity / Google packaging for agentic features (is Antigravity a separate SKU or part of Vertex enterprise pricing?) — will seek explicit Google sales/public docs.

Section status: ready for downstream costing. This section documents capability categories, maps public vendor claims to them, and records where vendor docs are partial or missing. Evidence sources and per-source extractions are in references/research_notes.md.

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

05 Detailed cost breakdowns for each top platform

Purpose
- Provide componentized, source-linked pricing lines for each top-5 platform so readers can reproduce cost calculations. Where public data is missing (enterprise-only or reseller pass-through), flag the gap and avoid inventing numbers.

How to read this section
- Each vendor subsection lists: core billable components (tokens, containers, tool calls, seats, storage), the explicit public pricing lines (with source URL), and a short note on gaps or enterprise-only items. All figures below are taken directly from vendor pricing pages cited.

1) OpenAI — key public pricing lines (source: OpenAI API pricing)
- Pricing URL: https://developers.openai.com/api/docs/pricing/
- Representative per-model token rates (per 1M tokens, standard mode):
  - gpt-5.4 (short-context example): Input $2.50 / 1M tokens; Cached input $0.25 / 1M; Output $15.00 / 1M
  - gpt-5.4 (long-context list): Input $5.00 / 1M; Cached input $0.50 / 1M; Output $22.50 / 1M
- Containers (hosted sessions): example session pricing (per 20-minute session): 1 GB $0.03, 4 GB $0.12, 16 GB $0.48, 64 GB $1.92 per 20-minute session (page lists per-GB and per-session variants).
- Tool calls & built-in tools:
  - Web search tool: $10.00 / 1k calls (search content tokens billed at model rates)
  - Tool call baseline: $2.50 / 1k calls (general tool-call line)
- Storage / file search: $0.10 / GB per day (1 GB free)
- Notes & gaps: OpenAI publishes per-model, per-token, container, and tool-call lines sufficient for componentized costing. Volume/enterprise discounts and reserved pricing require sales contact and are not public.

2) Anthropic (Claude) — key public pricing lines
- Pricing URL: https://platform.claude.com/docs/en/about-claude/pricing
- Model per-MTok examples (MTok = million tokens):
  - Claude Opus 4.6 (example row): Base input $5 / MTok; Output $25 / MTok (table shows cache and long-context variants)
  - Claude Sonnet 4.6 / Sonnet family: Input ~$3 / MTok; Output ~$15 / MTok (Sonnet rows shown in pricing table)
  - Claude Haiku family: lower-cost tiers (e.g., Haiku 4.5 input $1 / MTok; output $5 / MTok in table examples)
- Prompt caching multipliers and cache economics:
  - 5-minute cache write: 1.25x base input price; 1-hour cache write: 2x base input price; cache read (hit) costs 0.1x base input price. (See prompt-caching section.)
- Tool pricing & containers:
  - Web search: $10 / 1,000 searches (search results are charged in addition to token rates for search content)
  - Code execution: first 1,550 container hours free per organization per month; additional hours billed at $0.05 per hour, per container
  - Web fetch: no additional charges beyond token billing for fetched content
- Storage / batch discounts: Batch API discounts and long-context premium rates are documented (see pricing page).
- Notes & gaps: Anthropic provides detailed component lines including prompt-caching multipliers and a generous free container-hours allowance that changes session economics. Enterprise discounts and reseller/third-party endpoint pricing (Bedrock/Vertex) vary.

3) Google — Gemini API / Vertex (key lines)
- Pricing URL: https://ai.google.dev/gemini-api/docs/pricing (Gemini) and https://cloud.google.com/vertex-ai/pricing (Vertex hosting)
- Representative per-1M-token rates (examples from Gemini page):
  - Gemini 3.1 Pro (Standard): Input ~$2 / 1M tokens (<=200k prompts), Output ~$12 / 1M tokens (<=200k)
  - Gemini 3.1 Flash-Lite (cost-efficient): Input $0.25 / 1M, Output $1.50 / 1M (standard tier example)
  - Batch pricing: roughly 50% of standard token rates when using Batch API (see page for model-by-model batch rates)
- Grounding / search / maps charges:
  - Grounding with Google Search / Maps: common published lines include $14 / 1,000 search queries (Gemini 3.1 Pro references $14 / 1k; other model families show different free allowances and $35 / 1k variants for some models) — check model table rows for the exact grounding allowance.
- Tool use / code execution: Code execution costs are charged as token-based input/output for generated/executed content; page notes tool-specific behaviors and that execution runtime itself is not separately charged in Gemini (unlike some vendors).
- Notes & gaps: Vertex enterprise packaging may move pricing onto cloud infra bills (extra infra/network fees). Grounding query charges and cache/storage rates are explicit; enterprise negotiated terms require Google Cloud sales.

4) GitHub Copilot — seat-first pricing and premium-request metering
- Pricing URL: https://docs.github.com/en/copilot/get-started/plans
- Public seat prices (examples):
  - Copilot Pro (individual): $10 / month (or $100 / year)
  - Copilot Pro+ : $39 / month
  - Copilot Business: $19 per granted seat / month
  - Copilot Enterprise: $39 per granted seat / month
- Premium requests & metering:
  - Included premium request allowances by plan (e.g., Pro includes 300/month; Pro+ includes 1500/month; business/enterprise include per-user allowances)
  - Additional premium request purchase: $0.04 per extra premium request (public doc footnote)
- Notes & gaps: Copilot seats are the dominant cost center for team rollouts; meterable premium requests add marginal cost. Organization-level indexing/enterprise hosting pass-through fees may be negotiated.

5) Cursor — seat-first with usage multipliers
- Pricing URL: https://cursor.com/pricing and https://cursor.com/docs/models-and-pricing
- Public seat lines:
  - Individual Pro: $20 / user / month
  - Pro+: $60 / user / month (recommended tier)
  - Ultra: $200 / user / month (high usage tier)
  - Teams: $40 / user / month (team plan; includes centralized billing & analytics)
- Usage multipliers / included usage:
  - Pro+ advertises 3x usage on OpenAI/Claude/Gemini models; Ultra 20x usage — these are vendor-defined multipliers applied to included allowances (see cursor docs).
- Notes & gaps: Cursor lists seat prices clearly; exact pass-through per-token costs (when Cursor resells model calls) are not disaggregated on public pages. Enterprise pooled usage and invoicing are custom.

Common caveats and data gaps
- Enterprise/reseller negotiated discounts, committed-use discounts, and reseller pass-throughs (seat vendors reselling model calls) are frequently not public and will be flagged in each vendor subsection.
- For seat-first products that resell model calls (Cursor, Copilot), we will not invent the internal pass-through per-token price; instead Section 05 will include the public seat prices and note the lack of public line-item model-call pass-through.

Next step (highest-leverage):
- Use the public per-line figures in this file to compute two representative worked examples (a short interactive agent session and a long container-run session). These worked examples will be the highest-leverage way to convert component lines into comparative economics. I will prepare those worked examples in the next iteration (Section 05 worked examples subsection) once you confirm to proceed.

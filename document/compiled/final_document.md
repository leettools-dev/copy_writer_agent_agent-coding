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
- Itemize the public pricing lines and component mappings for the five top platforms we selected (OpenAI, Anthropic/Claude, Google Gemini/Vertex, GitHub Copilot, Cursor). Provide direct source links and flag gaps where pricing is enterprise-only or not publicly disaggregated.

How to read this section
- We report only public, vendor-published pricing lines and the document URLs where they appear. When vendors publish multiple tiers (batch, priority, regional uplifts, cache multipliers) we list the headline public rates and note relevant multipliers or conditions. We do not invent hidden or negotiated enterprise discounts — those are flagged as gaps.

Sources for each vendor (click-through pricing pages)
- OpenAI API pricing: https://developers.openai.com/api/docs/pricing/
- Anthropic / Claude pricing: https://platform.claude.com/docs/en/about-claude/pricing
- Google Gemini API pricing: https://ai.google.dev/gemini-api/docs/pricing
- GitHub Copilot plans & pricing: https://docs.github.com/en/copilot/get-started/plans
- Cursor pricing: https://cursor.com/pricing

-- Worked examples (representative workloads)

Assumptions (shared across examples)
- Lightweight interactive session: single developer, 15-minute interactive agent session producing ~2,000 input tokens and ~1,000 output tokens, and 2 external tool calls (web searches). No container/code-execution invoked.
- Long-horizon agent run: multi-step agent that cumulatively uses 20,000 input tokens and 10,000 output tokens, performs 10 web searches (or grounding calls), and runs a code-execution container for 2 hours.
- Token unit: 1 MTok = 1,000,000 tokens. We compute costs by multiplying (tokens/1,000,000) by vendor per-MTok rates. Tool-call costs use per-1k-call public rates.
- Where a vendor does not publish per-token pass-through for seat-first products (Cursor, some Copilot configurations), we present: (A) seat-only amortized cost (explicit public seat price) and (B) the marginal metered cost where the vendor publishes a metered premium-request unit price (Copilot). For Cursor we mark model-call pass-through as a public data gap.
- Confidence: calculations use verbatim public pricing lines captured in our research notes and vendor pricing pages. If a vendor page omits a line (pass-through model rates), we do not invent one and instead show a gap.

1) Lightweight interactive session (15 min; 2k in / 1k out; 2 web searches)

OpenAI (gpt-5.4 short-context standard rates)
- Rates used (OpenAI pricing): input $2.50 / 1M tokens; output $15.00 / 1M tokens; tool/web-search example lines: tool call $2.50 / 1k calls, web search $10 / 1k calls.
- Token cost: (2,000 / 1,000,000) * $2.50 = $0.005 (input)
             (1,000 / 1,000,000) * $15.00 = $0.015 (output)
- Tool cost (2 web searches): (2 / 1,000) * $10 = $0.02
- Session subtotal (OpenAI): $0.005 + $0.015 + $0.02 = $0.04
- Source: https://developers.openai.com/api/docs/pricing/

Anthropic / Claude (Opus / Sonnet families)
- Rates used (Anthropic pricing): example Claude Opus 4.6 input $5 / MTok; output $25 / MTok; web search $10 / 1k searches; web fetch free beyond token costs.
- Token cost: (2,000 / 1,000,000) * $5 = $0.01 (input)
             (1,000 / 1,000,000) * $25 = $0.025 (output)
- Tool cost (2 web searches): (2 / 1,000) * $10 = $0.02
- Session subtotal (Anthropic): $0.01 + $0.025 + $0.02 = $0.055
- Source: https://platform.claude.com/docs/en/about-claude/pricing

Google Gemini (Gemini 3.1 Pro / Flash-Lite comparison)
- Rates used (Gemini 3.1 Pro standard): input $2.00 / 1M; output $12.00 / 1M. Grounding with Google Search (after allowance) example $14 / 1k searches for some tiers.
- Token cost: (2,000 / 1,000,000) * $2.00 = $0.004 (input)
             (1,000 / 1,000,000) * $12.00 = $0.012 (output)
- Grounding cost (2 searches): (2 / 1,000) * $14 = $0.028
- Session subtotal (Gemini 3.1 Pro): $0.004 + $0.012 + $0.028 = $0.044
- If instead using Gemini Flash-Lite (cheaper): input $0.25/1M and output $1.50/1M — token costs would be ~6–10x lower; grounding charges still apply when used.
- Source: https://ai.google.dev/gemini-api/docs/pricing

GitHub Copilot (seat-first; premium requests)
- Public lines: Copilot Business seat $19 / granted seat / month; premium-request allowances per plan (e.g., 300 premium requests / month) and extra premium requests $0.04 / request.
- Marginal per-session cost (assuming the session uses premium requests that are within plan allowance): $0 (covered by allowance). If beyond allowance, 2 extra premium requests * $0.04 = $0.08.
- Seat amortization example: Copilot Business $19 / month. If we assume 20 billed working days / month and 1 interactive session per day (conservative), per-session seat amortization = $19 / 20 = $0.95. (Adjust assumption to reflect your org's realistic session frequency.)
- Practical takeaway: for light interactive sessions, Copilot's marginal cost is typically dominated by seat amortization rather than per-request metering unless the team exceeds premium-request allowances.
- Source: https://docs.github.com/en/copilot/get-started/plans

Cursor (seat-first; model-call pass-through gap)
- Public lines: Cursor Pro $20 / month individual; Pro+ $60 / month; Teams $40 / user / month.
- Marginal per-session model-call cost: Not published (Cursor may resell model calls via included allocations or usage multipliers) — data gap. We present seat amortization similarly: $40 / month -> $40 / 20 sessions = $2.00 per-session amortized (assumes 20 sessions/month).
- Source: https://cursor.com/pricing

Summary — lightweight session
- OpenAI: ~$0.04 / session (token+web-search costs only)
- Anthropic: ~$0.055 / session
- Google (Gemini 3.1 Pro): ~$0.044 / session
- GitHub Copilot: marginal metered cost often $0 (within allowance); amortized seat cost ~ $0.95/session (example assumption)
- Cursor: marginal metered cost gap; amortized seat cost example ~ $2.00/session (Teams plan assumption)

Confidence notes: model-token and tool-call lines come from vendor pricing pages cited above. Seat amortizations are illustrative and assume 20 sessions/month; adjust to your org's usage pattern for realistic estimates.

2) Long-horizon agent run (20k input / 10k output; 10 web searches; 2-hour container run)

OpenAI
- Rates used: gpt-5.4 short-context standard: input $2.50 / 1M; output $15.00 / 1M. Container pricing per 20-minute session: 4 GB container $0.12 per 20-minute session (so 2 hours = 6 * $0.12 = $0.72).
- Token cost: (20,000 / 1,000,000) * $2.50 = $0.05 (input)
             (10,000 / 1,000,000) * $15.00 = $0.15 (output)
- Web search: (10 / 1,000) * $10 = $0.10
- Container: 2 hours on 4GB container = 6 sessions * $0.12 = $0.72
- Run subtotal (OpenAI): $0.05 + $0.15 + $0.10 + $0.72 = $1.02
- Source: https://developers.openai.com/api/docs/pricing/

Anthropic / Claude
- Rates used: Claude Opus 4.6 input $5 / MTok; output $25 / MTok. Code execution: Anthropic gives orgs 1,550 free container hours per month; beyond that $0.05 / hour / container.
- Token cost: (20,000 / 1,000,000) * $5 = $0.10 (input)
             (10,000 / 1,000,000) * $25 = $0.25 (output)
- Web search: (10 / 1,000) * $10 = $0.10
- Container: If within Anthropic's free 1,550 hours/month, container cost = $0.00; otherwise $0.05/hr * 2 = $0.10
- Run subtotal (Anthropic): if within free container allowance: $0.10 + $0.25 + $0.10 + $0.00 = $0.45
                                 otherwise: $0.55
- Source: https://platform.claude.com/docs/en/about-claude/pricing

Google Gemini (Gemini 3.1 Pro)
- Rates used: Gemini 3.1 Pro standard: input $2.00 / 1M; output $12.00 / 1M. Grounding per-query example $14 / 1k after allowance.
- Token cost: (20,000 / 1,000,000) * $2.00 = $0.04 (input)
             (10,000 / 1,000,000) * $12.00 = $0.12 (output)
- Grounding: (10 / 1,000) * $14 = $0.14
- Code execution: Gemini page states code execution is billed as token usage; no separate container-hour line to add in many modes — so exclude container runtime charge and capture cost via tokens above.
- Run subtotal (Gemini 3.1 Pro): $0.04 + $0.12 + $0.14 = $0.30
- If using Flash-Lite (cheaper token rates), the token portion would be much lower.
- Source: https://ai.google.dev/gemini-api/docs/pricing

GitHub Copilot
- Seat-first: Copilot Business $19 / seat / month; premium requests allowances in plan (e.g., 300 / month). If the 10 web searches and token usage fit within a user's included premium requests and model allowances, marginal metered cost = $0. Seat amortization example (20 sessions/month) = $19 / 20 = $0.95 per session; for a long-horizon run that counts as, say, 1 session, seat amortization remains the same.
- If team exceeds premium-request allowances, additional premium requests are $0.04 / request, so 10 extra requests = $0.40.
- Note: Copilot enterprise customers may route calls through enterprise-hosted models or use their own API keys and be billed separately for model usage — public docs indicate multiple deployment options; treat these as enterprise-only variations.
- Source: https://docs.github.com/en/copilot/get-started/plans

Cursor
- Seat-first: Teams $40 / user / month; Pro individual $20 / month. Cursor's public pricing shows "x usage" multipliers on higher tiers (e.g., Pro+ 3x usage), but does not publicly list exact pass-through per-token rates when it resells model calls.
- Seat amortization: Teams $40/month -> $2.00 per session (assuming 20 sessions/month). Model-call pass-through: not published -> gap.
- For a long-horizon run that requires container execution or heavy model inference, ask Cursor sales or documentation for explicit per-token pass-through rates or included allowances.
- Source: https://cursor.com/pricing

Summary — long-horizon run
- OpenAI: ~$1.02 (dominant cost: container sessions in this scenario)
- Anthropic: ~$0.45 (if code execution hours fall within the 1,550 free-hour allowance) or ~$0.55 if charged for container-hours
- Google Gemini 3.1 Pro: ~$0.30 (token + grounding; code execution captured by token billing in many modes)
- GitHub Copilot: marginal metered cost often $0 if inside allowances; seat amortization and enterprise routing make per-run numbers organization-specific
- Cursor: seat-only amortization example ~$2.00 per run; model-call pass-through gap for heavy inference runs

Gaps & recommended follow-ups
- Cursor pass-through model rates: not disclosed on public pricing page. Recommended follow-up: request Cursor's documentation or enterprise sales information to confirm whether model-call costs are included in the seat price or billed separately and at what per-token rate.
- Copilot model mapping: GitHub publishes supported models (Claude, Gemini, GPT families) but does not always disclose which model backs "premium requests" in a simple per-token manner. For precise per-workload cost estimation when using Copilot, clarify whether your org relies on (a) included model allowances, (b) Copilot-managed premium model usage (vendor-managed billing), or (c) "bring your own API key" deployments where the org pays model providers directly.
- Enterprise negotiations: volume discounts, dedicated endpoints, and region-specific uplifts are typically negotiated — flag these as "enterprise-only" and avoid estimating.

Appendix: worked-example assumptions and calculation cadence
- We used conservative, easily explainable workload definitions to keep comparisons transparent. To apply these to your org, replace the session frequency and per-session assumptions with your own (sessions per developer per month; expected number of tool calls per session; proportion of runs needing containers).
- All calculations above cite vendor pricing pages published March 2026 (pages listed in Sources). If you want a spreadsheet of these calculations for scenario sensitivity (varying session frequency, model family, container size), I can generate one and populate it with the public rates used above.

Direct pricing links (audit trail)
- OpenAI pricing: https://developers.openai.com/api/docs/pricing/
- Anthropic (Claude) pricing: https://platform.claude.com/docs/en/about-claude/pricing
- Google Gemini pricing: https://ai.google.dev/gemini-api/docs/pricing
- GitHub Copilot plans: https://docs.github.com/en/copilot/get-started/plans
- Cursor pricing: https://cursor.com/pricing

Status: draft -> includes two representative worked examples computed from direct public vendor pricing lines. Next step is to (a) convert these worked examples into a compact comparison table and (b) produce a spreadsheet export (CSV) of the scenarios for easy sensitivity analysis. If you want, I can generate the CSV now.

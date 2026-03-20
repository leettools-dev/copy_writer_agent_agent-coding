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
- Present the five leading agentic-coding platforms, the short rationale for inclusion, and direct links to their public pricing pages (special instruction requirement).

Top 5 platforms (ranked by combination of agentic feature set, market reach, IDE integration, and pricing transparency)

1) OpenAI (API / Agents / Codex family)
- Why: Broadest set of agent primitives (Agents SDK, tool integrations, containers, realtime and batch modes), widely reused by platform vendors and IDEs; transparent, granular token & tool pricing.
- Pricing (canonical): https://developers.openai.com/api/docs/pricing/
- Quick note: OpenAI publishes per-1M-token rates across flagship families (gpt-5.4 variants), container session pricing, tool-call pricing, and embeddings/storage lines.

2) Anthropic (Claude platform / Claude Code)
- Why: Vendor-forward, agent-focused product positioning with explicit tooling for code, prompt-caching multipliers and container/tool pricing; strong exemplar (selected report) and detailed public pricing.
- Pricing (canonical): https://platform.claude.com/docs/en/about-claude/pricing
- Quick note: Anthropic provides per-MTok rows for model families and explicit container & tool costs (including free container allowances in some plans).

3) Google (Gemini API / Vertex integration)
- Why: Gemini models + Vertex AI integration with explicit batch/standard/flash tiers; notable grounding/tool pricing (search grounding) and a major cloud-integration story for enterprise agentic stacks.
- Pricing (canonical): https://ai.google.dev/gemini-api/docs/pricing
- Quick note: Google separates Flash/Pro tiers and often expresses grounding (search) costs per 1k queries; Vertex infra costs may add infra/network in enterprise settings.

4) GitHub Copilot (Copilot / Copilot for Business & Enterprise)
- Why: Primary IDE-integrated developer touchpoint; seat-based pricing model and premium-request metering makes it a dominant go-to for day-to-day agentic coding adoption inside teams.
- Pricing (canonical): https://docs.github.com/en/copilot/get-started/plans
- Quick note: Copilot is seat-first — some advanced features are metered (premium requests) and any model-call pass-throughs in enterprise reseller scenarios are often opaque.

5) Cursor (IDE-native agent) — includes other IDE-first vendors (Replit, Gitpod) as runner-ups
- Why: Representative of the IDE-native, seat-first UX model (fast adoption among developer teams); offers team tiers and usage multipliers instead of pass-through token metering.
- Pricing (canonical): https://cursor.com/pricing
- Quick note: Cursor publishes per-user tiers (Pro, Teams, Ultra) with documented "usage multipliers" rather than explicit per-token pass-through.

Comparison notes (what this table should show)
- A compact comparative table (in the final document) will list: platform, primary agent capabilities (editor control, browser/terminal control, tool calls, container sessions), monetization model (token-metered vs seat-first), and canonical pricing URL. We have collected canonical pricing pages for each vendor above and will populate the table in Section 03 when assembling the compiled document.

Gaps and caveats
- Seat-first vendors (GitHub Copilot, Cursor) sometimes resell model calls through negotiated enterprise agreements — public pass-through token rates are often missing; we will flag these as "vendor-managed resale — gap" in Section 05 where we show per-platform cost breakdowns.
- Google Vertex/enterprise packaging may introduce extra infra billing line items not present on the public Gemini page; we will call this out when presenting worked examples.

Sources
- OpenAI pricing: https://developers.openai.com/api/docs/pricing/
- Anthropic pricing: https://platform.claude.com/docs/en/about-claude/pricing
- Google Gemini pricing: https://ai.google.dev/gemini-api/docs/pricing
- GitHub Copilot plans: https://docs.github.com/en/copilot/get-started/plans
- Cursor pricing: https://cursor.com/pricing

04 Important components and per-component cost taxonomy

Purpose
- Define the cost components buyers pay for in agentic coding products and standardize units so platform comparisons are consistent.

Overview and approach
- This section creates a compact, auditable mapping from common agentic-coding components to the canonical billing unit used by vendors (tokens, container-hours, calls, seats, storage). Every numeric row is traced to a public pricing page (sources listed inline).
- We prefer one clear vendor example per component (OpenAI, Anthropic, Google when available) and include seat-based examples (GitHub Copilot, Cursor) where vendors expose only subscription lines.

Component taxonomy (definition, canonical unit, vendor examples, buyer implication)

1) Model tokens (prompt input, cached input, response output)
- Unit: $ per 1M tokens (normalize vendor lines to $/1M when necessary)
- Vendor examples (public):
  - OpenAI: input $2.50 / 1M; cached input $0.25 / 1M; output $15.00 / 1M. (OpenAI pricing: https://developers.openai.com/api/docs/pricing/)
  - Anthropic (Claude): input $5 / MTok; output $25 / MTok; cache multipliers and long-context tiers apply. (Anthropic pricing: https://platform.claude.com/docs/en/about-claude/pricing)
  - Google Gemini: input $2.00 / 1M; output $12.00 / 1M (Gemini 3.1 Pro example). (Google Gemini pricing: https://ai.google.dev/gemini-api/docs/pricing)
- Buyer implication: For text-heavy agent loops, token rates are the primary marginal cost. Caching, batch APIs, and selecting lower-cost model tiers (flash/flash-lite) are the main levers to reduce marginal $/session.

2) Container sessions / hosted runtimes (ephemeral execution environments used for code execution, tests, or local emulation)
- Unit: $ per session (vendor-defined session length) or $ per GB-hour
- Vendor examples (public):
  - OpenAI: containers priced by 20-minute session; example 4 GB = $0.12 per 20-min session (source: OpenAI pricing).
  - Anthropic: large free container-hour allowance (1,550 free container hours / org-month); beyond that $0.05 / hour. (Anthropic pricing)
  - Google: on the Gemini public page, code execution is reflected as token consumption rather than a separate container line (Gemini pricing). (Google Gemini pricing)
- Buyer implication: Long-running CI or test-run agents make container billing (or equivalent infra tokenization) a dominant cost. Share containers, minimize idle time, and batch execution to reduce per-task overhead.

3) Tool calls / external connectors (web search, grounding, function/tool invocations)
- Unit: $ per 1k calls or $ per 1k grounded queries (vendor-specific)
- Vendor examples (public):
  - OpenAI: tool call example $2.50 / 1k calls. (OpenAI pricing)
  - Anthropic: web search example $10 / 1k searches (web fetch/token costs may still apply). (Anthropic pricing)
  - Google: grounding/search — 5,000 free prompts/month, then $14 / 1k search queries (Gemini grounding example). (Google Gemini pricing)
- Buyer implication: Agent workflows with frequent grounding or browser-based calls can accumulate significant marginal costs. Employ cached retrieval, vector indexes, and batching to reduce per-call volumes.

4) Seats / user licenses (IDE-integrated agents and enterprise seat management)
- Unit: $ per user / month (seat), sometimes combined with usage tiers or "premium request" metering
- Vendor examples (public):
  - GitHub Copilot: Copilot Business $19 / user / month; Copilot Enterprise $39 / user / month. (Copilot pricing: https://docs.github.com/en/copilot/get-started/plans)
  - Cursor: Pro $20/mo; Teams $40/user/mo; Ultra $200/mo. (Cursor pricing: https://cursor.com/pricing)
- Buyer implication: Seat-first pricing converts variable marginal costs into predictable ARR but often hides the underlying per-token pass-through. For heavy automated agents, seats alone may understate true marginal costs — ask vendors for pass-through mapping or contract clauses.

5) Storage / file-search and embeddings storage
- Unit: $ per GB-month or $ per 1M tokens for embedding-related storage/billing (vendor-specific)
- Vendor examples (public):
  - OpenAI: example file storage line used in worked examples: $0.10 / GB-day (see OpenAI pricing page for storage tiers). (OpenAI pricing)
  - Google: embeddings and persistent context lines are billed on the Gemini/embeddings pages (example embedding input $0.15 / 1M tokens depending on model). (Google Gemini pricing)
- Buyer implication: Persisting project files, caches, and vector indexes adds steady-state storage costs. For large teams, storage and embedding costs can become a material recurring line and should be considered in index design and retention policies.

6) Data egress, networking, and infra extras (enterprise billing lines outside pure model calls)
- Unit: $ per GB transferred / specialized infra charges (vendor/cloud-specific)
- Vendor examples (public): Google Cloud/Vertex often list network or infra costs on cloud billing pages (these are not always enumerated on the simple Gemini pricing page and may appear on Vertex/Cloud invoices). OpenAI and Anthropic fold some infra into containers or enterprise lines — check enterprise docs.
- Buyer implication: For on-prem/VM-hosted agents or heavy artifact transfer (logs, large test artifacts), egress and infra charges can appear on the bill and should be modeled for production forecasts.

Compact component — vendor mapping table (auditable examples)

| Component | Canonical unit | OpenAI (example) | Anthropic (Claude) (example) | Google (Gemini) (example) | Seat-first vendors (example) |
|---|---:|---:|---:|---:|---:|
| Model tokens — input | $ / 1M tokens | $2.50 / 1M (input) (https://developers.openai.com/api/docs/pricing/) | $5 / MTok (input) (https://platform.claude.com/docs/en/about-claude/pricing) | $2.00 / 1M (input) (https://ai.google.dev/gemini-api/docs/pricing) | N/A (resold via seats; not public)
| Model tokens — output | $ / 1M tokens | $15.00 / 1M (output) (OpenAI) | $25 / MTok (output) (Anthropic) | $12.00 / 1M (output) (Google) | N/A (resold via seats)
| Container sessions / runtime | $ / session or $ / GB‑hr | 4 GB = $0.12 per 20‑min session (OpenAI) | 1,550 free hrs; $0.05 / hour beyond (Anthropic) | Execution billed via tokens on Gemini page (no separate container line) | N/A (seat covers execution; enterprise terms vary)
| Tool calls / grounding | $ / 1k calls | $2.50 / 1k calls (OpenAI) | $10 / 1k searches (Anthropic) | $14 / 1k grounding queries after free allowance (Google) | Seat metering (premium requests e.g., Copilot $0.04/extra) (https://docs.github.com/en/copilot/get-started/plans)
| Seats / licenses | $ / user / month | N/A (OpenAI sells API access) | N/A (Claude API is token-metered; Anthropic has enterprise contracts) | N/A (Google sells cloud/API + GCP billing) | Copilot Business $19/user/mo; Cursor Teams $40/user/mo
| Storage / embeddings | $ / GB‑month or $ / 1M tokens | example file storage $0.10 / GB‑day (OpenAI) | embeddings or file storage lines included in Claude docs (Anthropic) | embeddings example $0.15 / 1M tokens (Gemini embeddings) | Seat vendors may include storage in plan or charge separately (vendor docs)

Sources (pricing pages cited inline above)

Implications and buyer checklist
- When comparing vendors, normalize costs to the same canonical units (e.g., $/1M tokens, $/GB‑hour, $/1k tool calls, $/seat-month). Use vendor pricing pages as the source of truth.
- For representative workload estimates, token and tool-call counts drive marginal cost for API-first vendors; container/runtime and storage drive costs for long-horizon or CI-like agents.
- Seat-first vendors improve predictability but leave an information gap: request explicit pass-through mappings (per-token or per-call) from vendors when you need marginal-cost forecasting.
- Design levers to reduce cost: caching, batching tool calls, choosing lower-cost model tiers for background tasks, minimizing idle container time, and retention policies for embeddings/storage.

Section status
- This section provides a vendor-traceable component taxonomy and an auditable compact mapping table. Remaining work: validate representative workload examples in Section 05. If Section 05's worked examples confirm these mappings, mark this section final. For now the section contains sourced vendor lines and explicit implications.

05 Detailed cost breakdowns for each top platform

Purpose
- Provide itemized cost breakdowns for the top-five platforms with direct citations to their public pricing pages. Where public pass-through rates are missing, flag the gap and show seat-based pricing.

Method
- Use only published vendor pricing lines for component values (sources cited).
- For seat-first vendors that resell model access, show seat fees and mark the per-token mapping as a gap.
- Provide two representative worked examples (A and B) to validate typical agent workloads using published lines only. Assumptions are explicit and conservative.

Platform-by-platform (summary lines and pricing sources)

1) OpenAI (API / Agents / Codex family)
- Pricing source: https://developers.openai.com/api/docs/pricing/
- Key published lines used below (as of 2026-03-20): gpt-5.4 short-context Input $2.50 / 1M tokens; Output $15.00 / 1M tokens (short context); tool call $2.50 / 1k calls; container sessions (example 4 GB = $0.12 per 20-min session); file storage $0.10 / GB-day.

2) Anthropic (Claude platform)
- Pricing source: https://platform.claude.com/docs/en/about-claude/pricing
- Key published lines used below (as of 2026-03-20): Claude Opus example Input $5 / MTok; Output $25 / MTok; code-execution container allowance (1,550 free container hours; $0.05 / hour beyond); web search $10 / 1k.

3) Google (Gemini API)
- Pricing source: https://ai.google.dev/gemini-api/docs/pricing
- Key published lines used below (as of 2026-03-20): Gemini 3.1 Pro Input $2 / 1M tokens; Output $12 / 1M tokens; grounding/search $14 / 1k queries after free allowance. (Code execution is billed as model token consumption on the Gemini page.)

4) GitHub Copilot
- Pricing source: https://docs.github.com/en/copilot/get-started/plans
- Key published lines used below: Copilot Business seat $19/user/month; Copilot Enterprise $39/user/month; premium request metering $0.04 per extra premium request in some plans. Per-token pass-through (if any) is not publicly enumerated — flagged as vendor-managed resale gap.

5) Cursor (IDE-native agent)
- Pricing source: https://cursor.com/pricing
- Key published lines used below: Pro $20/mo; Teams $40/user/mo; Ultra $200/mo. Cursor advertises "usage multipliers" on higher plans rather than explicit per-token pass-through.

Representative worked examples (published lines + explicit assumptions)

Assumptions common to both examples
- Token unit: 1 MTok = 1,000,000 tokens. We compute costs by converting assumed token usage to MTok and applying published $/MTok rates.
- Tool-call unit: $/1k calls as published by vendors (OpenAI tool call $2.50 / 1k; Anthropic web-search $10 / 1k; Google grounding $14 / 1k).
- Container session: OpenAI published per-20-min session GB rates. Anthropic publishes free container allowance then $/hour beyond. Google typically folds execution into token counts.
- For seat-first vendors (Copilot, Cursor) we show seat amortization examples; we do not invent any per-token passthrough rates — those are flagged as gaps.

Example A — 30-minute interactive agentic dev session (editor + ~10 tool calls + 1 container session)
- Assumptions (explicit):
  - Model tokens consumed during session: 5,000 input tokens + 5,000 output tokens = 10,000 total tokens (0.01 MTok). We split input/output to map to differing input/output $/MTok rows when available.
  - Tool calls: 10 tool calls (web search or other external connectors)
  - Container: 1 container session approximated as one 20-minute container session; we use a 4 GB container example where the vendor lists per-20-min pricing.

Calculations (published rates)

OpenAI (source: OpenAI Pricing page)
- Input cost: 5,000 input tokens = 0.005 MTok * $2.50/MTok = $0.0125
- Output cost: 5,000 output tokens = 0.005 MTok * $15.00/MTok = $0.0750
- Token subtotal = $0.0875
- Tool calls: 10 calls * ($2.50 / 1,000) = 10/1000 * $2.50 = $0.0250
- Container (4 GB, 20-min session): $0.12 (published)
- Total OpenAI example A cost (published lines only) = $0.0875 + $0.0250 + $0.12 = $0.2325 ≈ $0.23
- Sources: https://developers.openai.com/api/docs/pricing/

Anthropic (source: Anthropic pricing page)
- Input cost: 0.005 MTok * $5.00/MTok = $0.0250
- Output cost: 0.005 MTok * $25.00/MTok = $0.1250
- Token subtotal = $0.1500
- Tool calls (web search @ $10 / 1k): 10/1000 * $10 = $0.10
- Container: Anthropic includes a large free container-hour allowance (1,550 free container hours) — a 30-minute session is within that allowance, so container cost = $0 (if within allowance). If beyond allowance, pro-rated charge = 0.5 hr * $0.05/hr = $0.025.
- Total Anthropic example A cost (within free container allowance) = $0.15 + $0.10 + $0 = $0.25
- If counting a billed container hour (conservative): $0.25 + $0.025 = $0.275
- Sources: https://platform.claude.com/docs/en/about-claude/pricing

Google Gemini (source: Gemini pricing page)
- Input cost: 0.005 MTok * $2.00/MTok = $0.01
- Output cost: 0.005 MTok * $12.00/MTok = $0.06
- Token subtotal = $0.07
- Grounding/search tool calls: 10 * ($14 / 1,000) = $0.14
- Container/runtime: not separately billed on Gemini page (execution billed via token consumption) — we use token subtotal only
- Total Google Gemini example A cost (published lines) = $0.07 + $0.14 = $0.21
- Sources: https://ai.google.dev/gemini-api/docs/pricing

GitHub Copilot (seat-first; source: GitHub Copilot plans)
- Published seat fee: $19/user/month (Copilot Business). Copilot usage is seat-first; per-token pass-through (if any) in reseller configs is not public.
- Amortization examples (published seat only):
  - If a developer uses Copilot for 20 hours/month, seat cost per hour = $19 / 20 = $0.95/hr → per 30-min session = $0.475
  - If using Copilot daily for 1 x 30-min session (≈30 sessions/month), seat cost per session = $19 / 30 = $0.63
- Premium-request metering: $0.04 per extra premium request where applicable (published line) — included only if plan triggers premium-request charges.
- Notes: We do not invent per-token pass-through rates. Treat Copilot session cost as seat amortization + any published premium-request metering.
- Source: https://docs.github.com/en/copilot/get-started/plans

Cursor (seat-first; source: Cursor pricing page)
- Published seat fees: Pro $20/mo; Teams $40/user/mo; Ultra $200/mo. Cursor advertises usage multipliers rather than explicit per-token pass-through rates.
- Amortization examples (published seat only):
  - Pro $20/mo → if 20 hours/month usage, $20/20 = $1.00/hr → 30-min session = $0.50
  - Teams $40/user/mo → 30-min session ≈ $0.67 if 30 sessions/mo
- Notes: Per-token mapping is a vendor-managed resale gap; we present seat amortization only.
- Source: https://cursor.com/pricing

Key takeaways from Example A
- For purely token-metered vendors (OpenAI, Anthropic, Google), a 30-minute interactive session of the assumed scale is materially sub-dollar (OpenAI ~$0.23; Anthropic ~$0.25 within free container allowance; Google ~$0.21) using published lines — container and tool-call choices dominate the marginal cost.
- Seat-first vendors (Copilot, Cursor) convert cost into a per-seat recurring charge; per-session marginal cost is mostly an amortized seat cost plus any published metering (premium requests). Pass-through token rates are not publicly listed and are flagged as a gap for per-session marginal costing.

Example B — 6-hour long-horizon agent run (heavy container execution + ~200k tokens + multiple web searches)
- Assumptions (explicit):
  - Model tokens: 100k input tokens + 100k output tokens = 200,000 total tokens (0.2 MTok)
  - Tool calls (web searches / grounded queries): 200 calls
  - Container: 6 hours of container runtime (if vendor bills containers by time) or token-billed runtime where vendor does not bill containers separately

Calculations (published rates)

OpenAI (published lines)
- Input cost: 0.1 MTok * $2.50/MTok = $0.25
- Output cost: 0.1 MTok * $15.00/MTok = $1.50
- Token subtotal = $1.75
- Tool calls: 200 * ($2.50 / 1,000) = 200/1000 * $2.50 = $0.50
- Container (4 GB example): per 20-min session $0.12 → per hour = $0.36 → 6 hours = $2.16 (published scaling)
- Total OpenAI example B cost = $1.75 + $0.50 + $2.16 = $4.41
- Source: https://developers.openai.com/api/docs/pricing/

Anthropic (published lines)
- Input cost: 0.1 MTok * $5.00/MTok = $0.50
- Output cost: 0.1 MTok * $25.00/MTok = $2.50
- Token subtotal = $3.00
- Tool calls (web search @ $10 / 1k): 200/1000 * $10 = $2.00
- Container (Anthropic): if within free container allowance (1,550 hours free) → container cost = $0; otherwise 6 hr * $0.05 = $0.30
- Total Anthropic example B (within free allowance) = $3.00 + $2.00 + $0 = $5.00
- If billed for container hours: $5.30
- Source: https://platform.claude.com/docs/en/about-claude/pricing

Google Gemini (published lines)
- Input cost: 0.1 MTok * $2.00/MTok = $0.20
- Output cost: 0.1 MTok * $12.00/MTok = $1.20
- Token subtotal = $1.40
- Grounding/search calls: 200 * ($14 / 1,000) = $2.80
- Container/runtime: Gemini page bills code execution as token consumption — no separate container charge on public page; include token subtotal only
- Total Google Gemini example B = $1.40 + $2.80 = $4.20
- Source: https://ai.google.dev/gemini-api/docs/pricing

GitHub Copilot (seat-first)
- Seat cost: $19/user/mo (Business). For a long-horizon 6-hour run, the incremental cost from a seat perspective is the amortized seat (see Example A amortization), plus any premium-request metering if applicable.
- Published premium request price: $0.04 per extra premium request where applicable.
- We do not invent per-token pass-through rates; if enterprise reseller arrangements apply, the vendor would supply those numbers.
- Source: https://docs.github.com/en/copilot/get-started/plans

Cursor (seat-first)
- Seat cost: Teams $40/user/mo or Pro $20/mo. Long-horizon runs are covered by seat allowances; per-token pass-through is not public.
- Source: https://cursor.com/pricing

Compact comparison table (worked examples)

| Platform | Example A — 30min session (published-lines) | Example B — 6hr run (published-lines) | Pricing source |
|---|---:|---:|---|
| OpenAI | $0.23 | $4.41 | https://developers.openai.com/api/docs/pricing/ |
| Anthropic (Claude) | $0.25 (within free container allowance) | $5.00 (within free container allowance) | https://platform.claude.com/docs/en/about-claude/pricing |
| Google (Gemini) | $0.21 | $4.20 | https://ai.google.dev/gemini-api/docs/pricing |
| GitHub Copilot (seat-first) | $0.48–$0.63 (seat amortized examples) | seat amortized + possible metering | https://docs.github.com/en/copilot/get-started/plans |
| Cursor (seat-first) | $0.50–$0.67 (seat amortized examples) | seat amortized | https://cursor.com/pricing |

Notes on the table and methodology
- All numeric totals above are computed from published vendor pricing lines cited in the Pricing source column and the explicit assumptions in the representative examples. We did not infer or invent any per-token passthrough rates for seat-first vendors (Copilot, Cursor); those are marked as gaps.
- Where vendors publish free allowances (Anthropic container-hours), we prefer the within-allowance result and show a conservative ‘if-billed’ alternative in the worked-example text.
- Grounding/search calls and other tool charges can dominate on workflows with many external queries; those rows are included explicitly in calculations rather than hidden inside model token costs whenever the vendor publishes separate tool lines (e.g., Google grounding $14/1k; Anthropic web search $10/1k; OpenAI tool call $2.50/1k).

Gaps, uncertainties, and enterprise considerations
- Seat-first vendors: Copilot and Cursor make it difficult to compute marginal per-token costs for heavy agentic workloads because public pages emphasize seat fees and usage multipliers rather than per-token pass-through. Marked as "vendor-managed resale — gap."
- Enterprise deals and negotiated discounts: public list prices can be materially different from enterprise rate cards; for procurement-grade forecasts, contact vendor sales for committed-usage pricing.
- Hidden infra & networking: cloud provider network egress, storage IO, and third-party integrations can add to enterprise bills; these are outside vendor model pricing tables and should be modeled separately when procurement-grade accuracy is required.

Conclusions and implications for where cost reductions matter
- For token-metered platforms (OpenAI, Anthropic, Google), marginal cost per interactive session is low (sub-dollar) at the scale modeled; main levers to lower operating cost are: (a) reducing expensive model output tokens via prompt engineering or shorter outputs; (b) reducing grounding/tool calls; (c) reducing container memory/CPU profiles or session duration.
- Grounding/search and tool-call pricing can dominate for workflows that make many external queries — optimizing cache usage, batching, and local embeddings reduces these variable costs.
- Seat-first platforms shift economic risk from per-call variable costs to fixed recurring costs; for high-frequency heavy workloads, seat-first arrangements can become more expensive unless vendor-managed resale provides favorable per-token pass-through in enterprise contracts.

Sources (direct vendor pricing pages)
- OpenAI — Pricing: https://developers.openai.com/api/docs/pricing/
- Anthropic — Claude pricing: https://platform.claude.com/docs/en/about-claude/pricing
- Google — Gemini API pricing: https://ai.google.dev/gemini-api/docs/pricing
- GitHub Copilot plans: https://docs.github.com/en/copilot/get-started/plans
- Cursor pricing: https://cursor.com/pricing

Next steps
- If procurement-grade forecasts are needed, request enterprise rate cards from vendors for pooled usage and ask seat-first vendors for pass-through mapping or usage-to-token multipliers.
- Use these worked examples as inputs to Section 06 (Where the next breakthroughs will come from) to map which technical innovations yield the biggest cost/utility improvements.

(Section updated: 2026-03-20 — contains worked examples A and B computed from published pricing lines; gaps and enterprise-only items flagged.)

06 Where the next breakthroughs will come from

Purpose
- Synthesize technical constraints, cost drivers, and market dynamics to identify the top-five breakthrough areas for agentic coding and explain why each matters.

Executive summary
- We identify five high-leverage breakthrough opportunities where technical work, product innovation, or economic re-pricing could unlock materially broader adoption: (1) marginal-cost reduction for tool calls and container sessions; (2) lightweight standardized agent communication protocols; (3) on-device / hybrid model execution for interactive coding; (4) predictable seat+runtime bundles; (5) agent safety primitives and verifiable sandboxing. Each entry below ties the opportunity to concrete vendor evidence and named lead actors where possible.

Breakthrough 1 — Marginal-cost reduction for tool calls and container sessions
- Why this matters: Agentic coding workflows are dominated by high-frequency primitive operations (tool calls, short-lived container sessions, web searches). Public pricing shows these are separately billable and can dominate costs for always-on or long-running agents. Lowering per-call/session marginal cost directly reduces the operating expense of continuous or high-volume agent deployments.
- Concrete evidence (public pricing): OpenAI documents separate "tool call" and container session charges (see OpenAI API pricing: https://developers.openai.com/api/docs/pricing/). Anthropic's pricing lists free container hours and incremental container-hour charges (https://platform.claude.com/docs/en/about-claude/pricing). Google Gemini pricing emphasizes token-based billing but explicitly calls out that agent costs aggregate model token consumption plus tool use (https://ai.google.dev/gemini-api/docs/pricing).
- Implications and product bets: Vendors or startups that provide batching, local caching, or lower-cost micro-runtimes for tool execution (e.g., pooled container sessions, reserve-priced micro-sessions, or cheap local sandboxes) could reduce TCO for continuous agents by orders of magnitude on high-call workloads.
- Lead actors: OpenAI, Anthropic, Google (Vertex/Gemini), and infrastructure startups that manage ephemeral containers.

Breakthrough 2 — Standardized, low-overhead agent communication protocols
- Why this matters: Today, each vendor supplies SDKs/SDK-like conventions for tool calls, provenance, and orchestration; the lack of an interoperable, minimal protocol raises integration and rework costs and discourages composability between agents and third-party tools.
- Concrete evidence: Anthropic's agent-orchestration and MCP commentary in the selected example (Anthropic 2026 Agentic Coding Trends Report) recommends clearer orchestration and provenance patterns. Vendor docs show divergent models for tool-call metadata and telemetry (see Anthropic report and vendor SDK pages; selected example: https://resources.anthropic.com/hubfs/2026%20Agentic%20Coding%20Trends%20Report.pdf).
- Implications and product bets: A lightweight standard (message envelope, provenance headers, cost-estimate hinting) that is easy to adopt could unlock multi-vendor pipelines and commoditize some orchestration value — analogous to how OpenAPI standardized HTTP API contracts.
- Lead actors: Standards-focused consortia, large vendors (OpenAI, Google, Anthropic) cooperating on minimal interoperability, and middleware startups.

Breakthrough 3 — On-device / hybrid model execution for interactive coding sessions
- Why this matters: Many interactive coding tasks (autocomplete, lint suggestions, small refactors) are latency-sensitive and token-cost-sensitive. Smaller, optimized local models (or hybrid pipelines that route heavy work to cloud but run common tasks locally) reduce both latency and per-session token spend.
- Concrete evidence: Vendors publish lower-cost small/flash-family model tiers (Google Gemini Flash/Flash-Lite pricing and OpenAI small-model rows; see Google Gemini pricing: https://ai.google.dev/gemini-api/docs/pricing and OpenAI: https://developers.openai.com/api/docs/pricing/). Cursor and GitHub Copilot seat-first offerings emphasize UX for editor-integrated interactions (https://cursor.com/pricing, https://docs.github.com/en/copilot/get-started/plans) — these vendors are already optimizing for interactive flows.
- Implications and product bets: Optimizing local model quantization, model-splitting (local sketch + cloud refine), or offering certified local runtimes on developer machines will reduce marginal cost and improve latency; this is especially impactful for per-seat deployments.
- Lead actors: Google, OpenAI (edge/small models), Meta/other small-model vendors, Cursor, Replit/Cursor-like IDEs.

Breakthrough 4 — Predictable, usage-aligned seat + runtime bundles for teams
- Why this matters: Enterprise buyers prefer predictable billing. Seat-based pricing (GitHub Copilot, Cursor) is simple for procurement but can obscure backend variable costs; transparent bundles that include predictable token/runtime allowances reduce procurement frictions and enable predictable unit economics for buyers.
- Concrete evidence: GitHub Copilot public seat prices and premium request metering (https://docs.github.com/en/copilot/get-started/plans); Cursor's team pricing and usage-multiplier language (https://cursor.com/pricing) show seat-first models with opaque backend pass-throughs.
- Implications and product bets: Bundles that combine seats, guaranteed usage envelopes, and optional overage pricing will capture enterprises who demand predictable TCO; vendors who can offer true all-in pricing will gain procurement advantage.
- Lead actors: GitHub, Cursor, enterprise packaging teams at major cloud vendors.

Breakthrough 5 — Agent safety primitives and verifiable tool sandboxing at scale
- Why this matters: Safety and data-exfiltration risks are primary adoption blockers for regulated organizations. Demonstrable, auditable sandboxing, provenance logs, and verifiable policy enforcement reduce risk and unlock regulated verticals.
- Concrete evidence: Anthropic's report contains a risks and governance section emphasizing safety as a gating factor for adoption (https://resources.anthropic.com/hubfs/2026%20Agentic%20Coding%20Trends%20Report.pdf). Vendor safety docs and enterprise guidance (Anthropic, OpenAI safety notes) emphasize runtime controls, and Deloitte/industry analyses highlight governance requirements for AI adoption in enterprises.
- Implications and product bets: Invest in verifiable sandboxes, signed provenance chains for tool calls, and integrated policy engines (data-exfiltration detection, allowlists, and runtime taint-tracking). Vendors that ship auditable primitives will be first to enter regulated accounts.
- Lead actors: Anthropic, OpenAI, specialized security tooling vendors, and cloud providers offering certified runtime enclaves.

Breakthrough candidates table
- Purpose: provide a compact at-a-glance comparison (candidate, primary constraint, expected impact, feasibility, lead actors, evidence sources).

| Candidate | Primary constraint addressed | Expected impact | Feasibility (near/mid/long) | Lead actors | Evidence source(s) |
|---|---|---:|---:|---|---|
| Marginal-cost reduction (tool calls / containers) | Recurrent per-call/session cost that scales with agent frequency | Lowers TCO for continuous/always-on agents; enables cheaper background agents | near–mid | OpenAI, Anthropic, Google, container infra startups | https://developers.openai.com/api/docs/pricing/, https://platform.claude.com/docs/en/about-claude/pricing, https://ai.google.dev/gemini-api/docs/pricing |
| Standardized agent communication protocols | High integration/duplication cost across vendor SDKs | Accelerates composability and multi-vendor pipelines; lowers integration cost | mid | Standards groups, OpenAI, Anthropic, Google, middleware startups | Anthropic report (https://resources.anthropic.com/hubfs/2026%20Agentic%20Coding%20Trends%20Report.pdf) |
| On-device / hybrid execution | Token cost and latency for interactive tasks | Reduces per-session token spend and latency; improves UX for per-seat deployments | near–mid | Google, OpenAI (edge/small models), Cursor, Replit | https://ai.google.dev/gemini-api/docs/pricing, https://developers.openai.com/api/docs/pricing/, https://cursor.com/pricing |
| Predictable seat+runtime bundles | Procurement friction from opaque backend variable costs | Increases enterprise adoption by making TCO predictable | near | GitHub, Cursor, enterprise divisions of major vendors | https://docs.github.com/en/copilot/get-started/plans, https://cursor.com/pricing |
| Safety primitives & verifiable sandboxing | Data exfiltration, unsafe code execution, regulatory risk | Unlocks regulated verticals and large enterprises | mid–long | Anthropic, OpenAI, cloud security vendors | Anthropic report (https://resources.anthropic.com/hubfs/2026%20Agentic%20Coding%20Trends%20Report.pdf), vendor safety docs |

Next steps and evidence gaps
- Populate representative worked examples that quantify impact for two canonical workloads (already-planned Section 05 worked examples): (A) 30-minute interactive session (editor + ~10 tool calls + 1 container session), (B) 6-hour agent run (heavy container execution + ~200k tokens + multiple web searches). Use only published pricing lines when computing totals; where seat-first vendors resell model calls, show the seat+"vendor-managed resale" gap rather than inventing pass-through rates.
- Evidence gaps to resolve: exact pass-through token rates for seat-first vendors (Cursor, GitHub reseller configurations), enterprise-negotiated discounts and pooled usage rate cards.

Sources (key)
- OpenAI API pricing: https://developers.openai.com/api/docs/pricing/
- Anthropic Claude platform pricing: https://platform.claude.com/docs/en/about-claude/pricing
- Google Gemini API pricing: https://ai.google.dev/gemini-api/docs/pricing
- GitHub Copilot plans: https://docs.github.com/en/copilot/get-started/plans
- Cursor pricing: https://cursor.com/pricing
- Anthropic Agentic Coding Trends Report (selected example): https://resources.anthropic.com/hubfs/2026%20Agentic%20Coding%20Trends%20Report.pdf

Section status: draft -> done (contains evidence-linked analysis and a sourced comparison table).

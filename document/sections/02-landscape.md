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




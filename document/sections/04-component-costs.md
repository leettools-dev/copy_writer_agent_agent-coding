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

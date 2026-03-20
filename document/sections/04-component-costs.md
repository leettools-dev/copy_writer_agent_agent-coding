04 Important components and per-component cost taxonomy

Purpose
- Define the cost components buyers pay for in agentic coding products and standardize units so platform comparisons are consistent.

Overview and approach
- This section standardizes a compact component taxonomy that maps directly to vendor pricing lines (sources listed below). For each component we show the canonical billing unit, one or more vendor example lines (public pricing), and short implications for buyers.
- We prefer a single auditable vendor example per component rather than vendor averages so every numeric row can be traced to a public pricing page.

Core components (definitions, canonical unit, vendor examples, and buyer implication)

1) Model tokens (prompt input, cached input, response output)
- Unit: $ per 1M tokens (normalize vendor lines to $/1M when necessary)
- Vendor examples (public):
  - OpenAI (gpt-5.4, standard short-context): input $2.50 / 1M, cached input $0.25 / 1M, output $15.00 / 1M. (OpenAI pricing)
  - Anthropic (Claude Opus 4.6): input $5 / MTok; output $25 / MTok; prompt-caching multipliers and long-context tiers apply. (Anthropic pricing)
  - Google Gemini (Gemini 3.1 Pro, standard): input $2 / 1M (<=200k prompts); output $12 / 1M (<=200k). (Google Gemini pricing)
- Buyer implication: Model token costs are the dominant variable line for text-heavy agent loops. Caching, batch APIs and long-context discounts can reduce marginal cost substantially; pick model tiers that match the session latency and quality requirements.

2) Container sessions / hosted runtimes (ephemeral execution environments)
- Unit: $ per session (vendor-defined session length) or $/GB‑hour
- Vendor examples (public):
  - OpenAI: containers priced per 20‑minute session: 1 GB $0.03; 4 GB $0.12; 16 GB $0.48; 64 GB $1.92 per 20‑minute session. (OpenAI pricing)
  - Anthropic: 1,550 free container hours / org-month; $0.05 / hour beyond free allowance for code-execution containers. (Anthropic pricing)
- Buyer implication: For long-horizon CI-style agents and test runners, container runtime and allocated RAM/GPU time quickly eclipse token spend. Optimize by sharing containers, reducing idle session time, and batching execution.

3) Tool calls / external connectors (web search, function calls, grounding, DB queries)
- Unit: $ per 1k calls or $ per 1k grounded queries (vendor-specific)
- Vendor examples (public):
  - OpenAI: tool call $2.50 / 1k calls; web search tool lines exist that pair token billing with per-call charges. (OpenAI pricing)
  - Anthropic: web search $10 / 1k searches; web fetch has no additional server-side charge beyond tokens. (Anthropic pricing)
  - Google: grounding/search 5,000 free prompts/month then $14 / 1,000 search queries (Gemini 3 models). (Google pricing)
- Buyer implication: Agents that make frequent tool calls (browser automation, multi-search grounding) can incur large marginal costs. Architect tool-call batching, local caches, and index-anchored retrieval to reduce per-call volume.

4) Seats / user licenses (IDE-integrated agents and enterprise seat management)
- Unit: $ per user / month (or per granted seat)
- Vendor examples (public):
  - GitHub Copilot: Copilot Business $19 / user / month; Copilot Enterprise $39 / user / month. Premium-request metering: additional premium requests purchasable at $0.04/request. (GitHub Copilot plans)
  - Cursor: Pro $20/mo; Pro+ $60/mo (3x usage multiplier); Ultra $200/mo (20x usage multiplier); Teams $40/user/mo; Enterprise custom. (Cursor pricing)
- Buyer implication: Seat-first vendors trade predictable ARR for opacity around pass-through token rates. For moderate per-user usage, seats dominate TCO; for heavy automated agents, token and container costs may dominate despite seat fees.

5) Storage / file-search and embeddings storage
- Unit: $ per GB‑day or $ per GB‑month; embeddings often billed per 1M tokens or per 1k vectors depending on vendor
- Vendor examples (public):
  - OpenAI: file storage $0.10 / GB per day (1 GB free). (OpenAI pricing)
  - Google Gemini: embeddings text input price $0.15 / 1M tokens (Gemini embedding rows). (Google pricing)
- Buyer implication: Large codebases and long retrieval histories cause embedding storage and file search charges to scale. Use sparse retrieval, selective retention, and embed-only key artifacts to control costs.

6) Priority / realtime tiers and reserved capacity
- Unit: percentage uplift on base per-token or flat reservation fees / reserved throughput
- Vendor examples (public):
  - OpenAI: priority/"priority" model tiers and regional processing uplifts are listed (priority tiers have higher per‑1M rates). (OpenAI pricing)
  - Anthropic: fast mode example (6x standard rates for Opus fast mode) and regional endpoint multipliers described. (Anthropic pricing)
- Buyer implication: Low-latency interactive experiences and enterprise SLAs require paid priority/reserved capacity. These are predictable uplifts but can double-to‑multiply effective per-token costs depending on required SLA.

Component-to-vendor mapping (auditable examples — source links included)

| Component | Canonical unit | Representative public figure (vendor) | Source |
|---|---:|---:|---|
| Model tokens (short context) | $ / 1M tokens | OpenAI gpt‑5.4 (short): input $2.50, cached $0.25, output $15.00 / 1M | https://developers.openai.com/api/docs/pricing/ (accessed 2026-03-20) |
| Model tokens (short context) | $ / 1M tokens | Anthropic Claude Opus 4.6: input $5 / MTok; output $25 / MTok | https://platform.claude.com/docs/en/about-claude/pricing (accessed 2026-03-20) |
| Model tokens (short context) | $ / 1M tokens | Google Gemini 3.1 Pro: input $2 / 1M; output $12 / 1M (<=200k prompt tier) | https://ai.google.dev/gemini-api/docs/pricing (Last updated 2026-03-18) |
| Container sessions / hosted runtimes | $ / 20-min session or $/GB‑hour | OpenAI containers: 1GB $0.03; 4GB $0.12; 16GB $0.48; 64GB $1.92 per 20‑min session | https://developers.openai.com/api/docs/pricing/ (accessed 2026-03-20) |
| Container sessions / hosted runtimes | $ / hour beyond free | Anthropic code-execution: 1,550 free hours; $0.05 / hour beyond | https://platform.claude.com/docs/en/about-claude/pricing (accessed 2026-03-20) |
| Tool calls / connectors | $ / 1k calls | OpenAI tool call: $2.50 / 1k calls | https://developers.openai.com/api/docs/pricing/ (accessed 2026-03-20) |
| Tool grounding / search | $ / 1k grounded queries | Google grounding (Gemini 3): $14 / 1,000 search queries after free allowance | https://ai.google.dev/gemini-api/docs/pricing (Last updated 2026-03-18) |
| Seats / user licenses | $ / user / month | GitHub Copilot Business: $19 / user / month; Enterprise $39 / user / month; premium requests $0.04/request | https://docs.github.com/en/copilot/get-started/plans (accessed 2026-03-20) |
| Seats / user licenses | $ / user / month (IDE-native) | Cursor: Pro $20/mo; Pro+ $60/mo (3x usage); Ultra $200/mo (20x usage); Teams $40/user/mo | https://cursor.com/pricing (accessed 2026-03-20) |
| Storage / file search | $ / GB‑day | OpenAI file storage: $0.10 / GB per day (1 GB free) | https://developers.openai.com/api/docs/pricing/ (accessed 2026-03-20) |

Notes on the table and remaining public-data gaps
- Each numeric example maps to a single vendor pricing row so readers can audit the source. Source URLs and access dates are recorded above and in Research Notes.
- Gaps: seat-first vendors (Cursor, GitHub Copilot in some enterprise configurations) do not publish pass-through per-token rates; we do not invent these pass-through figures. We label those rows "vendor-managed resale — gap" and show worked examples in Section 05 that combine seat fees with conservative token/container assumptions.
- Enterprise-negotiated discounts and committed-use contracts are out of scope for public costing. Flagged as enterprise-only gaps.

Short analysis: which components drive costs in typical agentic workflows
- Short interactive session (editor-driven, 30 minutes): seat + small token spend + occasional tool calls. For IDE-native products (Cursor, Copilot) seat fees dominate at low per-user usage.
- Long-horizon run (6+ hours, CI/test runner): container session time + model tokens dominate; tool calls (search/grounding) add linearly and can become material if agents perform many groundings.
- High-volume retrieval (large codebase): embeddings storage + retrieval token costs grow with corpus size; embed sparing and selective retention are primary mitigations.
- Low-latency production (SLAs): priority/reserved capacity uplifts multiply base per-token and container charges; account for SLA uplift in TCO.

Implications for buyers and product teams
- Cost levers to optimize: prompt caching, batch APIs for non-interactive work, tool-call batching and local caching, container-session sharing and shorter timeouts, and embedding-retention policies.
- Commercial design tradeoffs: seat-first models improve cost predictability and go-to-market but often obscure underlying per-token economics; usage-pass-through models give price transparency but produce variable monthly bills. Mid-market buyers should model both approaches.

Table decision and next steps
- Table purpose: a compact, auditable mapping from component categories to canonical public vendor figures that feeds Section 05 worked examples.
- Candidate data sources: official vendor pricing pages (OpenAI, Anthropic, Google, GitHub, Cursor). All cited rows above come from those pages and are replicated in Research Notes.
- Next step: run Section 05 worked examples using only the public figures above to validate the taxonomy and surface seat-first vendor gaps (two representative workloads: 30-min interactive session; 6-hour long-horizon run).

Sources (public pricing pages cited above)
- OpenAI pricing: https://developers.openai.com/api/docs/pricing/ (accessed 2026-03-20)
- Anthropic (Claude) pricing: https://platform.claude.com/docs/en/about-claude/pricing (accessed 2026-03-20)
- Google Gemini pricing: https://ai.google.dev/gemini-api/docs/pricing (last updated 2026-03-18)
- GitHub Copilot plans: https://docs.github.com/en/copilot/get-started/plans (accessed 2026-03-20)
- Cursor pricing: https://cursor.com/pricing (accessed 2026-03-20)

Status
- This section has been upgraded from draft to evidence-backed draft with auditable vendor lines and a clear next step (Section 05 worked examples). Marking for final validation after Section 05 confirms representative totals and clarifies seat-resale gaps.

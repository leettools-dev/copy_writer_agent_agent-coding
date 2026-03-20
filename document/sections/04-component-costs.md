04 Important components and per-component cost taxonomy

Purpose
- Define the cost components buyers pay for in agentic coding products and standardize units so platform comparisons are consistent.

Overview and approach
- This section standardizes a compact component taxonomy that maps directly to vendor pricing lines (sources listed). For each component we show the canonical billing unit, one or more vendor example lines (public pricing), and short implications for buyers.
- Where vendors do not publish a pass-through per-token price (seat-first resellers), we record the seat fee and label the per-token mapping as a vendor-managed gap.

Core components (definitions, canonical unit, and buyer implication)

1) Model tokens (prompt input, response output, cached input)
- Unit: $ per 1M tokens (or per 1k tokens, normalized to $/1M for comparison)
- Buyer implication: Primary variable cost for any text-heavy agentic workflow (code generation, long-context retrieval, chat). Caching strategies and batch APIs materially reduce marginal token cost for long-running agents.

2) Container sessions / hosted runtimes (ephemeral execution environments)
- Unit: $ per container-session or $ per 20-min session per RAM size (or $/GB-hour)
- Buyer implication: Dominant cost for workloads that execute compiled code, run tests, or produce binary artifacts. Containers also map to billing for allocated RAM and GPU time in enterprise clouds.

3) Tool calls / external connectors (web search, function calls, embeddings lookup, DB queries)
- Unit: $ per 1k calls or $ per 1k search queries (varies by vendor)
- Buyer implication: Agents that frequently call tools (browsers, search, fetch, DB) can incur large per-call costs; architecting tool-call batching and local caching is a primary optimization.

4) Seats / user licenses (IDE-integrated agents, per-seat access)
- Unit: $ per user / month
- Buyer implication: Predictable fixed cost; often the primary commercial line for IDE-first vendors that resell model usage under the seat.

5) Storage / file-search and embeddings storage
- Unit: $ per GB-month or $ per GB-day; embeddings sometimes billed per 1M tokens or per 1k vectors
- Buyer implication: Material for large codebases, long-term retrieval corpora, and enterprise audit logs; embedding storage costs scale with document volume and vector dimensionality.

6) Priority / realtime tiers and reserved capacity
- Unit: percentage uplift on base per-token or flat reservation fees
- Buyer implication: Required for low-latency interactive sessions and enterprise SLAs; these add a predictable uplift to base usage rates.

Component-to-vendor mapping (compact table of canonical examples)

| Component | Canonical unit | Example vendor line (short) | Representative figure (public) | Source |
|---|---:|---|---:|---|
| Model tokens | $/1M tokens | Anthropic (Claude Opus 4.6): input/output per-MTok rows | Input $5 / MTok; Output $25 / MTok | https://platform.claude.com/docs/en/about-claude/pricing |
| Model tokens | $/1M tokens | Google Gemini (Gemini 3.1 Pro example) | Input $2 / 1M; Output $12 / 1M | https://ai.google.dev/gemini-api/docs/pricing |
| Model tokens | $/1M tokens | OpenAI (models vary; see model table) | (model-specific rates — see vendor page) | https://developers.openai.com/api/docs/pricing/ |
| Container sessions / hosted runtimes | $/20-min session per RAM size | OpenAI containers: per 20-min session by RAM | 1 GB $0.03 / 20-min; 4 GB $0.12 / 20-min; 16 GB $0.48 / 20-min | https://developers.openai.com/api/docs/pricing/ |
| Container sessions / hosted runtimes | $/hour beyond free allowance | Anthropic code-execution: free container hours; $0.05 / hour beyond free | $0.05 / hour (beyond free allowance) | https://platform.claude.com/docs/en/about-claude/pricing |
| Tool calls / external connectors | $/1k calls | OpenAI tool call pricing (example) | $2.50 / 1k calls | https://developers.openai.com/api/docs/pricing/ |
| Tool calls / external connectors | $/1k queries | Google grounding/search after free allowance | $14 / 1k search queries | https://ai.google.dev/gemini-api/docs/pricing |
| Seats / user licenses | $/user/month | GitHub Copilot (public plans) | Copilot Business $19 / user / mo (other tiers higher) | https://docs.github.com/en/copilot/get-started/plans |
| Seats / user licenses | $/user/month | Cursor (IDE-native) | Pro $20/mo; Teams $40/user/mo; Ultra $200/mo | https://cursor.com/pricing |
| Storage / embeddings storage | $/GB-day or $/1M tokens | OpenAI file storage example | File storage $0.10 / GB-day (example line) | https://developers.openai.com/api/docs/pricing/ |
| Priority / realtime tiers | uplift or reservation | Vendor-specific priority tiers (see vendor pages) | varies by vendor / plan — see vendor page | OpenAI / Anthropic / Google pricing pages |

Notes on the table and gaps
- The table deliberately pairs each component with a single clean vendor example rather than averaging across vendors. This keeps the taxonomy auditable and ensures each numeric row is traceable to a public pricing page.
- Gaps: Seat-first vendors (Cursor, GitHub Copilot in some enterprise configs) typically do not publish pass-through per-token rates when they resell model calls. We present the seat fee and mark the per-token mapping as a vendor-managed resale gap. Enterprise-negotiated discounts and committed-use contracts are out of scope for public costing and will be flagged as "enterprise-only gaps." See Research Notes for detail.

Short analysis: which components drive costs in agentic workflows
- Short interactive sessions (editor-driven): seats + small token volumes + occasional tool calls. Seats dominate for IDE-first products (Cursor, Copilot) when usage per-user is modest.
- Long-horizon agents (CI pipelines, nightly agents, test runners): container sessions and model tokens dominate; tool calls (search, retrieval) add up if agents perform frequent grounding.
- High-volume retrieval/LLM-assisted search over large codebases: storage (embeddings) + token costs for retrieval and re-ranking become critical.
- Low-latency, high-SLA environments: priority/reserved capacity uplifts and dedicated containers increase fixed monthly spend.

Implications for buyers and product teams
- Optimization levers: token caching, tool-call batching, local retrieval (hybrid embed + sparse retrieval), and container session sharing reduce marginal cost.
- Commercial design: vendors will trade off a seat-first model (predictable ARR) versus pass-through usage (variable revenue but better price transparency). Buyers should model both when evaluating total cost of ownership.

Next steps (execution plan tied to Section 05)
- Use the exact public pricing lines cited above to produce two worked examples in Section 05: (A) 30-minute interactive agentic dev session and (B) 6-hour long-horizon agent run. Those worked examples will validate that the taxonomy maps to real totals and will expose seat-first vendor gaps that cannot be filled from public pages.
- Update Research Notes with any additional vendor rows discovered during the Section 05 calculation work.

Sources (public pricing pages cited in the table)
- OpenAI pricing: https://developers.openai.com/api/docs/pricing/
- Anthropic (Claude) pricing: https://platform.claude.com/docs/en/about-claude/pricing
- Google Gemini pricing: https://ai.google.dev/gemini-api/docs/pricing
- GitHub Copilot plans: https://docs.github.com/en/copilot/get-started/plans
- Cursor pricing: https://cursor.com/pricing

Status
- Draft -> upgraded: this section includes a sourced component table and explicit next steps. Marking ready for final validation after Section 05 worked examples confirm the taxonomy against real totals.

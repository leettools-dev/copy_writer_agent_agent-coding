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

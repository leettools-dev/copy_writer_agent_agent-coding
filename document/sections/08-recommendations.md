08 Recommendations for product teams and investors

Purpose
- Provide prioritized, actionable experiments, KPIs, and investor signals based on the analysis in Sections 02–06. Each recommendation ties to observable evidence (vendor pricing pages, Anthropic selected example, NIST/Deloitte governance guidance) and includes explicit pilot-cost drivers using published pricing lines from Section 05.

Executive summary (top 6 recommendations)
1) Prioritize marginal-cost reduction experiments (tool-call batching, cached grounding, pooled micro-containers).
2) Invest in a minimal agent communication envelope (provenance + cost-hint headers) and begin interoperable middleware prototypes.
3) Ship a hybrid on-device + cloud execution flow for interactive coding (local small model + cloud refine) targeted at per-seat UX gains.
4) Offer predictable seat+runtime bundles with measurable usage envelopes to reduce procurement friction for enterprise customers.
5) Build verifiable safety primitives (sandboxing, signed provenance chains, runtime policy engines) as enterprise gating features.
6) Track investor signals that predict vendor defensibility: seat retention + overage rates, enterprise ARR from packaged bundles, and evidence of safety primitive adoption (certifications, audited provenance exports).

Detailed, prioritized experiments (why, how, KPI, pilot-cost drivers)
- Experiment A — "Batch-and-cache tool calls"
  - Why: Tool calls and grounding are recurring costs that dominate marginal cost for many agentic workflows (Sections 04–06). Batching and caching can reduce per-session tool charges.
  - How: Implement a local cache for grounding/embeddings and a batching layer that coalesces frequent identical queries. Measure cache hit rate, batching efficiency, and reduction in third‑party tool calls.
  - KPI: % reduction in tool-call spend per agent (target: 40%+ cache+batch hit for common developer queries), latency impact (p99 latency change), developer satisfaction (qualitative).
  - Pilot cost drivers: per-session marginal costs (token + tool-call + container). Use Example A per-session published costs as lower-bound baseline (OpenAI example A ≈ $0.23; Anthropic ≈ $0.25; Google ≈ $0.21 — Section 05). Pilot cost ≈ baseline per-session cost × sessions + infra for the batching layer (engineering hours).
  - Pilot estimate (illustrative, published inputs): 5 devs, 2 sessions/dev/workday, 22 workdays/month → ~220 sessions/month. At OpenAI Example A cost ($0.23/session) → $50.6/month in API marginal spends. Engineering effort to deliver caching+batching MVP: 2–4 engineer-weeks.
  - Evidence sources: OpenAI pricing, Anthropic pricing, Google Gemini pricing (Section 05 sources).

- Experiment B — "Pooled micro-container sessions"
  - Why: Short-lived containers drive per-session infra costs; pooling reduces per-session memory/boot overhead and amortizes resource costs.
  - How: Run a pooled pool of warm micro-containers (4GB) with fast re-assignment, instrument container utilization, and measure per-minute cost vs cold-start sessions.
  - KPI: Container cost per active session (target: 30–60% reduction vs naive per-session allocation), session availability, and isolation metrics.
  - Pilot cost drivers: published container pricing lines (OpenAI per 20-min container, Anthropic free container-hours allowance then $/hour beyond). Use Anthropic free-hour allowance strategically for trial customers where available.
  - Pilot estimate: For 5 devs with the same session assumptions above, published per-session container lines (OpenAI 4GB 20-min ~$0.12) imply monthly container cost ~220 * $0.12 = $26.4. Pooling could reduce that by the targeted factor.
  - Evidence sources: OpenAI container session pricing; Anthropic container allowances (Section 05).

- Experiment C — "Hybrid local model + cloud refine for interactive coding"
  - Why: On-device/hybrid execution reduces latency and token spend for routine interactive tasks and improves UX for per-seat deployments (Section 06).
  - How: Ship a lightweight local model (quantized) for autocomplete and quick suggestions; route heavier context/refinements to cloud models. Measure latency, token spend, and developer retention.
  - KPI: % of interactions handled locally (target 50%+ for common completions), end-to-end p95 latency, and marginal token spend reduction per seat-month.
  - Pilot cost drivers: engineering and packaging effort; small-model licensing (if applicable); cloud refine token spend (use Example A/B published token rates to model cloud spend). Seat costs for seat-first vendors (Copilot, Cursor) may already include similar UX gains.
  - Pilot estimate: For a 3-month pilot with 10 developer seats, main publishable cost components are cloud token spends for routed interactions (use Example A/B numbers from Section 05) plus engineering weeks and any edge-license fees.
  - Evidence sources: Google Gemini / OpenAI small-model pricing rows; Cursor and Copilot product positioning (Section 06 and pricing sources).

- Experiment D — "Predictable seat+runtime bundles (procurement pilot)"
  - Why: Enterprises demand predictable TCO; offering guaranteed envelopes reduces procurement friction and accelerates trials to paid adoption.
  - How: Create a 3-month pilot bundle that combines N seats + M token/runtime allowance + X container hours; instrument overage behavior and churn.
  - KPI: Conversion rate from pilot → paid, average overage rate, net-dollar retention after 6–12 months.
  - Pilot cost drivers: seat fees (Copilot $19/mo; Cursor $20–40/mo published), baseline token/runtime usage (modeled from Example A/B) and customer success tooling.
  - Pilot estimate (published inputs): 5-seat, 3-month bundle on Copilot-like seat pricing: seats = 5 * $19 * 3 = $285; add estimated cloud token envelope using Example A sessions to size the included allowance.
  - Evidence sources: GitHub Copilot plans, Cursor pricing, Section 05 worked examples.

- Experiment E — "Verifiable safety primitives and audit trail pilot"
  - Why: Safety and provenance are primary gating factors for regulated customers. Demonstrable primitives unlock procurement in regulated verticals.
  - How: Instrument agent-run tool calls with signed provenance headers, immutable logs, and a policy engine enforcing allowlists and taint-tracking. Run a short pilot with a regulated engineering team or partner and capture time-to-detect and false-positive rates.
  - KPI: Time-to-detect potential exfiltration, number of blocked unsafe tool calls, audit completeness (% of calls with cryptographic provenance), and customer procurement readiness feedback.
  - Pilot cost drivers: engineering effort, additional storage for immutable logs (public vendor pricing for storage where applicable), and potential higher latency/compute for signed headers. No invented pricing; estimate storage using published storage prices if used (Section 05 references storage lines where vendors publish them).
  - Evidence sources: Anthropic report (risks), NIST AI RMF for governance structure, vendor trust centers (OpenAI, Anthropic) for controls.

Table: Recommended experiments — estimated published-cost drivers & pilot duration
| Experiment | Pilot duration | Key KPI (primary) | Published cost-driver(s) to model | Illustrative published input (source) |
|---|---:|---|---|---|
| Batch-and-cache tool calls | 3 months | % reduction in tool-call spend | Tool-call $/1k, per-session token cost | OpenAI Example A ≈ $0.23/session (tokens+tool+container) — https://developers.openai.com/api/docs/pricing/ |
| Pooled micro-containers | 3 months | Container $/active session | Container per-20-min session or $/hr | OpenAI 4GB 20-min ≈ $0.12 (Section 05) — https://developers.openai.com/api/docs/pricing/ |
| Hybrid local+cloud model | 3 months | % interactions handled locally | Cloud token $/MTok; seat licensing | Google/OpenAI small-model rows — https://ai.google.dev/gemini-api/docs/pricing, https://developers.openai.com/api/docs/pricing/ |
| Seat+runtime bundle pilot | 3 months | Pilot→paid conversion | Seat $/user/mo; token/runtime envelopes | GitHub Copilot $19/user/mo — https://docs.github.com/en/copilot/get-started/plans |
| Safety primitives & provenance | 3 months | Audit completeness; time-to-detect | Storage $/GB-day; engineering effort | Vendor trust docs; NIST AI RMF; Anthropic trust center |

Notes on pilot costing and assumptions
- We use published per-session and per-seat inputs from Section 05 as conservative baselines where applicable. For seat-first platforms, seat fees are explicit and used for amortization examples; per-token pass-throughs for seat-first vendors were not published so we treat them as a procurement gap and model pilots using seat amortization + published metering where present.
- Engineering cost estimates are intentionally descriptive (engineer-weeks) rather than dollarized because labor rates vary materially by geography and org. When procurement-grade budgeting is required, supplement these experiments with local engineering cost estimates and vendor enterprise rate cards.
- Do not invent enterprise-negotiated discounts or reseller pass-throughs; surface them as negotiation levers during pilot sales.

KPIs and metrics to track (recommended common telemetry)
- Usage: sessions per seat per day, average tokens/session, tool calls/session, container-hours used.
- Cost: $/session marginal, $/seat-month, overage rate (% of seats exceeding included allowance).
- Safety: % of calls with signed provenance, number of blocked calls, time-to-detect exfiltration events.
- Adoption: Pilot→paid conversion rate, seat retention at 90/180 days, net dollar retention.

Investor signals (what to watch for when evaluating vendor defensibility)
- Strong signals
  - Clear packaging that reduces procurement friction (published seat+runtime bundles with transparent allowances).
  - Rapid enterprise ARR growth anchored by regulated verticals where safety primitives are in demand.
  - Partnerships with infra vendors to reduce per-container/session costs (e.g., lower-cost pooled runtimes).
  - Evidence of technical leadership on on-device/hybrid execution (publishers of small-model runtimes, edge SDKs).
- Weak or risky signals
  - Heavy dependence on opaque reseller pass-through without published mapping (makes long-term TCO unpredictable).
  - No progress on provenance or audit primitives for tool calls (risking regulated verticals).

Unresolved gaps and recommended next research steps
- Request pass-through mapping from seat-first vendors (GitHub, Cursor) for procurement pilots; document responses in research_notes.md.
- Collect real-world telemetry from pilot customers to validate cache-hit, batching, and pooling effectiveness; convert observed savings into quantified TCO reductions.
- Quantify engineering effort to add signed provenance and immutable logging for tool calls, using one vendor SDK as a reference implementation.

Sources (key, published)
- OpenAI — Pricing: https://developers.openai.com/api/docs/pricing/
- Anthropic — Claude pricing & Agentic Coding Trends Report: https://platform.claude.com/docs/en/about-claude/pricing and https://resources.anthropic.com/hubfs/2026%20Agentic%20Coding%20Trends%20Report.pdf
- Google — Gemini API pricing: https://ai.google.dev/gemini-api/docs/pricing
- GitHub Copilot plans: https://docs.github.com/en/copilot/get-started/plans
- Cursor pricing: https://cursor.com/pricing
- NIST AI RMF 1.0: https://nvlpubs.nist.gov/nistpubs/ai/nist.ai.100-1.pdf

Section status: draft -> done (contains prioritized experiments, KPI suggestions, pilot-cost drivers using published pricing lines, and investor signals).
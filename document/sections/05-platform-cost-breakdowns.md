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

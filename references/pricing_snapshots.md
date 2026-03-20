# Pricing snapshots (audit trail)

Date captured: 2026-03-20

This file records the exact vendor pricing pages and the key lines we cited in Section 05 (Detailed cost breakdowns). Use this as an audit trail for procurement handoffs.

1) OpenAI — Pricing
- URL: https://developers.openai.com/api/docs/pricing/
- Date accessed: 2026-03-20
- Key lines used (quoted/paraphrased from page):
  - gpt-5.4 short-context: Input $2.50 / 1M tokens; Output $15.00 / 1M tokens
  - Tool calls: $2.50 / 1k calls
  - Container sessions example: 4 GB = $0.12 per 20-minute session
  - File storage: $0.10 / GB-day
- Notes/gaps: Regional uplifts and enterprise-committed discounts not public.

2) Anthropic (Claude) — Pricing
- URL: https://platform.claude.com/docs/en/about-claude/pricing
- Date accessed: 2026-03-20
- Key lines used:
  - Claude Opus example: Input $5 / MTok; Output $25 / MTok
  - Web search tool: $10 / 1,000 searches
  - Code-execution/container: 1,550 free container hours per organization; $0.05 / hour beyond
  - Prompt-caching multipliers and long-context tiers documented
- Notes/gaps: How free container-hours are allocated across workspaces/orgs and volume discount terms (enterprise-only).

3) Google (Gemini API) — Pricing
- URL: https://ai.google.dev/gemini-api/docs/pricing
- Date accessed: 2026-03-20
- Key lines used:
  - Gemini 3.1 Pro: Input $2 / 1M tokens; Output $12 / 1M tokens
  - Flash‑Lite (cost-efficient) examples: Input $0.25 / 1M; Output $1.50 / 1M
  - Grounding/search: 5,000 prompts/mo free, then $14 / 1,000 queries
  - Note: code execution often billed via model tokens (no separate container charge listed)
- Notes/gaps: Vertex/Cloud packaging may add network/infra costs; enterprise rate cards differ.

4) GitHub — Copilot plans & pricing
- URL: https://docs.github.com/en/copilot/get-started/plans
- Date accessed: 2026-03-20
- Key lines used:
  - Copilot Business: $19/user/month
  - Copilot Enterprise: $39/user/month
  - Premium-request metering example: $0.04 per extra premium request (where applicable)
- Notes/gaps: Per-token pass-through (resold model access) is not publicly published; flagged as vendor-managed resale gap.

5) Cursor — Pricing
- URL: https://cursor.com/pricing
- Date accessed: 2026-03-20
- Key lines used:
  - Pro: $20/mo; Teams: $40/user/mo; Ultra: $200/mo
  - Usage multipliers advertised on higher tiers (indicate higher model-use allowance rather than explicit per-token pass-through)
- Notes/gaps: Cursor does not publish explicit per-token pass-through rates; seat-based pricing is public but mapping to token consumption is opaque.

---

Outstanding public gaps (for procurement-grade forecasts):
- Seat-first vendors' per-token pass-through or usage-to-token mapping (Copilot, Cursor). Contact vendor sales for committed-usage mappings.
- Volume discounts and enterprise-negotiated rate cards (all vendors). Request committed-usage offers for procurement forecasts.
- Regional pricing uplifts and taxes.

Recommended immediate next actions (if you want me to execute):
- Create `tools/pricing_watcher.py` to fetch these pages periodically and produce a diffed snapshot report.
- Draft an email/PRD template to request pass-through mapping and enterprise rate cards from seat-first vendors.
- Build a short procurement appendix (spreadsheet) summarizing seat amortization examples and token-metered worked examples for buyers.

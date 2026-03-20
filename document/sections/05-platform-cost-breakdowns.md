05 Detailed cost breakdowns for each top platform

Purpose
- Provide componentized, source-linked pricing lines for each top-5 platform so readers can reproduce cost calculations. Where public data is missing (enterprise-only or reseller pass-through), flag the gap and avoid inventing numbers.

How to read this section
- Each vendor subsection lists: core billable components (tokens, containers, tool calls, seats, storage), the explicit public pricing lines (with source URL), and a short note on gaps or enterprise-only items. All figures below are taken directly from vendor pricing pages cited.

1) OpenAI — key public pricing lines (source: OpenAI API pricing)
- Pricing URL: https://developers.openai.com/api/docs/pricing/
- Representative per-model token rates (per 1M tokens, standard mode):
  - gpt-5.4 (short-context example): Input $2.50 / 1M tokens; Cached input $0.25 / 1M; Output $15.00 / 1M
  - gpt-5.4 (long-context list): Input $5.00 / 1M; Cached input $0.50 / 1M; Output $22.50 / 1M
- Containers (hosted sessions): example session pricing (per 20-minute session): 1 GB $0.03, 4 GB $0.12, 16 GB $0.48, 64 GB $1.92 per 20-minute session (page lists per-GB and per-session variants).
- Tool calls & built-in tools:
  - Web search tool: $10.00 / 1k calls (search content tokens billed at model rates)
  - Tool call baseline: $2.50 / 1k calls (general tool-call line)
- Storage / file search: $0.10 / GB per day (1 GB free)
- Notes & gaps: OpenAI publishes per-model, per-token, container, and tool-call lines sufficient for componentized costing. Volume/enterprise discounts and reserved pricing require sales contact and are not public.

2) Anthropic (Claude) — key public pricing lines
- Pricing URL: https://platform.claude.com/docs/en/about-claude/pricing
- Model per-MTok examples (MTok = million tokens):
  - Claude Opus 4.6 (example row): Base input $5 / MTok; Output $25 / MTok (table shows cache and long-context variants)
  - Claude Sonnet 4.6 / Sonnet family: Input ~$3 / MTok; Output ~$15 / MTok (Sonnet rows shown in pricing table)
  - Claude Haiku family: lower-cost tiers (e.g., Haiku 4.5 input $1 / MTok; output $5 / MTok in table examples)
- Prompt caching multipliers and cache economics:
  - 5-minute cache write: 1.25x base input price; 1-hour cache write: 2x base input price; cache read (hit) costs 0.1x base input price. (See prompt-caching section.)
- Tool pricing & containers:
  - Web search: $10 / 1,000 searches (search results are charged in addition to token rates for search content)
  - Code execution: first 1,550 container hours free per organization per month; additional hours billed at $0.05 per hour, per container
  - Web fetch: no additional charges beyond token billing for fetched content
- Storage / batch discounts: Batch API discounts and long-context premium rates are documented (see pricing page).
- Notes & gaps: Anthropic provides detailed component lines including prompt-caching multipliers and a generous free container-hours allowance that changes session economics. Enterprise discounts and reseller/third-party endpoint pricing (Bedrock/Vertex) vary.

3) Google — Gemini API / Vertex (key lines)
- Pricing URL: https://ai.google.dev/gemini-api/docs/pricing (Gemini) and https://cloud.google.com/vertex-ai/pricing (Vertex hosting)
- Representative per-1M-token rates (examples from Gemini page):
  - Gemini 3.1 Pro (Standard): Input ~$2 / 1M tokens (<=200k prompts), Output ~$12 / 1M tokens (<=200k)
  - Gemini 3.1 Flash-Lite (cost-efficient): Input $0.25 / 1M, Output $1.50 / 1M (standard tier example)
  - Batch pricing: roughly 50% of standard token rates when using Batch API (see page for model-by-model batch rates)
- Grounding / search / maps charges:
  - Grounding with Google Search / Maps: common published lines include $14 / 1,000 search queries (Gemini 3.1 Pro references $14 / 1k; other model families show different free allowances and $35 / 1k variants for some models) — check model table rows for the exact grounding allowance.
- Tool use / code execution: Code execution costs are charged as token-based input/output for generated/executed content; page notes tool-specific behaviors and that execution runtime itself is not separately charged in Gemini (unlike some vendors).
- Notes & gaps: Vertex enterprise packaging may move pricing onto cloud infra bills (extra infra/network fees). Grounding query charges and cache/storage rates are explicit; enterprise negotiated terms require Google Cloud sales.

4) GitHub Copilot — seat-first pricing and premium-request metering
- Pricing URL: https://docs.github.com/en/copilot/get-started/plans
- Public seat prices (examples):
  - Copilot Pro (individual): $10 / month (or $100 / year)
  - Copilot Pro+ : $39 / month
  - Copilot Business: $19 per granted seat / month
  - Copilot Enterprise: $39 per granted seat / month
- Premium requests & metering:
  - Included premium request allowances by plan (e.g., Pro includes 300/month; Pro+ includes 1500/month; business/enterprise include per-user allowances)
  - Additional premium request purchase: $0.04 per extra premium request (public doc footnote)
- Notes & gaps: Copilot seats are the dominant cost center for team rollouts; meterable premium requests add marginal cost. Organization-level indexing/enterprise hosting pass-through fees may be negotiated.

5) Cursor — seat-first with usage multipliers
- Pricing URL: https://cursor.com/pricing and https://cursor.com/docs/models-and-pricing
- Public seat lines:
  - Individual Pro: $20 / user / month
  - Pro+: $60 / user / month (recommended tier)
  - Ultra: $200 / user / month (high usage tier)
  - Teams: $40 / user / month (team plan; includes centralized billing & analytics)
- Usage multipliers / included usage:
  - Pro+ advertises 3x usage on OpenAI/Claude/Gemini models; Ultra 20x usage — these are vendor-defined multipliers applied to included allowances (see cursor docs).
- Notes & gaps: Cursor lists seat prices clearly; exact pass-through per-token costs (when Cursor resells model calls) are not disaggregated on public pages. Enterprise pooled usage and invoicing are custom.

Common caveats and data gaps
- Enterprise/reseller negotiated discounts, committed-use discounts, and reseller pass-throughs (seat vendors reselling model calls) are frequently not public and will be flagged in each vendor subsection.
- For seat-first products that resell model calls (Cursor, Copilot), we will not invent the internal pass-through per-token price; instead Section 05 will include the public seat prices and note the lack of public line-item model-call pass-through.

Next step (highest-leverage):
- Use the public per-line figures in this file to compute two representative worked examples (a short interactive agent session and a long container-run session). These worked examples will be the highest-leverage way to convert component lines into comparative economics. I will prepare those worked examples in the next iteration (Section 05 worked examples subsection) once you confirm to proceed.

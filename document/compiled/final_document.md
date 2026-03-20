# Next Breakthroughs in Agentic Coding: Technologies, Market Trends, and Costing

Section: Top five agentic-coding platforms — feature and cost overview

Purpose
- Provide the reader a concise list of the leading agentic-coding platforms, a short profile of each (what makes it agentic), and direct links to their public pricing pages so readers can verify costs. This section intentionally summarizes pricing highlights; Section 05 will contain full componentized cost breakdowns with line-by-line citations.

Top 5 platforms (shortlist rationale)
1. OpenAI (GPT / Codex family)
   - Why it matters: Market-leading generalist models with explicit "Codex"/"Codex-Codex" variants and API features for function-calling, tool use and agent orchestration; widely embedded in third-party IDEs and agent frameworks.
   - Pricing reference (official): https://developers.openai.com/api/docs/pricing/
   - Pricing highlights (public): model token pricing, Codex / agent-oriented models listed on the OpenAI pricing page (token-based input/output rates; tool/container pricing such as container GB/session and tool-call charges). See the OpenAI API pricing page for per-model per-1M-token values.

2. Anthropic (Claude / Claude Code)
   - Why it matters: Anthropic’s Claude lineup (Haiku, Sonnet, Opus) has explicit agent-support tooling (text editors, computer-use, code-execution tools) and published pricing for prompt caching, cache multipliers, code execution container hours and tool costs — making it practical to cost agent workloads.
   - Pricing reference (official): https://platform.claude.com/docs/en/about-claude/pricing
   - Pricing highlights (public): Sonnet/Opus per-MTok input/output rates, prompt-caching multipliers, web-search ($10 / 1k searches) and code-execution container billing (1,550 free hours / org; $0.05/hr beyond), plus file-search and storage lines. See the Claude pricing doc for details.

3. Google (Gemini API / Google AI Studio / Vertex AI — Antigravity mention)
   - Why it matters: Google’s Gemini family (Gemini 3 / 3.1 Pro, Flash, Flash‑Lite) is explicitly positioned for agentic and vibe-coding workflows and integrated into Google AI Studio, Vertex AI and the new Antigravity agentic development platform (product narratives emphasize editor/terminal/browser control).
   - Pricing references (official): Gemini API pricing (developer): https://ai.google.dev/gemini-api/docs/pricing and Vertex AI generative AI pricing: https://cloud.google.com/vertex-ai/generative-ai/pricing
   - Pricing highlights (public): per-1M-token pricing varies by model tier (Gemini 3.1 Pro: example Input $2/$4 per 1M tokens, Output $12/$18 per 1M depending on context size; Flash/Flash‑Lite much cheaper e.g., Flash‑Lite Input $0.25 / Output $1.50). Grounding (Search/Maps) and tool costs are listed on Gemini pages; Vertex/enterprise pricing and bundling via Vertex may differ (see Vertex page).

4. GitHub Copilot (Copilot Business / Enterprise)
   - Why it matters: Copilot is the most widely-adopted IDE-integrated developer assistant. It bundles agent features (agent mode, Copilot coding agent, Copilot CLI, code review) into seat-based licensing — making seat + metered premium-requests a common procurement model for teams adopting agentic coding.
   - Pricing references (official): Marketing & plans: https://github.com/features/copilot/plans and docs: https://docs.github.com/en/copilot/get-started/plans
   - Pricing highlights (public): Copilot Business listed at $19 per granted seat per month; Copilot Enterprise at $39 per granted seat per month. Premium-requests are metered (allowances per plan; $0.04 per additional premium request). Copilot mixes seat-subscriptions and metered premium requests for agentic features.

5. Cursor (IDE-first, teams-oriented agent platform)
   - Why it matters: Cursor is an IDE-native agent and cloud-agent platform that packages agents, Tab/Auto features, and cloud agents with clear per-seat pricing; frequently used as a practical, team-oriented agentic coding surface in enterprises and startups.
   - Pricing reference (official): https://cursor.com/pricing and docs: https://cursor.com/docs/models-and-pricing
   - Pricing highlights (public): Individual Pro $20 / month; Teams $40 / user / month (seat-based); Pro+ / Ultra tiers for heavier model usage and enterprise pooled/custom pricing. Cursor combines seat subscriptions with metered model usage.

Notes on platform selection and boundary decisions
- Selection criteria used: (1) explicit agentic features (editor/terminal/browser control, tool use), (2) market reach / number of developer integrations (IDE plugins, GitHub integrations), (3) public pricing transparency (must have a public pricing page to cite), and (4) evidence of agent-first product framing (agent SDKs, agent builders, or agentic development surfaces).
- Other notable vendors to watch (did not make top‑5 for this draft because of narrower reach or less transparent pricing): Replit (Ghostwriter), Microsoft Copilot Studio (bundled in Microsoft 365 Copilot product family), and Reforge/Smaller IDE vendors. These will be included in an "Others to watch" appendix where appropriate.

Most important components buyers pay for (component taxonomy)
- Model inference (per-token): input tokens and output tokens priced per model (per 1M tokens). Example authoritative sources: OpenAI, Gemini, Anthropic model pages.
- Tool calls / grounding: charged per call or per-search (e.g., web search calls), sometimes with separate per-call fees (OpenAI/Anthropic list tool-call or search prices; Gemini lists Grounding search pricing).
- Container / code-execution sessions: billed by session time or per-hour container price (Anthropic lists container execution free hours and per-hour rates; OpenAI lists container pricing per GB/session).
- Context / prompt caching and storage: prompt-caching multipliers and storage fees (Anthropic and Google/Gemini both publish caching and long-context storage pricing lines).
- Seats / subscriptions: per-user per-month seat fees for IDE-integrated products (GitHub Copilot, Cursor, enterprise bundles).
- Add-on services: embeddings, file storage, embeddings-based retrieval, and enterprise features (SAML/SSO, audit logs) that are seat- or usage-priced.

Next steps (execution plan)
- Draft Section 05 (per-platform detailed cost breakdowns). For each of the five platforms above we will: (a) list the pricing page(s) URLs, (b) extract the component-level pricing lines and present a small component table, and (c) mark any data gaps that require sales/enterprise quotes. This will fulfill the special-instruction requirement for "detailed cost breakdown for every top agentic coding platform (with direct source to their public pricing page)."
- If you want me to proceed now, I will draft /workspace/document/sections/05-platform-cost-breakdowns.md and begin the line-by-line extraction for each platform in the order: OpenAI, Anthropic, Google (Gemini / Vertex), GitHub Copilot, Cursor.

Gaps & caveats to flag immediately
- Enterprise / negotiated pricing and some tool-specific pass-through charges (e.g., Cursor reselling model calls) are often not fully visible on public pages — where data is missing we will explicitly record the gap and avoid inventing numbers.
- Google Antigravity is a product announcement (Gemini/Antigravity) — Antigravity-specific pricing was not found on public pages and likely will be bundled into Google AI Studio / Vertex enterprise offerings; will flag this as an enterprise-sales gap in Section 05.

Sources cited (quick list of URLs to verify)
- OpenAI API pricing: https://developers.openai.com/api/docs/pricing/
- Anthropic / Claude pricing: https://platform.claude.com/docs/en/about-claude/pricing
- Gemini API pricing: https://ai.google.dev/gemini-api/docs/pricing
- GitHub Copilot plans: https://github.com/features/copilot/plans and https://docs.github.com/en/copilot/get-started/plans
- Cursor pricing: https://cursor.com/pricing


Status: section drafted (pending Section 05 detailed breakdowns).

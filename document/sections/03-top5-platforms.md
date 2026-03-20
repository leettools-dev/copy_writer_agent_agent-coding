03 Top five agentic-coding platforms — feature and cost overview

Purpose
- Present the five leading agentic-coding platforms, the short rationale for inclusion, and direct links to their public pricing pages (special instruction requirement).

Top 5 platforms (ranked by combination of agentic feature set, market reach, IDE integration, and pricing transparency)

1) OpenAI (API / Agents / Codex family)
- Why: Broadest set of agent primitives (Agents SDK, tool integrations, containers, realtime and batch modes), widely reused by platform vendors and IDEs; transparent, granular token & tool pricing.
- Pricing (canonical): https://developers.openai.com/api/docs/pricing/
- Quick note: OpenAI publishes per-1M-token rates across flagship families (gpt-5.4 variants), container session pricing, tool-call pricing, and embeddings/storage lines.

2) Anthropic (Claude platform / Claude Code)
- Why: Vendor-forward, agent-focused product positioning with explicit tooling for code, prompt-caching multipliers and container/tool pricing; strong exemplar (selected report) and detailed public pricing.
- Pricing (canonical): https://platform.claude.com/docs/en/about-claude/pricing
- Quick note: Anthropic provides per-MTok rows for model families and explicit container & tool costs (including free container allowances in some plans).

3) Google (Gemini API / Vertex integration)
- Why: Gemini models + Vertex AI integration with explicit batch/standard/flash tiers; notable grounding/tool pricing (search grounding) and a major cloud-integration story for enterprise agentic stacks.
- Pricing (canonical): https://ai.google.dev/gemini-api/docs/pricing
- Quick note: Google separates Flash/Pro tiers and often expresses grounding (search) costs per 1k queries; Vertex infra costs may add infra/network in enterprise settings.

4) GitHub Copilot (Copilot / Copilot for Business & Enterprise)
- Why: Primary IDE-integrated developer touchpoint; seat-based pricing model and premium-request metering makes it a dominant go-to for day-to-day agentic coding adoption inside teams.
- Pricing (canonical): https://docs.github.com/en/copilot/get-started/plans
- Quick note: Copilot is seat-first — some advanced features are metered (premium requests) and any model-call pass-throughs in enterprise reseller scenarios are often opaque.

5) Cursor (IDE-native agent) — includes other IDE-first vendors (Replit, Gitpod) as runner-ups
- Why: Representative of the IDE-native, seat-first UX model (fast adoption among developer teams); offers team tiers and usage multipliers instead of pass-through token metering.
- Pricing (canonical): https://cursor.com/pricing
- Quick note: Cursor publishes per-user tiers (Pro, Teams, Ultra) with documented "usage multipliers" rather than explicit per-token pass-through.

Comparison notes (what this table should show)
- A compact comparative table (in the final document) will list: platform, primary agent capabilities (editor control, browser/terminal control, tool calls, container sessions), monetization model (token-metered vs seat-first), and canonical pricing URL. We have collected canonical pricing pages for each vendor above and will populate the table in Section 03 when assembling the compiled document.

Gaps and caveats
- Seat-first vendors (GitHub Copilot, Cursor) sometimes resell model calls through negotiated enterprise agreements — public pass-through token rates are often missing; we will flag these as "vendor-managed resale — gap" in Section 05 where we show per-platform cost breakdowns.
- Google Vertex/enterprise packaging may introduce extra infra billing line items not present on the public Gemini page; we will call this out when presenting worked examples.

Sources
- OpenAI pricing: https://developers.openai.com/api/docs/pricing/
- Anthropic pricing: https://platform.claude.com/docs/en/about-claude/pricing
- Google Gemini pricing: https://ai.google.dev/gemini-api/docs/pricing
- GitHub Copilot plans: https://docs.github.com/en/copilot/get-started/plans
- Cursor pricing: https://cursor.com/pricing

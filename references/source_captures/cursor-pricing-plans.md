<!-- generated-by: copy_writer_agent.runtime_sync -->
# Cursor — Pricing & Plans

- URL: https://cursor.com/pricing and https://cursor.com/docs/models-and-pricing
- Source role: supporting_source
- Linked sections: Section 03, 05 (platform, cost breakdown for Cursor, IDE-native agents).
- Why this source matters: Cursor is a widely used IDE-native agent/assistant with explicit team pricing and per-user plans; contains clear per-seat pricing (Teams $40/user/mo) and individual tiers (Pro $20/mo) which are needed to compare seat-based licensing vs token-metered models.
- Reliability tier: primary
- Date accessed: 2026-03-20

## Evidence extracted
- Cursor Teams is $40 per user per month (includes centralized billing, SSO, analytics); Pro individual $20/month; Pro+ and Ultra higher tiers for heavier model usage; enterprise custom pricing available. (Support: Cursor pricing page and docs.)

## Open questions
- Cursor's internal mapping of "usage" to token/API charges when they resell model calls (they reference model-level API rates) — will record this gap and avoid inventing internal pass-through rates.

## Draft implications
- Treat Cursor as primarily a seat + usage platform; show component table with seat cost and note that model-call costs may be an added metered bucket (document available but sometimes evolving).
- ## Next steps (highest-leverage immediate tasks)
- 1. Write Section 03 (Top five platforms) draft file listing the five chosen platforms and the direct pricing links (OpenAI, Anthropic, Google Gemini, GitHub Copilot, Cursor). Mark missing public data gaps.
- 2. Collect any remaining pricing pages for other candidate vendors if needed (Replit, Microsoft Copilot Studio, Replit Ghostwriter) and note whether they belong in the top five or as "others to watch".
- 3. Begin Section 05: for each platform, extract the concrete pricing lines and prepare componentized tables. Where data is missing or enterprise-only, explicitly note the gap and source.
- 4. Prepare representative workload examples (light coding agent session, long-horizon agentic run with container execution) and compute cost comparisons once per-component prices are fully extracted.

<!-- generated-by: copy_writer_agent.runtime_sync -->
# Cursor — Pricing & Plans

- URL: https://cursor.com/pricing
- Source role: supporting_source
- Linked sections: Section 03, 05 (platform, cost breakdown for Cursor, IDE-native agents).
- Why this source matters: Cursor is a widely used IDE-native agent/assistant with explicit team pricing and per-user plans; contains clear per-seat pricing (Teams $40/user/mo) and individual tiers (Pro $20/mo) which are needed to compare seat-based licensing vs token-metered models.
- Reliability tier: primary
- Date accessed: 2026-03-20

## Evidence extracted
- Cursor pricing rows: Pro $20/mo; Pro+ $60/mo; Ultra $200/mo; Teams $40/user/mo; Enterprise custom. Pro+ advertises '3x usage on models'; Ultra '20x usage on models' (indicates usage multipliers rather than explicit per-token pass-through prices). (Support: Cursor pricing page and docs (exact text copied into Section 04).)

## Open questions
- Cursor's internal mapping of "usage" multipliers to token/API charges when they resell model calls. We will not invent pass-through rates; Section 05 will show seat + "vendor-managed resale" gap.
- ## Fetch log (this iteration)
- 2026-03-20: Successfully fetched Google Gemini pricing (ai.google.dev/gemini-api/docs/pricing) and extracted canonical pricing rows (Gemini 3.1 Pro, Flash-Lite, batch, grounding $/1k rows).
- 2026-03-20: Previously fetched and validated OpenAI, Anthropic, GitHub, and Cursor pricing pages.
- ## Next steps (highest-leverage immediate tasks)
- 1. Section 05: create two representative worked examples using only published lines: (A) 30-minute interactive agentic dev session (editor + ~10 tool calls + 1 container session) and (B) 6-hour long-horizon agent run (heavy container execution + ~200k tokens + multiple web searches). Where seat-first vendors resell model calls, present conservative brackets and label as "vendor-managed resale — gap".
- 2. After Section 05 worked examples validate the taxonomy in practice, mark Section 04 'done'.
- ## Outstanding evidence gaps (priority)
- Seat-first vendors' pass-through per-token rates (Cursor, Copilot in some configs) — flagged as "vendor-managed resale — gap."
- Enterprise-negotiated discounts and pooled usage rate cards (will remain flagged as "enterprise-only gaps").
- ## Notes on credibility and confidence
- OpenAI and Anthropic pricing pages are primary, detailed, and provide all numeric rows we need for component mapping — confidence high.
- GitHub and Cursor provide clear seat pricing but opaque resale/metering details — confidence high for seat lines, medium for underlying per-token mapping.
- Google pricing is now successfully fetched and is a primary source for Gemini rates — confidence high.

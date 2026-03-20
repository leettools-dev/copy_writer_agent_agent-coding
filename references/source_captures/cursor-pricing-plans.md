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
- 2026-03-20: Successfully fetched and extracted exact pricing rows from:
- OpenAI pricing (developers.openai.com/api/docs/pricing) — flagged model token rows, tool calls, container session rows, file storage lines.
- Anthropic (platform.claude.com/docs/en/about-claude/pricing) — flagged model rows, prompt cache multipliers, web search/web fetch, code execution allowances.
- GitHub Copilot plans (docs.github.com/en/copilot/get-started/plans) — seat prices and premium request metering.
- Cursor pricing (cursor.com/pricing) — seat tiers and usage multipliers.
- 2026-03-20: Attempt to fetch Google Gemini pricing (ai.google.dev/gemini-api/docs/pricing) failed due to network access error. This is an explicit evidence gap recorded in Section 04 and manifest.
- ## Next steps (highest-leverage immediate tasks)
- 1. Section 04 (component taxonomy) updated with canonical vendor-exact lines and gap annotations (file: /workspace/document/sections/04-component-costs.md). It is now ready for Section 05 to consume as the canonical mapping.
- 2. Create Section 05 worked examples (two representative workloads) using only published lines: (A) 30-minute interactive dev session and (B) 6-hour long-horizon agentic run. Where seat-first vendors resell model calls, present conservative brackets and label as "vendor-managed resale — gap".
- 3. Retry fetching Google Gemini / Vertex pricing (ai.google.dev/gemini-api/docs/pricing). If network access continues to fail, obtain Gemini pricing from an alternate authoritative source (Google Cloud Vertex AI pricing page, Google press release, or vendor blog) and cite accordingly.
- 4. For each platform in Section 05, prepare a small source block linking to the exact pricing URL and quoting the exact table rows used for calculation (to satisfy the special instruction requiring direct sources).
- 5. After Section 05 is completed with worked examples, re-evaluate whether Section 04 can be marked 'done' (it will be marked done only after the worked examples are built and Section 05 validates the taxonomy in practice).
- ## Outstanding evidence gaps (priority)
- Google Gemini / Gemini API canonical pricing page (network fetch failed).
- Seat-first vendors' pass-through per-token rates (Cursor, Copilot in some configs) — flagged as "vendor-managed resale — gap."
- Enterprise-negotiated discounts and pooled usage rate cards (will remain flagged as "enterprise-only gaps").
- ## Notes on credibility and confidence
- OpenAI and Anthropic pricing pages are primary, detailed, and provide all numeric rows we need for component mapping — confidence high.
- GitHub and Cursor provide clear seat pricing but opaque resale/metering details — confidence high for seat lines, medium for underlying per-token mapping.
- Google pricing is likely primary and detailed but currently unreachable from this environment — confidence low until fetch succeeds.

<!-- generated-by: copy_writer_agent.runtime_sync -->
# Anthropic (Claude) — Pricing (Claude API docs)

- URL: https://platform.claude.com/docs/en/about-claude/pricing
- Source role: supporting_source
- Linked sections: document, sections, 04-component-costs.md (component mapping), 05-platform-cost-breakdowns.md (worked examples A, B using published rates).
- Why this source matters: Official pricing lines for Claude models and agent tooling (prompt caching multipliers, tool pricing, code execution allowances) directly inform per-platform cost breakdowns and highlight vendor-specific primitives such as free container-hour allowances and per-search web costs.
- Reliability tier: primary (vendor pricing page)
- Date accessed: 2026-03-20

## Evidence extracted
- Claude Opus 4.6 example pricing: Base input $5 / MTok; Output $25 / MTok (Opus 4.6). Web search tool: $10 per 1,000 searches. Code-execution/container: 1,550 free container hours per organization; beyond that billing at $0.05 per hour, per container. Prompt caching multipliers and long-context premium tiers documented; regional endpoint premium (10%) for some models when using regional endpoints. (Support: Claude "Model pricing" table, Tool use pricing, and Code execution tool sections on the Claude Pricing page.)

## Open questions
- How free container-hour allowances translate for multi-team enterprise accounts and whether they are pro-rated by workspace or org.
- Volume discounts and how prompt caching multipliers interplay with batch discounts in large-scale agent deployments.

## Draft implications
- Use Anthropic pricing to show how vendor-level safety/compute concessions (free container hours) materially reduce marginal runtime costs for code-execution-heavy agents; surface prompt-caching and batch discounts as levers for cost optimization.

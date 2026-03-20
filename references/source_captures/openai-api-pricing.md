<!-- generated-by: copy_writer_agent.runtime_sync -->
# OpenAI API Pricing

- URL: https://developers.openai.com/api/docs/pricing/
- Source role: supporting_source
- Linked sections: Component cost taxonomy (Section 04), per-platform breakdown for OpenAI (Section 05).
- Why this source matters: Official, public pricing for models (including Codex/Codex variants), tools (containers, tool calls), and token rates — critical for component-level costing.
- Reliability tier: primary
- Date accessed: 2026-03-20

## Evidence extracted
- Token-based rates for flagship models (e.g., gpt-5.4 family), Codex model rates, container session pricing, tool call pricing, and examples for billing categories. (Support: Pricing tables on OpenAI docs (flagship model token prices, Codex/codex-priority rates, containers per-GB/session, tool calls per 1k calls).)

## Open questions
- Map which OpenAI pricing lines correspond to common agentic workloads (editor/terminal control, container-run CI tasks, tool calls). Will prepare representative workload examples later.

## Draft implications
- Use OpenAI pricing as canonical example to define component pricing categories (per-token input/output, container sessions, tool calls, file storage).

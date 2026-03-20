<!-- generated-by: copy_writer_agent.runtime_sync -->
# OpenAI API Pricing

- URL: https://developers.openai.com/api/docs/pricing/
- Source role: supporting_source
- Linked sections: Component cost taxonomy (Section 04), per-platform breakdown for OpenAI (Section 05).
- Why this source matters: Official, public pricing for models (including Codex/Codex variants), tools (containers, tool calls), and token rates — critical for component-level costing.
- Reliability tier: primary
- Date accessed: 2026-03-20

## Evidence extracted
- Token-based rates for flagship models (gpt-5.4 family), cached-input price columns, container session pricing, tool call pricing, embeddings/storage lines, and tools table lines (web search, tool calls, containers, file storage, tool call $2.50 / 1k, containers per 20‑min session). (Support: Pricing tables on OpenAI docs (flagship model token prices, containers per-GB/session, tool calls per 1k calls). See Section 04 for the exact text taken from the page.)

## Open questions
- Map which OpenAI pricing lines correspond to common agentic workloads (editor/terminal control, container-run CI tasks, tool calls). Will prepare representative workload examples later.

## Draft implications
- Use OpenAI pricing as canonical example to define component pricing categories (per-token input/output, container sessions, tool calls, file storage). Section 04 updated with vendor-exact lines for OpenAI.

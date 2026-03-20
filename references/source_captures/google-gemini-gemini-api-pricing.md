<!-- generated-by: copy_writer_agent.runtime_sync -->
# Google Gemini / Gemini API Pricing

- URL: https://ai.google.dev/gemini-api/docs/pricing
- Source role: supporting_source
- Linked sections: Section 05 (Google per-platform breakdown), Section 04 (component taxonomy — insert Google rows)
- Why this source matters: Official pricing for Gemini models (Gemini 3/3.1 Pro, Flash, Flash-Lite), batch vs standard rates, and tool grounding/search pricing. Important to cost Google-based agentic stacks and Antigravity references.
- Reliability tier: primary
- Date accessed: 2026-03-20

## Evidence extracted
- Canonical pricing rows and tool charges from Google Gemini (page last updated 2026-03-18):
- Gemini 3.1 Pro (Standard): Input price $2.00 per 1M tokens (<=200k prompts); Output price $12.00 per 1M tokens (<=200k prompts). Context caching examples: $0.20 / 1M (<=200k) or $0.40 (>200k); storage $4.50 / 1,000,000 tokens per hour. Grounding (Google Search/Maps): 5,000 prompts/month free, then $14 / 1,000 search queries (Gemini 3 models). Batch API: roughly 50% of standard token rates for batch jobs.
- Gemini 3.1 Flash‑Lite (cost‑efficient): Input $0.25 / 1M; Output $1.50 / 1M (standard tier examples). Batch rows offer materially lower per‑1M rates.
- Tool pricing notes: Code execution is billed as model tokens (no separate runtime charge). File-search/embeddings charged per embedding token rates (e.g., Gemini embeddings text input $0.15 / 1M tokens).
- Grounding: Grounding with Google Search typically $14 / 1,000 search queries after free allowance; some models have higher/lower grounding allowances and rates (Gemini 2.5/3 variants differ).
- Source page explicitly states: "Agent usage costs are calculated based on the underlying token consumption and usage of the tools." (See "Pricing for agents" table.)
- Last updated on the page: 2026-03-18 UTC.

## Open questions
- Vertex-specific enterprise packaging (Vertex AI integration) may show different line items in Google Cloud billing (network, infra). For enterprise forecasts, consult Vertex pricing page if necessary.

## Draft implications
- Insert Google Gemini pricing rows into Section 04 and use them in Section 05 worked examples. Note that code-execution runtime is not separately charged on the Gemini page — it is reflected in token counts for generated/returned content.

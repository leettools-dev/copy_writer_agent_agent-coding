<!-- generated-by: copy_writer_agent.runtime_sync -->
# OpenAI — Pricing (API docs)

- URL: https://developers.openai.com/api/docs/pricing/
- Source role: supporting_source
- Linked sections: document, sections, 04-component-costs.md (mapping components to vendor lines), 05-platform-cost-breakdowns.md (worked examples using published rates).
- Why this source matters: Official, detailed pricing lines for models, tools, containers, and storage used to compute representative agentic-coding workload costs and component mappings.
- Reliability tier: primary (vendor pricing page)
- Date accessed: 2026-03-20

## Evidence extracted
- Flagship model pricing (example for gpt-5.4 short-context): Input $2.50 / 1M tokens; Output $15.00 / 1M tokens. Tool call pricing: $2.50 / 1k calls. Container pricing: 4 GB = $0.12 per 20-minute session (1 GB = $0.03 per 20-min). File storage: $0.10 / GB-day (1 GB free). Detailed tables and examples on the OpenAI pricing page show short-context, long-context, and priority tiers with per-model differences. (Support: Quoted pricing table and Tools section on OpenAI Pricing page ("Flagship models" and "Tools" tables).)

## Open questions
- How regional pricing uplifts (10% for regional endpoints) affect enterprise procurement in different geographies for sustained agent workloads.
- Whether model output vs input split is consistently applied across vendor invoicing for complex agent workloads that intermix tool tokens.

## Draft implications
- Use OpenAI pricing as a canonical example for component mapping (token input/output, tool calls, containers) and for constructing conservative worked examples. Flag regional/residency uplift and multi-component token accounting as procurement caveats.

06 Where the next breakthroughs will come from

Purpose
- Synthesize technical constraints, cost drivers, and market dynamics to identify the top-five breakthrough areas for agentic coding and explain why each matters.

Top-five candidate breakthrough areas (summary)

1) Marginal-cost reduction for tool calls and container sessions
- Why: Tool calls and containers are recurring, high-frequency costs for agentic workloads (CI runs, code execution, web search). Reducing per-call/container session cost through batching, on-device caching, or localized lightweight runtimes lowers operational friction for always-on agents.
- Evidence plan: Use pricing rows from OpenAI/Anthropic/Google showing tool-call and container session prices and show representative cost math in worked examples.
- Trade-offs: Latency vs cost, security sandboxing for local runtime, developer experience impacts.

2) Standardized, low-overhead agent communication protocols
- Why: Lack of standard agent-to-agent and tool-call protocols increases integration cost and duplication; a lightweight standard (for tool-call metadata, provenance, and cost accounting) would accelerate composability across platforms.
- Evidence plan: Cite Anthropic report's recommendations for agent orchestration and independent analyses of MCP patterns; note that vendor-specific SDKs currently dominate.
- Trade-offs: Vendor lock-in vs interoperability; governance complexity.

3) On-device / hybrid model execution for interactive coding sessions
- Why: Running smaller models locally for interactive code editing decreases token costs and latency for common tasks (autocomplete, linting); offload heavy-generation to cloud when needed.
- Evidence plan: Cite OpenAI and Google small-model pricing (mini/nano families), vendor announcements about optimized small models, and seat- vs token-based economics from Cursor and Copilot.
- Trade-offs: Device hardware limits, consistency across devices, security of local code contexts.

4) Predictable, usage-aligned seat + runtime bundles for teams
- Why: Seat-first UXs are popular but opaque on back-end per-token costs; transparent bundles that combine seat fees with predictable model usage allowances reduce procurement friction for engineering orgs.
- Evidence plan: GitHub Copilot and Cursor pricing patterns; survey signals in Anthropic report about enterprise buyer preference for predictable billing.
- Trade-offs: Potentially higher unit costs; negotiation overhead for vendors.

5) Agent safety primitives and verifiable tool sandboxing at scale
- Why: Safety concerns (inadvertent data exfiltration, unsafe code runs) are adoption blockers; providing audited runtimes, provenance, and verifiable policy enforcement will unlock broader adoption in regulated orgs.
- Evidence plan: Anthropic risks and governance sections, vendor safety docs, and Deloitte adoption guidance.
- Trade-offs: Implementation cost, developer friction, runtime overhead.

Table plan
- Create a 'Breakthrough candidates' table with columns: Candidate, Primary constraint addressed, Expected impact (cost/reach), Feasibility (near/mid/long-term), Lead actors (vendors/startups), Evidence sources.

Next steps
- Populate the table with concise evidence snippets and link to vendor pricing lines or report sections used to justify impact/feasibility.

Sources
- Anthropic Agentic Coding Trends report; OpenAI, Google, GitHub pricing pages; Deloitte adoption notes; industry commentary.
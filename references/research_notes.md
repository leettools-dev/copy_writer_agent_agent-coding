# Research Notes

## Source: NIST — Artificial Intelligence Risk Management Framework (AI RMF 1.0)
- URL: https://nvlpubs.nist.gov/nistpubs/ai/nist.ai.100-1.pdf
- Why this source matters: NIST AI RMF is the principal public, vendor-neutral framework for organizing AI risk management across system lifecycle stages. It supplies outcome-based controls, measurement guidance, and mapping useful for enterprise governance plans.
- Reliability tier: primary (standards body)
- Date accessed: 2026-03-20

### Evidence extracted
- Claim or data point: AI RMF defines core functions (Govern, Map, Measure, Manage) and recommended practices for risk assessment, documentation, and monitoring.
  - Support: NIST AI RMF 1.0 text and playbook materials.
  - Intended section(s): document/sections/07-risks-and-governance.md (governance checklist, monitoring metrics), recommendations section.
  - Confidence: high

### Open questions
- How vendors align their runtime telemetry and provenance logs to AI RMF outcomes in practice (varies by vendor).

### Draft implications
- Use AI RMF language to structure the governance checklist and monitoring/metric recommendations (outcomes-based controls).


## Source: Anthropic — 2026 Agentic Coding Trends Report
- URL: https://resources.anthropic.com/hubfs/2026%20Agentic%20Coding%20Trends%20Report.pdf
- Why this source matters: Structural exemplar and contains an explicit risks/governance section focused on agentic coding adoption barriers.
- Reliability tier: strong-secondary (vendor report from a reputable vendor)
- Date accessed: 2026-03-20

### Evidence extracted
- Claim or data point: Safety, sandboxing, and provenance are identified as primary gating factors for enterprise adoption; case studies emphasize auditable primitives as purchase criteria.
  - Support: Vendor report sections and risk narratives.
  - Intended section(s): document/sections/07-risks-and-governance.md (risk framing and vendor-led mitigations).
  - Confidence: medium-high

### Open questions
- Numeric incidence rates for safety incidents in agentic coding deployments (not public).

### Draft implications
- Cite Anthropic when arguing that safety primitives materially affect procurement decisions; use it as vendor-backed evidence for mitigation priorities.


## Source: OpenAI — Safety best practices (OpenAI API docs) & Trust Portal
- URL: https://developers.openai.com/api/docs/guides/safety-best-practices/
- URL: https://trust.openai.com/
- Why this source matters: Public vendor guidance on secure API usage, red-teaming, and enterprise-ready security controls; reflects concrete recommendations for runtime safeguards and key management.
- Reliability tier: primary (vendor docs)
- Date accessed: 2026-03-20

### Evidence extracted
- Claim or data point: Best practices include prompt/input validation, telemetry and anomaly detection, API key management and rotation, and guidance on prompt-engineering to reduce unsafe outputs.
  - Support: Safety best practices documentation and enterprise trust portal materials.
  - Intended section(s): Risk mitigations (DLP, input validation, telemetry) and monitoring metric examples.
  - Confidence: high

### Open questions
- How OpenAI’s enterprise telemetry exports map onto standardized provenance formats used by customers.

### Draft implications
- Use OpenAI docs as primary evidence for recommended runtime mitigations (input validation, key hygiene, red-teaming).


## Source: Anthropic — Trust Center & Security pages
- URL: https://trust.anthropic.com/
- URL: https://code.claude.com/docs/en/security
- Why this source matters: Anthropic publishes details on its security posture, free container-hour allowances, and recommendations for secure deployments; supports vendor evidence on sandboxing and policy controls.
- Reliability tier: primary (vendor docs)
- Date accessed: 2026-03-20

### Evidence extracted
- Claim or data point: Anthropic outlines a framework for safe agents, security controls, and operational guidance (including ASL levels and responsible scaling policy).
  - Support: Trust Center and Claude Code security docs.
  - Intended section(s): Risk mitigations, vendor safety primitives.
  - Confidence: high

### Draft implications
- Use Anthropic to illustrate vendor-built safety controls and to motivate recommended primitives (sandboxing, signed provenance).


## Source: GitHub — Copilot / GitHub Trust & Copilot enterprise guidance
- URL: https://github.com/features/copilot/copilot-business
- URL: https://copilot.github.trust.page/faq
- Why this source matters: Copilot is a major entry point into agentic coding inside IDEs; vendor guidance shows enterprise-oriented data protection and privacy controls that affect adoption.
- Reliability tier: primary (vendor docs)
- Date accessed: 2026-03-20

### Evidence extracted
- Claim or data point: GitHub provides enterprise guidance, DLP considerations, and contractual terms to control data usage; Copilot distinguishes between per-seat models and premium metering.
  - Support: GitHub Trust Center pages and Copilot enterprise FAQs.
  - Intended section(s): Risk — data exfiltration, procurement choices; mitigation examples.
  - Confidence: high

### Draft implications
- Highlight seat-vs-variable models tradeoff and GitHub’s enterprise controls as an example of procurement-driven mitigations.


## Source: Google Cloud — Vertex AI security & best practices
- URL: https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-security-controls
- Why this source matters: Google’s security controls and compliance guidance for Vertex/GenAI workloads are representative of cloud-provider best practices (VPC Service Controls, encryption, IAM, SIEM integration).
- Reliability tier: primary (vendor docs)
- Date accessed: 2026-03-20

### Evidence extracted
- Claim or data point: Vertex AI security docs list shared-responsibility items, network isolation, and monitoring controls; Google publishes Control Navigator and compliance tooling to help enterprise adoption.
  - Support: Vertex AI security docs and blog posts.
  - Intended section(s): Risk mitigations and monitoring metrics; example vendor controls to cite.
  - Confidence: high

### Draft implications
- Use Google Cloud guidance as a template for network/isolation controls and enterprise-grade telemetry recommendations.


## Source: Deloitte — Enterprise governance and agentic AI
- URL: https://www.deloitte.com/us/en/insights/industry/technology/technology-media-and-telecom-predictions/2025/autonomous-generative-ai-agents-still-under-development.html
- Why this source matters: Independent industry analysis emphasizing governance as a bottleneck for enterprise agentic AI adoption; supports recommendation for governance-first product design.
- Reliability tier: strong-secondary (industry analysis)
- Date accessed: 2026-03-20

### Evidence extracted
- Claim or data point: Firms report agentic deployments often stall on governance and operational model risk; recommended actions include embedded governance controls, monitoring, and measurable KPIs.
  - Support: Deloitte analysis and case narratives.
  - Intended section(s): Adoption considerations and recommended experiments for product teams.
  - Confidence: medium-high

### Draft implications
- Cite Deloitte when recommending that vendors prioritize governance primitives and enterprise-friendly packaging.


## Fetch log (this iteration)
- 2026-03-20: Queried and fetched NIST AI RMF, OpenAI safety docs, Anthropic trust center, GitHub Copilot trust, Vertex AI security docs, Deloitte analysis. Extracted mitigation and monitoring guidance for inclusion in the risks and governance section.


## Outstanding evidence gaps (priority)
- Empirical incident statistics for agentic-coding-specific security events (not publicly available). Recommend vendor/enterprise surveys for numeric incidence rates.
- Mapping of vendor telemetry/provenance exports to a common schema for audit (varies by vendor; no single public standard yet).


## Notes on credibility and confidence
- Standards and vendor docs (NIST, OpenAI, Anthropic, Google) provide high-confidence guidance suitable for operational recommendations.
- Independent analyses (Deloitte) provide procurement and organizational context but limited technical detail.

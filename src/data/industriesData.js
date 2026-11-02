// Complete architectural profiles for all 14 Target Industries
// Tailored for an elite, forward-looking software engineering startup (zero fake client stories / zero fabricated metrics)

export const industriesData = {
  banking: {
    id: 'banking',
    name: 'Banking',
    headline: 'Real-Time Event Streaming & Zero-Trust Core Banking',
    tagline: 'Moving beyond rigid legacy mainframes with event-driven ledger architectures and sub-second settlement.',
    overview:
      'Modern banking demands high-throughput transaction processing with deterministic latency, cryptographic auditability, and instant fraud telemetry. We engineer modern core banking platforms and microservices that deliver continuous availability without maintenance windows.',
    techStack: ['Apache Kafka', 'Rust', 'PostgreSQL', 'eBPF Security', 'Kubernetes', 'Redis Cluster'],
    pillars: [
      {
        title: 'Event-Sourced Transaction Ledger',
        desc: 'Immutable append-only event streams ensuring full auditability, zero ledger drift, and instant historical state reconstruction.',
      },
      {
        title: 'Real-Time Fraud & Anomaly Ingestion',
        desc: 'Sub-5ms evaluation of card and account activity using streaming feature stores and local inference engines before transaction commitment.',
      },
      {
        title: 'ISO 20022 Open Banking Gateways',
        desc: 'High-performance, type-safe API gateways enabling instant SEPA, FedNow, and UPI interoperability with microsecond serialization.',
      },
      {
        title: 'Zero-Trust Data Enclaves',
        desc: 'Confidential computing and end-to-end tokenization ensuring sensitive customer PII is never exposed in memory or logs.',
      },
    ],
    shift: {
      legacy: 'Batch-oriented nightly reconciliations on COBOL mainframes with scheduled weekend downtime and fragile point-to-point connections.',
      modern: 'Continuous 24/7/365 active-active event-driven ledger running distributed consensus across sovereign cloud availability zones.',
    },
  },

  'capital-markets': {
    id: 'capital-markets',
    name: 'Capital Markets',
    headline: 'Deterministic Low-Latency Trading & Risk Telemetry',
    tagline: 'High-frequency order routing, market data normalization, and continuous portfolio stress-testing.',
    overview:
      'In institutional trading, every microsecond dictates execution quality. We design ultra-low-latency market connectivity layers, FIX/FAST protocol parsers, and distributed Monte Carlo risk calculation engines built to handle extreme market volatility bursts.',
    techStack: ['C++', 'Rust', 'Linux Kernel Bypass', 'ClickHouse', 'gRPC', 'WebSockets'],
    pillars: [
      {
        title: 'Direct Market Access (DMA) Gateways',
        desc: 'Custom kernel-bypass network drivers and memory-mapped order routing stacks delivering predictable sub-microsecond tick-to-trade latency.',
      },
      {
        title: 'Real-Time Portfolio Risk Engines',
        desc: 'SIMD-accelerated Value-at-Risk (VaR) and margin simulations recalculating enterprise exposures across millions of concurrent derivative contracts.',
      },
      {
        title: 'High-Volume Market Data Normalizers',
        desc: 'Consolidated L1/L2/L3 order book reconstructors and time-series aggregators processing billions of events per trading session.',
      },
      {
        title: 'Algorithmic Compliance & Audit Telemetry',
        desc: 'Deterministic trade playback and MiFID II clock-synchronization logging ensuring nanosecond audit fidelity without execution penalty.',
      },
    ],
    shift: {
      legacy: 'Over-bloated message brokers with unpredictable garbage collection pauses and uncoordinated post-trade reconciliation delays.',
      modern: 'Zero-allocation memory pipelines, hardware-aligned data structures, and continuous streaming risk surfaces.',
    },
  },

  insurance: {
    id: 'insurance',
    name: 'Insurance',
    headline: 'Parametric Underwriting & Instant Claims Automation',
    tagline: 'Replacing manual actuarial bureaucracy with dynamic risk scoring and automated digital claims settlement.',
    overview:
      'Insurance is transitioning from backward-looking loss compensation to real-time risk mitigation. We build modular policy administration engines, automated claims validation pipelines, and parametric insurance infrastructure integrated with IoT and real-time data feeds.',
    techStack: ['TypeScript', 'Python', 'Go', 'PostgreSQL', 'Temporal.io', 'AWS Nitro'],
    pillars: [
      {
        title: 'Automated Claims Adjudication Workflows',
        desc: 'Durable execution state machines (Temporal) orchestrating document extraction, policy validation, fraud scoring, and instant payment dispatch.',
      },
      {
        title: 'Dynamic Actuarial Risk Scoring',
        desc: 'Real-time telemetry ingestion from smart assets, telematics, and weather APIs dynamically recalibrating policy premiums.',
      },
      {
        title: 'Parametric Smart Settlement',
        desc: 'Event-triggered payouts executing automatically when trusted oracle parameters (flight cancellation, weather thresholds) are met.',
      },
      {
        title: 'Headless Policy Administration APIs',
        desc: 'Composable insurance-as-a-service APIs enabling embedded insurance checkout flows across partner merchant ecosystems.',
      },
    ],
    shift: {
      legacy: 'Paper-intensive 30-day claims review cycles and disconnected legacy ERP systems requiring human manual data entry.',
      modern: 'Real-time claims adjudication with automated OCR document verification, sub-second policy generation, and instant payouts.',
    },
  },

  'communications-media-and-information-services': {
    id: 'communications-media-and-information-services',
    name: 'Communications, Media, and Information Services',
    headline: 'Edge Content Delivery & Sub-Second Media Ingestion',
    tagline: 'Architecting ultra-low latency streaming, decentralized asset pipelines, and multi-tenant publishing networks.',
    overview:
      'Digital media platforms require immense throughput to serve millions of concurrent streams without buffering. We engineer edge-accelerated CDN distribution, dynamic WebRTC streaming topologies, and high-concurrency editorial publishing systems.',
    techStack: ['WebRTC', 'Go', 'HLS/DASH', 'Cloudflare Workers', 'GraphQL', 'CockroachDB'],
    pillars: [
      {
        title: 'Sub-Second Interactive Video Delivery',
        desc: 'WebRTC and Low-Latency HLS video pipelines delivering synchronous interactive streams for live sports, auctions, and live commerce.',
      },
      {
        title: 'Edge-Rendered Content & Dynamic Ad Injection',
        desc: 'Server-side ad insertion (SSAI) running on globally distributed edge workers ensuring zero client-side ad blocker interruptions.',
      },
      {
        title: 'Decentralized Digital Asset Management',
        desc: 'High-speed parallel transcoding pipelines transforming raw 4K video files into multi-bitrate profiles in fractions of real-time.',
      },
      {
        title: 'High-Throughput Global Subscription Gateways',
        desc: 'Geographically partitioned billing engines handling massive concurrent entitlement verifications during peak traffic spikes.',
      },
    ],
    shift: {
      legacy: 'Centralized origin video servers with 30-second broadcast lag, static paywalls, and brittle monolithic content management systems.',
      modern: 'Global edge compute routing, instantaneous live streaming, and composable headless publishing architectures.',
    },
  },

  'consumer-packaged-goods-and-distribution': {
    id: 'consumer-packaged-goods-and-distribution',
    name: 'Consumer Packaged Goods and Distribution',
    headline: 'Predictive Demand Sensing & Real-Time Logistics Mesh',
    tagline: 'Bridging manufacturer production floors with dynamic consumer channels through unified inventory intelligence.',
    overview:
      'Fast-moving consumer goods require instantaneous visibility into SKU velocity, shelf availability, and supplier bottlenecks. We engineer unified multi-channel inventory engines, automated dispatch algorithms, and direct-to-consumer digital commerce platforms.',
    techStack: ['Node.js', 'Go', 'Kafka', 'Elasticsearch', 'PostgreSQL', 'Docker'],
    pillars: [
      {
        title: 'Unified Omni-Channel Inventory Mesh',
        desc: 'Single source of truth inventory state synchronized in real time across physical retail distribution centers and digital marketplaces.',
      },
      {
        title: 'Automated Replenishment Workflows',
        desc: 'Event-driven order placement triggers based on real-time sell-through telemetry, warehouse capacity, and transit lead times.',
      },
      {
        title: 'Direct-to-Consumer (D2C) Commerce Engine',
        desc: 'Headless, micro-service e-commerce foundations capable of processing thousands of flash-sale checkouts per second with sub-50ms latency.',
      },
      {
        title: 'Traceability & Provenance Verification',
        desc: 'Cryptographic batch tracking and barcode serialization verifying ingredient sourcing and regulatory compliance from farm to shelf.',
      },
    ],
    shift: {
      legacy: 'Weekly batch inventory updates, spreadsheet-driven replenishment planning, and siloed B2B and retail systems.',
      modern: 'Real-time telemetry event streaming, automated fulfillment routing, and unified omni-channel customer visibility.',
    },
  },

  education: {
    id: 'education',
    name: 'Education',
    headline: 'Adaptive Learning Engines & Scalable Campus Infrastructure',
    tagline: 'Powering personalized curriculum progression, real-time assessment, and seamless institutional portals.',
    overview:
      'Modern education technology demands interactive, responsive environments that adapt to individual learner pacing. We build high-concurrency learning management platforms, real-time code execution sandboxes, and secure institutional credentialing networks.',
    techStack: ['React', 'Next.js', 'Node.js', 'WebSockets', 'PostgreSQL', 'Firecracker MicroVMs'],
    pillars: [
      {
        title: 'Adaptive Assessment & Pacing Engines',
        desc: 'Algorithmic knowledge-graph evaluators that dynamically adjust quiz difficulty and recommend curriculum based on demonstrated mastery.',
      },
      {
        title: 'Secure Cloud Code Sandboxes',
        desc: 'Sub-second ephemeral Firecracker MicroVM containers running isolated student code executions with strict resource governance.',
      },
      {
        title: 'Synchronous Collaborative Classrooms',
        desc: 'Low-latency canvas, audio, and code-pair sharing infrastructure supporting thousands of simultaneous interactive sessions.',
      },
      {
        title: 'Verifiable Digital Credentials & Transcripts',
        desc: 'Cryptographically signed institutional transcripts and micro-credentials ensuring instant global employer verification.',
      },
    ],
    shift: {
      legacy: 'Clunky, outdated LMS software with static PDF downloads, rigid grading rubrics, and fragile exam servers.',
      modern: 'Fluid interactive web applications, real-time collaborative sandboxes, and personalized adaptive curriculum graphs.',
    },
  },

  'energy-resources-and-utilities': {
    id: 'energy-resources-and-utilities',
    name: 'Energy, Resources, and Utilities',
    headline: 'Smart Grid Telemetry & Distributed Energy Orchestration',
    tagline: 'Managing bi-directional power distribution, SCADA integration, and sub-second asset telemetry.',
    overview:
      'The transition to renewable energy requires balancing decentralized generation from solar, wind, and storage with real-time grid consumption. We engineer industrial IoT ingestion pipelines, virtual power plant dispatch controllers, and predictive asset maintenance systems.',
    techStack: ['Rust', 'TimescaleDB', 'MQTT', 'Go', 'Apache Pulsar', 'Grafana'],
    pillars: [
      {
        title: 'High-Volume SCADA & IoT Telemetry Ingestion',
        desc: 'MQTT/Pulsar streaming pipelines absorbing millions of sensor readings per second from substations, turbines, and smart meters.',
      },
      {
        title: 'Virtual Power Plant (VPP) Dispatch Controllers',
        desc: 'Real-time optimization algorithms coordinating distributed batteries, micro-grids, and solar arrays for load shedding and grid stability.',
      },
      {
        title: 'Predictive Turbine & Asset Health Analytics',
        desc: 'Acoustic and vibration time-series anomaly detection alerting maintenance crews before mechanical failure occurs.',
      },
      {
        title: 'Dynamic Time-of-Use Billing Engines',
        desc: 'Complex tariff calculators processing continuous consumption streams to compute hourly spot-market energy settlement.',
      },
    ],
    shift: {
      legacy: 'Manual monthly meter readings, centralized fossil generation models, and siloed legacy SCADA consoles with zero cloud connectivity.',
      modern: 'High-frequency telemetry time-series analytics, decentralized grid orchestration, and automated energy trading gateways.',
    },
  },

  'life-sciences': {
    id: 'life-sciences',
    name: 'Life Sciences',
    headline: 'High-Throughput Genomic Pipelines & Clinical Trial Orchestration',
    tagline: 'Accelerating bioinformatic discovery with parallelized compute workflows and compliant data enclaves.',
    overview:
      'Biotech and pharmaceutical engineering require petabyte-scale data processing under strict FDA 21 CFR Part 11 and HIPAA compliance. We architect distributed bioinformatic workflow engines, decentralized clinical trial registries, and tamper-proof electronic lab notebooks.',
    techStack: ['Python', 'Nextflow', 'Rust', 'PostgreSQL', 'AWS Batch', 'OpenTelemetry'],
    pillars: [
      {
        title: 'Distributed Bioinformatic Pipelines',
        desc: 'Parallelized Nextflow and containerized genomic alignment workflows processing raw sequencing FASTQ files in hours rather than weeks.',
      },
      {
        title: 'Decentralized Clinical Trial Data Capture',
        desc: 'Secure mobile and web electronic data capture (EDC) portals with cryptographic audit trails for patient-reported outcomes.',
      },
      {
        title: 'HIPAA & FDA 21 CFR Part 11 Compliance Frameworks',
        desc: 'Immutable audit logs, cryptographically enforced electronic signatures, and role-based data isolation at the hardware level.',
      },
      {
        title: 'Compound Screening & Assay Management',
        desc: 'High-speed chemical similarity search algorithms and automated assay result ingestion for molecular discovery teams.',
      },
    ],
    shift: {
      legacy: 'Manual paper case report forms, fragmented server hard drives with unversioned bioinformatics scripts, and delayed trial audits.',
      modern: 'Fully auditable cloud-native compute pipelines, unified clinical trial registries, and sub-second molecular search indices.',
    },
  },

  healthcare: {
    id: 'healthcare',
    name: 'Healthcare',
    headline: 'Interoperable FHIR Data Exchange & Clinical Decision Systems',
    tagline: 'Bridging fragmented EHR silos with real-time patient telemetry and compliant telehealth infrastructure.',
    overview:
      'Healthcare delivery is hindered by siloed electronic health record (EHR) systems that cannot communicate. We engineer HL7/FHIR compliant data exchange bridges, real-time patient monitoring pipelines, and enterprise telehealth platforms with zero data leakage.',
    techStack: ['TypeScript', 'HL7/FHIR', 'Go', 'PostgreSQL', 'WebRTC', 'AWS HealthLake'],
    pillars: [
      {
        title: 'Unified FHIR R4 Interoperability Gateways',
        desc: 'Bi-directional EHR synchronization parsing HL7 and FHIR resources to provide a single, real-time patient longitudinal record.',
      },
      {
        title: 'Real-Time Bedside & Remote Patient Monitoring',
        desc: 'Sub-second vitals ingestion from wearable devices and ICU monitors triggering immediate clinical escalation alerts.',
      },
      {
        title: 'Zero-Latency Telehealth & Clinical Collaboration',
        desc: 'End-to-end encrypted WebRTC audio/video consultations with integrated medical record overlays and prescription dispatch.',
      },
      {
        title: 'Automated Prior Authorization Engines',
        desc: 'Rule-based algorithmic claim submission comparing clinical chart documentation against payer guidelines to eliminate authorization delays.',
      },
    ],
    shift: {
      legacy: 'Fax-machine referrals, incompatible legacy EHR databases, manual charting, and delayed clinical communication.',
      modern: 'Instant FHIR API interoperability, automated clinical documentation workflows, and secure mobile doctor-patient communication.',
    },
  },

  'high-tech': {
    id: 'high-tech',
    name: 'High Tech',
    headline: 'Developer Platform Engineering & Distributed Cloud Systems',
    tagline: 'Building developer infrastructure, cloud-native control planes, and high-velocity SaaS engines.',
    overview:
      'Technology companies require software that scales smoothly from thousands to millions of requests without architectural redesign. We build internal developer platforms, multi-tenant billing engines, distributed caching meshes, and zero-downtime CI/CD deployment control planes.',
    techStack: ['Go', 'Rust', 'Kubernetes', 'gRPC', 'PostgreSQL', 'Redis', 'OpenTelemetry'],
    pillars: [
      {
        title: 'Multi-Tenant Control Planes & Microservices',
        desc: 'Horizontally scalable application backends with strict tenant isolation, dynamic rate-limiting, and distributed circuit breaking.',
      },
      {
        title: 'Internal Developer Platforms (IDP)',
        desc: 'Self-service environment provisioning, declarative GitOps workflows, and automated preview deployments across cloud clusters.',
      },
      {
        title: 'High-Throughput Event Ingestion & Webhooks',
        desc: 'Fault-tolerant webhook delivery engines with exponential backoff retries and cryptographic signature verification.',
      },
      {
        title: 'Distributed Tracing & Telemetry Mesh',
        desc: 'End-to-end OpenTelemetry instrumentation tracking request lifecycles across hundreds of microservices with sub-millisecond trace latency.',
      },
    ],
    shift: {
      legacy: 'Monolithic codebases requiring manual server updates, fragile staging environments, and poor multi-tenant data separation.',
      modern: 'Modular micro-services, automated container orchestration, declarative infrastructure-as-code, and instant rollbacks.',
    },
  },

  retail: {
    id: 'retail',
    name: 'Retail',
    headline: 'Headless Omni-Channel Commerce & Edge Inventory Engines',
    tagline: 'Sub-100ms global storefronts, unified cart architectures, and synchronized point-of-sale data meshes.',
    overview:
      'Modern retail success depends on millisecond page loads and continuous inventory synchronization across digital apps and physical stores. We build headless commerce architectures, dynamic pricing algorithms, and resilient point-of-sale (POS) synchronization engines.',
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Algolia/Elasticsearch', 'Stripe'],
    pillars: [
      {
        title: 'Headless Multi-Tenant Storefronts',
        desc: 'Sub-100ms globally edge-rendered commerce storefronts optimized for Core Web Vitals, maximum mobile conversion, and SEO superiority.',
      },
      {
        title: 'Real-Time Point-of-Sale (POS) Sync',
        desc: 'Offline-capable edge POS gateways synchronizing local checkout registers with global inventory ledgers the moment connectivity returns.',
      },
      {
        title: 'Sub-Millisecond Search & Merchandising',
        desc: 'Typo-tolerant instant search with personalized category sorting and live promotional pricing engines handling millions of SKUs.',
      },
      {
        title: 'Universal Cart & Checkout Services',
        desc: 'Resilient checkout pipelines supporting local currencies, buy-now-pay-later (BNPL), and automated fraud scoring with zero checkout drop-off.',
      },
    ],
    shift: {
      legacy: 'Slow monolithic e-commerce platforms with 4-second page loads, inventory overselling, and disconnected retail stores.',
      modern: 'Headless edge-rendered storefronts, real-time omni-channel inventory sync, and seamless 1-click checkout experiences.',
    },
  },

  manufacturing: {
    id: 'manufacturing',
    name: 'Manufacturing',
    headline: 'Industrial Autonomy & Factory Floor Telemetry',
    tagline: 'Bridging operational technology (OT) with cloud analytics for zero-downtime smart production lines.',
    overview:
      'Smart factories demand real-time integration between PLC controllers, robotic assembly arms, and enterprise planning systems. We engineer industrial edge gateways, automated visual quality inspection pipelines, and overall equipment effectiveness (OEE) telemetry dashboards.',
    techStack: ['Rust', 'Python', 'OpenCV', 'MQTT', 'InfluxDB', 'Kafka'],
    pillars: [
      {
        title: 'Industrial Edge IoT Gateway Telemetry',
        desc: 'Low-footprint edge runtimes translating legacy Modbus, Profinet, and OPC-UA protocol messages into structured real-time JSON event streams.',
      },
      {
        title: 'Automated Computer Vision Quality Inspection',
        desc: 'High-speed camera feeds processed at the edge using lightweight inference models detecting micro-defects on assembly lines in real time.',
      },
      {
        title: 'Overall Equipment Effectiveness (OEE) Engines',
        desc: 'Continuous tracking of machine availability, performance rate, and quality yield alerting floor managers to micro-stoppages instantly.',
      },
      {
        title: 'Digital Twin Assembly Line Orchestration',
        desc: 'Physics-informed simulation engines validating production schedule adjustments and tooling reconfigurations before physical changeover.',
      },
    ],
    shift: {
      legacy: 'Isolated factory machines recording data to local proprietary memory cards, manual paper clipboards, and reactive maintenance.',
      modern: 'Unified industrial IoT edge gateways, continuous cloud telemetry, automated visual inspection, and predictive maintenance.',
    },
  },

  'public-services': {
    id: 'public-services',
    name: 'Public Services',
    headline: 'Citizen-Centric Digital Infrastructure & Accessible Portals',
    tagline: 'Modernizing government digital services with uncompromising accessibility, security, and cloud elasticity.',
    overview:
      'Public sector software must be reliable under sudden massive citizen demand while maintaining strict accessibility (WCAG AAA) and data sovereignty. We build resilient citizen identity gateways, automated permit processing workflows, and high-concurrency public benefit distribution platforms.',
    techStack: ['React', 'TypeScript', 'PostgreSQL', 'Go', 'Docker', 'OpenPolicyAgent'],
    pillars: [
      {
        title: 'High-Concurrency Citizen Portals',
        desc: 'Resilient web and mobile self-service portals handling sudden tax filing and disaster relief traffic surges without server timeouts.',
      },
      {
        title: 'Universal Accessibility (WCAG 2.1 AAA)',
        desc: 'Every interface is engineered from the ground up for full screen-reader compatibility, high contrast modes, and keyboard navigation.',
      },
      {
        title: 'Automated Permitting & Licensing Pipelines',
        desc: 'Digital document intake with automated verification, department routing, and status telemetry reducing processing times from months to days.',
      },
      {
        title: 'Sovereign Zero-Trust Security & RBAC',
        desc: 'Strict least-privilege access controls, comprehensive non-repudiation audit logs, and data residency in sovereign government cloud regions.',
      },
    ],
    shift: {
      legacy: 'In-person paper applications, long bureaucratic queues, fragile legacy state databases, and inaccessible web portals.',
      modern: 'Mobile-first, fully accessible citizen self-service, instant identity verification, and automated inter-agency digital workflows.',
    },
  },

  'travel-and-logistics': {
    id: 'travel-and-logistics',
    name: 'Travel and Logistics',
    headline: 'Dynamic Route Optimization & Global Fleet Telemetry',
    tagline: 'Synchronizing multi-modal freight, flight scheduling, and automated warehouse dispatch in real time.',
    overview:
      'Global logistics requires navigating dynamic customs regulations, unpredictable weather, and tight delivery windows. We build real-time GPS fleet tracking systems, multi-modal container tracking pipelines, and high-throughput passenger booking reservation engines.',
    techStack: ['Go', 'Rust', 'PostGIS', 'Kafka', 'Redis', 'WebSockets'],
    pillars: [
      {
        title: 'Real-Time Fleet & Cargo Telematics',
        desc: 'Sub-second tracking of GPS, temperature, and vehicle diagnostics across thousands of active freight trucks and container ships.',
      },
      {
        title: 'Dynamic Multi-Modal Route Optimization',
        desc: 'Graph routing algorithms dynamically recalculating transit paths based on live traffic, weather alerts, and fuel pricing.',
      },
      {
        title: 'High-Concurrency Reservation & Ticketing',
        desc: 'Seat inventory and booking locks engineered with distributed atomic transactions preventing overbooking during fare sales.',
      },
      {
        title: 'Automated Warehouse Dispatch & Cross-Docking',
        desc: 'Event-driven cross-docking algorithms matching incoming shipments with outgoing delivery routes to eliminate staging delays.',
      },
    ],
    shift: {
      legacy: 'Manual dispatch calls, paper bills of lading, delayed satellite tracking updates, and fragmented regional logistics software.',
      modern: 'Continuous real-time GPS telemetry, automated dynamic route recalculation, and transparent global supply chain dashboards.',
    },
  },
};

export const getIndustryBySlugOrName = (input) => {
  if (!input) return null;
  const normalized = input.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  if (industriesData[normalized]) return industriesData[normalized];
  return (
    Object.values(industriesData).find(
      (item) => item.name.toLowerCase() === input.toLowerCase() || item.id === normalized
    ) || null
  );
};


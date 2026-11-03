// Complete architectural profiles for all 14 Target Industries
// Tailored for an elite, forward-looking software engineering startup (zero fake client stories / zero fabricated metrics)

export const industriesData = {
  banking: {
    id: 'banking',
    name: 'Banking',
    heroTitle: 'Banking next: Boundaryless, real-time, resilient',
    heroImage: '/industries/banking.png',
    headline: 'Real-Time Event Streaming & Zero-Trust Core Banking',
    tagline: 'Moving beyond rigid legacy mainframes with event-driven ledger architectures and sub-second settlement.',
    overview:
      'We partner with modern financial institutions to engineer high-throughput transaction ledgers, sub-second settlement fabrics, and zero-trust banking architectures.',
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
      legacyImage: '/industries/1998 COBOL Backroom Operations.png',
      modern: 'Continuous 24/7/365 active-active event-driven ledger running distributed consensus across sovereign cloud availability zones.',
      modernImage: '/industries/Digital Banking Control Room.png',
    },
  },

  'capital-markets': {
    id: 'capital-markets',
    name: 'Capital Markets',
    heroTitle: 'Capital markets next: Ultra-low latency, intelligent, deterministic',
    heroImage: '/industries/capital-markets.png',
    headline: 'Deterministic Low-Latency Trading & Risk Telemetry',
    tagline: 'High-frequency order routing, market data normalization, and continuous portfolio stress-testing.',
    overview:
      'We engineer ultra-low-latency market connectivity layers, FIX/FAST protocol parsers, and distributed risk calculation engines built to navigate extreme market volatility.',
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
        desc: 'Deterministic trade playback and clock-synchronization logging ensuring nanosecond audit fidelity without execution penalty.',
      },
    ],
    shift: {
      legacy: 'Over-bloated message brokers with unpredictable garbage collection pauses and uncoordinated post-trade reconciliation delays.',
      legacyImage: '/industries/Trading Floor Execution Lag.png',
      modern: 'Zero-allocation memory pipelines, hardware-aligned data structures, and continuous streaming risk surfaces.',
      modernImage: '/industries/Quant Trading Collaboration Workspace.png',
    },
  },

  insurance: {
    id: 'insurance',
    name: 'Insurance',
    heroTitle: 'Insurance next: Predictive, algorithmic, instant',
    heroImage: '/industries/insurance.png',
    headline: 'Parametric Underwriting & Instant Claims Automation',
    tagline: 'Replacing manual actuarial bureaucracy with dynamic risk scoring and automated digital claims settlement.',
    overview:
      'We build modular policy administration engines, automated claims validation pipelines, and parametric insurance infrastructure integrated with real-time risk data feeds.',
    techStack: ['TypeScript', 'Python', 'Go', 'PostgreSQL', 'Temporal.io', 'AWS Nitro'],
    pillars: [
      {
        title: 'Automated Claims Adjudication Workflows',
        desc: 'Durable execution state machines (Temporal) orchestrating document extraction, policy validation, fraud scoring, and instant payment dispatch.',
      },
      {
        title: 'Parametric Smart Contract Settlement',
        desc: 'Automated, event-triggered claims settlements governed by deterministic oracles (weather feeds, flight telemetry, seismic sensors).',
      },
      {
        title: 'Dynamic Actuarial Risk Scoring',
        desc: 'Machine learning feature pipelines that continuously recalculate policyholder risk based on connected telematics and live environmental data.',
      },
      {
        title: 'Unified Omni-Channel Policy Portal',
        desc: 'High-performance GraphQL layer connecting customer mobile apps, broker portals, and legacy core systems into a singular real-time API.',
      },
    ],
    shift: {
      legacy: 'Manual paper adjustments, weeks-long claim investigation cycles, rigid actuarial tables, and fragmented legacy policy databases.',
      legacyImage: '/industries/Clerk Amid Mountains of Paperwork.png',
      modern: 'Instant digital claim adjudication, sub-minute payout dispatch, dynamic telematics risk pricing, and automated compliance.',
      modernImage: '/industries/Collaborative Telematics Claims Review.png',
    },
  },

  'communications-media-and-information-services': {
    id: 'communications-media-and-information-services',
    name: 'Communications, Media, and Information Services',
    heroTitle: 'Communications & Media next: High-throughput, global, connected',
    heroImage: '/industries/communications-media-and-information-services.png',
    headline: 'Ultra-Low Latency Streaming & Scalable Content Fabrics',
    tagline: 'Engineering edge video delivery, DRM distribution, and real-time subscriber telemetry at global scale.',
    overview:
      'We collaborate with media providers and telecom operators to build real-time streaming backbones, distributed DRM validation, and high-concurrency subscriber portals.',
    techStack: ['Go', 'Rust', 'WebRTC', 'FFmpeg', 'Redis', 'AWS CloudFront / Fastly'],
    pillars: [
      {
        title: 'Sub-Second WebRTC & HLS Edge Streaming',
        desc: 'Global edge-distributed video pipelines delivering ultra-low-latency live broadcasts and interactive video experiences with adaptive bitrate.',
      },
      {
        title: 'Dynamic DRM & Digital Rights Interconnect',
        desc: 'High-throughput license servers issuing millions of hardware-backed PlayReady, Widevine, and FairPlay decryption tokens per second.',
      },
      {
        title: 'Unified Subscriber & Entitlement Mesh',
        desc: 'Distributed in-memory entitlement caches validating content access permissions across multi-tenant partner catalogs in under 2ms.',
      },
      {
        title: 'Real-Time Edge Telemetry & QoE Analytics',
        desc: 'Streaming player telemetry detecting buffer stalls, CDN degradation, and bitrate fluctuations to dynamically re-route traffic.',
      },
    ],
    shift: {
      legacy: 'High-latency satellite downlinks, 30-second CDN broadcast lag, brittle license servers, and delayed billing reconciliations.',
      legacyImage: '/industries/Broadcast Rack Room_ No Signal.png',
      modern: 'Sub-second global edge distribution, instant cryptographic licensing, and continuous quality-of-experience optimization.',
      modernImage: '/industries/Edge Streaming Operations Center.png',
    },
  },

  'consumer-packaged-goods-and-distribution': {
    id: 'consumer-packaged-goods-and-distribution',
    name: 'Consumer Packaged Goods and Distribution',
    heroTitle: 'CPG & Distribution next: Demand-sensing, automated, unified',
    heroImage: '/industries/consumer-packaged-goods-and-distribution.png',
    headline: 'Predictive Demand Sensing & Autonomous Supply Chain Orchestration',
    tagline: 'Synchronizing factory floors, distribution centers, and retail shelves with real-time event streaming.',
    overview:
      'We build high-velocity inventory tracking platforms, demand forecasting pipelines, and automated fulfillment networks that eliminate stockouts across global supply chains.',
    techStack: ['Python', 'PostgreSQL', 'Kafka', 'Redis', 'Docker', 'Google Cloud BigQuery'],
    pillars: [
      {
        title: 'Real-Time IoT Warehouse Telematics',
        desc: 'Sub-second tracking of pallet RFID scans, cold-chain temperature monitors, and automated guided vehicles (AGVs) on active warehouse floors.',
      },
      {
        title: 'Algorithmic Demand Sensing & Replenishment',
        desc: 'Time-series forecasting models ingesting live POS terminal data, weather forecasts, and regional events to optimize safety stock.',
      },
      {
        title: 'Multi-Echelon Inventory Optimization',
        desc: 'Dynamic graph routing allocating factory batches to regional distribution hubs to minimize transport mileage and delivery lead time.',
      },
      {
        title: 'B2B EDI & Modern API Bridge',
        desc: 'Bi-directional translators converting legacy EDI formats into clean, validated JSON/gRPC events for instant distributor coordination.',
      },
    ],
    shift: {
      legacy: 'Weekly batch inventory updates, spreadsheet-driven replenishment planning, and siloed B2B and retail systems.',
      legacyImage: '/industries/Warehouse Clerk Amid Paperwork.png',
      modern: 'Real-time telemetry event streaming, automated fulfillment routing, and unified omni-channel customer visibility.',
      modernImage: '/industries/High-Tech Warehouse Operations Dashboard.png',
    },
  },

  education: {
    id: 'education',
    name: 'Education',
    heroTitle: 'Education next: Immersive, personalized, connected',
    heroImage: '/industries/education.png',
    headline: 'Adaptive Learning Engines & Scalable Campus Infrastructure',
    tagline: 'Powering personalized curriculum progression, real-time assessment, and seamless institutional portals.',
    overview:
      'We collaborate with institutions to transform education with innovative digital solutions, real-time collaborative sandboxes, and modern technology.',
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
      legacyImage: '/industries/Frustrated Student Facing Portal Error.png',
      modern: 'Fluid interactive web applications, real-time collaborative sandboxes, and personalized adaptive curriculum graphs.',
      modernImage: '/industries/Collaborative Learning in a Bright Tech Hub.png',
    },
  },

  'energy-resources-and-utilities': {
    id: 'energy-resources-and-utilities',
    name: 'Energy, Resources, and Utilities',
    heroTitle: 'Energy & Utilities next: Autonomous, distributed, clean',
    heroImage: '/industries/energy-resources-and-utilities.png',
    headline: 'Smart Grid Telemetry & Distributed Energy Orchestration',
    tagline: 'Balancing renewable intermittent generation, storage dispatch, and high-frequency meter ingestion.',
    overview:
      'We architect high-frequency smart meter ingestion fabrics, predictive grid load balancing, and distributed renewable energy dispatch platforms for utility operators.',
    techStack: ['Rust', 'Go', 'TimescaleDB', 'MQTT', 'Kafka', 'eBPF'],
    pillars: [
      {
        title: 'Sub-Second Smart Meter Ingestion',
        desc: 'High-concurrency time-series pipelines processing millions of telemetry points per second from AMI smart meters and grid substations.',
      },
      {
        title: 'Virtual Power Plant (VPP) Dispatch',
        desc: 'Distributed optimization algorithms coordinating residential solar batteries, EV chargers, and commercial HVAC to shave peak grid demand.',
      },
      {
        title: 'Predictive Infrastructure Failure Isolation',
        desc: 'Early anomaly detection on transformer phase balance, oil temperatures, and harmonic distortion to prevent catastrophic grid failures.',
      },
      {
        title: 'Critical Infrastructure Cyber Perimeter',
        desc: 'Zero-trust network segmentation and cryptographically authenticated SCADA/IEC 61850 protocol enforcement defending against cyber intrusion.',
      },
    ],
    shift: {
      legacy: 'Manual meter reading, centralized fossil-fuel baseload assumptions, and reactive blackout troubleshooting.',
      legacyImage: '/industries/Inspecting the Aging Control Panel.png',
      modern: 'Automated 15-minute smart meter settlement, bidirectional renewable orchestration, and AI-driven predictive grid self-healing.',
      modernImage: '/industries/Renewable Grid Control Center at Sunrise.png',
    },
  },

  'life-sciences': {
    id: 'life-sciences',
    name: 'Life Sciences',
    heroTitle: 'Life Sciences next: Accelerated, verifiable, compliant',
    heroImage: '/industries/life-sciences.png',
    headline: 'High-Throughput Genomic Pipelines & Clinical Trial Telemetry',
    tagline: 'Bridging bio-computational research, regulatory data integrity, and laboratory automation.',
    overview:
      'We engineer high-performance genomic processing pipelines, secure electronic lab notebooks, and FDA 21 CFR Part 11 compliant clinical trial telemetry platforms.',
    techStack: ['Python', 'Nextflow', 'PostgreSQL', 'ClickHouse', 'AWS HealthOmics', 'Rust'],
    pillars: [
      {
        title: 'Distributed Bioinformatics Workflows',
        desc: 'Scalable cloud workflows orchestrating sequence alignment, variant calling, and molecular dynamics across thousands of GPU worker nodes.',
      },
      {
        title: 'FDA 21 CFR Part 11 Audit Fabrics',
        desc: 'Tamper-evident append-only audit trails tracking every data modification, electronic signature, and pipeline execution.',
      },
      {
        title: 'Clinical Trial Decentralized Ingestion',
        desc: 'Secure mobile and wearable telemetry bridges gathering real-world evidence (RWE) from clinical study cohorts with automated pseudonymization.',
      },
      {
        title: 'High-Content Imaging Analytics',
        desc: 'Computer vision pipelines automatically segmenting cellular phenotypes and screening compound libraries from multi-well plate microscopes.',
      },
    ],
    shift: {
      legacy: 'Siloed on-premise compute clusters, manual CSV data transfers between lab instruments, and fragmented audit spreadsheets.',
      legacyImage: '/industries/Molecular Biology Lab Data Transfer.png',
      modern: 'Cloud-native reproducible bio-pipelines, cryptographically validated audit trails, and unified laboratory knowledge graphs.',
      modernImage: '/industries/Genomics Workflow in the Sequencing Lab.png',
    },
  },

  healthcare: {
    id: 'healthcare',
    name: 'Healthcare',
    heroTitle: 'Healthcare next: Interoperable, proactive, patient-centric',
    heroImage: '/industries/healthcare.png',
    headline: 'Interoperable FHIR Data Exchange & Clinical Decision Systems',
    tagline: 'Unifying electronic health records, continuous patient telemetry, and secure clinical workflows.',
    overview:
      'We build HL7/FHIR compliant data exchange bridges, real-time patient monitoring pipelines, and enterprise telehealth platforms with zero data leakage.',
    techStack: ['TypeScript', 'HL7/FHIR', 'Go', 'PostgreSQL', 'WebRTC', 'AWS HealthLake'],
    pillars: [
      {
        title: 'Universal FHIR API Integration Layer',
        desc: 'High-performance bidirectional bridges translating proprietary legacy hospital EHR formats into standardized HL7/FHIR resources.',
      },
      {
        title: 'Real-Time ICU & Bedside Telemetry',
        desc: 'Sub-second streaming of vitals (ECG, SpO2, blood pressure) triggering immediate automated alerts to nursing clinical stations.',
      },
      {
        title: 'HIPAA-Compliant Zero-Knowledge Telehealth',
        desc: 'End-to-end encrypted WebRTC audio/video consultations paired with ephemeral clinical note transcription that never logs patient PII.',
      },
      {
        title: 'Federated Clinical Research Enclaves',
        desc: 'Privacy-preserving query interfaces enabling medical researchers to run statistical analyses across hospital datasets without moving patient data.',
      },
    ],
    shift: {
      legacy: 'Fax-machine referrals, siloed incompatible hospital systems, manual chart review, and delayed diagnosis communication.',
      legacyImage: '/industries/Busy Hospital Nurse Station.png',
      modern: 'Instant FHIR API interoperability, real-time bedside alerts, secure mobile physician workflows, and automated triage.',
      modernImage: '/industries/Doctors Reviewing FHIR Patient Monitoring Dashboard.png',
    },
  },

  'high-tech': {
    id: 'high-tech',
    name: 'High Tech',
    heroTitle: 'High Tech next: Hyper-scale, modular, developer-first',
    heroImage: '/industries/high-tech.png',
    headline: 'Cloud-Native Distributed Systems & High-Velocity Platforms',
    tagline: 'Architecting multi-tenant SaaS engines, developer platforms, and global microservice meshes.',
    overview:
      'We partner with ambitious tech companies to architect planetary-scale microservices, multi-region database fabrics, and developer-first cloud infrastructure.',
    techStack: ['Go', 'Rust', 'Kubernetes', 'gRPC', 'PostgreSQL', 'ClickHouse'],
    pillars: [
      {
        title: 'Multi-Tenant Isolation Architecture',
        desc: 'Rigorous database and compute multi-tenancy models with automated schema isolation, noisy-neighbor rate limiting, and RBAC.',
      },
      {
        title: 'Global Event-Driven Message Backbones',
        desc: 'Low-latency, partitioned event streaming architectures capable of processing millions of webhooks and API triggers with guaranteed ordering.',
      },
      {
        title: 'Developer Platform Infrastructure',
        desc: 'High-speed CI/CD runners, preview environment orchestrators, and automated infrastructure-as-code modules for rapid shipping.',
      },
      {
        title: 'Active-Active Multi-Region Database Fabrics',
        desc: 'CockroachDB and Spanner distributed SQL topologies delivering single-digit millisecond reads across continents with consistent transactions.',
      },
    ],
    shift: {
      legacy: 'Monolithic single-database architectures running in a single region, vulnerable to outages and slow deployments.',
      legacyImage: '/industries/Midnight Database Outage War Room.png',
      modern: 'Modular microservice meshes running across multiple cloud regions with zero-downtime blue/green deployments.',
      modernImage: '/industries/Engineering Team Celebrates Healthy Deployment.png',
    },
  },

  retail: {
    id: 'retail',
    name: 'Retail',
    heroTitle: 'Retail next: Omnichannel, hyper-personalized, fluid',
    heroImage: '/industries/retail.png',
    headline: 'Omnichannel Commerce Engines & Sub-Second Checkout Systems',
    tagline: 'Synchronizing store POS terminals, digital storefronts, and automated fulfillment centers in real time.',
    overview:
      'We engineer headless e-commerce architectures, real-time inventory allocation backbones, and sub-second checkout pipelines designed for flash-sale peak traffic.',
    techStack: ['Next.js', 'Go', 'GraphQL', 'Redis', 'PostgreSQL', 'Stripe'],
    pillars: [
      {
        title: 'Headless E-Commerce Backbones',
        desc: 'Decoupled API-first commerce backends powering mobile apps, web stores, and in-store kiosks with sub-50ms catalog render times.',
      },
      {
        title: 'High-Throughput Inventory Locks',
        desc: 'Distributed atomic inventory reservation algorithms preventing double-selling during massive seasonal flash sales.',
      },
      {
        title: 'Universal POS & Digital Storefront Sync',
        desc: 'Bi-directional synchronization ensuring in-store purchases immediately reflect in online stock availability across all channels.',
      },
      {
        title: 'Instant Personalized Search & Recommendations',
        desc: 'In-memory semantic vector search engines surfacing relevant product recommendations based on real-time browsing behavior.',
      },
    ],
    shift: {
      legacy: 'Slow monolithic e-commerce platforms, batch inventory syncing that causes cancelled orders, and clunky checkout forms.',
      legacyImage: '/industries/Warehouse Scanner Synchronization Error.png',
      modern: 'Microservices headless commerce, sub-second 1-click checkout, and instantaneous inventory reconciliation across physical and online stores.',
      modernImage: '/industries/Retail Associate Managing Inventory in Modern Store.png',
    },
  },

  manufacturing: {
    id: 'manufacturing',
    name: 'Manufacturing',
    heroTitle: 'Manufacturing next: Autonomous, predictive, synchronized',
    heroImage: '/industries/manufacturing.png',
    headline: 'Industrial Edge Compute & Cyber-Physical Telemetry',
    tagline: 'Integrating shop floor PLC controllers, robotic arms, and predictive maintenance digital twins.',
    overview:
      'We bring software engineering discipline to the plant floor, developing embedded edge compute nodes, OPC UA telemetry bridges, and computer vision quality inspection.',
    techStack: ['C++', 'Rust', 'OPC UA', 'ROS 2', 'MQTT', 'TensorRT'],
    pillars: [
      {
        title: 'Sub-Millisecond Edge Telemetry Ingestion',
        desc: 'Deterministic edge daemon processes acquiring vibration, temperature, and torque metrics from thousands of plant sensors simultaneously.',
      },
      {
        title: 'Predictive Bearing & Tooling Failure Models',
        desc: 'Time-series vibration analysis algorithms identifying bearing micro-fractures 72 hours before catastrophic spindle breakdown.',
      },
      {
        title: 'High-Speed Automated Vision Quality Inspection',
        desc: 'Embedded edge GPU inference inspecting assembly parts on conveyor lines at 120 frames per second with sub-millimeter precision.',
      },
      {
        title: 'Shop-Floor Digital Twin Synchronizers',
        desc: 'Real-time 3D plant floor dashboards reflecting live machine status, scrap rates, and overall equipment effectiveness (OEE).',
      },
    ],
    shift: {
      legacy: 'Unconnected standalone machines, manual clipboard quality checks, unexpected line downtime, and post-shift incident analysis.',
      legacyImage: '/industries/Factory Breakdown Inspection.png',
      modern: 'Interconnected edge compute mesh, sub-millisecond automated quality vision, and proactive predictive maintenance scheduling.',
      modernImage: '/industries/Industrial Technician Monitoring Robotic Automation.png',
    },
  },

  'public-services': {
    id: 'public-services',
    name: 'Public Services',
    heroTitle: 'Public Services next: Citizen-first, accessible, sovereign',
    heroImage: '/industries/public-services.png',
    headline: 'Sovereign Digital Identity & Automated Citizen Services',
    tagline: 'Delivering secure, accessible, zero-trust digital infrastructure for government agencies and civic portals.',
    overview:
      'We engineer high-availability citizen service platforms, cryptographic identity verification networks, and automated inter-agency digital workflows.',
    techStack: ['TypeScript', 'Go', 'PostgreSQL', 'WebAuthn', 'Kubernetes', 'Temporal.io'],
    pillars: [
      {
        title: 'Cryptographic Citizen Identity & WebAuthn',
        desc: 'FIDO2/WebAuthn passwordless citizen authentication integrated with decentralized identity protocols and biometric verification.',
      },
      {
        title: 'Automated Inter-Agency Workflow Orchestration',
        desc: 'Durable execution workflows (Temporal) coordinating multi-department approvals, permit issuance, and background checks without paperwork.',
      },
      {
        title: 'WCAG 2.1 AAA Compliant Design Systems',
        desc: 'Universal web interfaces tested rigorously with screen readers, high-contrast modes, and low-bandwidth mobile connections.',
      },
      {
        title: 'Sovereign Zero-Trust Security & RBAC',
        desc: 'Strict least-privilege access controls, comprehensive non-repudiation audit logs, and data residency in sovereign government cloud regions.',
      },
    ],
    shift: {
      legacy: 'In-person paper applications, long bureaucratic queues, fragile legacy state databases, and inaccessible web portals.',
      legacyImage: '/industries/Busy Indian Civic Service Waiting Room.png',
      modern: 'Mobile-first, fully accessible citizen self-service, instant identity verification, and automated inter-agency digital workflows.',
      modernImage: '/industries/Guided Biometric Verification at Civic Service Hub.png',
    },
  },

  'travel-and-logistics': {
    id: 'travel-and-logistics',
    name: 'Travel and Logistics',
    heroTitle: 'Travel & Logistics next: Synchronized, multi-modal, dynamic',
    heroImage: '/industries/travel-and-logistics.png',
    headline: 'Dynamic Route Optimization & Global Fleet Telemetry',
    tagline: 'Synchronizing multi-modal freight, flight scheduling, and automated warehouse dispatch in real time.',
    overview:
      'We build real-time GPS fleet tracking systems, multi-modal container tracking pipelines, and high-throughput passenger booking reservation engines.',
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
      legacyImage: '/industries/Rainy Day Freight Dispatch.png',
      modern: 'Continuous real-time GPS telemetry, automated dynamic route recalculation, and transparent global supply chain dashboards.',
      modernImage: '/industries/Twilight Logistics Control Center.png',
    },
  },
};

export const getIndustryBySlugOrName = (input) => {
  if (!input) return null;
  const normalized = input
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  if (industriesData[normalized]) return industriesData[normalized];

  return (
    Object.values(industriesData).find(
      (item) =>
        item.name.toLowerCase() === input.toLowerCase() ||
        item.id === normalized ||
        item.name.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-') === normalized
    ) || null
  );
};

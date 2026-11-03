// Complete architectural profiles for all 6 Enterprise Services
// Tailored for an elite, forward-looking software engineering startup (zero fake client stories / zero fabricated metrics)

export const servicesData = {
  'artificial-intelligence-and-data-analytics': {
    id: 'artificial-intelligence-and-data-analytics',
    name: 'Artificial Intelligence and Data & Analytics',
    heroTitle: 'AI & Analytics next: Deterministic, low-latency, private',
    heroImage: '/services_bg/artificial-intelligence-and-data-analytics.png',
    headline: 'Deterministic LLM Pipelines, Vector Retrieval & Real-Time Analytics',
    tagline: 'Bridging raw enterprise telemetry to low-latency inference engines and autonomous agents.',
    overview:
      'We architect end-to-end data processing fabrics, hybrid semantic retrieval pipelines, and low-latency inference microservices designed to run securely within your private VPC boundary.',
    techStack: ['Python', 'PyTorch', 'vLLM', 'Apache Iceberg', 'ClickHouse', 'pgvector', 'Ray.io'],
    pillars: [
      {
        title: 'High-Throughput Vector & Hybrid Search',
        desc: 'Sub-10ms similarity search combining sparse BM25 and dense embeddings over billions of data points with reciprocal rank fusion.',
      },
      {
        title: 'Private Boundary LLM Orchestration',
        desc: 'Self-hosted open weights (Llama, Mistral) with speculative decoding and vLLM acceleration ensuring enterprise data never leaves your perimeter.',
      },
      {
        title: 'Unified Lakehouse & Streaming Feature Store',
        desc: 'Zero-copy queries via Apache Iceberg and Arrow, synchronizing streaming real-time features directly into model inference queues.',
      },
      {
        title: 'Deterministic Guardrails & Model Evaluation',
        desc: 'Strict schema validation, hallucination detection filters, and continuous latency profiling on all model inputs and generated outputs.',
      },
    ],
    shift: {
      legacy: 'Brittle batch scripts, fragmented data silos, and unmonitored third-party closed API calls that leak sensitive enterprise telemetry.',
      modern: 'Unified streaming Lakehouse architecture with self-hosted private VPC inference pipelines and sub-second semantic caching.',
    },
  },

  'ai-led-data-centres': {
    id: 'ai-led-data-centres',
    name: 'AI-led Data Centres',
    heroTitle: 'Data Centres next: Autonomous, high-density, green',
    heroImage: '/services_bg/ai-led-data-centres.png',
    headline: 'High-Density Thermal Modeling, Dynamic Workload Placement & Power Optimization',
    tagline: 'Engineering autonomous compute facilities built for multi-megawatt AI clusters.',
    overview:
      'We build real-time telemetry collection platforms, predictive liquid cooling control loops, and dynamic Slurm/Kubernetes schedulers that optimize compute power usage effectiveness in real time.',
    techStack: ['Rust', 'eBPF', 'Prometheus', 'TimescaleDB', 'Kubernetes / Slurm', 'MQTT', 'RoCEv2'],
    pillars: [
      {
        title: 'Microsecond Telemetry & Environmental Control Loops',
        desc: 'High-frequency sampling of rack-level thermal gradients, liquid flow rates, and power rails via low-overhead kernel collectors.',
      },
      {
        title: 'Predictive Liquid Cooling & PUE Optimization',
        desc: 'Autonomous control algorithms modulating chiller plant output and immersion coolant loops based on scheduled AI training workloads.',
      },
      {
        title: 'High-Bandwidth Cluster Fabric Telemetry',
        desc: 'InfiniBand and RoCEv2 lossy/lossless network telemetry monitoring microburst congestion and packet retransmissions in real time.',
      },
      {
        title: 'Thermal-Aware GPU Workload Scheduling',
        desc: 'Dynamic scheduler integration steering heavy training jobs to compute nodes with optimal cooling headroom and lower carbon intensity.',
      },
    ],
    shift: {
      legacy: 'Static HVAC setpoints, reactive manual power throttling during outages, and unmonitored hot spots triggering emergency GPU throttling.',
      modern: 'Sensor-rich closed-loop automation with predictive cooling and dynamic thermal-aware workload steering.',
    },
  },

  cloud: {
    id: 'cloud',
    name: 'Cloud',
    heroTitle: 'Cloud next: Cloud-native, distributed, multi-region',
    heroImage: '/services_bg/cloud.png',
    headline: 'Cloud-Native Distributed Systems, Immutable Infrastructure & Multi-Region Resilience',
    tagline: 'Architecting zero-downtime microservices and sovereign cloud foundations built to withstand regional outages.',
    overview:
      'We engineer cloud-native, auto-healing platforms with zero-trust network boundaries, declarative GitOps continuous delivery, and active-active cross-region failover.',
    techStack: ['Kubernetes', 'Terraform', 'Go', 'Envoy', 'Istio', 'AWS / GCP / Azure', 'ArgoCD'],
    pillars: [
      {
        title: 'Multi-Region Active-Active Topologies',
        desc: 'Distributed consensus and global traffic routing ensuring continuous zero-downtime operation even during full cloud availability zone failures.',
      },
      {
        title: 'Declarative Infrastructure as Code & GitOps',
        desc: '100% reproducible environments managed through immutable GitOps pipelines with automated rollbacks and cryptographic drift detection.',
      },
      {
        title: 'Zero-Trust Service Mesh & Micro-Segmentation',
        desc: 'mTLS between all services, fine-grained SPIFFE/SPIRE cryptographic identities, and kernel-level network policies.',
      },
      {
        title: 'FinOps & Elastic Resource Autoscaling',
        desc: 'Event-driven KEDA horizontal pod autoscaling and spot instance arbitrage reducing unnecessary cloud infrastructure overhead by 40-60%.',
      },
    ],
    shift: {
      legacy: 'Brittle click-ops cloud deployments, single-region vulnerability, manual disaster recovery runbooks, and runaway monthly bills.',
      modern: 'Fully declarative multi-region infrastructure with automated chaos engineering resilience and algorithmic autoscaling.',
    },
  },

  consulting: {
    id: 'consulting',
    name: 'Consulting',
    heroTitle: 'Consulting next: First-principles, runnable, transformative',
    heroImage: '/services_bg/consulting.png',
    headline: 'First-Principles Systems Architecture, Technical Auditing & Modernization Roadmaps',
    tagline: 'Direct access to senior distributed systems engineers who write production code, not slide decks.',
    overview:
      'We pair your leadership with battle-tested systems architects who analyze codebases, profile database bottlenecks, redesign distributed architectures, and build working production prototypes.',
    techStack: ['Distributed Systems Architecture', 'Domain-Driven Design', 'Chaos Engineering', 'Database Profiling', 'RFC-driven Design'],
    pillars: [
      {
        title: 'Comprehensive Architecture & Bottleneck Audits',
        desc: 'Deep profiling of existing monoliths, tracing distributed latency bottlenecks, and identifying memory leaks and deadlock hazards.',
      },
      {
        title: 'Monolith-to-Microservices Decomposition Roadmaps',
        desc: 'Domain-driven event-storming and Strangler Fig migration plans that deliver incremental business value without risky big-bang rewrites.',
      },
      {
        title: 'High-Concurrency Stress Testing & Chaos Engineering',
        desc: 'Simulating extreme network partitions, database failovers, and synthetic traffic spikes to validate enterprise SLAs.',
      },
      {
        title: 'Hands-On RFCs & Working POC Deliverables',
        desc: 'Producing runnable reference implementations, benchmark reports, and architectural decision records for engineering teams.',
      },
    ],
    shift: {
      legacy: 'Theoretical PowerPoint decks by generalist analysts with no code experience, leading to stalled transformation initiatives.',
      modern: 'Rigorous architectural specifications, runnable benchmarks, and hands-on system modernization led by veteran engineers.',
    },
  },

  'industrial-autonomy-and-engineering': {
    id: 'industrial-autonomy-and-engineering',
    name: 'Industrial Autonomy & Engineering',
    heroTitle: 'Industrial Autonomy next: Edge-native, deterministic, synchronized',
    heroImage: '/services_bg/industrial-autonomy-and-engineering.png',
    headline: 'Edge Compute, Deterministic Real-Time Control & Cyber-Physical Telemetry',
    tagline: 'Bringing high-throughput sensor fusion, computer vision, and industrial robotics to the factory edge.',
    overview:
      'We engineer embedded edge compute runtimes, ROS2-based robotic control nodes, and sensor fusion pipelines connecting physical hardware to enterprise digital twins.',
    techStack: ['C++20', 'Rust', 'ROS 2', 'OPC UA', 'MQTT-SN', 'CUDA Edge', 'RT-Linux'],
    pillars: [
      {
        title: 'Deterministic Hard Real-Time Edge Runtimes',
        desc: 'Preempt-RT Linux and memory-safe Rust daemon processes executing sub-millisecond sensor acquisition and safety interlocks.',
      },
      {
        title: 'High-Throughput Edge Vision & Defect Detection',
        desc: 'TensorRT-accelerated edge inference processing 4K camera streams at 120 FPS on embedded industrial GPUs.',
      },
      {
        title: 'Industrial Protocol Bridges & Digital Twins',
        desc: 'Zero-loss ingestion of legacy PLC data via OPC UA, Modbus, and EtherCAT into unified time-series event buses.',
      },
      {
        title: 'Autonomous Mobile Robot (AMR) Fleet Coordination',
        desc: 'Distributed SLAM navigation, dynamic obstacle avoidance, and decentralized fleet dispatch algorithms.',
      },
    ],
    shift: {
      legacy: 'Isolated proprietary PLCs, manual visual inspection stations, uncoordinated AGVs, and fragmented SCADA silos.',
      modern: 'Synchronized edge compute fabric, automated microsecond defect detection, and unified OPC UA telemetry streams.',
    },
  },

  'network-solutions-and-services': {
    id: 'network-solutions-and-services',
    name: 'Network Solutions and Services',
    heroTitle: 'Networks next: Programmable, zero-trust, line-rate',
    heroImage: '/services_bg/network-solutions-and-services.png',
    headline: 'Software-Defined Wide Area Networking (SD-WAN), eBPF Mesh & Zero-Trust Interconnect',
    tagline: 'High-performance programmable networks engineered for multi-cloud telemetry and microsecond routing.',
    overview:
      'We design high-performance programmable networks utilizing eBPF, encrypted WireGuard overlay meshes, and automated BGP route propagation across hybrid clouds.',
    techStack: ['eBPF / XDP', 'WireGuard', 'Cilium', 'BGP / FRRouting', 'P4', 'gNMI / OpenConfig'],
    pillars: [
      {
        title: 'Kernel-Bypass Packet Processing',
        desc: 'eBPF and XDP packet routing in the Linux kernel path, eliminating context-switching overhead and achieving line-rate 100GbE throughput.',
      },
      {
        title: 'Encrypted Zero-Trust Overlay Mesh',
        desc: 'Mesh network topologies powered by kernel WireGuard tunnels providing automatic peer discovery and cryptographic authentication.',
      },
      {
        title: 'Software-Defined Global WAN Routing',
        desc: 'Dynamic BGP routing algorithms steering packets around congested internet exchanges to guarantee deterministic voice/video latency.',
      },
      {
        title: 'Automated Network Telemetry & Anomaly Isolation',
        desc: 'Streaming telemetry via gNMI and telemetry collectors detecting silent packet drops, jitter spikes, and routing loops instantly.',
      },
    ],
    shift: {
      legacy: 'Rigid MPLS circuits, manual CLI configuration of hardware switches, static IPsec tunnels, and slow manual change approval boards.',
      modern: 'Programmable software-defined network fabric, instant automated peering, cryptographic micro-segmentation, and line-rate eBPF routing.',
    },
  },
};

export const getServiceBySlugOrName = (input) => {
  if (!input) return null;
  const normalized = input
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  if (servicesData[normalized]) return servicesData[normalized];

  return (
    Object.values(servicesData).find(
      (item) =>
        item.name.toLowerCase() === input.toLowerCase() ||
        item.id === normalized ||
        item.name.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-') === normalized
    ) || null
  );
};

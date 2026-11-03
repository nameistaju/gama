import React from 'react';

/**
 * High-fidelity, colorful SVG logos for enterprise tech stacks
 */
export function TechLogo({ name, className = 'w-4 h-4' }) {
  if (!name) return null;
  const n = name.trim().toLowerCase();

  // Python
  if (n.includes('python')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path
          d="M63.078 1.02c-30.82 0-28.905 13.37-28.905 13.37l.034 13.856h29.356v4.156H22.923S3.722 30.222 3.722 61.18c0 30.957 16.75 29.878 16.75 29.878h10.007v-14.03s-.54-16.75 16.48-16.75h28.275s15.67-.27 15.67-15.4V16.42s2.16-15.4-27.826-15.4zm-15.94 8.78c2.97 0 5.4 2.43 5.4 5.4 0 2.972-2.43 5.402-5.4 5.402-2.972 0-5.402-2.43-5.402-5.4 0-2.972 2.43-5.402 5.402-5.402z"
          fill="url(#py-blue)"
        />
        <path
          d="M64.922 126.98c30.82 0 28.905-13.37 28.905-13.37l-.034-13.856H64.437v-4.156h40.64s19.2.18 19.2-30.778c0-30.957-16.75-29.878-16.75-29.878H97.52v14.03s.54 16.75-16.48 16.75H52.765s-15.67.27-15.67 15.4v23.468s-2.16 15.4 27.827 15.4zm15.94-8.78c-2.97 0-5.4-2.43-5.4-5.4 0-2.972 2.43-5.402 5.4-5.402 2.972 0 5.402 2.43 5.402 5.4 0 2.972-2.43 5.402-5.402 5.402z"
          fill="url(#py-yellow)"
        />
        <defs>
          <linearGradient id="py-blue" x1="12.33" y1="8.91" x2="74.55" y2="71.13" gradientUnits="userSpaceOnUse">
            <stop stopColor="#387EB8" />
            <stop offset="1" stopColor="#366994" />
          </linearGradient>
          <linearGradient id="py-yellow" x1="115.67" y1="119.09" x2="53.45" y2="56.87" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFE873" />
            <stop offset="1" stopColor="#FFD43B" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // Rust
  if (n.includes('rust')) {
    return (
      <svg className={className} viewBox="0 0 106 106" fill="none">
        <circle cx="53" cy="53" r="50" fill="#E43716" />
        <path
          d="M72 73h-8l-7-14h-8v14h-8V33h19c9 0 14 5 14 13 0 6-3 10-8 12l8 15zm-23-21h10c5 0 7-2 7-6 0-3-2-6-7-6H49v12z"
          fill="#FFFFFF"
        />
        <circle cx="28" cy="28" r="4" fill="#FFFFFF" opacity="0.8" />
        <circle cx="78" cy="28" r="4" fill="#FFFFFF" opacity="0.8" />
        <circle cx="78" cy="78" r="4" fill="#FFFFFF" opacity="0.8" />
        <circle cx="28" cy="78" r="4" fill="#FFFFFF" opacity="0.8" />
      </svg>
    );
  }

  // Go / Golang
  if (n === 'go' || n.includes('golang')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path
          d="M17.4 56.4c5.7-1.1 10.9-1.3 15.6-1.3 13.9 0 22.8 7.3 22.8 20.3 0 13.5-9.8 22.8-24.5 22.8-13.6 0-23.7-8.9-23.7-22.3 0-14.2 10.4-22.7 24.3-22.7 3.3 0 6.5.4 9.1 1.2v9c-2.3-1-5.1-1.5-8.3-1.5-7.9 0-13.7 4.9-13.7 13.7 0 8.3 5.5 13.5 13.4 13.5 8.1 0 13.5-5.2 13.5-13.6 0-1.7-.2-3.1-.6-4.3H33v-8.2h22.8v-.4c-.4-9.3-6.6-14.7-16.7-14.7-4.1 0-8.5.8-12.7 2.1l-1-7.9zM73.5 75.7c0-13.6 10-22.7 24.4-22.7 14.5 0 24.5 9.1 24.5 22.7 0 13.7-10 22.8-24.5 22.8-14.4 0-24.4-9.1-24.4-22.8zm37.8 0c0-8.5-5.7-13.7-13.4-13.7-7.6 0-13.4 5.2-13.4 13.7 0 8.4 5.8 13.6 13.4 13.6 7.7 0 13.4-5.2 13.4-13.6z"
          fill="#00ACD7"
        />
      </svg>
    );
  }

  // C++ / C++20
  if (n.includes('c++')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M64 4L116 34v60L64 124 12 94V34L64 4z" fill="#00599C" />
        <path d="M64 15L106 39v50L64 113 22 89V39L64 15z" fill="#004482" />
        <path
          d="M58 48c-1.8-2.6-4.6-4-8-4-6.6 0-11 5.3-11 14.4s4.4 14.4 11 14.4c3.4 0 6.2-1.4 8-4l6 5c-3.6 4.6-8.6 7-14 7-12 0-20-8.8-20-22.4 0-13.6 8-22.4 20-22.4 5.4 0 10.4 2.4 14 7l-6 5zm16 11h4v-7h6v7h7v6h-7v7h-6v-7h-4v-6zm23 0h4v-7h6v7h7v6h-7v7h-6v-7h-4v-6z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // TypeScript
  if (n.includes('typescript')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="20" fill="#3178C6" />
        <path
          d="M32 46h38v10H56v44H44V56H32V46zm40 33c3 5 8 8 15 8 5 0 9-2 9-6 0-4-3-6-10-8-12-4-18-9-18-18 0-9 7-16 19-16 8 0 15 3 20 9l-7 7c-3-4-7-6-13-6-5 0-8 2-8 5 0 3 3 5 10 7 13 4 18 9 18 19 0 10-8 17-20 17-10 0-18-4-23-11l8-7z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // React
  if (n === 'react' || n.includes('react')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <ellipse cx="64" cy="64" rx="48" ry="18" stroke="#61DAFB" strokeWidth="6" transform="rotate(0 64 64)" />
        <ellipse cx="64" cy="64" rx="48" ry="18" stroke="#61DAFB" strokeWidth="6" transform="rotate(60 64 64)" />
        <ellipse cx="64" cy="64" rx="48" ry="18" stroke="#61DAFB" strokeWidth="6" transform="rotate(120 64 64)" />
        <circle cx="64" cy="64" r="9" fill="#61DAFB" />
      </svg>
    );
  }

  // Next.js
  if (n.includes('next.js') || n.includes('nextjs')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="64" fill="#000000" />
        <path
          d="M89 95L48 42h-8v44h8V54l36 47c1.7-2 3.3-4 5-6zm8-39h8V42h-8v14z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // Node.js
  if (n.includes('node.js') || n.includes('nodejs')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M64 8l52 30v60L64 128 12 98V38L64 8z" fill="#339933" />
        <path
          d="M64 42c-12 0-16 6-16 12 0 11 13 11 19 13 6 2 8 4 8 7 0 4-4 7-9 7-7 0-11-3-15-7l-5 6c5 6 12 8 20 8 11 0 17-6 17-13 0-10-12-11-19-13-6-2-8-3-8-6 0-3 3-5 8-5 6 0 10 2 13 5l5-6c-5-5-10-8-18-8z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // Kafka / Apache Kafka
  if (n.includes('kafka')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="60" fill="#231F20" />
        <circle cx="42" cy="64" r="10" fill="#FFFFFF" />
        <circle cx="78" cy="42" r="10" fill="#FFFFFF" />
        <circle cx="78" cy="86" r="10" fill="#FFFFFF" />
        <path d="M42 64L78 42M42 64L78 86" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
        <circle cx="42" cy="64" r="5" fill="#E535AB" />
        <circle cx="78" cy="42" r="5" fill="#E535AB" />
        <circle cx="78" cy="86" r="5" fill="#E535AB" />
      </svg>
    );
  }

  // PostgreSQL / PostGIS / pgvector
  if (n.includes('postgres') || n.includes('postgis') || n.includes('pgvector') || n === 'pg') {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#336791" />
        <path
          d="M64 24c-18 0-30 10-34 26-2 8-2 19 4 28 6 9 16 14 26 14 1 0 2 0 3-.1V78c-4 0-9-2-12-5-4-4-5-9-4-14 1-8 8-14 17-14s16 6 17 14c1 5 0 10-4 14-3 3-8 5-12 5v13.9c1 .1 2 .1 3 .1 10 0 20-5 26-14 6-9 6-20 4-28-4-16-16-26-34-26z"
          fill="#FFFFFF"
        />
        <circle cx="50" cy="50" r="4" fill="#336791" />
        <circle cx="78" cy="50" r="4" fill="#336791" />
      </svg>
    );
  }

  // Redis / Redis Cluster
  if (n.includes('redis')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M64 12l48 24-48 24-48-24 48-24z" fill="#D82C20" />
        <path d="M16 36l48 24v56L16 92V36z" fill="#A3241C" />
        <path d="M112 36L64 60v56l48-24V36z" fill="#C62828" />
        <ellipse cx="64" cy="36" rx="20" ry="8" fill="#FFFFFF" opacity="0.3" />
      </svg>
    );
  }

  // Kubernetes / Slurm
  if (n.includes('kubernetes') || n.includes('k8s')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path
          d="M64 8l48 28v56L64 120 16 92V36L64 8z"
          fill="#326CE5"
        />
        <circle cx="64" cy="64" r="16" fill="#FFFFFF" />
        <path d="M64 24v24M64 80v24M28 44l22 12M78 72l22 12M28 84l22-12M78 56l22-12" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
      </svg>
    );
  }

  // Docker
  if (n.includes('docker')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#2496ED" />
        <rect x="42" y="44" width="12" height="10" fill="#FFFFFF" rx="2" />
        <rect x="58" y="44" width="12" height="10" fill="#FFFFFF" rx="2" />
        <rect x="74" y="44" width="12" height="10" fill="#FFFFFF" rx="2" />
        <rect x="58" y="30" width="12" height="10" fill="#FFFFFF" rx="2" />
        <rect x="74" y="30" width="12" height="10" fill="#FFFFFF" rx="2" />
        <rect x="74" y="16" width="12" height="10" fill="#FFFFFF" rx="2" />
        <path
          d="M112 58c-3-2-7-2-10 0-4-6-10-8-17-7-1-6-6-12-14-13-1 0-2 0-3 .1V60H22c-2 8 1 18 8 24 10 9 26 12 40 12 28 0 46-12 50-32 0-2-3-4-8-6z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // ClickHouse
  if (n.includes('clickhouse')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#18181B" />
        <rect x="24" y="24" width="10" height="80" rx="3" fill="#FA4D35" />
        <rect x="39" y="36" width="10" height="56" rx="3" fill="#FA4D35" />
        <rect x="54" y="28" width="10" height="72" rx="3" fill="#FFCC01" />
        <rect x="69" y="44" width="10" height="40" rx="3" fill="#FFCC01" />
        <rect x="84" y="24" width="10" height="80" rx="3" fill="#FFCC01" />
        <rect x="99" y="48" width="10" height="32" rx="3" fill="#FA4D35" />
      </svg>
    );
  }

  // PyTorch
  if (n.includes('pytorch')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="60" fill="#18181B" />
        <path
          d="M74 24a34 34 0 00-30 50l-12 12 6 6 12-12a34 34 0 1024-56zm-1 56a22 22 0 110-44 22 22 0 010 44z"
          fill="#EE4C2C"
        />
        <circle cx="88" cy="40" r="5" fill="#EE4C2C" />
      </svg>
    );
  }

  // Terraform
  if (n.includes('terraform')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#18181B" />
        <path d="M48 24l22 13v26L48 50V24z" fill="#5C4EE5" />
        <path d="M74 39l22 13v26L74 65V39z" fill="#5C4EE5" />
        <path d="M22 39l22 13v26L22 65V39z" fill="#7B42BC" />
        <path d="M48 76l22 13v26L48 102V76z" fill="#844FBA" />
      </svg>
    );
  }

  // Prometheus
  if (n.includes('prometheus')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="60" fill="#20232A" />
        <path
          d="M64 20c-4 12-16 26-16 42 0 16 11 26 16 26s16-10 16-26c0-16-12-30-16-42z"
          fill="#E6522C"
        />
        <path
          d="M64 48c-3 8-8 14-8 20 0 7 5 11 8 11s8-4 8-11c0-6-5-12-8-20z"
          fill="#FFA439"
        />
        <circle cx="64" cy="98" r="8" fill="#E6522C" />
      </svg>
    );
  }

  // AWS / CloudFront / Nitro / HealthLake / HealthOmics
  if (n.includes('aws') || n.includes('amazon')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#232F3E" />
        <path
          d="M34 50l6 24h6l7-24h-6l-4 16-4-16h-5zm22 0l-4 24h6l4-24h-6zm16 0l-7 24h6l4-15 5 15h6l5-15 4 15h6l-7-24h-6l-5 16-5-16h-6z"
          fill="#FFFFFF"
        />
        <path
          d="M28 84c20 12 52 12 72 0 2-1 4 1 2 3-24 14-58 14-76-1-2-1 0-3 2-2z"
          fill="#FF9900"
        />
        <path d="M100 82c2 1 5 4 6 7-1 0-4-1-6-2-2-1-1-4 0-5z" fill="#FF9900" />
      </svg>
    );
  }

  // Google Cloud / BigQuery / GCP
  if (n.includes('google') || n.includes('gcp') || n.includes('bigquery')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#FFFFFF" />
        <path
          d="M74 44c0-2-1-4-2-6-5-8-15-12-24-9-9 3-15 11-16 20-1 9 4 18 13 21 1 0 2 1 3 1h30c7 0 13-5 14-12 1-7-3-13-10-15-3-1-6-1-8 0z"
          fill="#4285F4"
        />
        <path d="M48 49c-9 3-15 11-16 20 5-1 9-4 12-8 3-4 4-8 4-12z" fill="#EA4335" />
        <path d="M78 71H48c3 0 7-2 9-5 3-3 4-7 4-11 5 3 11 3 17 1v15z" fill="#34A853" />
        <path d="M74 44c5 1 9 4 11 8-2 2-5 4-8 4-4 0-7-2-9-5 2-3 4-6 6-7z" fill="#FBBC05" />
      </svg>
    );
  }

  // Azure
  if (n.includes('azure')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#18181B" />
        <path d="M32 96l24-68h20l24 68h-18L72 64H56l-6 32H32z" fill="#0089D6" />
        <path d="M72 64l10 32h18L76 28h-8L46 84l10 12h16V64z" fill="#0078D4" opacity="0.8" />
      </svg>
    );
  }

  // eBPF / eBPF Security / XDP
  if (n.includes('ebpf') || n.includes('xdp')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="60" fill="#18181B" />
        <path
          d="M64 24l28 16v32L64 88 36 72V40L64 24z"
          fill="#FFD400"
        />
        <path d="M48 54h32v6H48zm0 12h32v6H48z" fill="#18181B" />
        <circle cx="64" cy="100" r="6" fill="#FFD400" />
      </svg>
    );
  }

  // Linux / RT-Linux / Kernel Bypass
  if (n.includes('linux')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="60" fill="#18181B" />
        <path
          d="M64 22c-12 0-20 10-20 24 0 9 4 17 8 26-6 4-12 12-12 22 0 11 9 18 24 18s24-7 24-18c0-10-6-18-12-22 4-9 8-17 8-26 0-14-8-24-20-24z"
          fill="#FFFFFF"
        />
        <ellipse cx="56" cy="40" rx="3" ry="5" fill="#18181B" />
        <ellipse cx="72" cy="40" rx="3" ry="5" fill="#18181B" />
        <polygon points="64,46 54,56 74,56" fill="#FFA500" />
        <ellipse cx="44" cy="102" rx="14" ry="6" fill="#FFA500" />
        <ellipse cx="84" cy="102" rx="14" ry="6" fill="#FFA500" />
      </svg>
    );
  }

  // WireGuard
  if (n.includes('wireguard')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="60" fill="#88171A" />
        <path
          d="M64 28c-18 0-32 14-32 32 0 20 22 40 32 40s32-20 32-40c0-18-14-32-32-32zm0 54c-12 0-22-10-22-22s10-22 22-22 22 10 22 22-10 22-22 22z"
          fill="#FFFFFF"
        />
        <circle cx="64" cy="60" r="10" fill="#88171A" />
      </svg>
    );
  }

  // GraphQL
  if (n.includes('graphql')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="60" fill="#18181B" />
        <polygon points="64,18 106,42 106,86 64,110 22,86 22,42" stroke="#E10098" strokeWidth="6" fill="none" />
        <polygon points="64,30 94,82 34,82" stroke="#E10098" strokeWidth="5" fill="none" />
        <circle cx="64" cy="18" r="8" fill="#E10098" />
        <circle cx="106" cy="42" r="8" fill="#E10098" />
        <circle cx="106" cy="86" r="8" fill="#E10098" />
        <circle cx="64" cy="110" r="8" fill="#E10098" />
        <circle cx="22" cy="86" r="8" fill="#E10098" />
        <circle cx="22" cy="42" r="8" fill="#E10098" />
      </svg>
    );
  }

  // Stripe
  if (n.includes('stripe')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#635BFF" />
        <path
          d="M58 54c0-4 3-6 8-6 6 0 14 2 20 6v-15c-7-3-14-4-20-4-16 0-26 8-26 21 0 21 28 17 28 26 0 4-4 6-9 6-8 0-16-3-23-8v15c8 4 16 5 23 5 17 0 27-8 27-22 0-22-28-18-28-26z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // WebRTC
  if (n.includes('webrtc')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="60" fill="#18181B" />
        <path d="M34 40h20v48H34z" fill="#00A859" />
        <path d="M58 40h20v48H58z" fill="#0072BC" />
        <path d="M82 40h12v48H82z" fill="#F7931E" />
        <circle cx="44" cy="30" r="6" fill="#00A859" />
        <circle cx="68" cy="30" r="6" fill="#0072BC" />
        <circle cx="88" cy="30" r="6" fill="#F7931E" />
      </svg>
    );
  }

  // WebSockets
  if (n.includes('websocket')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="60" fill="#18181B" />
        <path d="M30 52l18-18v12h32V34l18 18-18 18V58H48v12L30 52z" fill="#38BDF8" />
        <path d="M98 76l-18 18V82H48v12L30 76l18-18v12h32V58l18 18z" fill="#34D399" />
      </svg>
    );
  }

  // WebAuthn
  if (n.includes('webauthn')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="60" fill="#005A9C" />
        <path
          d="M64 26L34 38v28c0 22 13 41 30 46 17-5 30-24 30-46V38L64 26z"
          fill="#FFFFFF"
          opacity="0.2"
        />
        <circle cx="64" cy="56" r="12" fill="#FFFFFF" />
        <path d="M52 86c0-7 5-12 12-12s12 5 12 12v4H52v-4z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Envoy
  if (n.includes('envoy')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="60" fill="#C02C86" />
        <polygon points="64,24 96,44 96,84 64,104 32,84 32,44" fill="#FFFFFF" />
        <polygon points="64,36 86,50 86,78 64,92 42,78 42,50" fill="#C02C86" />
      </svg>
    );
  }

  // Istio
  if (n.includes('istio')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#466BB0" />
        <polygon points="34,106 58,18 58,106" fill="#FFFFFF" />
        <polygon points="64,106 64,48 94,106" fill="#FFFFFF" opacity="0.8" />
        <polygon points="34,112 94,112 64,120" fill="#FFFFFF" opacity="0.6" />
      </svg>
    );
  }

  // ArgoCD
  if (n.includes('argocd') || n.includes('argo')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#EF6F38" />
        <circle cx="64" cy="64" r="28" fill="#FFFFFF" />
        <circle cx="64" cy="64" r="14" fill="#EF6F38" />
        <circle cx="64" cy="24" r="8" fill="#FFFFFF" />
        <circle cx="64" cy="104" r="8" fill="#FFFFFF" />
        <circle cx="24" cy="64" r="8" fill="#FFFFFF" />
        <circle cx="104" cy="64" r="8" fill="#FFFFFF" />
      </svg>
    );
  }

  // Temporal.io
  if (n.includes('temporal')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#11D4B6" />
        <circle cx="64" cy="64" r="32" stroke="#000000" strokeWidth="10" strokeDasharray="30 15" fill="none" />
        <circle cx="64" cy="64" r="12" fill="#000000" />
      </svg>
    );
  }

  // ROS / ROS 2
  if (n.includes('ros')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#22314E" />
        <circle cx="36" cy="36" r="10" fill="#0099FF" />
        <circle cx="64" cy="36" r="10" fill="#0099FF" />
        <circle cx="92" cy="36" r="10" fill="#0099FF" />
        <circle cx="36" cy="64" r="10" fill="#0099FF" />
        <circle cx="64" cy="64" r="10" fill="#FFFFFF" />
        <circle cx="92" cy="64" r="10" fill="#0099FF" />
        <circle cx="36" cy="92" r="10" fill="#0099FF" />
        <circle cx="64" cy="92" r="10" fill="#0099FF" />
        <circle cx="92" cy="92" r="10" fill="#0099FF" />
      </svg>
    );
  }

  // MQTT / MQTT-SN
  if (n.includes('mqtt')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="60" fill="#660066" />
        <circle cx="64" cy="94" r="10" fill="#FFFFFF" />
        <path d="M42 74a30 30 0 0144 0" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" fill="none" />
        <path d="M26 54a52 52 0 0176 0" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" fill="none" />
      </svg>
    );
  }

  // gRPC
  if (n.includes('grpc')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#244C5A" />
        <circle cx="64" cy="64" r="28" stroke="#00A8A8" strokeWidth="8" fill="none" />
        <path d="M64 36v56M36 64h56" stroke="#00A8A8" strokeWidth="6" strokeLinecap="round" />
      </svg>
    );
  }

  // FFmpeg
  if (n.includes('ffmpeg')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#007808" />
        <path d="M30 30l34 34-34 34V30zm68 0L64 64l34 34V30z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Ray.io
  if (n.includes('ray')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#028CF0" />
        <circle cx="64" cy="64" r="18" fill="#FFFFFF" />
        <path d="M64 20v18M64 90v18M20 64h18M90 64h18M33 33l13 13M82 82l13 13M33 95l13-13M82 46l13-13" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
      </svg>
    );
  }

  // Apache Iceberg
  if (n.includes('iceberg')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#0A2540" />
        <polygon points="64,22 88,58 40,58" fill="#00D4FF" />
        <polygon points="40,64 88,64 78,106 50,106" fill="#0080FF" />
        <line x1="24" y1="61" x2="104" y2="61" stroke="#FFFFFF" strokeWidth="3" />
      </svg>
    );
  }

  // TensorRT / CUDA / NVIDIA
  if (n.includes('tensorrt') || n.includes('cuda')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#18181B" />
        <path
          d="M64 28c-20 0-36 16-36 36s16 36 36 36c14 0 26-8 32-20-4 1-8 2-12 2-14 0-25-10-25-24 0-8 4-15 10-19-4-1-9-1-15-1z"
          fill="#76B900"
        />
        <circle cx="74" cy="64" r="12" fill="#76B900" />
      </svg>
    );
  }

  // OPC UA
  if (n.includes('opc')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#004F9F" />
        <circle cx="64" cy="64" r="32" stroke="#FFFFFF" strokeWidth="8" fill="none" />
        <circle cx="64" cy="64" r="16" fill="#FFA500" />
      </svg>
    );
  }

  // TimescaleDB
  if (n.includes('timescale')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#FDB515" />
        <circle cx="64" cy="64" r="30" fill="#18181B" />
        <polygon points="64,42 78,74 50,74" fill="#FDB515" />
      </svg>
    );
  }

  // vLLM
  if (n.includes('vllm')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#6366F1" />
        <polygon points="34,38 64,88 94,38 78,38 64,62 50,38" fill="#FFFFFF" />
        <circle cx="64" cy="98" r="6" fill="#A5B4FC" />
      </svg>
    );
  }

  // Firecracker
  if (n.includes('firecracker')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="60" fill="#FF5722" />
        <path d="M64 26l8 24 24 8-24 8-8 24-8-24-24-8 24-8 8-24z" fill="#FFEB3B" />
      </svg>
    );
  }

  // Cilium
  if (n.includes('cilium')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="60" fill="#F7600C" />
        <circle cx="48" cy="64" r="14" fill="#00A9E0" />
        <circle cx="80" cy="64" r="14" fill="#00A9E0" />
        <path d="M48 64h32" stroke="#FFFFFF" strokeWidth="6" />
      </svg>
    );
  }

  // HL7 / FHIR
  if (n.includes('hl7') || n.includes('fhir')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#E31B23" />
        <rect x="52" y="28" width="24" height="72" rx="4" fill="#FFFFFF" />
        <rect x="28" y="52" width="72" height="24" rx="4" fill="#FFFFFF" />
      </svg>
    );
  }

  // Nextflow
  if (n.includes('nextflow')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="60" fill="#00C49F" />
        <circle cx="46" cy="48" r="12" fill="#FFFFFF" />
        <circle cx="82" cy="48" r="12" fill="#FFFFFF" />
        <circle cx="64" cy="80" r="12" fill="#FFFFFF" />
      </svg>
    );
  }

  // RoCEv2 / RDMA
  if (n.includes('roce') || n.includes('rdma')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#0284C7" />
        <path d="M28 64h72M64 28l36 36-36 36" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="36" cy="64" r="8" fill="#38BDF8" />
      </svg>
    );
  }

  // BGP / FRRouting / Networking
  if (n.includes('bgp') || n.includes('frrouting')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="58" fill="#4F46E5" />
        <circle cx="40" cy="40" r="14" fill="#A5B4FC" />
        <circle cx="88" cy="40" r="14" fill="#A5B4FC" />
        <circle cx="64" cy="90" r="14" fill="#38BDF8" />
        <path d="M40 40l48 0M40 40l24 50M88 40l-24 50" stroke="#FFFFFF" strokeWidth="6" />
      </svg>
    );
  }

  // P4 Programmable Data Plane
  if (n.includes('p4')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#EA580C" />
        <text x="64" y="82" fill="#FFFFFF" fontSize="56" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">P4</text>
      </svg>
    );
  }

  // gNMI / OpenConfig
  if (n.includes('gnmi') || n.includes('openconfig')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#059669" />
        <path d="M36 64a28 28 0 0 1 56 0M48 64a16 16 0 0 1 32 0" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
        <circle cx="64" cy="64" r="6" fill="#A7F3D0" />
      </svg>
    );
  }

  // Distributed Systems Architecture
  if (n.includes('distributed') || n.includes('architecture')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#6366F1" />
        <circle cx="64" cy="36" r="12" fill="#FFFFFF" />
        <circle cx="36" cy="88" r="12" fill="#FFFFFF" />
        <circle cx="92" cy="88" r="12" fill="#FFFFFF" />
        <path d="M64 36L36 88M64 36L92 88M36 88h56" stroke="#C7D2FE" strokeWidth="6" />
      </svg>
    );
  }

  // Domain-Driven Design
  if (n.includes('domain')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="58" fill="#D97706" />
        <circle cx="64" cy="64" r="38" stroke="#FEF3C7" strokeWidth="8" fill="none" />
        <circle cx="64" cy="64" r="18" fill="#FFFFFF" />
      </svg>
    );
  }

  // Chaos Engineering
  if (n.includes('chaos')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#DC2626" />
        <path d="M64 24l8 28h28l-24 18 10 28-22-16-22 16 10-28-24-18h28z" fill="#FEF08A" />
      </svg>
    );
  }

  // Database Profiling
  if (n.includes('profiling')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#0D9488" />
        <path d="M34 88V68M54 88V44M74 88V56M94 88V32" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" />
      </svg>
    );
  }

  // RFC-driven Design
  if (n.includes('rfc')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#2563EB" />
        <path d="M40 32h32l16 16v48H40V32z" fill="#FFFFFF" />
        <path d="M72 32v16h16" fill="#93C5FD" />
        <path d="M48 60h32M48 72h24" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }

  // Slurm HPC
  if (n.includes('slurm')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#991B1B" />
        <circle cx="44" cy="44" r="12" fill="#FCA5A5" />
        <circle cx="84" cy="44" r="12" fill="#FCA5A5" />
        <circle cx="44" cy="84" r="12" fill="#FCA5A5" />
        <circle cx="84" cy="84" r="12" fill="#FCA5A5" />
      </svg>
    );
  }

  // Fastly
  if (n.includes('fastly')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="28" fill="#FF282D" />
        <path d="M36 44h56M36 64h44M36 84h28" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" />
      </svg>
    );
  }

  // Default Colorful Technology Core Icon
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <circle cx="64" cy="64" r="58" fill="#0F172A" stroke="#38BDF8" strokeWidth="4" />
      <polygon points="64,28 92,44 92,76 64,92 36,76 36,44" fill="#38BDF8" opacity="0.3" />
      <circle cx="64" cy="64" r="14" fill="#38BDF8" />
    </svg>
  );
}

/**
 * Chip wrapper displaying the official logo alongside technology name
 */
export function TechChip({ name, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-cyan-500/30 text-xs font-mono font-medium text-slate-200 transition-all duration-200 shadow-sm group ${className}`}
    >
      <TechLogo name={name} className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" />
      <span>{name}</span>
    </span>
  );
}

export default TechLogo;

"use client";

import React, { forwardRef, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/registry/magicui/animated-beam";
import MagicBento from "./ui/MagicBento";
import {
  ShieldCheck,
  Layers,
  Sparkles,
  CheckCircle2,
  Activity,
  Zap
} from "lucide-react";

// ==========================================
// Circle Node Component for Magic UI Beams (Light Theme)
// ==========================================
const Circle = forwardRef(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-10 xs:size-11 sm:size-12 items-center justify-center rounded-full border-2 border-slate-200/90 bg-white p-1.5 xs:p-2 sm:p-2.5 shadow-[0_4px_16px_-4px_rgba(4,87,223,0.18)] transition-all duration-300 hover:scale-110 hover:border-[#0457DF] hover:shadow-[0_0_20px_rgba(4,87,223,0.3)]",
        className
      )}
    >
      {children}
    </div>
  );
});
Circle.displayName = "Circle";

// ==========================================
// SVG Icons for Animated Beam
// ==========================================
const BeamIcons = {
  notion: () => (
    <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"
        fill="#f8fafc"
      />
      <path
        d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z"
        fill="#0f172a"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  ),
  openai: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="#0457DF" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  ),
  googleDrive: () => (
    <svg width="24" height="24" viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg">
      <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da" />
      <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="#00ac47" />
      <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335" />
      <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d" />
      <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc" />
      <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00" />
    </svg>
  ),
  whatsapp: () => (
    <svg width="24" height="24" viewBox="0 0 175.216 175.552" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wa_grad_light" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#57d163" />
          <stop offset="1" stopColor="#23b33a" />
        </linearGradient>
      </defs>
      <path
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
        fill="url(#wa_grad_light)"
      />
      <path
        d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
        fill="#ffffff"
        fillRule="evenodd"
      />
    </svg>
  ),
  googleDocs: () => (
    <svg width="22" height="24" viewBox="0 0 47 65" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
        fill="#4285F4"
      />
      <path
        d="M11.75,47.2727273 L35.25,47.2727273 L35.25,44.3181818 L11.75,44.3181818 L11.75,47.2727273 Z M11.75,53.1818182 L29.375,53.1818182 L29.375,50.2272727 L11.75,50.2272727 L11.75,53.1818182 Z M11.75,32.5 L11.75,35.4545455 L35.25,35.4545455 L35.25,32.5 L11.75,32.5 Z M11.75,41.3636364 L35.25,41.3636364 L35.25,38.4090909 L11.75,38.4090909 L11.75,41.3636364 Z"
        fill="#F1F1F1"
      />
      <path
        d="M29.375,0 L47,17.7272727 L29.375,17.7272727 L29.375,0 Z"
        fill="#A1C2FA"
      />
    </svg>
  ),
  messenger: () => (
    <svg width="24" height="24" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="msg_grad_light" cx="11.087" cy="7.022" r="47.612" gradientTransform="matrix(1 0 0 -1 0 50)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1292ff" />
          <stop offset=".428" stopColor="#6d53ff" />
          <stop offset=".754" stopColor="#df47aa" />
          <stop offset=".946" stopColor="#ff6257" />
        </radialGradient>
      </defs>
      <path
        fill="url(#msg_grad_light)"
        d="M44,23.5C44,34.27,35.05,43,24,43c-1.651,0-3.25-0.194-4.784-0.564c-0.465-0.112-0.951-0.069-1.379,0.145L13.46,44.77C12.33,45.335,11,44.513,11,43.249v-4.025c0-0.575-0.257-1.111-0.681-1.499C6.425,34.165,4,29.11,4,23.5C4,12.73,12.95,4,24,4S44,12.73,44,23.5z"
      />
      <path
        fill="#ffffff"
        d="M34.394,18.501l-5.7,4.22c-0.61,0.46-1.44,0.46-2.04,0.01L22.68,19.74c-1.68-1.25-4.06-0.82-5.19,0.94l-1.21,1.89l-4.11,6.68c-0.6,0.94,0.55,2.01,1.44,1.34l5.7-4.22c0.61-0.46,1.44-0.46,2.04-0.01l3.974,2.991c1.68,1.25,4.06,0.82,5.19-0.94l1.21-1.89l4.11-6.68C36.434,18.901,35.284,17.831,34.394,18.501z"
      />
    </svg>
  ),
  user: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0457DF" strokeWidth="2.2" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  figma: () => (
    <svg width="22" height="22" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
    </svg>
  ),
  slack: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 15a2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2h2v2zm1 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v5a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-5zm2-7a2 2 0 0 1-2-2 2 2 0 0 1 2-2 2 2 0 0 1 2 2v2H9zm0 1a2 2 0 0 1 2 2 2 2 0 0 1-2 2H4a2 2 0 0 1-2-2 2 2 0 0 1 2-2h5zm7 2a2 2 0 0 1 2-2 2 2 0 0 1 2 2 2 2 0 0 1-2 2h-2v-2zm-1 0a2 2 0 0 1-2 2 2 2 0 0 1-2-2V6a2 2 0 0 1 2-2 2 2 0 0 1 2 2v5zm-2 7a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2v-2h2zm0-1a2 2 0 0 1-2-2 2 2 0 0 1 2-2h5a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-5z" fill="#E01E5A"/>
    </svg>
  ),
  discord: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#5865F2" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  ),
};

// ==========================================
// 1. API Integrations Card Demo (Light Theme)
// ==========================================
function ApiIntegrationsDemo({ className }) {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);
  const div7Ref = useRef(null);

  return (
    <div
      className={cn(
        "relative flex h-[310px] sm:h-[330px] w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-white/80 to-slate-50/60 p-3 sm:p-6",
        className
      )}
      ref={containerRef}
    >
      {/* Background Prism Refraction Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#0457DF_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-r from-[#00D4FF]/12 via-[#0457DF]/8 to-[#8B5CF6]/12 rounded-full blur-3xl pointer-events-none" />

      <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-3 sm:gap-6 z-10">
        {/* Left Column: 5 Source Inputs */}
        <div className="flex flex-col justify-center gap-1.5 sm:gap-2">
          <Circle ref={div1Ref} className="hover:border-[#0066da] hover:shadow-[0_0_18px_rgba(0,102,218,0.35)]">
            <BeamIcons.googleDrive />
          </Circle>
          <Circle ref={div2Ref} className="hover:border-[#4285F4] hover:shadow-[0_0_18px_rgba(66,133,244,0.35)]">
            <BeamIcons.googleDocs />
          </Circle>
          <Circle ref={div3Ref} className="hover:border-[#23b33a] hover:shadow-[0_0_18px_rgba(35,179,58,0.35)]">
            <BeamIcons.whatsapp />
          </Circle>
          <Circle ref={div4Ref} className="hover:border-[#df47aa] hover:shadow-[0_0_18px_rgba(223,71,170,0.35)]">
            <BeamIcons.messenger />
          </Circle>
          <Circle ref={div5Ref} className="hover:border-slate-800 hover:shadow-[0_0_18px_rgba(15,23,42,0.25)]">
            <BeamIcons.notion />
          </Circle>
        </div>

        {/* Center: GAMA AI Neural Hub with Hero Prism Flare */}
        <div className="flex flex-col justify-center">
          <div className="relative group">
            <div className="absolute -inset-2.5 rounded-full bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] via-[#EC4899] to-[#F59E0B] opacity-55 blur-md animate-pulse" />
            <Circle
              ref={div6Ref}
              className="relative size-14 sm:size-16 border-2 border-[#0457DF]/40 bg-gradient-to-br from-white via-blue-50/70 to-purple-50/50 shadow-[0_4px_20px_rgba(4,87,223,0.3)]"
            >
              <BeamIcons.openai />
            </Circle>
          </div>
        </div>

        {/* Right: Target User Node */}
        <div className="flex flex-col justify-center">
          <Circle
            ref={div7Ref}
            className="size-12 sm:size-14 border-2 border-[#0457DF]/35 bg-white shadow-[0_4px_16px_rgba(4,87,223,0.2)]"
          >
            <BeamIcons.user />
          </Circle>
        </div>
      </div>

      {/* Magic UI Animated Beams with Prism Spectrum Gradients */}
      <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div6Ref} curvature={-40} duration={3.2} pathColor="#94A3B8" pathOpacity={0.65} pathWidth={2} gradientStartColor="#0066da" gradientStopColor="#00D4FF" />
      <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div6Ref} curvature={-20} duration={3.6} pathColor="#94A3B8" pathOpacity={0.65} pathWidth={2} gradientStartColor="#4285F4" gradientStopColor="#8B5CF6" />
      <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div6Ref} curvature={0} duration={3} pathColor="#94A3B8" pathOpacity={0.65} pathWidth={2} gradientStartColor="#23b33a" gradientStopColor="#00D4FF" />
      <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={div6Ref} curvature={20} duration={3.8} pathColor="#94A3B8" pathOpacity={0.65} pathWidth={2} gradientStartColor="#df47aa" gradientStopColor="#8B5CF6" />
      <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div6Ref} curvature={40} duration={3.4} pathColor="#94A3B8" pathOpacity={0.65} pathWidth={2} gradientStartColor="#F59E0B" gradientStopColor="#0457DF" />
      <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div7Ref} curvature={0} duration={2.8} pathColor="#94A3B8" pathOpacity={0.65} pathWidth={2} gradientStartColor="#0457DF" gradientStopColor="#00D4FF" />
    </div>
  );
}

// ==========================================
// 2. Multi-Channel Automation Network Demo (Light Theme)
// ==========================================
function MultiChannelAutomationDemo() {
  const containerRef = useRef(null);
  const left1Ref = useRef(null);
  const left2Ref = useRef(null);
  const left3Ref = useRef(null);
  const centerRef = useRef(null);
  const right1Ref = useRef(null);
  const right2Ref = useRef(null);
  const right3Ref = useRef(null);

  return (
    <div
      ref={containerRef}
      className="relative flex h-[310px] sm:h-[330px] w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-white/80 to-slate-50/60 p-3 sm:p-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#8B5CF6_1px,transparent_1px)] [background-size:22px_22px] opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-r from-[#8B5CF6]/12 via-[#EC4899]/8 to-[#00D4FF]/12 rounded-full blur-3xl pointer-events-none" />

      <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-3 sm:gap-6 z-10">
        {/* Left Inputs */}
        <div className="flex flex-col justify-center gap-3 sm:gap-4">
          <Circle ref={left1Ref} className="hover:border-[#F24E1E]">
            <BeamIcons.figma />
          </Circle>
          <Circle ref={left2Ref} className="hover:border-[#5865F2]">
            <BeamIcons.discord />
          </Circle>
          <Circle ref={left3Ref} className="hover:border-[#10B981]">
            <Zap className="w-5 h-5 text-[#10B981]" />
          </Circle>
        </div>

        {/* Center: Orchestrator Node with Prism Flare */}
        <div className="flex flex-col justify-center">
          <div className="relative group">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] via-[#00D4FF] to-[#10B981] opacity-50 blur-lg animate-pulse" />
            <div
              ref={centerRef}
              className="relative z-10 flex size-14 sm:size-18 items-center justify-center rounded-full border-2 border-[#8B5CF6]/40 bg-gradient-to-br from-white via-purple-50/70 to-blue-50/50 shadow-[0_4px_22px_rgba(139,92,246,0.35)]"
            >
              <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-[#8B5CF6] drop-shadow-[0_2px_8px_rgba(139,92,246,0.3)]" />
            </div>
          </div>
        </div>

        {/* Right Outputs */}
        <div className="flex flex-col justify-center gap-3 sm:gap-4">
          <Circle ref={right1Ref} className="hover:border-[#E01E5A]">
            <BeamIcons.slack />
          </Circle>
          <Circle ref={right2Ref} className="hover:border-[#F59E0B]">
            <Layers className="w-5 h-5 text-[#F59E0B]" />
          </Circle>
          <Circle ref={right3Ref} className="hover:border-[#00D4FF]">
            <Activity className="w-5 h-5 text-[#0457DF]" />
          </Circle>
        </div>
      </div>

      {/* Magic Beams Connecting Network with Prism Transitions */}
      <AnimatedBeam containerRef={containerRef} fromRef={left1Ref} toRef={centerRef} curvature={-35} duration={3.4} pathColor="#94A3B8" pathOpacity={0.65} pathWidth={2} gradientStartColor="#A259FF" gradientStopColor="#0457DF" />
      <AnimatedBeam containerRef={containerRef} fromRef={left2Ref} toRef={centerRef} curvature={0} duration={3} pathColor="#94A3B8" pathOpacity={0.65} pathWidth={2} gradientStartColor="#5865F2" gradientStopColor="#8B5CF6" />
      <AnimatedBeam containerRef={containerRef} fromRef={left3Ref} toRef={centerRef} curvature={35} duration={3.6} pathColor="#94A3B8" pathOpacity={0.65} pathWidth={2} gradientStartColor="#10B981" gradientStopColor="#00D4FF" />
      <AnimatedBeam containerRef={containerRef} fromRef={centerRef} toRef={right1Ref} curvature={-35} duration={3.2} pathColor="#94A3B8" pathOpacity={0.65} pathWidth={2} gradientStartColor="#8B5CF6" gradientStopColor="#E01E5A" />
      <AnimatedBeam containerRef={containerRef} fromRef={centerRef} toRef={right2Ref} curvature={0} duration={3} pathColor="#94A3B8" pathOpacity={0.65} pathWidth={2} gradientStartColor="#0457DF" gradientStopColor="#F59E0B" />
      <AnimatedBeam containerRef={containerRef} fromRef={centerRef} toRef={right3Ref} curvature={35} duration={3.5} pathColor="#94A3B8" pathOpacity={0.65} pathWidth={2} gradientStartColor="#00D4FF" gradientStopColor="#10B981" />
    </div>
  );
}

// ==========================================
// 3. Trusted Authentication Security Shield Demo (Light Theme)
// ==========================================
function TrustedAuthenticationDemo() {
  const tagsRow1 = [
    "Infrastructure",
    "Cognitive AI",
    "Zero Trust",
    "OAuth 2.0",
    "Data Pipelines",
    "Cloud Native",
    "Kubernetes",
  ];
  const tagsRow2 = [
    "SOC-2 Compliant",
    "End-to-End Encrypted",
    "Intelligent Agents",
    "Multi-Tenant",
    "mTLS Security",
    "OWASP Top 10",
  ];
  const tagsRow3 = [
    "Role-Based Access",
    "Audit Trails",
    "Real-Time Telemetry",
    "Vault Secrets",
    "Hardware KMS",
    "ISO 27001",
  ];

  return (
    <div className="relative flex h-[310px] sm:h-[330px] w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-white/80 to-slate-50/60 p-3 sm:p-6">
      <style>{`
        @keyframes bento-marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes bento-marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .bento-marquee-row-left {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: bento-marquee-left 25s linear infinite;
        }
        .bento-marquee-row-right {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: bento-marquee-right 30s linear infinite;
        }
        .bento-marquee-row-left-slow {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: bento-marquee-left 28s linear infinite;
        }
      `}</style>

      {/* Background Prism Light Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#0457DF]/10 via-[#8B5CF6]/8 to-[#00D4FF]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Looping Marquee Tag Rows with gradient fade edges */}
      <div className="w-full flex flex-col gap-3 sm:gap-4 pointer-events-none select-none [mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]">
        {/* Row 1 - Left Marquee */}
        <div className="w-full overflow-hidden flex">
          <div className="bento-marquee-row-left flex items-center gap-2.5 sm:gap-3">
            {[...tagsRow1, ...tagsRow1].map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-mono tracking-wide bg-white/95 border border-slate-200/90 text-slate-700 shadow-sm backdrop-blur-sm whitespace-nowrap shrink-0"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 - Right Marquee */}
        <div className="w-full overflow-hidden flex">
          <div className="bento-marquee-row-right flex items-center gap-2.5 sm:gap-3">
            {[...tagsRow2, ...tagsRow2].map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-mono tracking-wide bg-white border border-slate-200 text-slate-800 shadow-sm backdrop-blur-sm whitespace-nowrap shrink-0"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Row 3 - Left Marquee */}
        <div className="w-full overflow-hidden flex">
          <div className="bento-marquee-row-left-slow flex items-center gap-2.5 sm:gap-3">
            {[...tagsRow3, ...tagsRow3].map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-mono tracking-wide bg-white/95 border border-slate-200/90 text-slate-700 shadow-sm backdrop-blur-sm whitespace-nowrap shrink-0"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Center Radiant Security Shield with Prism Refraction (Enterprise Verified pill removed) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center pointer-events-none">
        <div className="relative flex items-center justify-center">
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#0457DF] via-[#00D4FF] via-[#8B5CF6] to-[#EC4899] opacity-45 blur-xl animate-pulse" />
          <div className="relative flex size-16 sm:size-20 items-center justify-center rounded-full border-2 border-blue-200/80 bg-gradient-to-br from-white to-blue-50/80 shadow-[0_8px_30px_rgba(4,87,223,0.25)] backdrop-blur-sm">
            <ShieldCheck className="w-8 h-8 sm:w-9 sm:h-9 text-[#0457DF] drop-shadow-[0_2px_8px_rgba(4,87,223,0.3)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 4. Visual Workflow Designer Panel Demo (Light Theme)
// ==========================================
function VisualWorkflowDesignerDemo() {
  return (
    <div className="relative flex h-[310px] sm:h-[330px] w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-white/80 to-slate-50/60 p-3 sm:p-5">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#8B5CF6]/10 via-[#00D4FF]/8 to-[#EC4899]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Interactive Workflow Stage Card */}
      <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white/95 p-4 sm:p-5 shadow-xl backdrop-blur-md relative z-10">
        {/* Card Header: Workflow label & 99% accuracy metric */}
        <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">Pipeline #04</span>
            <div className="flex -space-x-1.5">
              <div className="size-6 rounded-full bg-[#EA4335] border border-white flex items-center justify-center text-[10px] font-bold text-white shadow-sm">G</div>
              <div className="size-6 rounded-full bg-[#1ABCFE] border border-white flex items-center justify-center text-[10px] font-bold text-white shadow-sm">F</div>
              <div className="size-6 rounded-full bg-[#0457DF] border border-white flex items-center justify-center text-[10px] font-bold text-white shadow-sm">AI</div>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1.5 justify-end">
              <span className="text-sm sm:text-base font-bold text-slate-900 font-mono">99.9%</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <span className="text-[10px] text-slate-400 block">Execution Accuracy</span>
          </div>
        </div>

        {/* Visual Progress Bar with Prism Gradient */}
        <div className="my-3 w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#0457DF] via-[#8B5CF6] via-[#EC4899] to-[#00D4FF]"
            initial={{ width: "20%" }}
            animate={{ width: "99.9%" }}
            transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 3 }}
          />
        </div>

        {/* Visual Steps Connected by Arrow */}
        <div className="grid grid-cols-2 gap-2.5 mt-3.5">
          {/* Step 1: Trigger */}
          <div className="rounded-lg bg-slate-50/90 border border-slate-200/90 p-2.5 hover:border-[#0457DF]/50 transition-colors shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <div className="size-5 rounded bg-blue-50 flex items-center justify-center">
                <Zap className="w-3 h-3 text-[#0457DF]" />
              </div>
              <span className="text-[11px] font-semibold text-slate-900">Event Trigger</span>
            </div>
            <p className="text-[10px] text-slate-500 leading-tight">Webhook event: Inbound lead captured in CRM</p>
            <div className="mt-1.5 text-[9px] font-mono text-[#0457DF] font-medium">STATUS: EMITTED</div>
          </div>

          {/* Step 2: Action */}
          <div className="rounded-lg bg-slate-50/90 border border-slate-200/90 p-2.5 hover:border-[#8B5CF6]/50 transition-colors shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <div className="size-5 rounded bg-purple-50 flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-[#8B5CF6]" />
              </div>
              <span className="text-[11px] font-semibold text-slate-900">AI Synthesis</span>
            </div>
            <p className="text-[10px] text-slate-500 leading-tight">Autonomous multi-agent enrichment & dispatch</p>
            <div className="mt-1.5 text-[9px] font-mono text-[#8B5CF6] font-medium">ACTIVE: 12ms</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// Main Section: AI Workforce / Architecture (Light Theme)
// ==========================================
export default function AIWorkforceSection({ onOpenContact }) {
  const bentoItems = [
    {
      id: "api-integrations",
      colSpan: 1,
      rowSpan: 1,
      content: (
        <div className="flex flex-col h-full w-full justify-between">
          <div className="flex flex-col items-center text-center mb-4 pt-1 w-full">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Seamless API Integrations
            </h3>
            <div
              className="w-full max-w-md h-[1px] my-3 select-none pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(100, 116, 139, 0.35) 12%, rgba(100, 116, 139, 0.75) 50%, rgba(100, 116, 139, 0.35) 88%, transparent 100%)",
              }}
            />
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              GAMA natively interconnects with your preferred tools, data warehouses, and messaging services.
            </p>
          </div>
          <div className="w-full mt-auto">
            <ApiIntegrationsDemo />
          </div>
        </div>
      ),
    },
    {
      id: "trusted-auth",
      colSpan: 1,
      rowSpan: 1,
      content: (
        <div className="flex flex-col h-full w-full justify-between">
          <div className="flex flex-col items-center text-center mb-4 pt-1 w-full">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Trusted Authentication
            </h3>
            <div
              className="w-full max-w-md h-[1px] my-3 select-none pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(100, 116, 139, 0.35) 12%, rgba(100, 116, 139, 0.75) 50%, rgba(100, 116, 139, 0.35) 88%, transparent 100%)",
              }}
            />
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Quickly integrate enterprise platforms to active workflows with bank-grade security protocols.
            </p>
          </div>
          <div className="w-full mt-auto">
            <TrustedAuthenticationDemo />
          </div>
        </div>
      ),
    },
    {
      id: "multi-channel",
      colSpan: 1,
      rowSpan: 1,
      content: (
        <div className="flex flex-col h-full w-full justify-between">
          <div className="flex flex-col items-center text-center mb-4 pt-1 w-full">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Multi-Channel Automation
            </h3>
            <div
              className="w-full max-w-md h-[1px] my-3 select-none pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(100, 116, 139, 0.35) 12%, rgba(100, 116, 139, 0.75) 50%, rgba(100, 116, 139, 0.35) 88%, transparent 100%)",
              }}
            />
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Trigger synchronized emails, webhooks, Slack alerts, and background jobs automatically.
            </p>
          </div>
          <div className="w-full mt-auto">
            <MultiChannelAutomationDemo />
          </div>
        </div>
      ),
    },
    {
      id: "workflow-designer",
      colSpan: 1,
      rowSpan: 1,
      content: (
        <div className="flex flex-col h-full w-full justify-between">
          <div className="flex flex-col items-center text-center mb-4 pt-1 w-full">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Visual Workflow Designer
            </h3>
            <div
              className="w-full max-w-md h-[1px] my-3 select-none pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(100, 116, 139, 0.35) 12%, rgba(100, 116, 139, 0.75) 50%, rgba(100, 116, 139, 0.35) 88%, transparent 100%)",
              }}
            />
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Drag-and-drop AI actions to construct autonomous decision loops with real-time accuracy tracking.
            </p>
          </div>
          <div className="w-full mt-auto">
            <VisualWorkflowDesignerDemo />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="capabilities"
      className="relative w-full bg-[#F8FAFC] py-14 xs:py-16 sm:py-24 md:py-32 px-3.5 sm:px-6 lg:px-8 overflow-hidden text-slate-900 border-t border-slate-200/80"
    >
      {/* Background Hero Prism Atmospheric Refraction Layers */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-[radial-gradient(ellipse_at_top,rgba(0,212,255,0.12)_0%,rgba(4,87,223,0.06)_35%,rgba(139,92,246,0.04)_55%,transparent_75%)] pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-[#00D4FF]/10 via-[#0457DF]/5 to-transparent rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-gradient-to-tl from-[#8B5CF6]/10 via-[#EC4899]/8 to-transparent rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#F59E0B]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8 xs:mb-10 sm:mb-16">
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-[1.65rem] xs:text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 max-w-3xl leading-[1.18] sm:leading-[1.12]"
          >
            Build, Scale And Manage Entire{" "}
            <span className="bg-gradient-to-r from-[#0457DF] via-[#8B5CF6] via-[#EC4899] to-[#00D4FF] bg-clip-text text-transparent">
              AI Workforce
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-sans text-xs xs:text-sm sm:text-lg text-slate-600 max-w-2xl mt-2.5 xs:mt-3 sm:mt-5 leading-relaxed font-normal"
          >
            GAMA empowers organizations to tackle data bottlenecks, orchestrate autonomous multi-agent pipelines, and build resilient digital products with ease.
          </motion.p>
        </div>

        {/* React Bits <MagicBento /> Light Theme Grid with Prism Highlights */}
        <div className="w-full">
          <MagicBento
            items={bentoItems}
            columns={2}
            rowHeight={480}
            gap={24}
            radius={28}
            theme="light"
            glowColor="4, 87, 223"
            enableBorderGlow={true}
            enableSpotlight={true}
            spotlightRadius={380}
            enableStars={true}
            particleCount={24}
            clickEffect={true}
          />
        </div>
      </div>
    </section>
  );
}

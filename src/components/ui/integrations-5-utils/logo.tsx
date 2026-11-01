import React from 'react'

export function LogoIcon({ className = 'size-8 text-blue-500' }: { className?: string }) {
  // GAMA central diamond brand logo
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gama-center-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0457DF" />
          <stop offset="50%" stopColor="#FEB824" />
          <stop offset="100%" stopColor="#0DBA6C" />
        </linearGradient>
      </defs>
      <path
        d="M20 4L34 12V28L20 36L6 28V12L20 4Z"
        fill="url(#gama-center-grad)"
        opacity="0.9"
      />
      <path
        d="M20 10L28 15V25L20 30L12 25V15L20 10Z"
        fill="white"
        fillOpacity="0.95"
      />
      <circle cx="20" cy="20" r="4" fill="#0457DF" />
    </svg>
  )
}

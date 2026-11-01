import React from 'react'

export function VSCodium({ className = 'size-5' }: { className?: string }) {
  // Docker whale / container logo
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.5 12.8C22.3 12.8 21.6 12.9 21.1 13.3C20.6 12.9 19.8 12.6 19 12.7C18.6 12 17.9 11.5 17.1 11.4C16.9 10.4 16.1 9.8 15.2 9.8H14.8V8.6C14.8 8.3 14.5 8 14.2 8H12.6C12.3 8 12 8.3 12 8.6V9.8H11.5C11.5 9.4 11.3 9 10.9 8.8C10.7 8.7 10.5 8.7 10.3 8.7C9.9 8.7 9.5 8.9 9.3 9.3C9.1 9.7 9.1 10.1 9.3 10.5C9.4 10.7 9.6 10.9 9.8 11.1L8.3 11.2C8.1 10.5 7.5 10 6.7 10H5.5C5.2 10 5 10.2 5 10.5V11.8H3.8C3.5 11.8 3.3 12 3.3 12.3V13.5H2.5C2.2 13.5 2 13.7 2 14V15.2C2 17.8 4.2 20 6.8 20C11.5 20 16.5 19.8 19.5 16.9C21.7 14.8 22.8 13.5 22.5 12.8Z"
        fill="#2496ED"
      />
      {/* Containers */}
      <rect x="7.5" y="8" width="2" height="1.8" rx="0.3" fill="#2496ED" />
      <rect x="10" y="8" width="2" height="1.8" rx="0.3" fill="#2496ED" />
      <rect x="7.5" y="10.2" width="2" height="1.8" rx="0.3" fill="#2496ED" />
      <rect x="10" y="10.2" width="2" height="1.8" rx="0.3" fill="#2496ED" />
      <rect x="12.5" y="10.2" width="2" height="1.8" rx="0.3" fill="#2496ED" />
      <rect x="5" y="10.2" width="2" height="1.8" rx="0.3" fill="#2496ED" />
    </svg>
  )
}

import React from 'react'

export function MagicUI({ className = 'size-5' }: { className?: string }) {
  // TypeScript logo SVG
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path
        d="M11.5 8H5.5V10.2H7.2V17H9.8V10.2H11.5V8ZM18.5 10.3C18 9.8 17.2 9.5 16.3 9.5C15.2 9.5 14.3 10 14.3 11.2C14.3 13.5 18.5 12.8 18.5 15.6C18.5 17.2 16.9 17.8 15.3 17.8C14.1 17.8 13.1 17.4 12.4 16.7L13.4 15.1C14 15.6 14.8 16 15.6 16C16.3 16 16.8 15.7 16.8 15.1C16.8 13.2 12.6 13.7 12.6 11.1C12.6 9.4 14.1 8 16.2 8C17.2 8 18.1 8.3 18.8 8.8L18.5 10.3Z"
        fill="white"
      />
    </svg>
  )
}

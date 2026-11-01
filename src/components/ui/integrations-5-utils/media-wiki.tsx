import React from 'react'

export function MediaWiki({ className = 'size-5' }: { className?: string }) {
  // PostgreSQL database elephant icon
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.2 16.5C16.8 17.1 15.8 17.4 14.5 17.4C13.2 17.4 12.1 16.9 11.2 16.1C10.5 15.4 10.1 14.4 10 13.3C9.9 12.2 10.2 11.1 10.8 10.3C11.6 9.3 12.8 8.8 14.1 8.8C15.3 8.8 16.3 9.2 17 9.9L15.6 11.3C15.2 10.9 14.7 10.7 14.1 10.7C13.4 10.7 12.8 11 12.4 11.5C12 12 11.9 12.7 11.9 13.3C12 14 12.2 14.6 12.6 15C13 15.4 13.6 15.6 14.3 15.6C15.1 15.6 15.7 15.4 16.1 15V13.8H14.2V12H18V16L17.2 16.5Z"
        fill="#336791"
      />
    </svg>
  )
}

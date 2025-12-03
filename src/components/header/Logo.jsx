import React from 'react'

function Logo() {
  return (
    <svg
      className="logo-mark"
      viewBox="0 0 48 48"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d88d6f" />
          <stop offset="100%" stopColor="#c06c4e" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="22" fill="url(#logoGradient)" />
      <text
        x="50%"
        y="52%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="14"
        fontWeight="600"
        letterSpacing="0.18em"
        fill="#fff"
      >
        LL
      </text>
    </svg>
  )
}

export default Logo



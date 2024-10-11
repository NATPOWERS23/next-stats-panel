/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#f5f5f5',
      secondary: '#1c9b56',
      'black': '#161616',
      'white': '#f5f5f5',
      'grey': '#232323',
      'grey-light': '#444444',
      'purple': '#cb59d5',
      'orange': '#ec6816',
      'green': '#1c9b56',
      'lime': '#baff68',
      'red': '#d3454b',
      'blue': '#3a79d8',
      'sky': '#00399b',
      'twitch': '#5c16c5'
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
      '2large': '24px',
    },
    extend: {
    },
  },
  plugins: [],
}
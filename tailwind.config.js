/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        brand: {
          blue: '#0576fc',
          primary: '#0576fc',
          orange: '#0576fc',
          peach: '#E5EFFF',
          cream: '#ECEAE5',
          creamLight: '#F8EEE8',
          dark: '#111111',
          black: '#000000',
          accent: '#0576fc',
          card: '#FAF2EE',
        }
      },
      fontFamily: {
        display: ['Mdnichrometest', 'MD Nichrome', 'Impact', 'sans-serif'],
        'display-dark': ['"Mdnichrometest Dark"', 'MD Nichrome Dark', 'Impact', 'sans-serif'],
        sans: ['Neuemontreal', 'Neue Montreal', 'Helvetica Neue', 'sans-serif'],
      },
      spacing: {
        '75': '18.75rem',
        '90': '22.5rem',
        '110': '27.5rem',
        '145': '36.25rem',
        '150': '37.5rem',
        '160': '40rem',
        '180': '45rem',
        '220': '55rem',
        '265': '66.25rem',
      }
    },
  },
  plugins: [],
}

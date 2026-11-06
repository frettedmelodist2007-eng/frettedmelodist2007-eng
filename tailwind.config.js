/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#080808',
          secondary: '#101010',
          surface: '#171717',
        },
        gold: {
          DEFAULT: '#C6A66B',
          bright: '#E0C080',
          muted: '#806B48',
          dark: '#4A3E26',
        },
        border: {
          DEFAULT: '#292929',
          light: '#383838',
        },
        tx: {
          primary: '#F5F5F5',
          secondary: '#A3A3A3',
          muted: '#737373',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['var(--font-mono)', 'Fira Code', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 25s linear infinite',
        'pulse-subtle': 'pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}

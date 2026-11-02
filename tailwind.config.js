/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // True 100% CMYK Brand Colors
        brandCyan: {
          DEFAULT: '#00AEEF', // 100% Cyan
          hover: '#0097D1',
          dark: '#007AA8',
          light: '#E6F7FD',
        },
        brandMagenta: {
          DEFAULT: '#EC008C', // 100% Magenta
          hover: '#CF007B',
          dark: '#A60062',
          light: '#FDE6F3',
        },
        paper: {
          50: '#FCFBF8',
          100: '#FAF9F5',
          200: '#F3F1EA',
          300: '#E8E5DC',
          400: '#D5D1C6',
          900: '#1A1917',
        },
        ink: {
          950: '#0C0D0E',
          900: '#141619',
          800: '#1F2328',
          700: '#323841',
          600: '#4D5562',
          500: '#6E7787',
          400: '#9AA3B2',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'specimen': '0 1px 3px rgba(0, 0, 0, 0.05), 0 20px 40px -15px rgba(0, 0, 0, 0.07)',
        'tactile': '0 2px 4px rgba(0,0,0,0.02), 0 12px 32px -4px rgba(18, 19, 22, 0.08)',
        'recessed': 'inset 0 2px 4px rgba(0,0,0,0.06)',
        'cyan-glow': '0 0 25px -4px rgba(0, 174, 239, 0.4)',
        'magenta-glow': '0 0 25px -4px rgba(236, 0, 140, 0.4)',
        'sheet': '0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 24px 48px -12px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04)',
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.025em',
        widest: '0.12em',
      },
    },
  },
  plugins: [],
};

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ocean': {
          50:  '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        'sand': {
          50:  '#fdf8f0',
          100: '#faefd9',
          200: '#f5ddb3',
          300: '#efc583',
          400: '#e8a84d',
          500: '#e29228',
          600: '#d4781e',
          700: '#b05e1a',
          800: '#8d4b1c',
          900: '#723f1a',
        },
        'nature': {
          50:  '#f2f7f2',
          100: '#e0ede0',
          200: '#c2dbc3',
          300: '#97c19a',
          400: '#68a26c',
          500: '#4a8a50',
          600: '#386e3e',
          700: '#2d5832',
          800: '#26472a',
          900: '#1f3a23',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config

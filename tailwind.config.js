/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Light theme palette
        brand: {
          purple: '#593ACB',
          'purple-light': '#7C5CE8',
          cyan: '#0891B2',
          'cyan-light': '#06B6D4',
        },
        light: {
          bg: '#F7F8FC',
          secondary: '#F0EEFA',
          card: '#FFFFFF',
          elevated: '#F9FAFB',
        },
        ink: {
          primary: '#172033',
          secondary: '#64748B',
          muted: '#94A3B8',
        },
        border: '#E5E7EB',
        'border-strong': '#D1D5DB',
        danger: '#DC4545',
        warning: '#D97706',
        success: '#16865D',
        info: '#0891B2',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'scan': 'scan 3s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'draw': 'draw 2s ease-in-out forwards',
        'fade-up': 'fadeUp 0.5s ease forwards',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        draw: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};


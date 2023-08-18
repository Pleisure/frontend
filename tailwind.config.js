/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        grayBg: '#e5e7eb',
        darkGrayBg: '#d1d5db',
        grayTxt: '#111827',
        cyanTxt: '#22d3ee',
      },
    },
  },
  plugins: [require('daisyui'), require('tailwind-scrollbar-hide')],
  daisyui: {
    themes: ['emerald'],
    darkTheme: false,
    base: true,
    styled: true,
    utils: true,
    rtl: false,
    prefix: '',
    logs: false,
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'system-ui', 'sans-serif'],
    },
    fontWeight: { normal: 500, bold: 700 },
    extend: {
      colors: {
        'cyan-200': 'hsl(180, 66%, 75%)',
        'cyan-400': 'hsl(180, 66%, 49%)',
        violet: 'hsl(257, 27%, 26%)',
        red: 'hsl(0, 87%, 67%)',
        'neutral-100': '#EEF1F6',
        'neutral-200': 'hsl(0, 0%, 75%)',
        'neutral-300': 'hsl(257, 7%, 63%)',
        'neutral-700': 'hsl(255, 11%, 22%)',
        'neutral-900': 'hsl(260, 8%, 14%)',
      },
    },
  },
  plugins: [],
};

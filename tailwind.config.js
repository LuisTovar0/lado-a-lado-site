/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
        phone: '480px',
        nav: '900px',
      },
      borderRadius: {
        sm: '6px',
        card: '16px',
        pill: '999px',
      },
      boxShadow: {
        'lal-sm': '0 2px 8px rgba(109,46,70,0.10)',
        'lal': '0 8px 24px rgba(109,46,70,0.12)',
        'lal-lg': '0 18px 48px rgba(109,46,70,0.16)',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};


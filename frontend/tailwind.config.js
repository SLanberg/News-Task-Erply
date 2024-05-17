/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        skin: {
          primary: 'hsl(var(--color-text-primary))',
        },
      },
      backgroundColor: {
        skin: {
          primary: 'hsl(var(--color-primary-800) / <alpha-value>)',
          secondary: 'hsl(var(--color-primary-900) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};

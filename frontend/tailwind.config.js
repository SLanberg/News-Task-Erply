/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'xs': '320px',  // Extra small devices (phones)
      'sm': '640px',  // Small devices (tablets)
      'md': '768px',  // Medium devices (small laptops)
      'lg': '1024px', // Large devices (desktops)
      'xl': '1280px', // Extra large devices (large desktops)
      '2xl': '1536px', // Add 2xl breakpoint
      '3xl': '1920px', // Add 3xl breakpoint
    },

    extend: {
      textColor: {
        skin: {
          primary: 'hsl(var(--color-text-primary))',
          highlight: 'hsl(var(--color-text-highlight))',
        },
      },
      backgroundColor: {
        skin: {
          navbar: 'hsl(var(--navbar-color) / <alpha-value>)',
          background: 'hsl(var(--background-color) / <alpha-value>)',
          boxColor: 'hsl(var(--box-color) / <alpha-value>)',
          boxBackgroundSection: 'hsl(var(--box-background-section-color) / <alpha-value>)',
          infoBox: 'hsl(var(--info-box-color) / <alpha-value>)',

          input: 'hsl(var(--input-color) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};

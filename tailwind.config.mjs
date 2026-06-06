/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'b4b': {
          green:      '#3D5B3C',
          'green-dk': '#2C4330',
          'green-lt': '#506E4F',
          'green-pale': '#E8EFE6',
          cream:      '#F7F4EE',
          tan:        '#E2DAD0',
          charcoal:   '#1C1A18',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body:    ['Lora', 'Georgia', 'serif'],
        ui:      ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'brand': '0.25em',
      },
      maxWidth: {
        'prose-wide': '72ch',
      },
    },
  },
  plugins: [],
};

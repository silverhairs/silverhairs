/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        monospace: ['Overpass Mono Variable', 'monospace'],
        sans: ['Inter Variable', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

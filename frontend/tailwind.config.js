/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // Figma breakpoints
        'xs': '375px',      // Mobile small
        'sm': '390px',      // Mobile medium (Figma: 390px)
        'md': '768px',      // Tablet (Figma: 768px)
        'lg': '1024px',     // Tablet landscape (Figma: 1024px)
        'xl': '1280px',     // Desktop small (Figma: 1280px)
        '2xl': '1440px',    // Desktop medium (Figma: 1440px)
        '3xl': '1920px',    // Desktop large (Figma: 1920px)
      },
      maxWidth: {
        'container': '1920px', // Max container width
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      tablet: "640px",

      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    container: {
      center: true,
      padding: "1.25rem",
    },
    extend: {
      colors: {
        white: "var(--white)",
        black: "var(--black)",
        gray: "var(--gray)",
        accent: "var(--accent)",
        borderLight: "var(--border-light)",
        cardBg: "var(--card-bg)",
        background: "var(--background)",
      },
      fontFamily: {
        Inter: "Inter, sans-serif",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar": {
          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Firefox */
          "scrollbar-width": "none",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
  ],
};

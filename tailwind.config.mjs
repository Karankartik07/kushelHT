/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
  // CSS optimization settings
  corePlugins: {
    // Disable unused features for smaller bundle
    preflight: true,
    container: false,
    accessibility: true,
    pointerEvents: true,
    visibility: true,
    position: true,
    inset: true,
    isolation: true,
    zIndex: true,
    order: true,
    gridColumn: true,
    gridColumnStart: true,
    gridColumnEnd: true,
    gridRow: true,
    gridRowStart: true,
    gridRowEnd: true,
    float: true,
    clear: true,
    objectFit: true,
    objectPosition: true,
    overflow: true,
    overscrollBehavior: true,
    position: true,
    inset: true,
    visibility: true,
    zIndex: true,
  },
  // Purge unused CSS in production
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    options: {
      safelist: [
        // Keep critical classes
        'sr-only',
        'what-image-universal',
        'whtsApBtns',
        'home-main',
        // Keep animation classes
        /^animate-/,
        /^transition-/,
        /^transform/,
        // Keep responsive classes
        /^sm:/,
        /^md:/,
        /^lg:/,
        /^xl:/,
        /^2xl:/,
      ],
    },
  },
};

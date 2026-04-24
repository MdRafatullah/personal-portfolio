/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#060816",
        cloud: "#f8fbff",
        electric: "#4f8cff",
        violet: "#9b5cff",
        mint: "#41f0c2",
        graphite: "#111827"
      },
      boxShadow: {
        glow: "0 0 45px rgba(79, 140, 255, 0.22)",
        glass: "0 24px 80px rgba(0, 0, 0, 0.28)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};

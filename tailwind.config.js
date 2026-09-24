/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  safelist: [
    "from-red-600",
    "via-rose-600",
    "to-amber-600",
    "from-emerald-600",
    "via-teal-600",
    "to-cyan-600",
    "from-blue-600",
    "via-indigo-600",
    "to-sky-500",
    "to-sky-600",
    "from-indigo-600",
    "via-purple-600",
    "to-blue-600",
    "from-purple-600",
    "to-blue-700"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#070b14",
        cloud: "#f8fafc",
        electric: "#2563eb",
        graphite: "#0f172a"
      },
      boxShadow: {
        glow: "0 0 45px rgba(37, 99, 235, 0.22)",
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

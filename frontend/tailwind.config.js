/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        surface: { 0: "#121211", 1: "#1a1a19", 2: "#242422", 3: "#2e2e2b" },
        ink: { 1: "#f0efec", 2: "#c3c2b7", 3: "#8f8e86" },
        line: "#3a3a36",
        accent: "#3987e5",
        status: { good: "#0ca30c", warning: "#fab219", serious: "#ec835a", critical: "#d03b3b" },
      },
      fontFamily: { sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"] },
    },
  },
  plugins: [],
};

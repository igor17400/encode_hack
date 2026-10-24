/** @type {import('tailwindcss').Config} */
// "Operating theatre" identity: deep blue-slate surfaces, anatomy colours carry structure identity,
// one periwinkle accent marks the model's own thinking (perception, retrieval, Argon).
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        surface: { 0: "#0a1017", 1: "#101923", 2: "#16222f", 3: "#1d2b3b" },
        ink: { 1: "#e9eef4", 2: "#aab7c6", 3: "#718196" },
        line: "#24344a",
        accent: "#8f9cff",
        anat: { liver: "#7d2f38", gb: "#93b25d", duct: "#e3b23e", artery: "#e05a50", plate: "#caa37b", cbd: "#5cc8d8" },
        status: { good: "#0ca30c", warning: "#fab219", serious: "#ec835a", critical: "#d03b3b" },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ['"IBM Plex Sans"', "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};

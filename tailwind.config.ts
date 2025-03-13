/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1a1a1a",
        text: "#f0f0f0",
        accent: "#FF5722",
        "secondary-accent": "#0066ff",
        "secondary-accent/20": "#0066ff",
        secondary: "#2a2a2a"
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(90deg, #FF5722, #0066ff)",
      },
    },
  },
  plugins: [],
};

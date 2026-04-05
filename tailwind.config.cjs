/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0E2E30",
        ocean: "#0D3A40",
        sand: "#888E7F",
        deep: "#06353C",
        pine: "#093531",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(136, 142, 127, 0.25), 0 16px 48px rgba(0,0,0,0.45)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};


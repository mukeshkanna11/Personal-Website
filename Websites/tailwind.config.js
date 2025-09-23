/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Sans-serif
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"], // Headings
        // Serif / Stylish
        playfair: ['"Playfair Display"', 'serif'],
        abril: ['"Abril Fatface"', 'serif'],
        greatvibes: ['"Great Vibes"', 'cursive'],
        cinzel: ['Cinzel', 'serif'],
        lobster: ['Lobster', 'cursive'], // Fun / stylish headings
        dancing: ['"Dancing Script"', 'cursive'], // Playful & elegant
        indieflower: ['"Indie Flower"', 'cursive'], // Handwritten style
        pacifico: ['Pacifico', 'cursive'], // Smooth, friendly look
      },
      colors: {
        brandYellow: "#facc15", // Tailwind yellow-400
        brandIndigo: "#6366f1", // Tailwind indigo-500
        brandPink: "#ec4899", // Tailwind pink-500
        brandTeal: "#14b8a6", // Tailwind teal-500
        brandOrange: "#f97316", // Tailwind orange-500
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        zoomInOut: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        rotate360: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        slideDown: "slideDown 0.3s ease-out",
        float: "float 4s ease-in-out infinite",
        zoomInOut: "zoomInOut 6s ease-in-out infinite",
        rotate360: "rotate360 10s linear infinite",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        archivonarrow: "var(--archivonarrow)",
        unbounded: "var(--unbounded)",
      },
      colors: {
        ice: "#cef7f7",
        // peach: "#1d1d1d",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        dark: {
          primary: "#111317",
          secondary: "#1A1C22",
          tertiary: "#282C35",
        },

        indicator: {
          primary: "#1FCB4F",
          secondary: "#FFC01E",
          tertiary: "#F46D22",
        },

        ash: {
          primary: "#9A9A9A",
          secondary: "#9E9E9E",
        },
      },
    },
  },
  plugins: [],
};

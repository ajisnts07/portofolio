/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*/.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "4rem",
        lg: "8rem",
        xl: "12rem",
      },
    },
    extend: {
      fontFamily: {
        instrumentSans: ["InstrumentSans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        gray: {
          950: "#1e1e1e",
        },
      },
    },
  },
  plugins: [],
};

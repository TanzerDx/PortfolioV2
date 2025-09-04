/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        bgColor: "#1E1B29",
        textColor: "#FFFFFF",
        primaryColor: "#C084FC",
        secondaryColor: "#D6BCFA",
      },
    },
  },
  plugins: [],
};

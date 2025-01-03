/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#55AD9B",
        secondary: "#D8EFD3",
        pagebg: "#F1F8E8",
        navbarbg: "#95D2B3",
      },
    },
  },
  plugins: [],
};

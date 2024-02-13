/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        back: "#EFEFEF",
        greysecond: "#202832",
        greyprime: "#2F3A47",
        greydef: "#D9D9D9",
        greenYellow: "#CEFD4A",
      },
    },
    fontFamily: {
      product: ['"Product Sans"', "Poppins"],
    },
  },
  plugins: [],
};

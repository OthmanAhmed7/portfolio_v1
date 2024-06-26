import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "425px",
      md: "768px",
      lg: "945px",
      xl: "1024px",
      "2xl": "1440px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        "main-color": "#102C57",
        "light-color": "#FEFAF6",
        "dark-color": "#EADBC8",
        "darker-color": "#DAC0A3",
      },
    },
  },
  plugins: [],
};
export default config;

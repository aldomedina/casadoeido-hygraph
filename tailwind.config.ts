import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      boxShadow: {
        "inner-border": "inset 0 0 0 1px rgba(0,0,0)",
      },
      backgroundImage: (theme) => ({
        "hero-pattern": "url('/img/folhas.png')",
      }),
      fontSize: {
        xxs: ".6rem",
        xxl: "1.7rem",
        xxxl: "2rem",
        xxxxl: "2.4rem",
        "mobile-menu": "2.5rem",
      },
      colors: {
        beige: "#F8F6F4",
      },
    },
    fontFamily: {
      sans: ["sofia-pro", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;

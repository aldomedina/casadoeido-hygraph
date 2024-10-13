import type { Config } from "tailwindcss";

type ViewportType = "vw" | "vh";

function generateViewportSizes(
  unit: ViewportType,
  steps: number[] = [
    5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
    100,
  ]
): Record<string, string> {
  return steps.reduce((acc, step) => {
    acc[`${step}v`] = `${step}${unit}`;
    return acc;
  }, {} as Record<string, string>);
}

const height = generateViewportSizes("vh");
const width = generateViewportSizes("vw");
const minHeight = {
  36: "9rem",
  48: "12rem",
  ...generateViewportSizes("vh"),
};
const minWidth = {
  36: "9rem",
  48: "12rem",
  ...generateViewportSizes("vw"),
};
const maxWidth = generateViewportSizes("vw");
const maxHeight = generateViewportSizes("vh");

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
      height,
      width,
      minHeight,
      minWidth,
      maxHeight,
      maxWidth,
    },
    fontFamily: {
      sans: ["sofia-pro", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;

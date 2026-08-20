import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        canyon: "#A03D24",
        canyonDark: "#7E2F1B",
        sage: "#6B7355",
        sageDark: "#535A42",
        ochre: "#C08A3E",
        bluff: "#2E1F16",
        paper: "#F5EDE0",
        paperRaised: "#EADFC9",
        ink: "#2B2318",
        inkSoft: "#5D5343",
      },
      fontFamily: {
        head: ["var(--font-head)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

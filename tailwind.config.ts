import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        bone: "#F5F5F0",
        gold: "#C9A961",
        line: "#1F1F1F",
        muted: "#8A8A85",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
      },
    },
  },
  plugins: [],
};

export default config;

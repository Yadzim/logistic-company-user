import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        info: "#7B8693",
        main: "#FF5F13",
        blue: "#000C20",
      },
      width: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        // max: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;

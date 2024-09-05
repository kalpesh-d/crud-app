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
        "input-bg": "var(--input-bg)",
        "button-bg": "var(--button-bg)",
        "button-hover": "var(--button-hover)",
        content: "var(--content-bg)",
      },
    },
  },
  plugins: [],
};
export default config;

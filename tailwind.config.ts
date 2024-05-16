import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      width: {
        seekBeforeWidth: "0"
      },
      fontFamily: {
        custom: ["Khand", "sans-serif"]
      },
      backgroundImage: {
        dashboard: "url('/images/FELICIA_SCANNING(22)_wash.jpg')",
        about: "url('/images/FELICIA_SCANNING(17)_wash.jpg')"
      }
    }
  },
  plugins: []
};
export default config;

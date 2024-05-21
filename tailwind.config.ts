import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

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
        about: "url('/images/FELICIA_SCANNING(17)_wash.jpg')",
        contact: "url('/images/FELICIA_SCANNING(6).jpg')",
        playBtn: "url('/icons/Play-btn.png')",
        pauseBtn: "url('/icons/Pause-btn.png')"
      }
    }
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "animate-delay": (value) => ({
            animationDelay: value
          })
        },
        { values: theme("transitionDelay") }
      );
    })
  ]
};
export default config;

import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sgv: {
          green: "#CBFD12",
          blue: "#0174BE",
          black: "#0C0C0C",
          white: "#FFFFFF",
          grey: "#8296AA",
          mirage: "#162129",
        },
      },
      fontFamily: {
        serif: ['"EB Garamond"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
      },
      animation: {
        scroll: "scroll 90s linear infinite",
        "scroll-slow": "scroll 120s linear infinite",
        "scroll-reverse": "scroll 80s linear infinite reverse",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "bounce-slow": "bounce 2s ease-in-out infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;

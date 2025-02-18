import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      keyframes: {
        slide: {
          "0%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        morph: {
          "0%": { borderRadius: "0%" },
          "50%": { borderRadius: "50%" },
          "100%": { borderRadius: "0%" },
        },
        wave: {
          "0%, 100%": { transform: "scaleY(1)" },
          "50%": { transform: "scaleY(2)" },
        },
        squareRotate: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(90deg) scale(1.2)" },
          "50%": { transform: "rotate(180deg)" },
          "75%": { transform: "rotate(270deg) scale(0.8)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

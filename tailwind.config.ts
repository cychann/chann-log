import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4662D5",
      },
      fontFamily: {
        pretendard: ["Pretendard"],
      },
      typography: {
        DEFAULT: {
          css: {
            "h1, h2, h3, h4": {
              margin: "2rem 0",
            },
            p: {
              margin: "2rem 0",
            },

            pre: {
              padding: "1.25rem",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;

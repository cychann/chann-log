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
        primary: "var(--primary)",
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

            ":not(pre) > code": {
              fontWeight: "inherit",
              position: "relative",
              bottom: 1,
              margin: "0 3px",
              color: "#eb5757",
              backgroundColor: "rgba(135,131,120,0.15)",
              fontFamily:
                '"SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace',
              borderRadius: 3,
              padding: "0.2em 0.4em",
              overflowWrap: "break-word",
            },

            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },

            blockquote: {
              fontWeight: "bold",
              fontStyle: "normal",
              borderLeftColor: "var(--primary)",
              backgroundColor: "rgba(0, 0, 0, 0.03)",
              padding: "1rem",
              p: {
                margin: "0",
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;

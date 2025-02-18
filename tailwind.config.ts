import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        primary: {
          "100": "var(--primary-100)",
          "200": "var(--primary-200)",
          "400": "var(--primary-400)",
          "600": "var(--primary-600)",
          "800": "var(--primary-800)",
          DEFAULT: "var(--primary-600)",
          foreground: "hsl(var(--primary-foreground))",
        },
        background: {
          DEFAULT: "var(--background)",
          secondary: "var(--background-secondary)",
          button: "var(--button-bg)",
        },
        foreground: "var(--foreground)",
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          tertiary: "var(--text-tertiary)",
          inverse: "var(--text-inverse)",
          description: "var(--text-description)",
          button: "var(--button-text)",
        },
        border: {
          DEFAULT: "var(--border)",
        },
        button: {
          active: "var(--button-active)",
          hover: "var(--button-hover)",
        },
        search: {
          active: "var(--search-active)",
          hover: "var(--search-hover)",
        },

        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        floating: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        fadeIn: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
      },
      animation: {
        floating: "floating 1s ease-in-out infinite",
        fadeIn: "fadeIn 0.5s ease-out forwards",
      },
      screens: {
        "[900px]": "900px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
} satisfies Config;

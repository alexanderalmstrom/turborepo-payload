const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    fontSize: {
      "4xs": "0.375rem",
      "3xs": "0.5rem",
      "2xs": "0.625rem",
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "2rem",
      "4xl": "2.5rem",
      "5xl": "3.5rem",
      "6xl": "5rem",
    },
    extend: {
      fontSize: {
        "fluid-1": ["clamp(3.5rem, 6vw, 5rem)", "1"],
        "fluid-2": ["clamp(2.5rem, 5vw, 3.5rem)", "1.05"],
        "fluid-3": ["clamp(2rem, 4vw, 2.5rem)", "1.1"],
        "fluid-4": ["clamp(1.5rem, 3vw, 2rem)", "1.15"],
        "fluid-5": ["clamp(1.125rem, 2vw, 1.5rem)", "1.2"],
        "fluid-6": ["clamp(1rem, 1.5vw, 1.125rem)", "1.25"],
      },
      aspectRatio: {
        "16/9": "16 / 9",
        "4/5": "4 / 5",
        "1/1": "1 / 1",
      },
      screens: {
        "2xl": "1920px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "beige-1": "#FFFFF8",
        "beige-2": "#F4F5EA",
        "warm-gray": "#A59C94",
        "gray-1": "#F8F8F8",
        "gray-2": "#E4E4E4",
        "gray-3": "#BFBFBF",
        "gray-4": "#757575",
        red: "#C8102E",
        blue: "#002F6C",
        green: "#009A44",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
  plugins: [require("tailwindcss-animate")],
};

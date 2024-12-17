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
        // Default colors from NextUI for background and foreground
        background: "var(--nextui-colors-background)", // Background color (light/dark)
        foreground: "var(--nextui-colors-foreground)", // Text color (light/dark)
        
        // NextUI's dark theme purple
        purpleDark: "var(--nextui-colors-purple-dark)",

        // Custom colors based on dark mode
        lightBackground: "var(--nextui-colors-background)", // Default light mode background
        lightForeground: "var(--nextui-colors-foreground)", // Default light mode text

        darkBackground: "var(--nextui-colors-background-dark)", // Dark mode background
        darkForeground: "var(--nextui-colors-foreground-dark)", // Dark mode text
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  darkMode: "class", // Enables class-based dark mode in Tailwind
  plugins: [],
} satisfies Config;
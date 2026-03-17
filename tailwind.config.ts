import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Brand palette
                brand: {
                    navy: "#0A1628",
                    midnight: "#0F2044",
                    blue: "#2563EB",
                    "blue-light": "#3B82F6",
                    "blue-pale": "#DBEAFE",
                    teal: "#0EA5E9",
                },
                surface: {
                    DEFAULT: "#F8FAFC",
                    card: "#FFFFFF",
                    muted: "#F1F5F9",
                    border: "#E2E8F0",
                },
                text: {
                    primary: "#0F172A",
                    secondary: "#475569",
                    muted: "#94A3B8",
                    inverse: "#F8FAFC",
                },
                // shadcn/ui compatible tokens
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
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
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
                display: ["var(--font-inter)", "system-ui", "sans-serif"],
            },
            fontSize: {
                "display-2xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
                "display-xl": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
                "display-lg": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
                "display-md": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
                "display-sm": ["1.875rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
            },
            spacing: {
                "section-sm": "4rem",
                "section-md": "6rem",
                "section-lg": "8rem",
                "section-xl": "10rem",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
                xl: "1rem",
                "2xl": "1.5rem",
                "3xl": "2rem",
            },
            boxShadow: {
                soft: "0 2px 15px -3px rgba(0,0,0,0.07), 0 10px 20px -2px rgba(0,0,0,0.04)",
                card: "0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.08)",
                "card-hover": "0 4px 20px rgba(0,0,0,0.12), 0 8px 32px rgba(0,0,0,0.08)",
                glow: "0 0 40px rgba(37, 99, 235, 0.15)",
                "glow-strong": "0 0 60px rgba(37, 99, 235, 0.25)",
            },
            animation: {
                "fade-up": "fadeUp 0.5s ease-out forwards",
                "fade-in": "fadeIn 0.4s ease-out forwards",
                "slide-in": "slideIn 0.3s ease-out forwards",
                "float": "float 6s ease-in-out infinite",
                "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
            keyframes: {
                fadeUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideIn: {
                    "0%": { opacity: "0", transform: "translateX(-10px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "hero-gradient":
                    "linear-gradient(135deg, #0A1628 0%, #0F2044 50%, #1a3460 100%)",
                "blue-gradient":
                    "linear-gradient(135deg, #2563EB 0%, #0EA5E9 100%)",
                "card-gradient":
                    "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
            },
            transitionTimingFunction: {
                spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                smooth: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            },
        },
    },
    plugins: [animate],
};

export default config;

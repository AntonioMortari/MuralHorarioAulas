/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // cores
      colors:{
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--light)',
        },
        primary_dark: {
          DEFAULT: 'var(--primary_dark)',
          foreground: 'var(--light)',
        },
        primary_light: {
          DEFAULT: 'var(--primary_light)',
          foreground: 'var(--dark)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--light)',
        },
        secondary_dark: {
          DEFAULT: 'var(--secondary_dark)',
          foreground: 'var(--light)',
        },
        secondary_light: {
          DEFAULT: 'var(--secondary_light)',
          foreground: 'var(--dark)',
        },
        light: {
          DEFAULT: 'var(--light)',
          foreground: 'var(--dark)',
        },
        dark: {
          DEFAULT: 'var(--dark)',
          foreground: 'var(--light)',
        },
        gray: {
          DEFAULT: 'var(--gray)',
          foreground: 'var(--light)',
        },
        gray_dark: {
          DEFAULT: 'var(--gray_dark)',
          foreground: 'var(--light)',
        },
        gray_light: {
          DEFAULT: 'var(--gray_light)',
          foreground: 'var(--dark)',
        },
        gray_extra_light: {
          DEFAULT: 'var(--gray_extra_light)',
          foreground: 'var(--dark)',
        },
      },
      // breakpoints
      screens:{
        "3xl": "2500px",
        "4xl": "3800px"
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
  },
  plugins: [require("tailwindcss-animate")],
}
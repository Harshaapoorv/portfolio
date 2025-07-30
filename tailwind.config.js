/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-secondary": "#4b5563",
        "button-bg": "#748c76",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        scroll: "scroll 20s linear infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }, // Adjust based on total width
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
};

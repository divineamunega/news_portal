/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        lora: ["Lora", "serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        antiFlashWhite: "#f2f3f4",
        richBlack: "#010B13",
        electricBlue: "#7DF9FF",
        hookGreen: "#397367",
        darkCyan: "#42858C",
      },

      maxWidth: {
        readable: "65ch",
      },

      keyframes: {
        blip: {
          "0%,100%": { opacity: "0%" },
          "50%": { opacity: "100%" },
        },
      },

      animation: {
        blip: "blip 5s ease-in-out infinite",
      },

      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
      fadeOut: {
        "0%": { opacity: 1 },
        "100%": { opacity: 0 },
      },
    },
    animation: {
      fadeIn: "fadeIn 1s ease-in-out",
      fadeOut: "fadeOut 1s ease-in-out",
    },

    plugins: [],
  },
};

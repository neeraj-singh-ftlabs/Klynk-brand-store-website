import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#EF4823",
        // primary: {
        //   light: "#4B5563",
        //   test: "#EF4823",
        //   dark: "#E5E7EB",
        // },
        // secondary: {
        //   light: "#1F2937",
        //   dark: "#F3F4F6",
        // },
      },
      fontFamily: {
        heading: ["Roboto Slab"],
        paragraph: ["Mukta Mahee"],
      },
      screens: {
        xs: "250px",
        sm: "380px",
      },
    },
  },
  presets: [require("@relume_io/relume-tailwind")],
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };

      addUtilities(newUtilities);
    },
    require("flowbite/plugin"),
  ],
};

export default config;

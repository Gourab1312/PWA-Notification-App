import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        heading: "29px",
        "sub-heading": "19px",
      },
      colors: {
        "dim-white": "rgba(255,255,255,0.6)",
      },
      margin: {
        "6.25rem": "6.25rem",
        "6.75rem": "6.75rem",
      },
      padding: {
        "0.813rem": "0.813rem",
        "5.719rem": "5.719rem",
        "2.125rem": "2.125rem",
        "4.313rem": "4.313rem",
      },
      maxHeight: {
        "21.5rem": "21.5rem",
      },
    },
  },
  plugins: [],
};
export default config;

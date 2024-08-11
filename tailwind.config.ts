import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_bg:"#202020",
        secondary_bg:"#282828",
        button_color_primary:"#474646",
        accent_color_primary:"#fc4242",
        accent_color_secondary:"#f75252"
      }
    },
    fontFamily: {
      nullfont:["Nullfont","sans-serif"]
    }
  },
  plugins: [],
};
export default config;

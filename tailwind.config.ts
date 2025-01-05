import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        txt: "#321",
        gen: "#fc0",
        bgm: "rgb(255,245,240)",
        bgc: "rgb(255,255,250)",
        txd: "#ffe",
        dis: "#987",
        fav: "#f73",
      },
    },
  },
  plugins: [],
};
export default config;

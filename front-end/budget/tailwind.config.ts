import type { Config } from "tailwindcss";
//rgb(101,204,138) for the middle green
// //rgb(101,250,138) for the first green
// rgb(0,124,65)
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
        'hero-large-screen':"url('/landing-page-lg.png')"
      },
      keyframes:{
        'fade-in':{
          '0%' : {opacity:'0'},
          '100%' : {opacity: '1'}
        }
      },
      animation:{
        'button-fade' : 'fade-in 3s'
      }
    },
  },
  plugins: [require("daisyui")],
};
export default config;

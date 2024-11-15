/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      Kablammo:["Kablammo", "sans-serif"],  
      sixty_four :["Sixtyfour Convergence", "sans-serif"],   
      prestart :["Press Start 2P", "sans-serif"],
      tiny:["Tiny5", "sans-serif"],
      Concert:["Concert One", "sans-serif"],
      arizona:["Arizonia", "cursive"],
      lobster:["Lobster", "sans-serif"],
    },
    extend: {
    },
  },
  plugins: [

    function({ addUtilities}){
      const newUtilities ={
        ".no-scrollbar::-webkit-scrollbar":{
          display: "none",
        },
        ".no-scrollbar":{
          "ms-overflow-style":"none",
          "scrollbar-width":"none",
        },
      };

      addUtilities(newUtilities);
    }

  ],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}",
            "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")], 
  theme: {
    extend: {
      colors:{
        primary: "#060270",
        secondary: '#f7f7f7',
        light:{
          100: '#4ce694',
          200:'#40c07c'
        },
        dark:{
          100:'#90a2a1',
          200:'#3d3d3d'
        },
        accent: '#d9272e',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}",
            "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")], 
  theme: {
    extend: {
      colors:{
        primary: "#1B195B",
        secondary: '#f7f7f7',
        light:{
          100: '#D8ADE5',
          200:'#BF9ACA'
        },
        dark:{
          100:'#2B288B',
          200:'#0B0941'
        },
        accent: '#AA7BB7',
      }
    },
  },
  plugins: [],
}

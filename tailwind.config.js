/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        loginh1:'loginh1',
        loginh2:'loginh2',
        loginform:'loginform',
        loginform1:'loginform1',
        loginform3:'loginform3',
        text:'text',
        text1:'text1',
      },
    },
  },
  plugins: [],
};

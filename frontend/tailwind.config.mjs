/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlack: '#1D1D1F',
        profileCardCustomWhite:"#F6F6F8",
        viewProfileButtonColor: "#F58232"
      },
      fontFamily: {
        helvetica: ['Helvetica Now Display', 'sans-serif'],
      },
      backgroundImage: {
        'profile-gradient': 'linear-gradient(135deg, #F58232, #EE4D3B)',
      },
      letterSpacing: {
        '0.2': '0.2px', 
      },
    },
  },
  plugins: [],
};

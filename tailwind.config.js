/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // Desktop-first max-width breakpoints that mirror the original CSS media
    // queries. Declaration order matters: tab (1000px) -> mob (720px) -> xs (380px),
    // so smaller screens override larger ones exactly like the source stylesheet.
    screens: {
      tab: { max: '1000px' },
      mob: { max: '720px' },
      xs: { max: '380px' },
    },
    extend: {
      colors: {
        paper: '#F4F4F4',
        ink: '#2A2118',
        muted: '#6B6258',
        deep: '#2E2118',
        yel: '#F6C834',
        butter: '#FBE7A1',
        rust: '#B8481C',
        line: '#E2DED6',
        cream: '#FFF8E1',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
        serif: ['Lora', 'Georgia', '"Times New Roman"', 'serif'],
      },
    },
  },
  plugins: [],
};

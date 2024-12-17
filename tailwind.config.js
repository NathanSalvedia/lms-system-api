/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      screens: {
        sm: '480px',
        md: '800px',
        lg: '1200px',
        xl: '1440px',
      },
      
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
  
      color: {
        whitesmoke: '#F5F5F5',
        GRAY2: '#e9ecef',
        GRAY1: '#f1f3f5',
      },
  
    }
    
  },
  plugins: [],
}


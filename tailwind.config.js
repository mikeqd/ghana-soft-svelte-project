/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors:{
      maingreen: '#4FF814',
      herobg: '#0E1014',
      textcolor: '#F0F1F5',
      bodyheader:'#0E1014',
      bodysuptext: '#6F7785',
      white: '#FFFFFF'

    },
    extend: {
      fontFamily: {
        'plusjakarta':['Plus Jakarta Sans', 'sans-serif']
      },
      backgroundImage: {
        'contactBg': "url('/contactBg.png')",
        
      }
    }
  },
  plugins: []
};
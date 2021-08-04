module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        devyellow: {
          DEFAULT: '#F5CB08',
        },
        devlightblue: {
          DEFAULT: '#C3F2FF',
        },
        devdarkblue: {
          DEFAULT: '#0A05B3',
        }, 
        devalmostblack: {
          DEFAULT: '#09001F',
        },
        devpaleyellow: {
          DEFAULT: '#FFF2CD',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

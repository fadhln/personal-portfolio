module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './component/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'primary': '#FF8A00',           /* Primary color */
      'primary-focus': '#DF7310',     /* Primary color - focused */
      'primary-content': '#FFFFFF',   /* Foreground content color to use on primary color */

      'secondary': '#FF611D',         /* Secondary color */
      'secondary-focus': '#DF4E0F',   /* Secondary color - focused */
      'secondary-content': '#ffffff', /* Foreground content color to use on secondary color */

      'accent': '#0085FF',            /* Accent color */
      'accent-focus': '#0072F8',      /* Accent color - focused */
      'accent-content': '#ffffff',    /* Foreground content color to use on accent color */

      'neutral': '#39352B',           /* Neutral color */
      'neutral-focus': '#322B26',     /* Neutral color - focused */
      'neutral-content': '#ffffff',   /* Foreground content color to use on neutral color */

      'base-100': '#ffffff',          /* Base color of page, used for blank backgrounds */
      'base-200': '#FBFAF9',          /* Base color, a little darker */
      'base-300': '#DBD9D1',          /* Base color, even more darker */
      'base-content': '#221D17',      /* Foreground content color to use on base color */

      'info': '#2094f3',              /* Info */
      'success': '#009485',           /* Success */
      'warning': '#ff9900',           /* Warning */
      'error': '#ff5724',             /* Error */
    },
    extend: {
      fontFamily: {
        'sans': ['Roboto Condensed', 'Helvetica', 'Arial', 'sans-serif'],
        'display': ['Work Sans', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {
      scrollSnapType: ['responsive']
    },
  },
  plugins: [require('tailwindcss-scroll-snap')],
}

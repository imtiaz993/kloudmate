/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '340px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: 'Inter, system-ui, sans-serif',
      },
      fontWeight: {
        medium: '500',
      },
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        xl: ['24px', '32px'],
      },
      keyframes: {
        fadeHeroHeading: {
          '0%': {
            transform: 'translateY(250px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0px)',
            opacity: 1,
          },
        },
        fadeHeroParagraph: {
          '0%': {
            transform: 'translateY(350px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0px)',
            opacity: 1,
          },
        },
        fadeHeroBtn: {
          '0%': {
            transform: 'translateY(450px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0px)',
            opacity: 1,
          },
        },
      },
      animation: {
        fadeHeroHeading: 'fadeHeroHeading 0.6s cubic-bezier(.17,.67,.59,1)',
        fadeHeroParagraph: 'fadeHeroParagraph 0.7s cubic-bezier(.17,.67,.59,1)',
        fadeHeroBtn: 'fadeHeroBtn .8s cubic-bezier(.17,.67,.59,1)',
      },

      colors: {
        grey: {
          50: '#F9F9FB',
          100: '#F3F3F6',
          200: '#E8E8EE',
          300: '#ADADC2',
          400: '#9999B3',
          500: '#646486',
          600: '#4A4A63',
          700: '#3B3B4F',
          800: '#23232F',
          900: '#09090C',
        },

        primary: {
          dark: '#e36e0f',
          DEFAULT: '#F47715',
          light: '#F68E3C',
          lighter: '#F8A563',
          300: '#FABB8A',
          200: '#FCD2B1',
          100: '#FDE8D8',
        },

        error: '#EE446D',
        warning: '#F4C622',
        success: '#11BB69',
        info: '#4A6CFD',
        blue: '#4869F5',

        dark: {
          100: '#111318',
          200: '#191C24',
          300: '#212530',
          400: '#323849',
          500: '#424A61',
          600: '#535D79',
          900: '#0B0F14',
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',

          /* Firefox */
          'scrollbar-width': 'none',

          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    }),
  ],
};

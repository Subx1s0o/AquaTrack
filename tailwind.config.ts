import { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.tsx'],
  mode: 'jit',
  theme: {
    extend: {
      screens: {
        md: '768px',
        lg: '1440px',
      },

      colors: {
        black: '#2F2F2F',
        darkGrey: '#323F47',
        grey: '#F0EFF4',
        green: '#9BE1A0',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        'gilroy-regular': ['Gilroy-Regular', 'sans-serif'],
        'gilroy-bold': ['Gilroy-Bold', 'sans-serif'],
      },
      fontSize: {
        extrasm: [
          '8px',
          { lineHeight: '8px', fontWeight: 700, letterSpacing: '-0.08px' },
        ],
        xs: ['10px', { lineHeight: '10px', fontWeight: 400 }],
        sm: ['12px', { lineHeight: '14px' }],
        base: ['14px', { lineHeight: '18px' }],
        ms: ['15px', { lineHeight: '22.4px', fontWeight: 700 }],
        md: ['16px', { lineHeight: '24px', letterSpacing: '-0.16px' }],
        lg: ['18px', { lineHeight: '20px', letterSpacing: '-0.18px' }],
        xl: [
          '20px',
          { fontWeight: 700, lineHeight: '24px', letterSpacing: '-0.2px' },
        ],
        '2xl': [
          '24px',
          { fontWeight: 700, lineHeight: '24px', letterSpacing: '-0.24px' },
        ],
        '3xl': [
          '28px',
          { fontWeight: 700, lineHeight: '32px', letterSpacing: '-0.28px' },
        ],
        '4xl': ['32px', { lineHeight: '32px', letterSpacing: '-0.32px' }],
        '5xl': [
          '36px',
          { lineHeight: '38px', fontWeight: 700, letterSpacing: '-0.36px' },
        ],
        '6xl': [
          '38px',
          { lineHeight: '38px', fontWeight: 700, letterSpacing: '-0.38px' },
        ],
        '7xl': [
          '64px',
          { lineHeight: '70px', fontWeight: 700, letterSpacing: '-0.64px' },
        ],
        '8xl': [
          '80px',
          { lineHeight: '76px', fontWeight: 700, letterSpacing: '-0.8px' },
        ],
      },
    },
  },
  plugins: [],
} as Config;

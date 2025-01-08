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
      fontSize: {},
    },
  },
  plugins: [],
} as Config;

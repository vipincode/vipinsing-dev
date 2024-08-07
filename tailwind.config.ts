import type { Config } from 'tailwindcss';
import { black, colors, transparent, white, body } from './src/config/theme/color';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    colors: {
      ...colors,
      black,

      transparent,
      white,
      body,
    },

    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        bricolage: ['var(--font-bricolage-grotesque)'],
      },
      borderRadius: {
        DEFAULT: '10px',
      },
      boxShadow: {
        sm: 'rgba(0, 0, 0, 0.02) 0px 2px 30px 0px, rgba(0, 0, 0, 0.03) 0px 0px 0px 1px',
        md: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        lg: '0px 3px 8px rgba(0, 0, 0, 0.24)',
      },
    },
  },
  plugins: [],
};
export default config;

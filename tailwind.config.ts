import type { Config } from 'tailwindcss';
import { black, colors, transparent, white, body } from './src/config/theme/color';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
    },
  },
  plugins: [],
};
export default config;

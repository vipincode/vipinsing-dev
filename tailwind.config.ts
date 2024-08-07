import type { Config } from 'tailwindcss';
import { black, colors, currentColor, transparent, white } from './src/config/theme/color';

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
      currentColor,
      transparent,
      white,
    },
    extend: {},
  },
  plugins: [],
};
export default config;

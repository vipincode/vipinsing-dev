import type { Preview } from '@storybook/react';
import '../src/styles/globals.css';
import { withThemeByClassName, withThemeByDataAttribute } from '@storybook/addon-themes';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  /**
   * @theme decorator
   * https://github.com/storybookjs/storybook/blob/next/code/addons/themes/docs/api.md
   */
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;

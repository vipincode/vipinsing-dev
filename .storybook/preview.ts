import type { Preview } from '@storybook/react';
import '../src/styles/globals.css';
import { withThemeByDataAttribute } from '@storybook/addon-themes';

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
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-mode',
    }),
  ],
};

export default preview;

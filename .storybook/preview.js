import { themes } from '@storybook/theming';
import { OptionsProvider } from 'context';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

export const parameters = {
  docs: { theme: themes.dark  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { matchers: { color: /(background|color)$/i, date: /Date$/, } },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg/>
      <OptionsProvider>
        <Story />
      </OptionsProvider>
    </ThemeProvider>
  ),
];

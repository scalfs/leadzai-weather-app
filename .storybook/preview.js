import { themes } from '@storybook/theming';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import GlobalStyles from 'styles/global'

export const parameters = {
  docs: { theme: themes.dark  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { matchers: { color: /(background|color)$/i, date: /Date$/, } },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg/>
      <Story />
    </ThemeProvider>
  ),
];

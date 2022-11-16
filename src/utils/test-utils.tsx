import { render } from '@testing-library/react'
import { OptionsProvider } from 'context'
import React, { ReactElement, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <OptionsProvider>{children}</OptionsProvider>
    </ThemeProvider>
  )
}

const customRender = (ui: ReactElement) => render(ui, { wrapper: Providers })

export * from '@testing-library/react'
export { customRender as render }

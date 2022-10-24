import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { OptionsProvider } from 'context'
import { App } from 'pages/app'
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <OptionsProvider>
          <App />
        </OptionsProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

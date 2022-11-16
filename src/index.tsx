import { OptionsProvider } from 'context'
import { App } from 'pages/app'
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <OptionsProvider>
        <App />
      </OptionsProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

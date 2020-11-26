import React, { Fragment } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import reset from 'styled-reset'
import { theme } from '../shared/constants'

// Component
const App = ({ Component, pageProps }) => (
  <Fragment>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </Fragment>
)

// Styles
const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #__next {
    width: 100%;
    height: 100%;
  }
`

// Display Names
App.displayName = `App`

export default App
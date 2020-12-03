import React, { FC, Fragment, memo } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import reset from 'styled-reset'
import { theme } from '../shared/constants'

// Component
const App: FC<AppProps> = ({ Component, pageProps }) => (
  <Fragment>
    <Head>
      <link
        href='https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap'
        rel='stylesheet'
      />
    </Head>
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
    font-family: 'Lato', sans-serif;
  }

  #__next {
    width: 100%;
    height: 100%;
  }
`

// Display Names
App.displayName = `App`

export default memo<AppProps>(App)

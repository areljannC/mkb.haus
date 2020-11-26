import React from 'react'
import styled from 'styled-components'
import { Header, Main, Footer } from './components'

// Component
const Layout = ({ children }) => (
  <LayoutWrapper>
    <Header/>
    <Main>{children}</Main>
    <Footer />
  </LayoutWrapper>
)

// Styles
const LayoutWrapper = styled.div`
  width: 100%;
  height: fit-content;
`

// Display Names
Layout.displayName = `Layout`
LayoutWrapper.displayName = `LayoutWrapper`

export default Layout
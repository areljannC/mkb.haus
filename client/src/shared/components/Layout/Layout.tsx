import React, { ReactNode, FC } from 'react'
import styled from 'styled-components'
import { Header, Main, Footer } from './components'

// Types
type Props = {
  children?: ReactNode
  showHeader?: boolean
  showFooter?: boolean
}

// Component
const Layout: FC = ({
  children,
  showHeader = true,
  showFooter = true
}: Props) => (
  <LayoutWrapper>
    {showHeader && <Header />}
    <Main>{children}</Main>
    {showFooter && <Footer />}
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

import React, { ReactNode, FC, memo } from 'react'
import styled from 'styled-components'
import { Header, Main, Footer } from './components'

// Types
type LayoutProps = {
  children?: ReactNode
  showHeader?: boolean
  showFooter?: boolean
}

// Component
const Layout: FC<LayoutProps> = ({
  children,
  showHeader = true,
  showFooter = true
}: LayoutProps) => (
  <LayoutWrapper>
    {showHeader && <Header />}
    <Main showHeader={showHeader} showFooter={showFooter}>{children}</Main>
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

export default memo<LayoutProps>(Layout)

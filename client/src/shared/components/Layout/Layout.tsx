import React, { ReactNode, FC, memo } from 'react'
import styled from 'styled-components'
import { Header, Main, Footer } from './components'

// Types
type LayoutPropsType = {
  children?: ReactNode
  showHeader?: boolean
  showFooter?: boolean
}

// Component
const Layout: FC<LayoutPropsType> = ({
  children,
  showHeader = true,
  showFooter = true
}: LayoutPropsType) => (
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

export default memo<LayoutPropsType>(Layout)

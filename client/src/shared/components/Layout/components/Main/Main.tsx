import React, { ReactNode, FC, memo } from 'react'
import styled from 'styled-components'
import { HEADER_HEIGHT } from '../../constants'

// Types
type MainProps = {
  children?: ReactNode
  showHeader?: boolean
  showFooter?: boolean
}

type MainWrapperProps = {
  showHeader?: boolean
  showFooter?: boolean
}

// Component
const Main: FC<MainProps> = ({
  children,
  showHeader = true,
  showFooter = true
}: MainProps) => (
  <MainWrapper showHeader={showHeader} showFooter={showFooter}>
    {children}
  </MainWrapper>
)

// Styles
const MainWrapper = styled.main<MainWrapperProps>`
  width: 100%;
  height: fit-content;
  min-height: ${(props) =>
    props.showHeader ? `calc(100vh - ${HEADER_HEIGHT})` : `100vh`};
`

// Display Names
Main.displayName = `Main`
MainWrapper.displayName = `MainWrapper`

export default memo<MainProps>(Main)

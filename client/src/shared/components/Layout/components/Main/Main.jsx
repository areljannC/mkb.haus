import React from 'react'
import styled from 'styled-components'
import { HEADER_HEIGHT } from '../../constants'

// Component
const Main = ({ children }) => (
  <MainWrapper>
    {children}
  </MainWrapper>
)

// Styles
const MainWrapper = styled.main`
  width: 100%;
  height: fit-content;
  min-height: calc(100vh - ${HEADER_HEIGHT});
`

// Display Names
Main.displayName = `Main`
MainWrapper.displayName = `MainWrapper`

export default Main

import React, { FC } from 'react'
import styled from 'styled-components'
import { KeySwitches, KeyCaps, KeyboardLayout, PCBs } from './components'

// Component
const Builder: FC = () => {
  return (
    <BuilderWrapper>
      <KeySwitches />
      <KeyCaps />
      <KeyboardLayout />
      <PCBs />
    </BuilderWrapper>
  )
}

// Styles
const BuilderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary};
`

// Display Names
Builder.displayName = `Builder`
BuilderWrapper.displayName = `BuilderWrapper`

export default Builder

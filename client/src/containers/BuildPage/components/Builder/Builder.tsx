import React, { FC, memo } from 'react'
import styled from 'styled-components'
import { KeySwitches, KeyCaps, Layouts, PCBs } from './components'

// Component
const Builder: FC = () => {
  return (
    <BuilderWrapper>
      <KeySwitches />
      <KeyCaps />
      <Layouts />
      <PCBs />
    </BuilderWrapper>
  )
}

// Styles
const BuilderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
`

// Display Names
Builder.displayName = `Builder`
BuilderWrapper.displayName = `BuilderWrapper`

export default memo(Builder)

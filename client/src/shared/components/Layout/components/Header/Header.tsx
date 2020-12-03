import React, { FC, memo } from 'react'
import styled from 'styled-components'
import { HEADER_HEIGHT } from '../../constants'

// Component
const Header: FC = () => (
  <HeaderWrapper>
    <p>this is the header</p>
  </HeaderWrapper>
)

// Styles
const HeaderWrapper = styled.header`
  width: 100%;
  height: ${HEADER_HEIGHT};
  background-color: ${({ theme }) => theme.colors.primary};
`

// Display Names
Header.displayName = `Header`
HeaderWrapper.displayName = `HeaderWrapper`

export default memo(Header)

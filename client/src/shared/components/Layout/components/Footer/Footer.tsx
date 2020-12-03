import React, { FC, memo } from 'react'
import styled from 'styled-components'
import { FOOTER_HEIGHT } from '../../constants'

// Component
const Footer: FC = () => (
  <FooterWrapper>
    <p>this is the footer</p>
  </FooterWrapper>
)

// Styles
const FooterWrapper = styled.footer`
  width: 100%;
  height: ${FOOTER_HEIGHT};
  background-color: ${({ theme }) => theme.colors.secondary};
`

// Display Names
Footer.displayName = `Footer`
FooterWrapper.displayName = `FooterWrapper`

export default memo(Footer)

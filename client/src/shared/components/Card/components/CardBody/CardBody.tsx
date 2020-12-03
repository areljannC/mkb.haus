import React, { ReactNode, FC, memo } from 'react'
import styled from 'styled-components'

// Types
type CardBodyPropsType = {
  children?: ReactNode
}

// Components
const CardBody: FC<CardBodyPropsType> = ({ children }: CardBodyPropsType) => (
  <CardBodyWrapper>{children}</CardBodyWrapper>
)

// Styles
const CardBodyWrapper = styled.div`
  width: 100%;
  height: fit-content;
  margin: 0;
  margin-bottom: ${({ theme }) => theme.space[2]};
  display: flex;
  flex-direction: column;
`

// Display Names
CardBody.displayName = `CardBody`
CardBodyWrapper.displayName = `CardBodyWrapper`

export default memo<CardBodyPropsType>(CardBody)

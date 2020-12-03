import React, { ReactNode, FC, memo } from 'react'
import styled from 'styled-components'

// Types
type CardPropsType = {
  children?: ReactNode
  width?: string
}

type CardWrapperPropsType = {
  width?: string
}

// Component
const Card: FC<CardPropsType> = ({ children, width = `128px` }) => (
  <CardWrapper width={width}>{children}</CardWrapper>
)

// Styles
const CardWrapper = styled.div<CardWrapperPropsType>`
  width: ${({ width }) => width};
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.space[2]};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.space[1]};
`

// Display Names
Card.displayName = `Card`
CardWrapper.displayName = `CardWrapper`

export default memo<CardPropsType>(Card)

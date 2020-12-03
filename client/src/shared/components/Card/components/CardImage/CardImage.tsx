import React, { ReactNode, FC, memo } from 'react'
import styled from 'styled-components'

// Types
type CardImagePropsType = {
  src: string
}

// Components
const CardImage: FC<CardImagePropsType> = ({ src }: CardImagePropsType) => (
  <CardImageWrapper>
    <Image src={src} />
  </CardImageWrapper>
)

// Styles
const CardImageWrapper = styled.div`
  width: 100%;
  height: fit-content;
  margin: 0;
  margin-bottom: ${({ theme }) => theme.space[2]};
  display: flex;
  flex-direction: column;
`

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`

// Display Names
CardImage.displayName = `CardImage`
CardImageWrapper.displayName = `CardImageWrapper`

export default memo<CardImagePropsType>(CardImage)

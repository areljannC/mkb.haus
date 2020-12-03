import React, { FC, memo } from 'react'
import styled from 'styled-components'
import { Card, CardImage, CardBody } from '../../shared/components'

// Component
const DevPage: FC = () => {
  return (
    <DevPageWrapper>
      <Card>
        <CardImage src='https://via.placeholder.com/150' />
        <CardBody>
          <Heading>test</Heading>
          <p>hi this is a basic card lmaooo</p>
        </CardBody>
      </Card>
    </DevPageWrapper>
  )
}

// Styles
const DevPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Heading = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes[5]};
`

// Display Names
DevPage.displayName = `DevPage`
DevPageWrapper.displayName = `DevPageWrapper`

export default memo(DevPage)

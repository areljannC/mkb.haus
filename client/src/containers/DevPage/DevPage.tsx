import React, { FC, memo } from 'react'
import styled from 'styled-components'
import { Card } from '../../shared/components'

// Component
const DevPage: FC = () => {
  return (
    <DevPageWrapper>
      <Card></Card>
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

// Display Names
DevPage.displayName = `DevPage`
DevPageWrapper.displayName = `DevPageWrapper`

export default memo(DevPage)

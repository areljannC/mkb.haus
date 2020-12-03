import React, { FC, memo } from 'react'
import styled from 'styled-components'
import { Card, CardImage, CardBody } from '../../../../../../shared/components'
import { IMAGE_150x150 } from '../../../../../../shared/constants'
import { layouts } from '../../data'
import type { LayoutType } from '../../types'

// Types
type LayoutsPropsType = {
  layout: LayoutType
  handleSetLayout: Function
}

// Component
const Layouts: FC<LayoutsPropsType> = ({ layout, handleSetLayout }) => (
  <LayoutsWrapper>
    <Card>
      <CardImage src={IMAGE_150x150} />
      <CardBody>
        <p>Select layout:</p>
        <select
          value={layout.id}
          onChange={(event) => handleSetLayout(parseInt(event.target.value, 10))}
        >
          {layouts.map((lo) => (
            <option key={lo.id} value={lo.id} selected={lo.id === layout.id}>
              {lo.name}
            </option>
          ))}
        </select>
      </CardBody>
    </Card>
  </LayoutsWrapper>
)

// Styles
const LayoutsWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  margin-right: ${({ theme }) => theme.space[2]};
  margin-bottom: ${({ theme }) => theme.space[2]};
  margin-left: ${({ theme }) => theme.space[2]};
  background-color: ${({ theme }) => theme.colors.primary};
`

// Display Names
Layouts.displayName = `Layouts`
LayoutsWrapper.displayName = `LayoutsWrapper`

export default memo<LayoutsPropsType>(Layouts)

import React, { FC, useState, memo } from 'react'
import styled from 'styled-components'
import { Card, CardImage, CardBody } from '../../../../../../shared/components'
import { IMAGE_150x150 } from '../../../../../../shared/constants'

// Types
type LayoutType = {
  id: number
  name: string
}

// Data
const layouts: LayoutType[] = [
  {
    id: 0,
    name: '100%'
  },
  {
    id: 1,
    name: '80%'
  },
  {
    id: 2,
    name: '75%'
  },
  {
    id: 3,
    name: '70%'
  },
  {
    id: 4,
    name: '65%'
  },
  {
    id: 5,
    name: '60%'
  },
  {
    id: 6,
    name: '50%'
  }
]

// Component
const Layouts: FC = () => {
  const [selectedLayoutID, setSelectedLayoutID] = useState<number>(
    layouts[0].id
  )
  return (
    <LayoutsWrapper>
      <Card>
        <CardImage src={IMAGE_150x150} />
        <CardBody>
          <p>Select layout:</p>
          <select
            value={
              layouts[
                layouts.findIndex((layout) => layout.id === selectedLayoutID)
              ].id
            }
            onChange={(event) =>
              setSelectedLayoutID(parseInt(event.target.value, 10))
            }
          >
            {layouts.map((layout) => (
              <option
                key={layout.id}
                value={layout.id}
                selected={layout.id === selectedLayoutID}
              >
                {layout.name}
              </option>
            ))}
          </select>
        </CardBody>
      </Card>
    </LayoutsWrapper>
  )
}

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

export default memo(Layouts)

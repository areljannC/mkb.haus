import React, { FC, useState, memo } from 'react'
import styled from 'styled-components'
import { Card, CardImage, CardBody } from '../../../../../../shared/components'
import { IMAGE_150x150 } from '../../../../../../shared/constants'

// Types
type KeyCapType = {
  id: number
  name: string
}

// Data
const keyCaps: KeyCapType[] = [
  {
    id: 0,
    name: 'Rzez Red River GMK'
  },
  {
    id: 1,
    name: 'Kyrk Kobain Puddings'
  }
]

// Component
const KeyCaps: FC = () => {
  const [selectedKeyCapID, setSelectedKeyCapID] = useState<number>(
    keyCaps[0].id
  )

  return (
    <KeyCapsWrapper>
      <Card>
        <CardImage src={IMAGE_150x150} />
        <CardBody>
          <p>Select key caps:</p>
          <select
            value={
              keyCaps[
                keyCaps.findIndex((keyCap) => keyCap.id === selectedKeyCapID)
              ].id
            }
            onChange={(event) =>
              setSelectedKeyCapID(parseInt(event.target.value, 10))
            }
          >
            {keyCaps.map((keyCap) => (
              <option
                key={keyCap.id}
                value={keyCap.id}
                selected={keyCap.id === selectedKeyCapID}
              >
                {keyCap.name}
              </option>
            ))}
          </select>
        </CardBody>
      </Card>
    </KeyCapsWrapper>
  )
}

// Styles
const KeyCapsWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  margin-right: ${({ theme }) => theme.space[2]};
  margin-bottom: ${({ theme }) => theme.space[2]};
  margin-left: ${({ theme }) => theme.space[2]};
  background-color: ${({ theme }) => theme.colors.primary};
`

// Display Names
KeyCaps.displayName = `KeyCaps`
KeyCapsWrapper.displayName = `KeyCapsWrapper`

export default memo(KeyCaps)

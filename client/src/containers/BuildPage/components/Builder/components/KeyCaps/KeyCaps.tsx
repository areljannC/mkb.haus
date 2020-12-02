import React, { FC, useState, memo } from 'react'
import styled from 'styled-components'

// Types
type KeyCap = {
  id: number
  name: string
}

// Data
const keyCaps: KeyCap[] = [
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
      <p>Select key caps:</p>
      <select
        value={
          keyCaps[keyCaps.findIndex((keyCap) => keyCap.id === selectedKeyCapID)]
            .id
        }
        onChange={(event) =>
          setSelectedKeyCapID(parseInt(event.target.value, 10))
        }
      >
        {keyCaps.map((keyCap) => (
          <option value={keyCap.id} selected={keyCap.id === selectedKeyCapID}>
            {keyCap.name}
          </option>
        ))}
      </select>
    </KeyCapsWrapper>
  )
}

// Styles
const KeyCapsWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  background-color: ${(props) => props.theme.colors.primary};
`

// Display Names
KeyCaps.displayName = `KeyCaps`
KeyCapsWrapper.displayName = `KeyCapsWrapper`

export default memo(KeyCaps)

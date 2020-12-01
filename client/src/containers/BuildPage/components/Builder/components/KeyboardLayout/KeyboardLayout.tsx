import React, { FC, useState } from 'react'
import styled from 'styled-components'

// Types
type KeyboardLayout = {
  id: number
  name: string
}

// Data
const keyboardLayouts: KeyboardLayout[] = [
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
const KeyboardLayout: FC = () => {
  const [
    selectedKeyboardLayoutID,
    setSelectedKeyboardLayoutID
  ] = useState<number>(keyboardLayouts[0].id)
  return (
    <KeyboardLayoutWrapper>
      <p>Select keyboard layout:</p>
      <select
        value={
          keyboardLayouts[
            keyboardLayouts.findIndex(
              (keyboardLayout) => keyboardLayout.id === selectedKeyboardLayoutID
            )
          ].id
        }
        onChange={(event) =>
          setSelectedKeyboardLayoutID(parseInt(event.target.value, 10))
        }
      >
        {keyboardLayouts.map((keyboardLayout) => (
          <option
            value={keyboardLayout.id}
            selected={keyboardLayout.id === selectedKeyboardLayoutID}
          >
            {keyboardLayout.name}
          </option>
        ))}
      </select>
    </KeyboardLayoutWrapper>
  )
}

// Styles
const KeyboardLayoutWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  background-color: ${(props) => props.theme.colors.primary};
`

// Display Names
KeyboardLayout.displayName = `KeyboardLayout`
KeyboardLayoutWrapper.displayName = `KeyboardLayoutWrapper`

export default KeyboardLayout

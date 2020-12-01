import React, { FC, useState } from 'react'
import styled from 'styled-components'

// Types
type KeySwitch = {
  id: number
  name: string
}

// Data
const keySwitches: KeySwitch[] = [
  {
    id: 0,
    name: 'Cherry MX Blue'
  },
  {
    id: 1,
    name: 'Cherry MX Black'
  },
  {
    id: 2,
    name: 'Cherry MX Brown'
  },
  {
    id: 3,
    name: 'Cherry MX Red'
  },
  {
    id: 4,
    name: 'Cherry MX Clear'
  },
  {
    id: 5,
    name: 'Cherry MX Green'
  },
  {
    id: 6,
    name: 'Cherry MX White'
  },
  {
    id: 7,
    name: 'Cherry MX Tactile Grey'
  }
]

// Component
const KeySwitches: FC = () => {
  const [selectedKeySwitchID, setSelectedKeySwitchID] = useState<number>(
    keySwitches[0].id
  )

  return (
    <KeySwitchesWrapper>
      <p>Select key switch:</p>
      <select
        value={
          keySwitches[
            keySwitches.findIndex(
              (keySwitch) => keySwitch.id === selectedKeySwitchID
            )
          ].id
        }
        onChange={(event) =>
          setSelectedKeySwitchID(parseInt(event.target.value, 10))
        }
      >
        {keySwitches.map((keySwitch) => (
          <option
            value={keySwitch.id}
            selected={keySwitch.id === selectedKeySwitchID}
          >
            {keySwitch.name}
          </option>
        ))}
      </select>
    </KeySwitchesWrapper>
  )
}

// Styles
const KeySwitchesWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  background-color: ${(props) => props.theme.colors.primary};
`

// Display Names
KeySwitches.displayName = `KeySwitches`
KeySwitchesWrapper.displayName = `KeySwitchesWrapper`

export default KeySwitches

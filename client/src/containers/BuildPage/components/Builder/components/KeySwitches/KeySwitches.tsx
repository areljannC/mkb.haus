import React, { FC, useState, memo } from 'react'
import styled from 'styled-components'
import { Card, CardImage, CardBody } from '../../../../../../shared/components'
import { IMAGE_150x150 } from '../../../../../../shared/constants'

// Types
type KeySwitchType = {
  id: number
  name: string
}

// Data
const keySwitches: KeySwitchType[] = [
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
      <Card>
        <CardImage src={IMAGE_150x150} />
        <CardBody>
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
                key={keySwitch.id}
                value={keySwitch.id}
                selected={keySwitch.id === selectedKeySwitchID}
              >
                {keySwitch.name}
              </option>
            ))}
          </select>
        </CardBody>
      </Card>
    </KeySwitchesWrapper>
  )
}

// Styles
const KeySwitchesWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  margin-right: ${({ theme }) => theme.space[2]};
  margin-bottom: ${({ theme }) => theme.space[2]};
  margin-left: ${({ theme }) => theme.space[2]};
  background-color: ${({ theme }) => theme.colors.primary};
`

// Display Names
KeySwitches.displayName = `KeySwitches`
KeySwitchesWrapper.displayName = `KeySwitchesWrapper`

export default memo(KeySwitches)

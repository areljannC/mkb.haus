import React, { FC, memo } from 'react'
import styled from 'styled-components'
import { Card, CardImage, CardBody } from '../../../../../../shared/components'
import { IMAGE_150x150 } from '../../../../../../shared/constants'
import { keySwitches } from '../../data'
import type { KeySwitchType } from '../../types'

// Types
type KeySwitchesPropsType = {
  keySwitch: KeySwitchType
  handleSetKeySwitch: Function
}

// Component
const KeySwitches: FC<KeySwitchesPropsType> = ({
  keySwitch,
  handleSetKeySwitch
}) => (
  <KeySwitchesWrapper>
    <Card>
      <CardImage src={IMAGE_150x150} />
      <CardBody>
        <p>Select key switch:</p>
        <select
          value={keySwitch.id}
          onChange={(event) => handleSetKeySwitch(parseInt(event.target.value, 10))}
        >
          {keySwitches.map((ks) => (
            <option key={ks.id} value={ks.id} selected={ks.id === keySwitch.id}>
              {ks.name}
            </option>
          ))}
        </select>
      </CardBody>
    </Card>
  </KeySwitchesWrapper>
)

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

export default memo<KeySwitchesPropsType>(KeySwitches)

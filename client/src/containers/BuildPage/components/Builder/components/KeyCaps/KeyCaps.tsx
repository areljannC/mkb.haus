import React, { FC, memo } from 'react'
import styled from 'styled-components'
import { Card, CardImage, CardBody } from '../../../../../../shared/components'
import { IMAGE_150x150 } from '../../../../../../shared/constants'
import { keyCaps } from '../../data'
import type { KeyCapType } from '../../types'

// Types
type KeyCapsPropsType = {
  keyCap: KeyCapType
  handleSetKeyCap: Function
}

// Component
const KeyCaps: FC<KeyCapsPropsType> = ({ keyCap, handleSetKeyCap }) => (
  <KeyCapsWrapper>
    <Card>
      <CardImage src={IMAGE_150x150} />
      <CardBody>
        <p>Select key caps:</p>
        <select
          value={keyCap.id}
          onChange={(event) => handleSetKeyCap(parseInt(event.target.value, 10))}
        >
          {keyCaps.map((kc) => (
            <option key={kc.id} value={kc.id} selected={kc.id === keyCap.id}>
              {kc.name}
            </option>
          ))}
        </select>
      </CardBody>
    </Card>
  </KeyCapsWrapper>
)

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

export default memo<KeyCapsPropsType>(KeyCaps)

import React, { FC, useState, memo } from 'react'
import styled from 'styled-components'
import { KeySwitches, KeyCaps, Layouts, PCBs } from './components'
import { keySwitches, keyCaps, layouts, pcbs } from './data'
import type { KeyboardType } from './types'
import { Flex } from '../../../../shared/components'

// Data
const defaultKeyboard: KeyboardType = {
  keySwitch: { ...keySwitches[0] },
  keyCap: { ...keyCaps[0] },
  layout: { ...layouts[0] },
  pcb: { ...pcbs[0] }
}

// Component
const Builder: FC = () => {
  const [keyboard, setKeyboard] = useState<KeyboardType>(defaultKeyboard)

  const handleSetKeySwitch = (keySwitchID: number): void => {
    setKeyboard({
      ...keyboard,
      keySwitch: { ...keySwitches.find((ks) => ks.id === keySwitchID) }
    })
  }

  const handleSetKeyCap = (keyCapID: number): void => {
    setKeyboard({
      ...keyboard,
      keyCap: { ...keyCaps.find((kc) => kc.id === keyCapID) }
    })
  }

  const handleSetLayout = (layoutID: number): void => {
    setKeyboard({
      ...keyboard,
      layout: { ...layouts.find((lo) => lo.id === layoutID) }
    })
  }

  const handleSetPCB = (pcbID: number): void => {
    setKeyboard({
      ...keyboard,
      pcb: { ...pcbs.find((pcb) => pcb.id === pcbID) }
    })
  }

  return (
    <BuilderWrapper>
      <Flex height='fit-content' flexWrap='wrap'>
        <KeySwitches keySwitch={keyboard.keySwitch} handleSetKeySwitch={handleSetKeySwitch} />
        <KeyCaps keyCap={keyboard.keyCap} handleSetKeyCap={handleSetKeyCap} />
        <Layouts layout={keyboard.layout} handleSetLayout={handleSetLayout} />
        <PCBs pcb={keyboard.pcb} handleSetPCB={handleSetPCB} />
      </Flex>
      <Flex height='fit-content' flexDirection='column'>
        <p>{keyboard.keySwitch.name}</p>
        <p>{keyboard.keyCap.name}</p>
        <p>{keyboard.layout.name}</p>
        <p>{keyboard.pcb.name}</p>
      </Flex>
    </BuilderWrapper>
  )
}

// Styles
const BuilderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`

// Display Names
Builder.displayName = `Builder`
BuilderWrapper.displayName = `BuilderWrapper`

export default memo(Builder)

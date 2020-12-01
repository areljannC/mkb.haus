import React, { FC, useState } from 'react'
import styled from 'styled-components'

// Types
type PCB = {
  id: number
  name: string
}

// Data
const pcbs: PCB[] = [
  {
    id: 0,
    name: 'Gothik 70s'
  },
  {
    id: 1,
    name: 'Gothik 120s'
  }
]

// Component
const PCBs: FC = () => {
  const [
    selectedPCBID,
    setSelectedPCBID
  ] = useState<number>(pcbs[0].id)
  return (
    <PCBsWrapper>
      <p>Select PCB:</p>
      <select
        value={
          pcbs[
            pcbs.findIndex(
              (pcb) => pcb.id === selectedPCBID
            )
          ].id
        }
        onChange={(event) =>
          setSelectedPCBID(parseInt(event.target.value, 10))
        }
      >
        {pcbs.map((pcb) => (
          <option
            value={pcb.id}
            selected={pcb.id === selectedPCBID}
          >
            {pcb.name}
          </option>
        ))}
      </select>
    </PCBsWrapper>
  )
}

// Styles
const PCBsWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  background-color: ${(props) => props.theme.colors.primary};
`

// Display Names
PCBs.displayName = `PCBs`
PCBsWrapper.displayName = `PCBsWrapper`

export default PCBs
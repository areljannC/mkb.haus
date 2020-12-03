import React, { FC, useState, memo } from 'react'
import styled from 'styled-components'
import { Card, CardImage, CardBody } from '../../../../../../shared/components'
import { IMAGE_150x150 } from '../../../../../../shared/constants'

// Types
type PCBType = {
  id: number
  name: string
}

// Data
const pcbs: PCBType[] = [
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
  const [selectedPCBID, setSelectedPCBID] = useState<number>(pcbs[0].id)
  return (
    <PCBsWrapper>
      <Card>
        <CardImage src={IMAGE_150x150} />
        <CardBody>
          <p>Select PCB:</p>
          <select
            value={pcbs[pcbs.findIndex((pcb) => pcb.id === selectedPCBID)].id}
            onChange={(event) =>
              setSelectedPCBID(parseInt(event.target.value, 10))
            }
          >
            {pcbs.map((pcb) => (
              <option
                key={pcb.id}
                value={pcb.id}
                selected={pcb.id === selectedPCBID}
              >
                {pcb.name}
              </option>
            ))}
          </select>
        </CardBody>
      </Card>
    </PCBsWrapper>
  )
}

// Styles
const PCBsWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  margin-right: ${({ theme }) => theme.space[2]};
  margin-bottom: ${({ theme }) => theme.space[2]};
  margin-left: ${({ theme }) => theme.space[2]};
  background-color: ${({ theme }) => theme.colors.primary};
`

// Display Names
PCBs.displayName = `PCBs`
PCBsWrapper.displayName = `PCBsWrapper`

export default memo(PCBs)

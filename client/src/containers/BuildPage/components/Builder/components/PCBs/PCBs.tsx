import React, { FC, memo } from 'react'
import styled from 'styled-components'
import { Card, CardImage, CardBody } from '../../../../../../shared/components'
import { IMAGE_150x150 } from '../../../../../../shared/constants'
import { pcbs } from '../../data'
import type { PCBType } from '../../types'

// Types
type PCBsPropsType = {
  pcb: PCBType
  handleSetPCB: Function
}

// Component
const PCBs: FC<PCBsPropsType> = ({ pcb, handleSetPCB }) => (
  <PCBsWrapper>
    <Card>
      <CardImage src={IMAGE_150x150} />
      <CardBody>
        <p>Select PCB:</p>
        <select
          value={pcb.id}
          onChange={(event) => handleSetPCB(parseInt(event.target.value, 10))}
        >
          {pcbs.map((p) => (
            <option key={p.id} value={p.id} selected={p.id === pcb.id}>
              {p.name}
            </option>
          ))}
        </select>
      </CardBody>
    </Card>
  </PCBsWrapper>
)

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

export default memo<PCBType>(PCBs)

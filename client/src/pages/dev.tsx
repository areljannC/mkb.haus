
import React, { FC, memo } from 'react'
import { DevPage } from '../containers'

// Component
const Dev: FC = () => (
  <DevPage />
)

// Display Names
Dev.displayName = `Dev`

export default memo(Dev)

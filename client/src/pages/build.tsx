import React, { FC, memo } from 'react'
import { BuildPage } from '../containers'

// Component
const Build: FC = () => (
  <BuildPage />
)

// Display Names
Build.displayName = `Build`

export default memo(Build)

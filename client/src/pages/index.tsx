import React, { FC, memo } from 'react'
import { HomePage } from '../containers'

// Component
const Home: FC = () => (
  <HomePage />
)

// Display Names
Home.displayName = `Home`

export default memo(Home)

import React, { FC, useEffect } from 'react'
// import { LoginPage } from '../containers'
import { useRouter } from 'next/router'
import { pageRoutes } from '../shared/constants'

// Component
// const Login: FC = () => (
//   <LoginPage />
// )

const Login: FC = () => {
  const router = useRouter()

  useEffect(() => {
    router.push(pageRoutes.HOME)
  }, [])

  return null
}

// Display Names
Login.displayName = `Login`

export default Login

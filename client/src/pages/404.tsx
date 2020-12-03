import { FC, useEffect, memo } from 'react'
import { useRouter } from 'next/router'
import { pageRoutes } from '../shared/constants'

// Component
const PageNotFound: FC = () => {
  const router = useRouter()

  useEffect(() => {
    router.push(pageRoutes.HOME)
  }, [])

  return null
}

// Display Names
PageNotFound.displayName = `PageNotFound`

export default memo(PageNotFound)

import React, { FC, Fragment, memo } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import { Layout } from '../../shared/components'
import { pageRoutes } from '../../shared/constants'

// Component
const HomePage: FC = () => (
  <Fragment>
    <Head>
      <title>mkb.haus</title>
    </Head>
    <Layout showHeader={false} showFooter={false}>
      <HomePageWrapper>
        <Title>mkb.haus</Title>
        <Subtitle>
          A social network for mechanical keyboard enthusiasts coming soon.
        </Subtitle>
        <Subtitle>
          Try the mechanical keyboard builder prototype{' '}
          <Link href={pageRoutes.BUILD}>here</Link>.
        </Subtitle>
      </HomePageWrapper>
    </Layout>
  </Fragment>
)

// Styles
const HomePageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.styles.h1.fontSize};
  font-weight: ${({ theme }) => theme.styles.h1.fontSize};
  margin-bottom: ${({ theme }) => theme.space[3]};
`

const Subtitle = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.styles.h2.fontSize};
  font-weight: ${({ theme }) => theme.styles.h2.fontSize};
  text-align: center;
`

// Display Names
HomePage.displayName = `HomePage`
HomePageWrapper.displayName = `HomePageWrapper`

export default memo(HomePage)

import React, { FC, Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import { Layout } from '../../shared/components'

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
          A social network for mechanical keyboard enthusiasts.
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
  background-color: ${(props) => props.theme.colors.background};
`

const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.styles.h1.fontSize};
  font-weight: ${(props) => props.theme.styles.h1.fontSize};
`

const Subtitle = styled.h2`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.styles.h2.fontSize};
  font-weight: ${(props) => props.theme.styles.h2.fontSize};
`

// Display Names
HomePage.displayName = `HomePage`
HomePageWrapper.displayName = `HomePageWrapper`

export default HomePage

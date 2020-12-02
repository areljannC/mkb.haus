import React, { FC, Fragment, memo } from 'react'
import Head from 'next/head'
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
          A social network for mechanical keyboard enthusiasts coming soon.
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
  margin-bottom: ${(props) => props.theme.space[3]};
`

const Subtitle = styled.h2`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.styles.h2.fontSize};
  font-weight: ${(props) => props.theme.styles.h2.fontSize};
  text-align: center;
`

// Display Names
HomePage.displayName = `HomePage`
HomePageWrapper.displayName = `HomePageWrapper`

export default memo(HomePage)

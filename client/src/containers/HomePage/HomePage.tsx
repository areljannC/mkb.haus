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
    <Layout>
      <HomePageWrapper>
        <p>
          this is the home page. <br />
          login <Link href='/login'>here</Link>.
        </p>
      </HomePageWrapper>
    </Layout>
  </Fragment>
)

// Styles
const HomePageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
`

// Display Names
HomePage.displayName = `HomePage`
HomePageWrapper.displayName = `HomePageWrapper`

export default HomePage

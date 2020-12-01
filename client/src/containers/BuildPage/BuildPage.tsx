import React, { FC, Fragment } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { Layout } from '../../shared/components'
import { Builder } from './components'

// Component
const BuildPage: FC = () => (
  <Fragment>
    <Head>
      <title>Build</title>
    </Head>
    <Layout showHeader={false} showFooter={false}>
      <BuildPageWrapper>
        <Title>Mechanical Keyboard Builder</Title>
        <Subtitle>
          Build your mechanical keyboard.
        </Subtitle>
        <Builder />
      </BuildPageWrapper>
    </Layout>
  </Fragment>
)

// Styles
const BuildPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  background-color: ${(props) => props.theme.colors.background};
  text-align: center;
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
BuildPage.displayName = `BuildPage`
BuildPageWrapper.displayName = `BuildPageWrapper`

export default BuildPage

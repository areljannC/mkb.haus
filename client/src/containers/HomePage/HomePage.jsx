import React, { Fragment } from 'react'
import Head from 'next/head'
import styled from 'styled-components'

const HomePage = () => (
  <Fragment>
    <Head>
      <title>mkb.haus</title>
    </Head>
    <Wrapper>
      this is the home page.
    </Wrapper>
  </Fragment>
)

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
`

export default HomePage
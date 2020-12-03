import React, { FC, Fragment, memo } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import { Layout } from '../../shared/components'

// Component
const LoginPage: FC = () => (
  <Fragment>
    <Head>
      <title>Login to mkb.haus</title>
    </Head>
    <Layout>
      <LoginPageWrapper>
        <p>
          this is the login page. <br />
          home <Link href='/'>here</Link>.
        </p>
      </LoginPageWrapper>
    </Layout>
  </Fragment>
)

// Styles
const LoginPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`

// Display Names
LoginPage.displayName = `LoginPage`
LoginPageWrapper.displayName = `LoginPageWrapper`

export default memo(LoginPage)

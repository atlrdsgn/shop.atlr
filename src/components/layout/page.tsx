import * as React from 'react'
import {styled, theme} from 'theme.config'

import {BodyContainer} from './body-container'
import {ResponsiveHeader} from './header'

type PageProps = {
  children?: React.ReactNode
}

export const PageLayout = ({children, ...props}: PageProps) => {
  return (
    <>
      <PageWrapper {...props}>
        <ResponsiveHeader />

        <BodyContainer>
          <main>{children}</main>
        </BodyContainer>
      </PageWrapper>
    </>
  )
}

const PageWrapper = styled('div', {
  backgroundColor: theme.colors.matte,
  overflow: 'scroll',
  display: 'flex',
  flexDirection: 'column',
  minWidth: '100vw',
  minHeight: '100vh',
  padding: 0,
  margin: 0
})

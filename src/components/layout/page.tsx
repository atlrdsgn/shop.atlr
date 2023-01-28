import * as React from 'react'

import {BodyContainer} from './body-container'
import {ResponsiveHeader} from './header'
import {PageWrapper} from './page-wrapper'

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

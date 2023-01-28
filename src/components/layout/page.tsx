import * as React from 'react'
import {Box} from '@/components/kit'
import {ResponsiveHeader} from './header'
import {BodyContainer} from './body-container'

import {theme} from 'theme.config'

type PageProps = {
  children?: React.ReactNode
}

export const PageLayout = ({children, ...props}: PageProps) => {
  return (
    <>
      <Box
        {...props}
        css={{
          backgroundColor: theme.colors.matte,
          overflow: 'scroll',
          display: 'flex',
          flexDirection: 'column',
          minWidth: '100vw',
          minHeight: '100vh',
          padding: 0,
          margin: 0,
        }}>
        <ResponsiveHeader />

        <BodyContainer>
          <main>{children}</main>
        </BodyContainer>
      </Box>
    </>
  )
}

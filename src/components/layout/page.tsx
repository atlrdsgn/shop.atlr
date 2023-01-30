import * as React from 'react'

import {BodyContainer} from './body-container'
import {Footer, GlobalFooter} from './footer'
import {ResponsiveHeader} from './header'
import {PageWrapper} from './page-wrapper'

type PageVariant = 'Page' | 'Cover' | string

export interface PageProps {
  children: React.ReactNode
  variant?: PageVariant

  /**
   * @notes
   */
  // I needed a way to alternate different
  // page styles - depending on different components neeeded.
  // So i'm playing with this @if (variant ===) option.
}

export const PageLayout = ({children, variant, ...props}: PageProps) => {
  if (variant === 'Page') {
    return (
      <>
        <PageWrapper {...props}>
          <ResponsiveHeader />
          <BodyContainer>
            <main>{children}</main>
          </BodyContainer>
          <Footer />
          <GlobalFooter />
        </PageWrapper>
      </>
    )
  }

  if (variant === 'Cover') {
    return (
      <>
        <PageWrapper {...props}>
          <ResponsiveHeader />
          <main>{children}</main>
        </PageWrapper>
      </>
    )
  }

  /**
   *
   * @if no page_type provided...
   * default = 'Page'
   *
   * @return 'Page' layout
   */
  return (
    <>
      <PageWrapper {...props}>
        <ResponsiveHeader />
        <BodyContainer>
          <main>{children}</main>
        </BodyContainer>
        <GlobalFooter />
      </PageWrapper>
    </>
  )
}

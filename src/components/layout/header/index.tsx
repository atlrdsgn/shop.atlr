import MediaQuery from 'react-responsive'

import {AtelierPortal} from '@/components/primitives/portal'

import {MainNav} from './main-nav'
import {MobileMenu} from './mobile/mobile-menu'
import {TopNav} from './top-nav'

export const ResponsiveHeader = () => {
  return (
    <>
      <AtelierPortal>
        <MediaQuery minWidth={601}>
          <TopNav />
          <MainNav />
        </MediaQuery>
      </AtelierPortal>

      <AtelierPortal>
        <MediaQuery maxWidth={600}>
          <MobileMenu />
        </MediaQuery>
      </AtelierPortal>
    </>
  )
}

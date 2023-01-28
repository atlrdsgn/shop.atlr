import MediaQuery from 'react-responsive'
import {MainNav} from './main-nav'
import {TopNav} from './top-nav'
import {MobileMenu} from './mobile/mobile-menu'
import {AtelierPortal} from '@/components/primitives/portal'

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

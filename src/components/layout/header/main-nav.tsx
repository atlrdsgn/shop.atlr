import * as React from 'react'
import {css, styled, theme} from 'theme.config'

import {PassLink} from '@/components/kit'

const sharedColor = css({color: theme.colors.slate6})
const sharedTypography = css({
  fontFamily: theme.fonts.tStar,
  fontSize: 13,
  fontWeight: 600
})
const NavText = styled('span', sharedColor, sharedTypography, {
  display: 'flex',
  flexDirection: 'row',

  margin: 'auto',
  gap: 14,

  lineHeight: '24px',

  '&:hover': {
    color: '$whiteA12'
  },

  variants: {
    alignment: {
      start: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        textAlign: 'left',
        marginLeft: 0,
        marginRight: 14
      },
      middle: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginLeft: 14,
        marginRight: 14
      },
      end: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        textAlign: 'right',

        marginLeft: 14,
        marginRight: 0
      }
    }
  }
})

const NavPlacement = css({
  position: 'fixed',
  top: 35,
  left: 0,
  right: 0,
  zIndex: 999,
  margin: 'auto',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxWidth: '100%',
  minWidth: '100%',
  height: 'auto',

  paddingTop: 8,
  paddingBottom: 8,
  paddingLeft: 18,
  paddingRight: 18,

  backgroundColor: 'transparent',
  backdropFilter: 'blur(40px) saturate(100%)',
  WebkitBackdropFilter: 'blur(40px) saturate(100%)',
  borderBottom: `1px solid ${theme.colors.whiteA4}`
})

const Navbar = styled('div', NavPlacement)

export const MainNav = () => {
  return (
    <>
      <Navbar css={{}}>
        <NavText alignment={'start'}>
          <PassLink href={'/about'}>COLLECTIONS</PassLink>
          <PassLink href={'/store'}>SHOP ALL</PassLink>
        </NavText>

        <NavText alignment={'end'}>
          <PassLink href={'/'}>RESOURCES</PassLink>
        </NavText>
      </Navbar>
    </>
  )
}

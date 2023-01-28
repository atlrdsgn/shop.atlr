import * as React from 'react'
import {css, styled, theme} from 'theme.config'

import {PassLink} from '@/components/kit'

const constColor = css({color: theme.colors.matte})

const constType = css({
  fontFamily: theme.fonts.lateral,
  fontSize: theme.fontSizes.base,
  fontWeight: theme.fontWeights.normal,

  lineHeight: '24px',
  letterSpacing: 'normal',

  paddingTop: 3
})

const NavText = styled('span', constColor, constType, {
  display: 'flex',
  flexDirection: 'row',

  margin: 'auto',
  gap: 16,

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

const TopNavbar = css({
  backgroundColor: theme.colors.fizz4,

  display: 'flex',
  flexDirection: 'row',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 999,
  margin: 'auto',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxWidth: '100%',
  minWidth: '100%',
  height: 'auto',
  maxHeight: 40,

  paddingTop: 4,
  paddingBottom: 4,
  paddingLeft: 18,
  paddingRight: 18,

  backdropFilter: 'blur(40px) saturate(100%)',
  WebkitBackdropFilter: 'blur(40px) saturate(100%)'
  // borderBottom: `1.2px solid ${theme.colors.whiteA6}`
})

const Top = styled('div', TopNavbar)

export const TopNav = () => {
  return (
    <>
      <Top>
        <NavText alignment={'start'}>
          <PassLink href={'/about'}>ABOUT</PassLink>
          <PassLink href={'/store'}>BUNDLES</PassLink>
          <PassLink href={'/store'}>SAMPLE PACKS</PassLink>
        </NavText>

        <NavText alignment={'end'}>ATELIER®</NavText>
      </Top>
    </>
  )
}

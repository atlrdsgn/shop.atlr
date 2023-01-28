import * as React from 'react'
import * as Popover from '@radix-ui/react-popover'
import {theme} from 'theme.config'
import {css, styled, keyframes} from '@stitches/react'
import {Icxn} from '@/components/vector/icxns'
import {Text} from '@/components/kit'
import {AtelierPortal} from '@/components/primitives/portal'

export const MobileMenu = () => (
  <MobileNav>
    <Popover.Root>
      <Popover.Trigger asChild>
        <IconButton aria-label='Update dimensions' color={'atlr1'}>
          <Icxn variant={'menu'} />
        </IconButton>
      </Popover.Trigger>

      <AtelierPortal>
        <PopoverPortal>
          <PopoverContent sideOffset={8} alignOffset={0} align={'center'}>
            <Flex css={{flexDirection: 'column', gap: 2}}>
              <Text
                css={{
                  lineHeight: '1',
                  fontFamily: theme.fonts.lateral,
                  fontSize: 30,
                  fontWeight: 'bold',
                  marginBottom: 10,
                  textAlign: 'left'
                }}>
                Shop
              </Text>
              <Text
                css={{
                  lineHeight: '1',
                  fontFamily: theme.fonts.lateral,
                  fontSize: 30,
                  fontWeight: 'bold',
                  marginBottom: 10,
                  textAlign: 'left'
                }}>
                About
              </Text>
              <Text
                css={{
                  lineHeight: '1',
                  fontFamily: theme.fonts.lateral,
                  fontSize: 30,
                  fontWeight: 'bold',
                  marginBottom: 10,
                  textAlign: 'left'
                }}>
                Connect
              </Text>
            </Flex>
            <PopoverClose aria-label='Close'>
              <Icxn variant={'vhs-close'} />
            </PopoverClose>
          </PopoverContent>
        </PopoverPortal>
      </AtelierPortal>
    </Popover.Root>
  </MobileNav>
)

const slideUpAndFade = keyframes({
  '0%': {opacity: 0, transform: 'translateY(2px)'},
  '100%': {opacity: 1, transform: 'translateY(0)'}
})

const slideRightAndFade = keyframes({
  '0%': {opacity: 0, transform: 'translateX(-2px)'},
  '100%': {opacity: 1, transform: 'translateX(0)'}
})

const slideDownAndFade = keyframes({
  '0%': {opacity: 0, transform: 'translateY(-2px)'},
  '100%': {opacity: 1, transform: 'translateY(0)'}
})

const slideLeftAndFade = keyframes({
  '0%': {opacity: 0, transform: 'translateX(2px)'},
  '100%': {opacity: 1, transform: 'translateX(0)'}
})

const PopoverPortal = styled(Popover.Portal, {
  width: '100vw',
  height: 'auto',
  padding: 10,
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box'
})

const PopoverContent = styled(Popover.Content, {
  zIndex: 9999,
  padding: 28,
  width: '90vw',
  height: '80vh',
  borderRadius: 12,
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  borderTopRightRadius: 24,
  borderBottomRightRadius: 24,
  margin: 'auto',
  display: 'flex',
  backgroundColor: theme.colors.atlr1,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  animationDuration: '0.9s',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="open"]': {
    '&[data-side="top"]': {animationName: slideDownAndFade},
    '&[data-side="right"]': {animationName: slideLeftAndFade},
    '&[data-side="bottom"]': {animationName: slideUpAndFade},
    '&[data-side="left"]': {animationName: slideRightAndFade}
  },
  '&:focus': {
    boxShadow: 'none'
    // boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px, 0 0 0 2px ${violet.violet7}`,
  }
})

const PopoverClose = styled(Popover.Close, {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.colors.atlr1,
  position: 'absolute',
  top: 34,
  right: 34,

  '&:hover': {backgroundColor: theme.colors.slate4},
  '&:focus': {boxShadow: `0 0 0 2px ${theme.colors.slate7}`}
})

const Flex = styled('div', {display: 'flex'})

const IconButton = styled('button', {
  zIndex: 9999,
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: 10,
  height: 35,
  width: 30,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.colors.atlr3,
  boxShadow: `0 2px 10px ${theme.colors.blackA7}`,
  '&:hover': {
    backgroundColor: '',
    cursor: 'pointer'
  },
  '&:focus': {boxShadow: 'none'},

  variants: {
    color: {
      white: {
        color: 'white'
      },
      atlr1: {
        color: theme.colors.atlr1
      }
    }
  },
  defaultVariants: {
    color: 'white'
  }
})

const NavPlacement = css({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 999,
  margin: 'auto',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  textAlign: 'left',
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
  borderBottom: `1px solid ${theme.colors.blackA7}`
})

const MobileNav = styled('div', NavPlacement)

import * as Popover from '@radix-ui/react-popover'
import * as React from 'react'
import {css, keyframes, styled, theme} from 'theme.config'

import {IconButton} from '@/components/kit'
import {AtelierPortal} from '@/components/primitives/portal'
import {Icxn} from '@/components/vector/icxns'

const items = [
  {
    name: 'Shop',
    value: 'Icon'
  },
  {
    name: 'Collections',
    value: 'Accordion'
  },
  {
    name: 'Connect',
    value: 'Button'
  },
  {
    name: 'Account',
    value: 'Checkbox'
  }
]

export const MobileMenu = () => (
  <MobileNav>
    <Popover.Root>
      <Popover.Trigger asChild>
        <IconButton aria-label='Update dimensions' color={'psych'}>
          <Icxn variant={'menu'} />
        </IconButton>
      </Popover.Trigger>

      <AtelierPortal>
        <PopoverPortal>
          <PopoverContent sideOffset={8} alignOffset={0} align={'center'}>
            <Flex css={{flexDirection: 'column', gap: 2}}>
              <>
                {items.map((items) => (
                  <PopoverItem key={items.name}>{items.name}</PopoverItem>
                ))}
              </>
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
  backgroundColor: theme.colors.psych5,
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

const PopoverItem = styled('span', {
  color: theme.colors.matte,
  lineHeight: '1',
  fontFamily: theme.fonts.lateral,
  fontSize: theme.fontSizes['3xl'],
  fontWeight: theme.fontWeights.bold,
  marginBottom: 12,
  textAlign: 'left',
  textTransform: 'uppercase'
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

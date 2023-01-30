import * as S from '@radix-ui/react-switch'
import {styled, theme} from 'theme.config'

const switchStyles = styled(S.Root, {
  all: 'unset',
  width: 38,
  height: 20,
  backgroundColor: theme.colors.slate5,
  borderRadius: '9999px',
  position: 'relative',
  boxShadow: `inset 0 0px 1px 0.7px ${theme.colors.slate7}`,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:focus': {boxShadow: `0 0 0 2px ${theme.colors.fizz4}`},
  '&[data-state="checked"]': {backgroundColor: theme.colors.slate5},

  variants: {},
  defaultVariants: {}
})

const thumbStyles = styled(S.Thumb, {
  display: 'block',
  width: 17,
  height: 17,
  backgroundColor: theme.colors.slate8,
  borderRadius: '9999px',
  boxShadow: `0 2px 2px ${theme.colors.slate6}`,
  transition: 'transform 100ms',
  transform: 'translateX(1.5px)',
  willChange: 'transform',
  '&[data-state="checked"]': {
    transform: 'translateX(19.5px)',
    backgroundColor: theme.colors.psych4
  }
})

export const StyledSwitch = switchStyles
export const StyledSwitchThumb = thumbStyles

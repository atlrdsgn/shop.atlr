import {styled, theme} from 'theme.config'

const buttonStyles = styled('button', {
  zIndex: 9999,
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: theme.radii.base,
  height: 30,
  width: 30,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',

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
      },
      psych: {
        color: theme.colors.psych5
      }
    },

    dev: {
      true: {
        border: '2px solid white'
      }
    }
  },
  defaultVariants: {
    color: 'white',
    dev: false
  }
})

export const IconButton = buttonStyles

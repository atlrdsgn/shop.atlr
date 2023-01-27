import {styled} from 'theme'

const SpaceStyles = styled('div', {
  all: 'unset',
  display: 'block',
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  width: '100%',
  height: 'auto',
  minWidth: '100%',

  variants: {
    size: {
      xs: {
        height: 8, // 8px
      },
      sm: {
        height: 16, // 16px
      },
      md: {
        height: 24, // 24px
      },
      lg: {
        height: 32, // 32px
      },
      xl: {
        height: 40, // 40px
      },
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

export const Space = SpaceStyles

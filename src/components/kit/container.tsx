import {css, styled} from 'theme'
const ContainerStyles = css({
  boxSizing: 'border-box',
  flexShrink: 0,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 20,
  paddingRight: 20,
  '@sm': {
    paddingLeft: 18,
    paddingRight: 18,
  },
  variants: {
    size: {
      '0': {
        maxWidth: '480px',
      },
      '1': {
        maxWidth: '560px',
      },
      '2': {
        maxWidth: '715px',
      },
      '3': {
        maxWidth: '1145px',
      },
      '4': {
        maxWidth: 'none',
      },
    },
    centered: {
      true: {
        display: 'flex',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
  },
  defaultVariants: {
    size: '4',
    centered: true,
  },
})

export const Container = styled('div', ContainerStyles)

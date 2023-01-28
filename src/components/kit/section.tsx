import {styled} from 'theme.config'

const SectionStyles = styled('div', {
  boxSizing: 'border-box',
  flexShrink: 0,
  '&::before': {
    boxSizing: 'border-box',
    content: '""'
  },
  '&::after': {
    boxSizing: 'border-box',
    content: '""'
  },

  variants: {
    size: {
      '1': {
        paddingTop: 25,
        paddingBottom: 25
      },
      '2': {
        paddingTop: 40,
        paddingBottom: 40
      },
      '3': {
        paddingTop: 50,
        paddingBottom: 50
      },
      '4': {
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 10,
        paddingBottom: 10
      }
    }
  },
  defaultVariants: {
    size: '3'
  }
})

export const Section = SectionStyles

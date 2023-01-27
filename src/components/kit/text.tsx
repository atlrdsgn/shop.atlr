import {styled, theme} from 'theme'

export const Text = styled('span', {
  zIndex: 'inherit',
  lineHeight: '1.5',
  margin: '0',
  fontFamily: theme.fonts.inter,
  fontWeight: 400,
  fontVariantNumeric: 'tabular-nums',
  display: 'block',
  variants: {
    size: {
      '1': {
        fontSize: theme.fontSizes[1],
      },
      '2': {
        fontSize: theme.fontSizes[2],
      },
      '3': {
        fontSize: theme.fontSizes[3],
      },
      '4': {
        fontSize: theme.fontSizes[4],
      },
      '5': {
        fontSize: theme.fontSizes[5],
        letterSpacing: '-.015em',
      },
      '6': {
        fontSize: theme.fontSizes[6],
        letterSpacing: '-.016em',
      },
      '7': {
        fontSize: theme.fontSizes[7],
        letterSpacing: '-.031em',
        textIndent: '-.005em',
      },
      '8': {
        fontSize: theme.fontSizes[8],
        letterSpacing: '-.034em',
        textIndent: '-.018em',
      },
      '9': {
        fontSize: theme.fontSizes[9],
        letterSpacing: '-.055em',
        textIndent: '-.025em',
      },
      '10': {
        fontSize: theme.fontSizes[10],
        letterSpacing: '-.055em',
        textIndent: '-.025em',
      },
    },
    color: {
      highContrast: {
        color: theme.colors.slate1,
      },
      mauve: {
        color: theme.colors.mauve5,
      },
      gray: {
        color: theme.colors.gray9,
      },
    },
    align: {
      left: {
        textAlign: 'left',
        justifyContent: 'flex-start',
      },
      center: {
        textAlign: 'center',
        justifyContent: 'center',
      },
      right: {
        textAlign: 'right',
        justifyContent: 'flex-end',
      },
    },
    gradient: {
      true: {
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
    },
  },
  defaultVariants: {
    size: '3',
    color: 'gray',
    gradient: false,
    align: 'center',
  },
})

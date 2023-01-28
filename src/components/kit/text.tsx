import {styled} from '@stitches/react'
import {theme} from 'theme.config'

export const Text = styled('span', {
  zIndex: 'inherit',
  lineHeight: '1.5',
  margin: '0',
  fontFamily: theme.fonts.system,
  fontWeight: 400,
  fontVariantNumeric: 'tabular-nums',
  display: 'block',
  variants: {
    size: {
      '1': {
        fontSize: theme.fontSizes.xs,
      },
      '2': {
        fontSize: theme.fontSizes.sm,
      },
      '3': {
        fontSize: theme.fontSizes.base,
      },
      '4': {
        fontSize: theme.fontSizes.lg,
      },
      '5': {
        fontSize: theme.fontSizes.xl,
        letterSpacing: '-.015em',
      },
      '6': {
        fontSize: theme.fontSizes['2xl'],
        letterSpacing: '-.016em',
      },
      '7': {
        fontSize: theme.fontSizes['3xl'],
        letterSpacing: '-.031em',
        textIndent: '-.005em',
      },
      '8': {
        fontSize: theme.fontSizes['4xl'],
        letterSpacing: '-.034em',
        textIndent: '-.018em',
      },
      '9': {
        fontSize: theme.fontSizes['5xl'],
        letterSpacing: '-.055em',
        textIndent: '-.025em',
      },
      '10': {
        fontSize: theme.fontSizes['6xl'],
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

    // text-transform variants [boolean]...
    uppercase: {
      true: {
        textTransform: 'uppercase',
      },
    },
  },
  defaultVariants: {
    size: '3',
    color: 'gray',
    gradient: false,
    uppercase: false,
    align: 'center',
  },
})

import {styled, theme} from 'theme.config'

const coreDefaults = {
  boxSizing: 'border-box',
  display: 'flex',
  padding: 0,
  margin: 'auto',
  width: '100%',
  height: 'auto',

  backgroundColor: 'transparent',
  background: 'none'
}

const flexStyles = styled('div', {
  ...coreDefaults,

  variants: {
    direction: {
      row: {
        flexDirection: 'row'
      },
      column: {
        flexDirection: 'column'
      },
      rowReverse: {
        flexDirection: 'row-reverse'
      },
      columnReverse: {
        flexDirection: 'column-reverse'
      }
    },
    align: {
      start: {
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        textAlign: 'left'
      },
      center: {
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'center'
      },
      end: {
        alignItems: 'flex-end'
      },
      stretch: {
        alignItems: 'stretch'
      },
      baseline: {
        alignItems: 'baseline'
      }
    },
    justify: {
      start: {
        justifyContent: 'flex-start'
      },
      center: {
        justifyContent: 'center'
      },
      end: {
        justifyContent: 'flex-end'
      },
      between: {
        justifyContent: 'space-between'
      }
    },
    wrap: {
      noWrap: {
        flexWrap: 'nowrap'
      },
      wrap: {
        flexWrap: 'wrap'
      },
      wrapReverse: {
        flexWrap: 'wrap-reverse'
      }
    },
    gap: {
      1: {
        gap: theme.space[1]
      },
      2: {
        gap: theme.space[2]
      },
      3: {
        gap: theme.space[3]
      },
      4: {
        gap: theme.space[4]
      },
      5: {
        gap: theme.space[5]
      },
      6: {
        gap: theme.space[6]
      },
      7: {
        gap: theme.space[7]
      },
      8: {
        gap: theme.space[8]
      },
      9: {
        gap: theme.space[9]
      }
    }
  },
  defaultVariants: {
    direction: 'row',
    align: 'stretch',
    justify: 'start',
    wrap: 'noWrap',
    gap: 2
  }
})

export const Flex = flexStyles

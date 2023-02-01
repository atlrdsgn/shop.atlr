import {css, styled} from 'theme.config'

const coreDefaults = {
  all: 'unset',
  boxSizing: 'border-box',
  display: 'grid',
  padding: 0,
  margin: 'auto',
  width: '100%',
  whiteSpace: 'nowrap',
  overflowWrap: 'break-word',
  flexWrap: 'wrap'
}

const gridStyles = css({
  ...coreDefaults,

  variants: {
    align: {
      /**
       *
       * ..Alignment
       */
      start: {
        alignItems: 'start'
      },
      center: {
        display: 'grid',
        alignItems: 'center'
      },
      end: {
        alignItems: 'end'
      },
      stretch: {
        alignItems: 'stretch',
        width: '100%'
      },
      baseline: {
        alignItems: 'baseline'
      }
    },
    justify: {
      /**
       *
       * ..Justification
       */
      start: {
        justifyContent: 'start'
      },
      center: {
        justifyContent: 'center'
      },
      end: {
        justifyContent: 'end'
      },
      between: {
        justifyContent: 'space-between'
      },
      stretch: {
        justifyContent: 'stretch'
      }
    },
    flow: {
      /**
       *
       * ..Flow
       */
      row: {
        gridAutoFlow: 'row'
      },
      column: {
        gridAutoFlow: 'column'
      },
      dense: {
        gridAutoFlow: 'dense'
      },
      rowDense: {
        gridAutoFlow: 'row dense'
      },
      columnDense: {
        gridAutoFlow: 'column dense'
      }
    },
    /**
     *
     * ..Columns
     */
    columns: {
      '1': {
        grid: 'auto-flow / repeat(1, 1fr)',
        gridTemplateColumns: 'repeat(1, 1fr)'
      },
      '2': {
        grid: 'auto-flow / repeat(2, 1fr)',
        gridTemplateColumns: 'repeat(2, 1fr)',
        '@md': {gridTemplateColumns: 'repeat(1, 1fr)'},
        '@sm': {gridTemplateColumns: 'repeat(1, 1fr)'}
      },
      '3': {
        grid: 'auto-flow / repeat(3, 1fr)',
        gridTemplateColumns: 'repeat(3, 1fr)',
        '@md': {gridTemplateColumns: 'repeat(2, 1fr)'},
        '@sm': {gridTemplateColumns: 'repeat(1, 1fr)'}
      },
      '4': {
        grid: 'auto-flow / repeat(4, 1fr)',
        gridTemplateColumns: 'repeat(4, 1fr)',
        '@md': {gridTemplateColumns: 'repeat(2, 1fr)'},
        '@sm': {gridTemplateColumns: 'repeat(1, 1fr)'}
      },
      '5': {
        grid: 'auto-flow / repeat(5, 1fr)',
        gridTemplateColumns: 'repeat(5, 1fr)'
      },
      '6': {
        grid: 'auto-flow / repeat(6, 1fr)',
        gridTemplateColumns: 'repeat(6, 1fr)',
        '@md': {gridTemplateColumns: 'repeat(3, 1fr)'},
        '@sm': {gridTemplateColumns: 'repeat(1, 1fr)'}
      },
      '7': {
        grid: 'auto-flow / repeat(7, 1fr)',
        gridTemplateColumns: 'repeat(7, 1fr)'
      },
      '8': {
        grid: 'auto-flow / repeat(8, 1fr)',
        gridTemplateColumns: 'repeat(8, 1fr)',
        '@lg': {gridTemplateColumns: 'repeat(4, 1fr)'},
        '@md': {gridTemplateColumns: 'repeat(2, 1fr)'},
        '@sm': {gridTemplateColumns: 'repeat(1, 1fr)'}
      },
      '12': {
        grid: 'auto-flow / repeat(12, 1fr)',
        gridTemplateColumns: 'repeat(12, 1fr)'
      }
    },
    /**
     *
     * ..Gaps
     */
    gap: {
      '1': {
        gap: '1px'
      },
      '2': {
        gap: '2px'
      },
      '3': {
        gap: '3px'
      },
      '4': {
        gap: '4px'
      },
      '5': {
        gap: '5px'
      },
      '6': {
        gap: '6px'
      },
      '7': {
        gap: '7px'
      },
      '8': {
        gap: '8px'
      },
      '9': {
        gap: '9px'
      },
      '10': {
        gap: '10px'
      },
      '11': {
        gap: '11px'
      },
      '12': {
        gap: '12px'
      },
      '13': {
        gap: '13px'
      },
      '14': {
        gap: '14px'
      },
      '15': {
        gap: '15px'
      }
    },
    /**
     *
     *
     * ..Column Gaps
     */
    gapX: {
      '1': {
        columnGap: '4px'
      },
      '2': {
        columnGap: '$2'
      },
      '3': {
        columnGap: '$3'
      },
      '4': {
        columnGap: '$4'
      },
      '5': {
        columnGap: '5px'
      },
      '6': {
        columnGap: '$6'
      },
      '7': {
        columnGap: '$7'
      },
      '8': {
        columnGap: '$8'
      },
      '9': {
        columnGap: '$9'
      }
    },
    /**
     *
     *
     * ..Row Gaps
     */
    gapY: {
      '1': {
        rowGap: '4px'
      },
      '2': {
        rowGap: '$2'
      },
      '3': {
        rowGap: '$3'
      },
      '4': {
        rowGap: '$4'
      },
      '5': {
        rowGap: '5px'
      },
      '6': {
        rowGap: '$6'
      },
      '7': {
        rowGap: '$7'
      },
      '8': {
        rowGap: '$8'
      },
      '9': {
        rowGap: '$9'
      }
    },

    /**
     *
     *
     * ..Border: boolean
     */
    border: {
      true: {
        border: '1px solid black'
      }
    }
  },
  defaultVariants: {
    align: 'center',
    justify: 'between',
    flow: 'row',
    columns: '1',
    gap: '5',
    gapX: '5',
    gapY: '5',
    border: false
  }
})

export const Grid = styled('div', gridStyles)

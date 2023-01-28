import type * as Stitches from '@stitches/react'

const globalKitUtilities = {
  /**
   *
   * linear gradient..
   */
  linearGradient: () => (value: Stitches.PropertyValue<'padding'>) => ({
    backgroundImage: `linear-gradient(${value})`,
  }),
  /**
   *
   * p === PADDING
   */
  p: (value: Stitches.PropertyValue<'padding'>) => ({
    // example p: 0, == padding: 0;
    padding: value,
  }),

  /**
   *
   * pLeft === PADDING LEFT
   */
  pLeft: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
    paddingLeft: value,
  }),

  /**
   *
   * pRight === PADDING RIGHT
   */
  pRight: (value: Stitches.PropertyValue<'paddingRight'>) => ({
    paddingRight: value,
  }),

  /**
   *
   * pTop === PADDING TOP
   */
  pTop: (value: Stitches.PropertyValue<'paddingTop'>) => ({
    paddingTop: value,
  }),

  /**
   *
   * pBottom === PADDING BOTTOM
   */
  pBottom: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
    paddingBottom: value,
  }),
}

export const kitUtils = globalKitUtilities

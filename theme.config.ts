import type * as Stitches from '@stitches/react'
import {createStitches, defaultThemeMap} from '@stitches/react'
import {
  kitBorderWidths,
  kitColors,
  kitDarkColors,
  kitFonts,
  kitFontSizes,
  kitFontWeights,
  kitRadii,
  kitSpace,
  kitUtils,
  kitZIndices
} from 'theme'

export const {styled, css, theme, getCssText, createTheme, globalCss, keyframes, config, reset} = createStitches({
  prefix: 'atlr',
  themeMap: {
    ...defaultThemeMap
  },

  /** ------------------------ theme Object ------------------------------------- */
  theme: {
    colors: {
      ...kitColors
    },

    /** --------------- fonts --------------------- */
    fonts: {
      ...kitFonts
    },

    /** --------------- ...rest --------------------- */
    ...kitFontSizes,
    ...kitFontWeights,

    ...kitBorderWidths,

    ...kitSpace,
    ...kitRadii,
    ...kitZIndices
  },
  /** ------------------------ END THEME -------------------------------------

/** --------------- media * breakpoints --------------------- */
  media: {
    /*
    xs: '480px',
    sm: '544px',
    md: '768px',
    lg: '1012px',
    xl: '1280px',
    full: '100vw',
    initial: '100vw'
    */
    xs: '(max-width: 480px)',
    sm: '(max-width: 544px)',
    md: '(max-width: 768px)',
    lg: '(max-width: 1012px)',
    xl: '(max-width: 1280px)',
    full: '(max-width: none)',
    initial: '(max-width: none)',
    motion: '(prefers-reduced-motion: reduce)',
    safari: 'not all and (min-resolution:.001dpcm)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)'
  },

  /** --------------- utils --------------------- */
  utils: {
    ...kitUtils
  }
})

export const darkTheme = createTheme('dark-theme', {
  colors: {
    ...kitDarkColors
  },
  utils: {}
})

/** --------------------- VariantProps<typeof stitches> --------------------------- */
export type {VariantProps} from '@stitches/react'
export type CSS = Stitches.CSS<typeof config>
/** ------------------------------------------------------------------------------ */

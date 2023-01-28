import type * as Stitches from '@stitches/react'
import {createStitches, defaultThemeMap} from '@stitches/react'
import {
  kitBorderWidths,
  kitBreakpoints,
  kitColors,
  kitDarkColors,
  kitFonts,
  kitFontSizes,
  kitFontWeights,
  kitRadii,
  kitSpace,
  kitZIndices
} from 'theme/index'

export const {styled, css, theme, getCssText, createTheme, globalCss, keyframes, config, reset} = createStitches({
  prefix: 'atlr*',
  themeMap: {
    ...defaultThemeMap,

    width: 'space',
    height: 'space',
    minWidth: 'space',
    maxWidth: 'space',
    minHeight: 'space',
    maxHeight: 'space',
    flexBasis: 'space',
    gridTemplateColumns: 'space',
    gridTemplateRows: 'space',
    blockSize: 'space',
    minBlockSize: 'space',
    maxBlockSize: 'space',
    inlineSize: 'space',
    minInlineSize: 'space',
    maxInlineSize: 'space'
  },

  /** ------------------------ Begin Theme -------------------------------------
   * @main theme
   */
  theme: {
    colors: {
      /**
       *
       * BrandKit.
       */
      ...kitColors,

      blur: 'rgba(72,67,73,0.1)',

      fizz4: 'rgb(226, 255, 112)',
      fizz5: 'rgb(218, 255, 71)',

      psych4: 'rgb(186, 143, 247)',
      psych5: 'rgb(202, 96, 255)',

      chxn1: '#f7f0f0',
      chxn2: '#bcc1cd',
      chxn3: '#A09FA6',
      chxn4: '#484349',
      chxn4A: 'rgba(72, 67, 73, 0.8)',
      chxn5: '#2b2a30',
      chxn6: '#5e7ce2',
      chxn7: '#ff3333',
      chxn8: '#72f863',
      chxn9: '#ff3474',
      chxn10: '#a288a6',
      chxn11: '#93827f',
      chxn12: '#222222',
      chxn13: '#BA8FF7',
      tartOrange: '#ff3333',
      berry: '#686799',

      /**
       *
       * sociol colors.
       */
      ig: '#ff3333',
      insta: '#ff3474',
      maxBlue: '#5e7ce2',
      twitter: '#1DA1F2',
      github: '#6cc644',
      githubAlt: '#6e5494',
      arena: '#484349',
      linkedin: '#0077B5',
      readcv: '#8A918E',
      fb: '#4267B2',

      /**
       *
       *
       *
       * accidentsls...
       *
       */
      clear: 'transparent',
      transparent: 'transparent',
      tp: 'transparent',
      white: '#fff',
      black: '#000',
      current: 'currentColor'
    },

    /******************************************************
     * @fonts
     *********************************************************/
    fonts: {
      ...kitFonts
    },

    /*********************************************************
     * @rest font sizes, font weights, space, breakpoints, etc.
     ************************************************************/
    ...kitFontSizes,
    ...kitFontWeights,
    ...kitSpace,
    ...kitRadii,
    ...kitZIndices,
    ...kitBorderWidths
  },
  /** ------------------------ END THEME -------------------------------------

  /*************************************************************
   * @media
   * and breakpoints.
   *************************************************************/
  media: {
    xs: `(max-width: ${kitBreakpoints.xs})`, // 480px
    sm: `(max-width: ${kitBreakpoints.sm})`, // 520px
    md: `(max-width: ${kitBreakpoints.md})`, // 960px
    lg: `(max-width: ${kitBreakpoints.lg})`, // 1280px
    xl: `(max-width: ${kitBreakpoints.xl})`, // 1920px
    full: `(min-width: ${kitBreakpoints.full})`, // 100vw
    initial: `(max-width: ${kitBreakpoints.initial})`, // 100vw
    motion: '(prefers-reduced-motion: reduce)',
    safari: 'not all and (min-resolution:.001dpcm)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)'
  },

  /**
   *
   * utils..
   *
   * these are known to have some issues..
   * try to avoid using if possible.
   */
  utils: {
    font: (value: Stitches.PropertyValue<'fontFamily'>) => ({
      /**
       * @example font: theme.font.value,
       */
      fontFamily: value
    }),
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      /**
       * @example p: 2,
       * @returns padding: 2;
       */
      padding: value
    }),
    linearGradient: () => (value: Stitches.PropertyValue<'backgroundImage'>) => ({
      backgroundImage: `linear-gradient(${value})`
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value
    }),
    pL: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value
    }),
    pR: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value
    })
  }
})

/** --------------------- VariantProps<typeof stitches> --------------------------- */
export type {VariantProps} from '@stitches/react'
export type CSS = Stitches.CSS<typeof config>
/** ------------------------------------------------------------------------------ */

export const darkTheme = createTheme('dark-theme', {
  colors: {
    ...kitDarkColors,
    blur: 'rgba(0, 0, 0, 0.1)',

    fizz4: 'rgb(186, 143, 247)',
    fizz5: 'rgb(202, 96, 255)',

    psych4: 'rgb(226, 255, 112)',
    psych5: 'rgb(218, 255, 71)',

    chxn1: '#1A171A',
    chxn2: '#3f4b54',
    chxn3: '#919191',
    chxn4: '#f1f1f1',
    chxn4A: 'rgba(241, 241, 241, 0.8)',
    chxn5: '#FFFFFF',
    chxn6: '#5e7ce2',
    chxn7: '#ff3333',
    chxn8: '#72f863',
    chxn9: '#ff3474',
    chxn10: '#a288a6',
    chxn11: '#93827f',
    chxn12: '#222222',
    chxn13: '#EAFF97',

    tartOrange: '#5e7ce2',
    maxBlue: '#72719b',

    /**
     *
     *
     * accidentsls...
     */
    clear: 'transparent',
    transparent: 'transparent',
    tp: 'transparent',

    white: '#000',
    black: '#fff',
    current: 'currentColor'
  },
  utils: {}
})

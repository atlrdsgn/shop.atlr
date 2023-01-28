import {
  blackA,
  gray,
  grayA,
  grayDark,
  grayDarkA,
  lime,
  limeA,
  limeDark,
  mauve,
  mauveDark,
  slate,
  slateA,
  slateDark,
  slateDarkA,
  whiteA
} from '@radix-ui/colors'
import type * as Stitches from '@stitches/react'
import {createStitches, defaultThemeMap} from '@stitches/react'

export const {styled, css, theme, getCssText, createTheme, globalCss, keyframes, config, reset} = createStitches({
  themeMap: {
    ...defaultThemeMap
  },
  prefix: 'atlr-',

  /** ------------------------ Begin Theme -------------------------------------
   * @main theme
   */
  theme: {
    colors: {
      /**
       *
       * BrandKit.
       */

      atlr1: '#CEFE71',
      atlr2: '#BEBCA6',
      atlr3: '#A493F8',
      atlr4: '#837E95',

      matte: '#050507',

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
       * Radix-UI Colors
       */
      ...blackA,
      ...whiteA,
      ...gray,
      ...grayA,
      ...lime,
      ...limeA,
      ...mauve,
      ...slate,
      ...slateA,

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
      system:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI','Roboto', 'Ubuntu', 'Fira Sans', 'Droid Sans','Helvetica Neue', sans-serif;",
      sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI','Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans','Helvetica Neue', sans-serif;",
      mono: "Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono','Courier New', monospace;",

      inter: '"Inter", sans-serif',
      lateral: '"Lateral Extended Medium", sans-serif',
      tStar: '"T-Star TW PRO", sans-serif',
      montreal: '"Neue Montreal", sans-serif',
      ppSans: '"Pangram Sans Condensed Bold", sans-serif'
    },

    /*********************************************************
     * @rest font sizes, font weights, space, breakpoints, etc.
     ************************************************************/
    fontSizes: {
      xs: '0.625rem',
      sm: '0.75rem',
      base: '0.875rem',
      md: '0.875rem',
      lg: '1rem',
      xl: '1.125rem',
      '2xl': '1.375rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem'
    },
    fontWeights: {
      superlite: 100,
      thin: 200,
      lite: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      heavy: 800,
      black: 900
    },
    space: {
      0: '0px',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '18px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '50px',
      12: '60px',
      13: '70px',
      14: '80px',
      15: '90px',
      16: '100px',
      17: '110px',
      18: '120px',
      19: '130px',
      20: '140px'
    },
    radii: {
      xs: '4px',
      sm: '6px',
      md: '8px',
      base: '8px',
      lg: '10px',
      xl: '12px',
      '2xl': '16px',
      pill: '50px',
      none: '0px'
    },
    zIndices: {
      0: '1',
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '999'
    }
  },
  /** ------------------------ END THEME -------------------------------------

  /*************************************************************
   * @media
   * and breakpoints.
   *************************************************************/
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
     * Radix Colors.
     */
    ...blackA,
    ...whiteA,
    ...grayDarkA,
    ...grayDark,
    ...slateDark,
    ...slateDarkA,
    ...limeDark,
    ...mauveDark,

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

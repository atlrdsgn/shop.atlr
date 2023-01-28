import type * as Stitches from '@stitches/react'
import {createStitches, defaultThemeMap} from '@stitches/react'
import {kitColors, kitDarkColors} from 'theme/color'
import {
  kitFonts,
  kitFontSizes,
  kitBorderWidths,
  kitFontWeights,
  kitSpace,
  kitZIndices,
  kitRadii,
  kitBreakpoints,
} from 'theme/index'

export type {VariantProps} from '@stitches/react'

export const {styled, css, theme, getCssText, createTheme, globalCss, keyframes, config, reset} =
  createStitches({
    prefix: 'atlr-',
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
      maxInlineSize: 'space',
    },

    theme: {
      colors: {
        ...kitColors,

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
      },
      fonts: {
        ...kitFonts,
      },

      ...kitFontSizes,
      ...kitFontWeights,
      ...kitSpace,
      ...kitRadii,
      ...kitZIndices,
      ...kitBorderWidths,
      /*
      fontSizes: {
        1: '12px',
        2: '14px',
        3: '16px',
        4: '18px',
        5: '20px',
        6: '24px',
        7: '32px',
        8: '36px',
        9: '40px',
        10: '48px',
        11: '64px',
        12: '88px',
        13: '114px',
        14: '120px',
      },
      lineHeights: {
        1: '12px',
        2: '14px',
        3: '17px',
        4: '18px',
        5: '20px',
        6: '25px',
        7: '32px',
        8: '39px',
        9: '48px',
        10: '48px',
        12: '88px',
        13: '114px',
        14: '120px',
      },
      space: {
        1: '4px',
        2: '8px',
        3: '16px',
        4: '32px',
        5: '64px',
        6: '128px',
        7: '256px',
        8: '512px',
      },
      sizes: {
        1: '4px',
        2: '8px',
        3: '16px',
        4: '32px',
        5: '64px',
        6: '128px',
        7: '256px',
        8: '512px',
      },
      radii: {
        1: '2px',
        2: '4px',
        3: '8px',
        4: '10px',
        5: '12px',
        6: '14px',
        round: '9999px',
      },
      */
    },
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
      light: '(prefers-color-scheme: light)',
    },
    utils: {
      font: (value: Stitches.PropertyValue<'fontFamily'>) => ({
        /**
         * @example font: theme.font.value,
         */
        fontFamily: value,
      }),
      p: (value: Stitches.PropertyValue<'padding'>) => ({
        /**
         * @example p: 2,
         * @returns padding: 2;
         */
        padding: value,
      }),
      linearGradient: () => (value: Stitches.PropertyValue<'backgroundImage'>) => ({
        backgroundImage: `linear-gradient(${value})`,
      }),
      px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
      pL: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
        paddingLeft: value,
      }),
      pR: (value: Stitches.PropertyValue<'paddingRight'>) => ({
        paddingRight: value,
      }),
    },
  })

export type CSS = Stitches.CSS<typeof config>

export const darkTheme = createTheme('dark-theme', {
  colors: {
    ...kitDarkColors,

    fizz: 'rgb(202, 96, 255)',
    heliotrope: 'rgb(226, 255, 112)',

    honeySuckle: 'rgb(186, 143, 247)',
    portage: 'rgb(226, 255, 112)',

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

    blur: 'rgba(0, 0, 0, 0.1)',

    tartOrange: '#5e7ce2',
    maxBlue: '#72719b',
  },
  utils: {},
})

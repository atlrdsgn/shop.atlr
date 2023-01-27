import {
  blackA,
  gray,
  grayA,
  grayDark,
  grayDarkA,
  lime,
  limeA,
  limeDark,
  limeDarkA,
  mauve,
  mauveA,
  mauveDark,
  mauveDarkA,
  slate,
  slateA,
  slateDark,
  slateDarkA,
  whiteA,
} from '@radix-ui/colors'
import type * as Stitches from '@stitches/react'
import {createStitches, defaultThemeMap} from '@stitches/react'

export type {VariantProps} from '@stitches/react'

export const {styled, css, theme, createTheme, getCssText, globalCss, keyframes, config, reset} = createStitches({
  themeMap: {
    ...defaultThemeMap,
  },
  prefix: 'atelier', // *put your preferred css prefix here.* //
  theme: {
    colors: {
      ...gray,
      ...grayA,
      ...mauve,
      ...mauveA,
      ...slate,
      ...slateA,
      ...lime,
      ...limeA,
      ...whiteA,
      ...blackA,

      fizz: 'rgb(218, 255, 71)',
      heliotrope: 'rgb(202, 96, 255)',

      honeySuckle: 'rgb(226, 255, 112)',
      portage: 'rgb(186, 143, 247)',

      ruby: 'rgb(216, 43, 98)',
      winterSky: 'rgb(255, 50, 115)',

      black: '#000000',
      clear: 'transparent',
      white: '#ffffff',
    },
    fonts: {
      untitled: '-apple-system, system-ui, sans-serif',
      mono: 'Menlo, monospace',
      inter: '"Inter", sans-serif',
      switzer: '"Switzer-Variable", sans-serif',
      aero: '"At Hauss Aero", sans-serif',
      pragExtended: '"Pragmatica Extended", sans-serif',
      prag: '"Pragmatica", sans-serif',
      neueBit: '"PP Neue Bit", monospace',
      antarcticanMono: '"Antarctican Mono", monospace',
      rightGrotesk: '"PP Right Grotesk", sans-serif',
      rightGroteskWide: '"PP Right Grotesk Wide", sans-serif', // weight: 470, 900
      rightGroteskTextWide: '"PP Right Grotesk Text Wide", sans-serif',
      telegraf: '"PP Telegraf", sans-serif',
      neueMontreal: '"PP Neue Montreal", sans-serif',
      ettika: '"ETTIKA GOZA"',
    },
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
  },
  media: {
    // breakpoints...
    xs: '(max-width: 480px)',
    sm: '(max-width: 520px)',
    md: '(max-width: 740px)',
    lg: '(max-width: 860px)',
    xl: '(max-width: 1200px)',
    xxl: '(min-width: 1201px)',

    bp1: `(min-width: 520px)`,
    bp2: `(min-width: 900px)`,
    bp3: `(min-width: 1200px)`,
    bp4: `(min-width: 1580px)`,

    // user preferences...
    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',

    /* alternate usage of bp's
     * bp1: `(min-width: 520px)`,
     * bp2: `(min-width: 900px)`,
     * bp3: `(min-width: 1200px)`,
     * bp4: `(min-width: 1580px)`,
     */
  },
  utils: {
    linearGradient: () => (value: Stitches.PropertyValue<'padding'>) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      // example p: 0, == padding: 0;
      padding: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
})

export type CSS = Stitches.CSS<typeof config>

export const darkTheme = createTheme('dark-theme', {
  colors: {
    ...grayDark,
    ...grayDarkA,
    ...mauveDark,
    ...mauveDarkA,
    ...slateDark,
    ...slateDarkA,
    ...limeDark,
    ...limeDarkA,

    // defaults
    black: '#FFFFFF',
    clear: 'transparent',
    white: '#000000',
  },
  utils: {},
})

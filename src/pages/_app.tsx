import '@/css/global.scss'

import type {NextComponentType, NextPageContext} from 'next'
import type {AppProps} from 'next/app'
import {ThemeProvider} from 'next-themes'
import * as React from 'react'
import {darkTheme, globalCss} from 'theme.config'

import {useFontsLoaded} from '@/hooks/use-fonts-loaded'
import {useKeydown} from '@/hooks/use-keydown'

export type Page<P = Record<string, unknown>> = NextComponentType<NextPageContext, Record<string, unknown>, P> & {
  getLayout?: GetLayoutFn<P>
}

export type GetLayoutFn<P = Record<string, unknown>> = (
  props: Omit<AppProps<P>, 'pageProps'> & {pageProps: P}
) => React.ReactNode

const App = ({Component, pageProps, ...rest}: AppProps) => {
  globalStyle()
  useFontsLoaded()
  useKeydown()

  const getLayout: GetLayoutFn =
    (Component as any).getLayout || (({Component, pageProps}) => <Component {...pageProps} />)

  return (
    <>
      <ThemeProvider value={{light: 'light-theme', dark: darkTheme.className}}>
        {getLayout({Component, pageProps, ...rest})}
      </ThemeProvider>
    </>
  )
}

const globalStyle = globalCss({
  html: {
    margin: 0,
    padding: 0,
    backgroundColor: '#050507',

    minHeight: '-webkit-fill-available'
  },
  body: {
    margin: 0,
    padding: 0,
    minHeight: '-webkit-fill-available',
    WebkitTextSizeAdjust: '100%',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    backgroundColor: '#050507'
  }
})

export default App

import '@/css/global.scss'

import type {NextComponentType, NextPageContext} from 'next'
import type {AppProps} from 'next/app'
import {ThemeProvider} from 'next-themes'
import * as React from 'react'
import {darkTheme} from 'theme'

import {useFontsLoaded} from '@/hooks/use-fonts-loaded'
import {useKeydown} from '@/hooks/use-keydown'

export type Page<P = Record<string, unknown>> = NextComponentType<NextPageContext, Record<string, unknown>, P> & {
  getLayout?: GetLayoutFn<P>
}

export type GetLayoutFn<P = Record<string, unknown>> = (
  props: Omit<AppProps<P>, 'pageProps'> & {pageProps: P}
) => React.ReactNode

const App = ({Component, pageProps, ...rest}: AppProps) => {
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

export default App

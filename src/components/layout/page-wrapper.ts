import {styled, theme} from 'theme.config'

const wrapperBase = styled('div', {
  backgroundColor: theme.colors.matte,
  overflow: 'scroll',
  display: 'flex',
  flexDirection: 'column',
  minWidth: '100vw',
  minHeight: '100vh',
  padding: 0,
  margin: 0
})

export const PageWrapper = wrapperBase

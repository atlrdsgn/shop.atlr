import React from 'react'

type Props = {
  children?: React.ReactNode

  // TODO after implementing header, footer
  // headerProps?: HeaderProps
  // footerProps?: FooterProps
}

export const PageLayout = ({children}: Props) => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

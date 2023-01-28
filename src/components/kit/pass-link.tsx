import Link from 'next/link'
import * as React from 'react'
import {styled, theme} from 'theme.config'

type PassLinkProps = {href: string} & React.AnchorHTMLAttributes<HTMLAnchorElement>

const StyledHref = styled(Link, {
  all: 'unset',
  '&:hover': {
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
    color: theme.colors.slate9 + ' !important'
  }
})

const LinkComp = StyledHref

// eslint-disable-next-line import/no-named-as-default-member
export const PassLink = React.forwardRef<HTMLAnchorElement, PassLinkProps>(({href, children, ...props}, ref) => {
  const isMailto = React.useMemo(() => href.startsWith('mailto:'), [href])
  const isExternal = React.useMemo(() => /https:/.test(href), [href])

  if (isExternal || isMailto) {
    return (
      <LinkComp rel='noreferrer nofollow noopenner' ref={ref} target='_blank' {...props} href={href}>
        {children}
      </LinkComp>
    )
  }

  return (
    <LinkComp href={href} ref={ref}>
      <span {...props}>{children}</span>
    </LinkComp>
  )
})

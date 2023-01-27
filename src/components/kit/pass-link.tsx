import Link from 'next/link'
import React, {useMemo} from 'react'
import {styled, theme} from 'theme'

type PassLinkProps = {href: string} & React.AnchorHTMLAttributes<HTMLAnchorElement>

const StyledHref = styled(Link, {
  color: theme.colors.lime6,
  transition: 'color 0.3s ease',
  '&:hover': {
    color: theme.colors.mauve2,
  },
})

const LinkComp = StyledHref

// eslint-disable-next-line import/no-named-as-default-member
export const PassLink = React.forwardRef<HTMLAnchorElement, PassLinkProps>(({href, children, ...props}, ref) => {
  const isMailto = useMemo(() => href.startsWith('mailto:'), [href])
  const isExternal = useMemo(() => /https:/.test(href), [href])

  if (isExternal || isMailto) {
    return (
      <LinkComp rel="noreferrer nofollow noopenner" ref={ref} target="_blank" {...props} href={href}>
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

import type React from 'react'

import type {IcxnProps} from './types'

export type IcxnVariant = 'test' | 'vhs-close' | 'menu'

export const Icxn = ({color = 'currentColor', variant, ...props}: IcxnProps) => {
  if (variant === 'test') {
    return (
      <>
        <svg {...props} xmlns='http://www.w3.org/2000/svg' fill='none' width='24' height='24' viewBox='0 0 24 24'>
          <path
            fill={color}
            fillRule='evenodd'
            clipRule='evenodd'
            d='M20.5301 4.53032C20.823 4.23743 20.823 3.76256 20.5301 3.46966C20.2372 3.17677 19.7623 3.17677 19.4694 3.46966L11.9998 10.9393L4.53009 3.46967C4.23719 3.17677 3.76232 3.17677 3.46943 3.46967C3.17653 3.76256 3.17653 4.23743 3.46943 4.53033L10.9391 12L3.46943 19.4697C3.17653 19.7626 3.17653 20.2374 3.46943 20.5303C3.76232 20.8232 4.23719 20.8232 4.53009 20.5303L11.9998 13.0607L19.4694 20.5303C19.7623 20.8232 20.2372 20.8232 20.5301 20.5303C20.823 20.2374 20.823 19.7626 20.5301 19.4697L13.0604 12L20.5301 4.53032Z'
          />
        </svg>
      </>
    )
  }

  /**
   *
   * menu.
   */
  if (variant === 'menu') {
    return (
      <>
        <svg {...props} xmlns='http://www.w3.org/2000/svg' fill='none' width='24' height='24' viewBox='0 0 24 24'>
          <g transform='matrix(1,0,0,1,0,0.580172)'>
            <rect fill={color} fillRule='evenodd' clipRule='evenodd' x='3' y='7.444' width='18' height='2.621' />
          </g>
          <g transform='matrix(1,0,0,1,0,5.91191)'>
            <rect fill={color} fillRule='evenodd' clipRule='evenodd' x='3' y='7.444' width='18' height='2.621' />
          </g>
        </svg>
      </>
    )
  }

  if (variant === 'vhs-close') {
    return (
      <>
        <svg
          {...props}
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          width='24'
          height='24'
          viewBox='0 0 24 24'>
          <rect x='5.5' y='5.5' width='2' height='2' />
          <rect x='6.5' y='6.5' width='2' height='2' />
          <rect x='7.5' y='7.5' width='2' height='2' />
          <rect x='8.5' y='8.5' width='2' height='2' />
          <rect x='13.5' y='13.5' width='2' height='2' />
          <rect x='14.5' y='14.5' width='2' height='2' />
          <rect x='15.5' y='15.5' width='2' height='2' />
          <rect x='16.5' y='16.5' width='2' height='2' />
          <rect x='9.5' y='9.5' width='2' height='2' />
          <rect x='12.5' y='12.5' width='2' height='2' />
          <rect x='18.5' y='5.5' width='2' height='2' transform='rotate(90 18.5 5.5)' />
          <rect x='17.5' y='6.5' width='2' height='2' transform='rotate(90 17.5 6.5)' />
          <rect x='16.5' y='7.5' width='2' height='2' transform='rotate(90 16.5 7.5)' />
          <rect x='15.5' y='8.5' width='2' height='2' transform='rotate(90 15.5 8.5)' />
          <rect x='10.5' y='13.5' width='2' height='2' transform='rotate(90 10.5 13.5)' />
          <rect x='9.5' y='14.5' width='2' height='2' transform='rotate(90 9.5 14.5)' />
          <rect x='8.5' y='15.5' width='2' height='2' transform='rotate(90 8.5 15.5)' />
          <rect x='7.5' y='16.5' width='2' height='2' transform='rotate(90 7.5 16.5)' />
          <rect x='14.5' y='9.5' width='2' height='2' transform='rotate(90 14.5 9.5)' />
          <rect x='12.5' y='11.5' width='2' height='2' transform='rotate(90 12.5 11.5)' />
          <rect x='13.5' y='10.5' width='2' height='2' transform='rotate(90 13.5 10.5)' />
          <rect x='11.5' y='12.5' width='2' height='2' transform='rotate(90 11.5 12.5)' />
        </svg>
      </>
    )
  }

  return null
}

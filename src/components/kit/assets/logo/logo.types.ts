import type * as React from 'react'

interface svgProps extends React.SVGAttributes<SVGElement> {
  /**
   *
   * we will never need to pass any child component
   * to svg files..
   *
   * therefore, we leave children as <never>
   */
  children?: never
  /**
   *
   * @color
   *
   * use this prop to change the fill="color" of the svg.
   * this will take any valid css color value.
   *
   * *no tokens* as of yet.
   *
   * default: 'currentColor'
   */
  color?: string
  /**
   *
   * @width
   *
   * width prop to control the overall size of the svg.
   */
  width?: string
}

export type {svgProps}

/* copy this snippet for svg html tags..

<!-- svg -->

{...props}        
viewBox='X X X X'
fill='none'
width='...'
height='...'
xmlns='http://www.w3.org/2000/svg'


<!-- path -->

fill={color}
fillRule="evenodd"
clipRule="evenodd"

*/

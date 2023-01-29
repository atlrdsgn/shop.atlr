import type {svgProps} from './logo.types'

export const AtelierSmallLogo = ({color = 'currentColor', width = 'auto', ...props}: svgProps) => {
  return (
    <>
      <svg {...props} viewBox='0 0 160 24' fill='none' width={width} height='24' xmlns='http://www.w3.org/2000/svg'>
        <rect width='160' height='24' fill='none' />
        <g>
          <path
            fill={color}
            fillRule='evenodd'
            clipRule='evenodd'
            d='m17.53,18.67h-8.35l-1.57,4.66H2.66L10.75.67h5.35l8.03,22.67h-5.14l-1.46-4.66Zm-1.32-3.91l-2.83-8.92-2.92,8.92h5.75Z'
          />
          <path
            fill={color}
            fillRule='evenodd'
            clipRule='evenodd'
            d='m41.15.67v4.01h-6.78v18.66h-4.77V4.68h-6.81V.67h18.36Z'
          />
          <path
            fill={color}
            fillRule='evenodd'
            clipRule='evenodd'
            d='m59.7,13.43h-11.01v5.83h12.55v4.08h-17.18V.67h16.63v4.01h-12v4.81h11.01v3.94Z'
          />
          <path fill={color} fillRule='evenodd' clipRule='evenodd' d='m64.93.67h4.74v18.59h11.23v4.08h-15.96V.67Z' />
          <path fill={color} fillRule='evenodd' clipRule='evenodd' d='m83.8.67h4.71v22.67h-4.71V.67Z' />
          <path
            fill={color}
            fillRule='evenodd'
            clipRule='evenodd'
            d='m108.7,13.43h-11.01v5.83h12.55v4.08h-17.18V.67h16.63v4.01h-12v4.81h11.01v3.94Z'
          />
          <path
            fill={color}
            fillRule='evenodd'
            clipRule='evenodd'
            d='m123.55,14.45h-4.89v8.89h-4.63V.67h11.12c1.59.03,2.81.23,3.67.58.86.36,1.58.89,2.18,1.58.49.57.88,1.21,1.17,1.91.29.7.43,1.49.43,2.38,0,1.08-.27,2.14-.82,3.18-.54,1.04-1.44,1.78-2.69,2.21,1.05.42,1.79,1.02,2.22,1.79.44.77.65,1.96.65,3.54v1.52c0,1.04.04,1.74.12,2.11.12.58.41,1.02.86,1.29v.57h-5.21c-.14-.5-.25-.91-.31-1.21-.12-.64-.19-1.29-.2-1.95l-.03-2.11c-.02-1.45-.28-2.41-.79-2.89-.51-.48-1.46-.72-2.85-.72Zm2.88-4.12c.94-.43,1.41-1.28,1.41-2.55,0-1.37-.46-2.3-1.37-2.77-.51-.27-1.28-.4-2.31-.4h-5.51v6.09h5.37c1.07,0,1.87-.12,2.4-.37Z'
          />
          <path
            fill={color}
            fillRule='evenodd'
            clipRule='evenodd'
            d='m154.02,3.99c2.21,2.21,3.32,4.89,3.32,8.01s-1.13,5.93-3.4,8.14c-2.2,2.13-4.85,3.2-7.94,3.2s-5.87-1.09-8.06-3.28c-2.18-2.18-3.28-4.87-3.28-8.06s1.18-6.06,3.54-8.26c2.21-2.05,4.81-3.08,7.8-3.08s5.8,1.11,8.01,3.32Zm-8.01-1.38c-2.6,0-4.82.94-6.66,2.83-1.8,1.85-2.71,4.03-2.71,6.57s.92,4.85,2.75,6.69c1.82,1.84,4.03,2.75,6.61,2.75s4.77-.92,6.6-2.77c1.82-1.86,2.74-4.08,2.74-6.67s-.91-4.71-2.72-6.57c-1.84-1.89-4.04-2.83-6.61-2.83Zm-1.68,11.26v4.44h-3.29V5.74c.78,0,1.95,0,3.5,0,1.55,0,2.42.01,2.59.02.99.07,1.82.29,2.48.65,1.12.62,1.68,1.61,1.68,3,0,1.06-.29,1.82-.88,2.29-.59.47-1.32.75-2.18.85.79.16,1.38.41,1.78.72.74.59,1.11,1.53,1.11,2.81v1.12c0,.12,0,.25.02.37.02.12.04.25.08.37l.11.35h-3.14c-.1-.4-.17-.98-.2-1.74-.03-.76-.1-1.27-.2-1.54-.16-.44-.47-.75-.92-.92-.25-.1-.62-.17-1.12-.2l-.72-.05h-.69Zm1.28-2.26c.77,0,1.37-.15,1.8-.46s.65-.8.65-1.49-.34-1.16-1.02-1.43c-.45-.17-1.09-.26-1.91-.26h-.8v3.64h1.28Z'
          />
        </g>
      </svg>
    </>
  )
}
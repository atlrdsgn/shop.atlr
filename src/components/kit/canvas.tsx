import {styled} from '@stitches/react'

const canvasStyles = styled('div', {
  zIndex: 6,
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  position: 'absolute',
  top: '48%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  height: 'auto',
  margin: 'auto',
  padding: '0',
})

const fixedCanvasStyles = styled('div', {
  zIndex: 1,
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  position: 'fixed',
  padding: 0,
  margin: 0,
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  minWidth: '100vw',
})

export const Canvas = canvasStyles
export const FixedCanvas = fixedCanvasStyles

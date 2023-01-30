import {theme} from 'theme.config'

import {Canvas, Container} from '@/components/kit'
import {AtelierLogo} from '@/components/vector'

import {ThemeToggle} from '../../primitives/theme.toggle'

export const Welcome = () => {
  return (
    <Canvas>
      <Container
        size='1'
        css={{
          display: 'flex',
          margin: 'auto',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',

          color: theme.colors.psych5
        }}>
        <AtelierLogo width={'200'} />
      </Container>

      <Container>
        <ThemeToggle />
      </Container>
    </Canvas>
  )
}

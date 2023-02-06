import {theme} from 'theme.config'

import {Canvas, Container} from '@/components/kit'
import {AtelierLogo} from '@/components/vector'

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

          color: theme.colors.atlr8
        }}>
        <AtelierLogo width={'200'} />
      </Container>
    </Canvas>
  )
}

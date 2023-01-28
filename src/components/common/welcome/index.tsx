import {Container, Canvas} from '@/components/kit'
import {AtelierLogo} from '@/components/vector'
import {theme} from 'theme.config'

export const Welcome = () => {
  return (
    <Canvas>
      <Container
        size="1"
        css={{
          display: 'flex',
          margin: 'auto',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',

          color: theme.colors.atlr1,
        }}>
        <AtelierLogo width={'200'} />
      </Container>
    </Canvas>
  )
}

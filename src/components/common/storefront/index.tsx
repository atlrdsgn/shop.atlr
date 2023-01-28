import {Container} from '@/components/kit'
import {AtlrLogo} from '@/components/vector'

export const StoreFront = () => {
  return (
    <Container
      size='1'
      css={{
        display: 'flex',
        margin: 'auto',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <AtlrLogo />
    </Container>
  )
}

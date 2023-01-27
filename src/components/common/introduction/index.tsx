import Link from 'next/link'

import {Box, Canvas, Container} from '@/components/kit'
import {Typesxript} from '@/components/vector/logos/TYPESXRIPT'

export const Introduction = () => {
  return (
    <Box css={{width: '100%', height: '100vh', backgroundColor: '$mauveA8'}}>
      <Container
        centered
        css={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
          zIndex: 999,
          paddingBottom: 30,
        }}>
        <Link href={'/start'}>
          <h4>Get started</h4>
        </Link>
      </Container>

      <Canvas css={{paddingTop: 20, paddingBottom: 20}}>
        <Container
          size={'0'}
          css={{
            borderRadius: 16,
            display: 'flex',
            margin: 'auto',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Typesxript />
        </Container>
        <Container
          size={'0'}
          css={{
            borderRadius: 16,
            display: 'flex',
            margin: 'auto',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <h4>by Atlr® Design</h4>
        </Container>
      </Canvas>
    </Box>
  )
}

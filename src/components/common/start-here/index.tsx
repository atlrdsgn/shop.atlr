import {styled, theme} from 'theme'

import {Box, Canvas, Container, PassLink, Space, Text} from '@/components/kit'

const repo = 'https://github.com/chvndler/typesxript'

export const StarterCode = () => {
  return (
    <Box css={{width: '100%', height: '100vh', backgroundColor: '$mauveA8'}}>
      <Canvas css={{paddingTop: 20, paddingBottom: 20}}>
        <Container size={'0'} css={{display: 'block'}}>
          <Text align={'center'} size={'4'} color={'highContrast'} css={{fontWeight: 'bold', paddingBottom: 6}}>
            Thank you for using this code.
          </Text>
          <Text align={'center'} size={'2'} color={'highContrast'} css={{}}>
            be sure to star this <PassLink href={repo}>repository</PassLink>.
          </Text>
        </Container>

        <Space size={'md'} />

        <Container size={'2'}>
          <CodeInstructions css={{}}>
            <code>(1)</code> _ To get started, edit <code>src/App.tsx</code> and save to reload.
          </CodeInstructions>
        </Container>

        <Space size={'md'} />

        <Container size={'1'}>
          <CodeInstructions css={{}}>
            Be sure to check out .env.example if you receive an error while starting up.
          </CodeInstructions>
        </Container>
      </Canvas>
    </Box>
  )
}

const CodeInstructions = styled('span', {
  fontFamily: theme.fonts.mono,
  fontSize: 12,
  lineHeight: 1.5,
  fontWeight: 500,
  color: theme.colors.white,
  backgroundColor: theme.colors.mauveA10,
  borderRadius: 10,
  padding: '8px 12px',
})

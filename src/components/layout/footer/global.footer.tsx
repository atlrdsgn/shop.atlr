import {styled, theme} from 'theme.config'

import {Container, Section, Space} from '@/components/kit'

export const GlobalFooter = () => (
  <Section size='3' css={{padding: 18}}>
    <Space size={'lg'} />

    <Container size='2' css={{paddingTop: 20, paddingBottom: 50}}>
      <TextElement>shop.atlrdsgn.com</TextElement>
    </Container>
  </Section>
)

const TextElement = styled('span', {
  color: theme.colors.chxn5,
  fontFamily: theme.fonts.lateral,
  fontSize: theme.fontSizes.base,
  fontWeight: theme.fontWeights.normal,
  lineHeight: '24px',
  letterSpacing: 'normal',
  textTransform: 'uppercase'
})

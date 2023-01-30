import content from 'atelier.config.json'
import {styled, theme} from 'theme.config'

import {Container, Section, Space} from '@/components/kit'

export const GlobalFooter: React.FC = () => {
  const {footer} = content

  return (
    <Section size='3' css={{padding: 18}}>
      <Space size={'sm'} />
      <Container size='2' css={{paddingTop: 20, paddingBottom: 40}}>
        <TextElement>{footer.global}</TextElement>
      </Container>
      <Space size={'sm'} />
    </Section>
  )
}

const TextElement = styled('span', {
  color: theme.colors.slate8,
  fontFamily: theme.fonts.lateralMedExt,
  fontSize: theme.fontSizes.sm,
  fontWeight: theme.fontWeights.normal,
  lineHeight: 'normal',
  letterSpacing: '-0.02rem',
  textTransform: 'lowercase'
})

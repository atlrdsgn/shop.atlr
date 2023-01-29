import Image from 'next/image'
import {styled, theme} from 'theme.config'

import {Container, Section, Space} from '@/components/kit'
// eslint-disable-next-line import/no-unresolved
import heroImage from '@/public/img/ae.jpeg'

export const StoreFront = () => {
  return (
    <Section size='3' css={{padding: 18}}>
      <Space size={'lg'} />

      <Container size='2' css={{paddingTop: 20, paddingBottom: 50}}>
        <TextElement>shop.atlrdsgn.com</TextElement>
      </Container>

      <HeroImageContainer>
        <Image
          src={heroImage}
          alt={'Vector Pkg one'}
          placeholder={'blur'}
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            borderRadius: 48
          }}
        />
      </HeroImageContainer>
    </Section>
  )
}

const HeroImageContainer = styled('div', {
  boxSizing: 'border-box',
  position: 'relative',
  borderRadius: theme.radii['5xl'],
  height: '60vh',
  backgroundColor: theme.colors.clear,
  padding: 0
})

const TextElement = styled('span', {
  color: theme.colors.chxn5,
  fontFamily: theme.fonts.lateral,
  fontSize: theme.fontSizes.base,
  fontWeight: theme.fontWeights.normal,
  lineHeight: '24px',
  letterSpacing: 'normal',
  textTransform: 'uppercase'
})

import Image from 'next/image'
import {styled, theme} from 'theme.config'

import {Grid, Section, Space} from '@/components/kit'
import heroImage from '@/public/img/ae.jpeg'

export const StoreFront = () => {
  return (
    <>
      <Section size='0' css={{paddingLeft: 18, paddingRight: 18}}>
        <Space size={'lg'} />

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

      <Section size='0' css={{paddingLeft: 18, paddingRight: 18}}>
        <Grid columns={2} align='center' justify='center' gapY={'5'} gapX={'5'} gap={'5'}>
          <GridItem />
          <GridItem />
        </Grid>
      </Section>
    </>
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

const GridItem = styled('div', {
  boxSizing: 'border-box',
  position: 'relative',
  borderRadius: theme.radii['5xl'],
  height: 300,
  width: 'auto',

  backgroundColor: theme.colors.atlr6
})

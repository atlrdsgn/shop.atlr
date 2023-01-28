import {styled, theme} from 'theme.config'

import {Section, Space, Text} from '@/components/kit'

export const About = () => {
  return (
    <Section size='3' css={{padding: 18}}>
      <Text
        uppercase
        css={{
          fontSize: 15,
          fontFamily: theme.fonts.tStar,
          fontWeight: theme.fontWeights.bold,
          lineHeight: '1',
          textAlign: 'left',
          color: theme.colors.psych4
          // maxWidth: '80%',
        }}>
        ABOUT
      </Text>

      <Space size={'sm'} />

      <LargeBoldParagraph>
        Atelier® Design is an ever— expanding ecosystem of essential design components.
      </LargeBoldParagraph>

      <Space size={'md'} />

      <LargeNormalParagraph>
        However, at our core we are simply designers, developers, and a team that enjoys making cool.
      </LargeNormalParagraph>

      <Space size={'md'} />

      <SmParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Mauris nunc congue nisi vitae suscipit. Arcu odio ut sem nulla pharetra. Leo duis ut diam quam.
        Consectetur purus ut faucibus pulvinar elementum integer enim.
      </SmParagraph>
    </Section>
  )
}

const lgBoldTextStyles = {
  fontSize: theme.fontSizes['4xl'],
  fontFamily: theme.fonts.atHauss,
  fontWeight: theme.fontWeights.bold,

  textTransform: 'uppercase',

  lineHeight: '1',
  textAlign: 'left',
  maxWidth: '60%',

  '@md': {
    width: '100%',
    maxWidth: '100%',
    fontSize: 32
  }
}

const lgNormalTextStyles = {
  fontSize: theme.fontSizes['4xl'],
  fontFamily: theme.fonts.atHauss,
  fontWeight: theme.fontWeights.normal,

  color: theme.colors.slate9,

  textTransform: 'uppercase',

  lineHeight: '1',
  textAlign: 'left',
  maxWidth: '80%',

  '@md': {
    width: '100%',
    maxWidth: '100%',
    fontSize: 32
  }
}

const smTextStyles = {
  fontSize: theme.fontSizes.base,

  fontFamily: theme.fonts.montreal,
  fontWeight: theme.fontWeights.normal,

  color: theme.colors.slate9,

  textTransform: 'uppercase',

  lineHeight: '1.5',
  textAlign: 'left',
  maxWidth: '80%',

  '@md': {
    width: '100%',
    maxWidth: '100%'
  }
}

const LargeBoldParagraph = styled('h2', lgBoldTextStyles)
const LargeNormalParagraph = styled('h2', lgNormalTextStyles)

const SmParagraph = styled('p', smTextStyles)

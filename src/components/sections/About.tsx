import content from 'atelier.config.json'
import {styled, theme} from 'theme.config'

import {Section, Space, Text} from '@/components/kit'

export const About: React.FC = () => {
  const {about} = content

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
      <LargeBoldParagraph>{about.brand}</LargeBoldParagraph>
      <Space size={'lg'} />
      <Space size={'md'} />
      <LargeNormalParagraph>{about.core}</LargeNormalParagraph>
      <Space size={'md'} />
      <SmParagraph>{about.about}</SmParagraph>
      <Space size={'lg'} />
      <Space size={'lg'} />
      <Space size={'lg'} />
      <Slogan>{about.slogan}</Slogan>
    </Section>
  )
}

const lgBoldTextStyles = {
  color: theme.colors.white,
  fontSize: theme.fontSizes['5xl'],
  fontFamily: theme.fonts.atHauss,
  fontWeight: theme.fontWeights.bold,

  textTransform: 'uppercase',

  lineHeight: '1.1',
  textAlign: 'left',
  maxWidth: '75%',

  '@initial': {
    width: '50%',
    maxWidth: '50%'
  },
  '@lg': {
    width: '90%',
    maxWidth: '90%'
  },
  '@md': {
    width: '100%',
    maxWidth: '100%',
    fontSize: 32
  }
}

const lgNormalTextStyles = {
  fontSize: theme.fontSizes['3xl'],
  fontFamily: theme.fonts.atHauss,
  fontWeight: theme.fontWeights.normal,

  color: theme.colors.slate8,

  textTransform: 'uppercase',

  lineHeight: '1.1',
  textAlign: 'left',
  maxWidth: '75%',

  '@initial': {
    width: '50%',
    maxWidth: '50%'
  },
  '@lg': {
    width: '90%',
    maxWidth: '90%'
  },
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

  color: theme.colors.slate8,

  textTransform: 'uppercase',

  lineHeight: '1.5',
  textAlign: 'left',
  maxWidth: '80%',

  '@md': {
    width: '100%',
    maxWidth: '100%'
  }
}

const sloganTextStyles = {
  fontSize: theme.fontSizes.sm,

  fontFamily: theme.fonts.atHauss,
  fontWeight: theme.fontWeights.semibold,

  color: theme.colors.slate4,

  textTransform: 'uppercase',

  lineHeight: '1.6',
  textAlign: 'left'
}

const LargeBoldParagraph = styled('h2', lgBoldTextStyles)
const LargeNormalParagraph = styled('h2', lgNormalTextStyles)

const SmParagraph = styled('p', smTextStyles)
const Slogan = styled('p', sloganTextStyles)

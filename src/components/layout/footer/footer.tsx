import content from 'atelier.config.json'
import {styled, theme} from 'theme.config'

import {Span} from '@/components/kit'
import {AtelierFooterLogo} from '@/components/kit/assets'

const logoColor = theme.colors.atlr5

export const Footer: React.FC = () => {
  const {footer} = content

  return (
    <FooterContainer aria-labelledby='footer-label' as='footer'>
      <TextElement id='footer-label'>{footer.text}</TextElement>

      <Span css={{color: logoColor, marginTop: 20}}>
        <AtelierFooterLogo width={'200'} />
      </Span>
    </FooterContainer>
  )
}

const TextElement = styled('span', {
  color: theme.colors.white,
  fontFamily: theme.fonts.lateralMedExt,
  fontWeight: theme.fontWeights.normal,
  fontSize: theme.fontSizes.sm,
  lineHeight: '16px',
  textAlign: 'center',
  letterSpacing: '-0.0125em'
})

const FooterContainer = styled('footer', {
  width: '100%',

  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flexShrink: 'O',
  paddingBottom: 60,
  paddingTop: 120,
  margin: 'auto'
})

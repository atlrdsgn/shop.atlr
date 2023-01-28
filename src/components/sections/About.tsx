import {Section, Space, Text} from '@/components/kit'

export const About = () => {
  return (
    <Section size='3' css={{padding: 18}}>
      <Text
        uppercase
        css={{
          fontSize: 15,
          fontFamily: '"T-Star TW PRO", sans-serif',
          fontWeight: 'BOLD',
          lineHeight: '1',
          textAlign: 'left',
          color: '#FAFF00'
          // maxWidth: '80%',
        }}>
        ABOUT
      </Text>

      <Space size={'sm'} />

      <Text
        uppercase
        css={{
          fontSize: 52,
          fontFamily: '"At Hauss Aero", sans-serif',
          fontWeight: 500,
          lineHeight: '1',
          textAlign: 'left',
          maxWidth: '80%',

          '@md': {
            width: '100%',
            maxWidth: '100%',
            fontSize: 32
          }
        }}>
        Atelier® Design is an ever— expanding ecosystem of essential design components.
      </Text>

      <Space size={'sm'} />

      <Text
        uppercase
        css={{
          fontSize: 52,
          fontFamily: '"At Hauss Aero", sans-serif',
          fontWeight: 500,
          lineHeight: '1',
          textAlign: 'left',
          maxWidth: '80%',

          '@md': {
            width: '100%',
            maxWidth: '100%',
            fontSize: 32
          }
        }}>
        However, at our core we are simply designers, developers, and a team that enjoys making cool.
      </Text>

      <Space size={'sm'} />

      <Text
        uppercase
        css={{
          fontSize: 18,
          fontFamily: '"At Hauss Aero", sans-serif',
          fontWeight: 500,
          lineHeight: '1',
          textAlign: 'left',
          maxWidth: '80%',

          '@md': {
            width: '100%',
            maxWidth: '100%'
          }
        }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Mauris nunc congue nisi vitae suscipit. Arcu odio ut sem nulla pharetra. Leo duis ut diam quam.
        Consectetur purus ut faucibus pulvinar elementum integer enim.
      </Text>
    </Section>
  )
}

import {Meta} from '@/components/common/meta'
import {BodyContainer} from '@/components/layout/body-container'
import {PageLayout} from '@/components/layout/page'
import {About} from '@/components/sections/About'

const AboutPage = () => {
  return (
    <PageLayout>
      <Meta />
      <BodyContainer css={{}}>
        <About />
      </BodyContainer>
    </PageLayout>
  )
}

export default AboutPage

import {Meta} from '@/components/common/meta'
import {BodyContainer} from '@/components/layout/body-container'
import {PageLayout} from '@/components/layout/page'
import {About} from '@/components/sections/About'

const AboutPage = () => (
  <PageLayout>
    <Meta />
    <BodyContainer>
      <About />
    </BodyContainer>
  </PageLayout>
)

export default AboutPage

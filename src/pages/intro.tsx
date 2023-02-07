import {Introduction} from '@/components/common/introduction'
import {Meta} from '@/components/common/meta'
import {PageLayout} from '@/components/layout/page'

const IntroPage = () => {
  return (
    <PageLayout variant={'Page'}>
      <Meta />
      <Introduction />
    </PageLayout>
  )
}

export default IntroPage

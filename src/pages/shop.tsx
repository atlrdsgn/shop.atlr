import {Meta} from '@/components/common/meta'
import {BodyContainer} from '@/components/layout/body-container'
import {PageLayout} from '@/components/layout/page'
import {StoreFront} from '@/components/sections/StoreFront'

const ShopPage = () => {
  return (
    <PageLayout variant={'Page'}>
      <Meta />

      <BodyContainer>
        <StoreFront />
      </BodyContainer>
    </PageLayout>
  )
}

export default ShopPage

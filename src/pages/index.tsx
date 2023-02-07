import * as React from 'react'

import {Meta} from '@/components/common/meta'
import {Welcome} from '@/components/common/welcome'
import {PageLayout} from '@/components/layout/page'

const IndexPage = () => (
  <PageLayout variant={'Cover'}>
    <Meta />
    <Welcome />
  </PageLayout>
)

export default IndexPage

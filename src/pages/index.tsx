import * as React from 'react'
import {Meta} from '@/components/common/meta'
import {Welcome} from '@/components/common/welcome'
import {PageLayout} from '@/components/layout/page'

const IndexPage = () => {
  return (
    <PageLayout>
      <Meta />
      <Welcome />
    </PageLayout>
  )
}

export default IndexPage

import * as React from 'react'

import {Introduction} from '@/components/common/introduction'
import {Meta} from '@/components/common/meta'
import {PageLayout} from '@/components/layout/page'

export default function Page() {
  return (
    <PageLayout variant={'Page'}>
      <Meta />
      <Introduction />
    </PageLayout>
  )
}

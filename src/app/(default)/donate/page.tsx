import SectionLayout from '@/app/components/component-layout/SectionLayout'
import PageTopBanner from '@/app/components/status-banner/PageTopBanner'
import React from 'react'

function page() {
  return (
    <div>
        <PageTopBanner title="Support Young Athletes" description="Help talented youth access elite coaching and competitive programs. Every contribution ignites their potential." />
        <SectionLayout>
            <h1></h1>
        </SectionLayout>
    </div>
  )
}

export default page
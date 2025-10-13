import SectionLayout from '@/app/components/component-layout/SectionLayout'
import IgniteApply from '@/app/components/page/IGNITE-Component/IgniteApply'
import PageTopBanner from '@/app/components/status-banner/PageTopBanner'
import React from 'react'

function page() {
    return (
        <div className='bg-[#E6ECF5]'>
            <PageTopBanner
                title='IGNITE My Child'
                description='Nominate your child to access elite coaching and competitive youth sports programs — at no cost to you.'
            />
            <SectionLayout className='md:my-28 my-16 p-3 rounded-2xl'>
                <IgniteApply />
            </SectionLayout>
        </div>
    )
}

export default page
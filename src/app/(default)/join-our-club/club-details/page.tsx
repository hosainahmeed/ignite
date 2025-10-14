import SectionLayout from '@/app/components/component-layout/SectionLayout'
import ClubJoiningApply from '@/app/components/page/club-joining-form/ClubJoiningApply'
import PageTopBanner from '@/app/components/status-banner/PageTopBanner'
import React from 'react'

function page() {
    return (
        <div>
            <PageTopBanner
                title="Join our Be The Spark Club"
                description="Complete the form below to register as an academy, club, or elite coach. Your membership helps connect talented youth with coaching opportunities while supporting IGNITE’s mission."
            />
            <SectionLayout className='md:my-28 my-16 p-3 rounded-2xl'>
                <ClubJoiningApply />
            </SectionLayout>
        </div>
    )
}

export default page
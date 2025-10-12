import React from 'react'
import SectionHeaderText from '../../status-banner/SectionHeaderText'
import { ICONS } from '@/app/constant/index.image'


function BeTheSpark() {
    return (
        <div className='container bg-[#F5F7FA] mx-auto py-12 min-h-screen flex items-center justify-center flex-col gap-4'>
            <SectionHeaderText
                title="Be The Spark"
                description={`Here's our story - a short film showing how IGNITE is working to remove the financial barriers that are keeping so many talented American youth athletes from achieving their athletic goals`}
                icon={ICONS.fire} />
            <div className='max-h-[600px] shadow-lg max-w-screen-md mx-auto rounded-2xl overflow-hidden'>
                <video src="/assets/video/kid_playing.mp4" controls autoPlay muted loop className='w-full h-full object-cover'></video>
            </div>
        </div>
    )
}

export default BeTheSpark
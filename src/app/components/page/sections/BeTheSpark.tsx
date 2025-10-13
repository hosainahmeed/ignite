import React from 'react'
import SectionHeaderText from '../../status-banner/SectionHeaderText'
import { ICONS } from '@/app/constant/index.image'


function BeTheSpark() {
    return (
        <div className='container mx-auto px-4 bg-[#F5F7FA] py-12 flex items-center justify-center flex-col gap-4'>
            <SectionHeaderText
                title="Be The Spark"
                description={`Here's our story - a short film showing how IGNITE is working to remove the financial barriers that are keeping so many talented American youth athletes from achieving their athletic goals`}
                icon={ICONS.fire} />
            <div className='h-auto shadow-lg max-w-screen-lg aspect-video mx-auto rounded-2xl overflow-hidden'>
                <video src="/assets/video/kid_playing.mp4" controls autoPlay muted loop className='w-full h-full aspect-video object-cover'></video>
            </div>
        </div>
    )
}

export default BeTheSpark
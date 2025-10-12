import React from 'react'
import SectionHeaderText from '../../status-banner/SectionHeaderText'
import { ICONS } from '@/app/constant/index.image'
import Image from 'next/image'

function WhyDoWeNeed() {
    const data = [
        {
            number: "01",
            title: "Identify Talent",
            description: "We discover and recognize promising young athletes from all backgrounds, ensuring no talent goes unnoticed due to financial barriers.",
            icon: ICONS.fire
        },
        {
            number: "02",
            title: "Provide Opportunities",
            description: "IGNITE funds access to elite coaching, professional facilities, and competitive programs that were previously out of reach.",
            icon: ICONS.fire
        },
        {
            number: "03",
            title: "Empower Dreams",
            description: "We help athletes pursue their goals, whether it’s college scholarships, professional leagues, or national recognition.",
            icon: ICONS.fire
        },
    ]
    return (
        <div className='container mx-auto py-12'>
            <SectionHeaderText
                title="Why Do We Need IGNITE?"
                description="Because every child deserves the chance to play, no matter their financial background."
            />
            {data.map((item, index) => (
                <div className='grid grid-cols-3 gap-2'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-2'>
                            <h3 className='text-lg font-semibold'>{item.number}</h3>
                            <h3 className='text-lg font-semibold'>{item.title}</h3>
                        </div>
                    </div>
                    <div className='w-2 h-full p-1 bg-black'></div>
                    <Image src={item.icon} alt="" width={50} height={50} />
                    {index % 2 !== 0 ? <p className='text-sm text-gray-600'>{item.description}</p> : <div></div>}
                    {index % 2 === 0 ? <p className='text-sm text-gray-600'>{item.description}</p> : <div></div>}
                </div>
            ))}
        </div>
    )
}

export default WhyDoWeNeed
import { ICONS, IMAGE } from '@/app/constant/index.image';
import { Card } from 'antd'
import Image from 'next/image'
import React from 'react'
import SectionHeaderText from '../../status-banner/SectionHeaderText';

interface teamTypes {
    name: string;
    src: string;
    position: string;
}

function MeetOurTeam() {

    const TeamData: teamTypes[] = [
        {
            name: "Neil Marshall",
            src: IMAGE.ceo.src,
            position: "BOARD CHAIR & CEO",
        },
        {
            name: "Kyla Marshall",
            src: IMAGE.vice.src,
            position: "VICE CHAIR & Chief Program Officer",
        },
        {
            name: "Benja Lazcano",
            src: IMAGE.SECRETARY.src,
            position: "BOARD SECRETARY & Chief of Staff",
        },
        {
            name: "To Be Hired (Neil Marshall – Acting)",
            src: ICONS.imageFrame.src,
            position: "TREASURER & Director of Finance",
        },
        {
            name: "To Be Hired",
            src: ICONS.imageFrame.src,
            position: "BOARD COUNSEL & Director of Legal & Compliance",
        },
        {
            name: "To be Filled",
            src: ICONS.imageFrame.src,
            position: "BOARD ADVISOR",
        },
    ]

    return (
        <div className='max-w-7xl px-2 mx-auto'>
            <SectionHeaderText
                title='Meet Our Team'
                description='Our dedicated team works tirelessly to ignite the potential of every young athlete. Get to know the people making it all possible.'
                className='my-12'
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {TeamData?.map((item, index) => (
                    <TeamMember key={index} {...item} />
                ))}
            </div>
        </div>
    )
}

export default MeetOurTeam


const TeamMember = ({ name, src, position }: teamTypes) => {
    return (
        <div className='border rounded-md p-2 border-gray-200 bg-white'>
            <div className='w-full h-auto rounded-md overflow-hidden aspect-square'>
                <Image
                    src={src}
                    alt={`${name} Image`}
                    width={400}
                    height={400}
                    className='w-full h-full object-center object-contain md:object-cover'
                />
            </div>
            <div className='p-2'>
                <h2 className='text-xl font-semibold mt-4 line-clamp-1'>{name}</h2>
                <p className='text-sm font-medium text-[#6B7280] line-clamp-1'>{position}</p>
            </div>
        </div>
    )
}
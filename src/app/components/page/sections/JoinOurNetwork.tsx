'use client'
import Image from 'next/image'
import React from 'react'
import SideDescriber from '../../status-banner/SideDescriber'
import { IMAGE } from '@/app/constant/index.image'

function JoinOurNetwork() {
    return (
        <section className='container mx-auto  px-4 flex flex-col-reverse md:flex-row items-center justify-center gap-12'>
            <div className='flex-1'>
                <SideDescriber
                    smallTitle='Join Our Network'
                    title='Be The Spark Club'
                    description={[
                        'Join our network of elite coaching & competitive programming providers',
                        'Connect with families in your region seeking to IGNITE their child.',
                        'Your membership helps fund scholarships and program fees for athletes.',
                    ]}
                    buttonText='Join Now'
                    route="/join-our-club"
                     />
            </div>
            <div className='flex-1'>
                <Image src={IMAGE.join} alt="Be IGNITED" width={500} height={500} />
            </div>

        </section>
    )
}

export default JoinOurNetwork
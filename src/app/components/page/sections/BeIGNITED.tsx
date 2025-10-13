'use client'
import React from 'react'
import SideDescriber from '../../status-banner/SideDescriber'
import Image from 'next/image'
import { IMAGE } from '@/app/constant/index.image'

function BeIGNITED() {
    return (
        <section className='container mx-auto  px-4 flex flex-col md:flex-row items-center justify-center gap-12'>
            <div className='flex-1'>
                <Image src={IMAGE.sockerKid} alt="Be IGNITED" width={500} height={500} />
            </div>
            <div className='flex-1'>
                <SideDescriber
                    smallTitle='Be IGNITED'
                    title='Nominate Your Child'
                    description={[
                        'Add your child to our database of talented athletes seeking scholarship assistance.',
                        'Receive access to elite coaching and competitive programs.',
                        'We connect you with an academy or club and help cover program fees',
                    ]}
                    buttonText='IGNITE My Child'
                    route="/ignite-my-child"
                />
            </div>
        </section>
    )
}

export default BeIGNITED
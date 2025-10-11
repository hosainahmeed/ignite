import React from 'react'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

function DiscoverBanner({ title, description, listbutton }: { title: string, description: string, listbutton: boolean }) {
    return (
        <div
            style={{
                backgroundImage: `url(${IMAGE.discoverBannerImage.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            className='container md:p-16 p-8 rounded-4xl 
            w-full overflow-hidden bg-[var(--blue)] mx-auto h-fit mb-28 flex items-center 
            md:flex-row flex-col justify-center md:justify-between'>
            <div className='flex flex-col max-w-xl gap-4'>
                <h1
                    className="font-medium text-white text-2xl lg:text-4xl xl:text-5xl tracking-normal">{title}</h1>
                <p className="text-white text-lg lg:text-xl xl:text-2xl">{description}</p>
            </div>
            <div className='flex md:items-center md:justify-center w-full mt-3 md:mt-0 flex-col md:flex-row gap-4 md:gap-6'>
                <Link
                    href={"/sign-in"}
                >
                    <Button className='bg-white text-[var(--blue)] hover:text-[var(--blue)] md:px-6 px-4 text-lg md:py-6 py-4 rounded cursor-pointer hover:!bg-white'>
                        Find Events Near You
                    </Button>
                </Link>
                {listbutton && <Link
                    href={"/sign-in"}
                >
                    <Button className='border border-white bg-transparent md:px-6 px-4 text-lg md:py-6 py-4 rounded cursor-pointer hover:!bg-white hover:!text-[#BF0A30]'>
                        <ArrowUpRight />  List Your Event
                    </Button>
                </Link>}
            </div>
        </div>
    )
}

export default DiscoverBanner
import { IMAGE } from '@/app/constant/index.image'
import Image from 'next/image'
import React from 'react'
import { TypographyDescription, TypographyHeading } from '../Typography/Typography';

function PageTopBanner({ title, description }: { title: string; description: string }) {
    return (
        <section className=" bg-gradient-to-r from-[#FEF2F2] to-[#E6ECF5]">
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">

                <div className="flex flex-col py-12 lg:py-0 justify-center text-center md:text-left space-y-4">
                    <TypographyHeading text={title} />
                    <TypographyDescription text={description} />
                </div>

                <div className="relative hidden lg:flex w-full h-56 sm:h-72 md:h-80 lg:h-96  justify-center md:justify-end">
                    <Image
                        src={IMAGE.happyBanner.src}
                        alt="Page Top Banner"
                        fill
                        placeholder="blur"
                        blurDataURL={IMAGE.happyBanner.blurDataURL}
                        className="object-contain object-bottom"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </div>
        </section>
    )
}

export default PageTopBanner

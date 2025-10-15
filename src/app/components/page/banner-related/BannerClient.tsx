'use client';
import React from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { BannerProps } from '@/app/types/banner';
import { containerVariants, imageVariants, textVariants } from '@/app/lib/animation.framer';
import { cn } from '@/app/lib/utils';
import { IMAGE } from '@/app/constant/index.image';

const BannerClient = ({ title, description, image }: BannerProps) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <section
            ref={sectionRef}
            className="w-full h-fit py-16  flex items-center justify-center bg-[#F5F7FA]"
            aria-labelledby="banner-title"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16"
                >
                
                    {/* Text Content */}
                    <motion.div
                        variants={containerVariants}
                        className="flex-1 text-center lg:text-left max-w-2xl"
                    >
                        <motion.h1
                            id="banner-title"
                            variants={textVariants}
                            style={{ fontFamily: 'sans-serif' }}
                            className="font-bold text-4xl text-[#003F91] sm:text-5xl lg:text-6xl xl:text-6xl leading-tight sm:leading-tight lg:leading-tight mb-6"
                        >
                            {title}
                        </motion.h1>

                        <motion.p
                            variants={textVariants}
                            className="font-normal text-lg leading-relaxed text-gray-600 mb-8 tracking-wide max-w-3xl"
                        >
                            {description}
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={containerVariants}
                            className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <Link href='/donate'>
                                <button className="bg-gradient-to-r text-white from-[#BF0A30] to-[#003F91] px-6 text-lg py-4 rounded cursor-pointer hover:!bg-white hover:!text-white">
                                    Donate Now
                                </button>
                            </Link>

                            <Link href="/ignite-my-child">
                                <button className={cn("px-6 py-4 text-lg rounded border border-regal-blue cursor-pointer", "bg-white text-[#BF0A30] border-[#BF0A30] cursor-pointer")}>
                                    Nominate an Athlete
                                </button></Link>
                        </motion.div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        variants={imageVariants}
                        className="flex-1 flex justify-center lg:justify-end relative"
                    >
                        <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
                            <Image
                                src={IMAGE.bannerImage}
                                alt={image.alt}
                                width={image.width}
                                height={image.height}
                                className="w-full h-auto object-cover"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
export default BannerClient;
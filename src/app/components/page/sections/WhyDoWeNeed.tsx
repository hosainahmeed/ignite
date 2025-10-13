'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionHeaderText from '../../status-banner/SectionHeaderText'
import { ICONS } from '@/app/constant/index.image'

function WhyDoWeNeed() {
    const data = [
        {
            id: 1,
            title: "Identify Talent",
            desc: "We discover and recognize promising young athletes from all backgrounds, ensuring no talent goes unnoticed due to financial barriers.",
            icon: ICONS.magnifire,
            align: "right"
        },
        {
            id: 2,
            title: "Provide Opportunities",
            desc: "IGNITE funds access to elite coaching, professional facilities, and competitive programs that were previously out of reach.",
            icon: ICONS.stadium,
            align: "left"
        },
        {
            id: 3,
            title: "Empower Dreams",
            desc: "We help athletes pursue their goals, whether it’s college scholarships, professional leagues, or national recognition.",
            icon: ICONS.roket,
            align: "right"
        },
    ]

    return (
        <section className="container mx-auto pt-20 px-4">
            <SectionHeaderText
                title="Why Do We Need IGNITE?"
                description="Because every child deserves the chance to play, no matter their financial background."
            />

            <div className="relative max-w-5xl mx-auto mt-16">
               
                <div className="absolute hidden md:block left-1/2 top-0 bottom-0 w-[2px] bg-[#003F91]/40 -translate-x-1/2 overflow-hidden">
                   
                    <motion.div
                        className="absolute left-0 w-full h-20 bg-gradient-to-b from-transparent via-red-500 z-10 to-transparent blur-md"
                        animate={{ y: ['0%', '100%'] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'linear'
                        }}
                    />
                </div>

                {data.map((item, index) => (
                    <div
                        key={item.id}
                        className={`relative mb-20 flex flex-col md:flex-row items-center 
              ${item.align === 'right' ? 'md:justify-start' : 'md:justify-end'}
            `}
                    >
                       
                        {item.align === 'right' && (
                            <>
                                <div className="hidden md:flex w-1/2 justify-end pr-8">
                                    <motion.div
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6 }}
                                        viewport={{ once: true }}
                                        className="w-20 h-20 flex items-center justify-center"
                                    >
                                        <Image
                                            src={item.icon}
                                            alt={item.title}
                                            width={70}
                                            height={70}
                                            className="object-contain"
                                        />
                                    </motion.div>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="w-full md:w-1/2 md:pl-8 text-center md:text-left"
                                >
                                    <div className="text-[#003F91] font-bold text-lg mb-1">0{item.id}</div>
                                    <h3 className="text-[#003F91] font-semibold text-2xl mb-2">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            </>
                        )}

                       
                        {item.align === 'left' && (
                            <>
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="w-full md:w-1/2 md:pr-8 text-center md:text-right"
                                >
                                    <div className="text-[#003F91] font-bold text-lg mb-1">0{item.id}</div>
                                    <h3 className="text-[#003F91] font-semibold text-2xl mb-2">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                </motion.div>

                                <div className="hidden md:flex w-1/2 justify-start pl-8">
                                    <motion.div
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6 }}
                                        viewport={{ once: true }}
                                        className="w-20 h-20 flex items-center justify-center"
                                    >
                                        <Image
                                            src={item.icon}
                                            alt={item.title}
                                            width={70}
                                            height={70}
                                            className="object-contain"
                                        />
                                    </motion.div>
                                </div>
                            </>
                        )}

                       
                        <div className="md:hidden mt-6">
                            <Image
                                src={item.icon}
                                alt={item.title}
                                width={60}
                                height={60}
                                className="mx-auto object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default WhyDoWeNeed

import { cn } from '@/lib/utils'
import Link from 'next/link';
import React from 'react'

function SideDescriber({
    smallTitle,
    paragraph = false,
    title,
    description,
    buttonText,
    route,
    className
}: {
    smallTitle?: string;
    paragraph?: boolean;
    title: string;
    description: string[] | string;
    buttonText?: string;
    route?: string;
    className?: string;
}) {
    const renderTextWithColon = (text: string) => {
        if (typeof text !== 'string') return text
        const parts = text.split(':')
        if (parts.length > 1) {
            return (
                <>
                    <span className="text-black font-semibold">{parts[0]}:</span>
                    <span className="text-[#4F5D75]"> {parts.slice(1).join(':')}</span>
                </>
            )
        }
        return <span className="text-[#4F5D75]">{text}</span>
    }

    return (
        <div className={cn('flex w-full relative items-center gap-5', className)}>
            <div className='w-1 h-full absolute top-0 -left-2 rounded-tr-full bg-gradient-to-b to-[#BF0A30] from-[#003F91]'></div>
            <div className='ml-4'>
                {smallTitle && (
                    <small className='text-[#4F5D75] text-xl font-bold'>{smallTitle}</small>
                )}
                <h2 className='text-[36px] font-bold text-[#003F91]'>{title}</h2>

                <div className='mt-5 space-y-2'>
                    {typeof description === 'string' ? (
                        <p className="text-[#4F5D75] text-base">
                            {renderTextWithColon(description)}
                        </p>
                    ) : (
                        description.map((item: string, index: number) => (
                            <div
                                key={index}
                                className={cn(
                                    'flex items-start gap-2',
                                    paragraph ? 'ml-2' : ''
                                )}
                            >
                                {paragraph && (
                                    <div className='w-2 h-2 mt-2 rounded-full bg-[#003F91]' />
                                )}
                                <p className="text-[#4F5D75] text-base leading-relaxed">
                                    {renderTextWithColon(item)}
                                </p>
                            </div>
                        ))
                    )}
                </div>

                {buttonText && route && (
                    <Link href={route}>
                        <button
                            className="bg-gradient-to-r mt-4 text-white from-[#BF0A30] to-[#003F91] px-6 text-lg py-4 rounded cursor-pointer hover:opacity-90 transition"
                        >
                            {buttonText}
                        </button>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default SideDescriber

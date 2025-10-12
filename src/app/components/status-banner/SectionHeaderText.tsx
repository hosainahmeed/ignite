import cn from '@/app/utils/cn'
import Image from 'next/image'
import React from 'react'
import { TypographyDescription } from '../Typography/Typography'

function SectionHeaderText({ title, icon, description, imageClass, className }:
    { title?: string, icon?: any, description?: string, imageClass?: string, className?: string }) {
    return (
        <div className={cn('container mx-auto flex items-center justify-center flex-col gap-3', className)}>
            {title && <div className='flex text-3xl font-semibold text-black items-center justify-center gap-2 text-center'>
                <h1
                    style={{
                        fontWeight: 600,
                        fontStyle: 'SemiBold',
                        fontSize: 36,
                        letterSpacing: 0
                    }}
                >{title}</h1>
                {icon &&
                    <Image
                        width={200}
                        height={200}
                        alt='ignite'
                        src={icon}
                        className={cn('w-12 h-12 object-contain', imageClass)}
                    />}</div>}
            {description && <TypographyDescription className='text-center max-w-screen-md tracking-wide' text={description} />}
        </div>
    )
}

export default SectionHeaderText
import cn from '@/app/utils/cn'
import React from 'react'

function TypographyDescription({
    text,
    className,
}: {
    text: string;
    className?: string;
}) {
    const target = "at no cost to you.";

    if (text.includes(target)) {
        const [before, after] = text.split(target);
        return (
            <p className={cn("text-base sm:text-lg text-[#4F5D75] max-w-lg mx-auto md:mx-0", className)}>
                {before}
                {target && <span className="font-bold">{target}</span>}
                {after}
            </p>
        );
    }

    return (
        <p className={cn("text-base sm:text-lg text-[#4F5D75] max-w-lg mx-auto md:mx-0", className)}>
            {text}
        </p>
    );
}

export default TypographyDescription;

function TypographyHeading({ text, className }: { text: string, className?: string }) {
    return (
        <h1 className={cn("text-3xl capitalize sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight", className)}>{text}</h1>
    )
}



export {
    TypographyDescription,
    TypographyHeading
}
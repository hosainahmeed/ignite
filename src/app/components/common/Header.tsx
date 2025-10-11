'use client'

import { IMAGE } from '@/app/constant/index.image'
import { cn } from '@/app/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

function Header() {
    const router = useRouter()

    const pathname = usePathname()
    console.log("pathname", pathname)
    const NavLink = [
        { href: '/', label: 'Home' },
        { href: '/about-us', label: 'About Us' },
        { href: '/mission-vision', label: 'Mission & Vision' },
        { href: '/donate', label: 'Donate' },
        { href: '/contact-help', label: 'Contact / Help' },
    ]
    
    return (
        <header className="sticky top-0 z-50 border-b bg-white border-border  backdrop-blur">
            <div
                className="container mx-auto flex h-16 items-center bg-transparent  justify-between px-4 sm:px-6 lg:px-8">
                <div onClick={() => router.push('/')} className="text-xl font-bold  cursor-pointer text-foreground">
                    <Image src={IMAGE.brandV2} width={150} height={200} alt='IGNITE' />
                </div>
                <nav className="flex items-center gap-6">
                    {NavLink.map((item) => (
                        <Link key={item.href} href={item.href}
                            className={cn("text-sm font-medium text-black px-2",
                                pathname === item.href ? "text-red-500 border-b-1 border-red-500" : ""
                            )}>
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    )
}

export default Header
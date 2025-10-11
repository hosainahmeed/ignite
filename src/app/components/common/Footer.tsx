'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6'
import { IMAGE } from '@/app/constant/index.image'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative overflow-hidden bg-[#2F3E52] text-white">
            <div className="absolute -left-20 bottom-10 h-48 w-48 rounded-full bg-gradient-to-tr from-gray-500/20 to-transparent blur-3xl" />
            <div className="absolute -top-20 right-0 h-64 w-64 rounded-full bg-gradient-to-tr from-gray-400/30 to-transparent blur-3xl" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <Image
                            src={IMAGE.brandV2 || '/logo.svg'}
                            alt="IGNITE Foundation Logo"
                            width={180}
                            height={60}
                            className="object-contain"
                        />

                        <div className="space-y-2 text-sm md:text-base text-gray-200">
                            <p>
                                <span className="font-semibold text-white">Email:</span>{' '}
                                <Link href="mailto:contactus@ignitefoundation.us" className="hover:underline">
                                    contactus@ignitefoundation.us
                                </Link>
                            </p>
                            <p>
                                <span className="font-semibold text-white">Location:</span>{' '}
                                12222 Merit Drive, #130 Dallas, TX 75251
                            </p>
                            <p>
                                <span className="font-semibold text-white">
                                    Public Charity & Tax Exempt under IRS Code :
                                </span>{' '}
                                501(c)(3)
                            </p>
                            <p>
                                <span className="font-semibold text-white">Tax ID:</span> EIN 39-2824042
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">Resources</h3>
                        <ul className="space-y-3 text-gray-200">
                            {[
                                { label: 'About Us', href: '/about-us' },
                                { label: 'Contact Us', href: '/contact-us' },
                                { label: 'FAQ', href: '/faq' },
                            ].map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="hover:text-white hover:underline">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
                        <ul className="space-y-3 text-gray-200">
                            {[
                                { label: 'Home', href: '/' },
                                { label: 'Nominate an Athlete', href: '/nominate' },
                                { label: 'Clubs & Academies', href: '/clubs' },
                                { label: 'Privacy Policy', href: '/privacy' },
                                { label: 'Terms of Condition', href: '/terms' },
                            ].map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="hover:text-white hover:underline">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">Follow Us On</h3>
                        <div className="flex gap-3 mb-5">
                            {[
                                { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
                                { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
                                { icon: FaXTwitter, href: 'https://twitter.com', label: 'Twitter' },
                                { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
                            ].map(({ icon: Icon, href, label }) => (
                                <Link
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2563EB] transition-transform hover:scale-110 hover:bg-[#1D4ED8]"
                                >
                                    <Icon className="h-5 w-5" />
                                </Link>
                            ))}
                        </div>

                        <p className="text-sm text-gray-300">
                            © {currentYear} IGNITE Foundation
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

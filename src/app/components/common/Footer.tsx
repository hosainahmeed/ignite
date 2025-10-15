'use client'
import Link from 'next/link';
import { Facebook, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IMAGE } from '@/app/constant/index.image';
const Footer = () => {
    const currentYear = new Date().getFullYear();


    const footerLinks = {
        resources: [
            { label: 'About Us', href: '/about-us' },
            { label: 'Contact Us', href: '/contact-us' },
            { label: 'FAQ', href: '/faq' },
        ],
        quickLinks: [
            { label: 'Home', href: '/' },
            { label: 'Nominate an Athlete', href: '/ignite-my-child' },
            { label: 'Clubs & Academies', href: '/join-our-club' },
            { label: 'Privacy Policy', href: '/privacy' },
            { label: 'Terms & Condition', href: '/terms' }
        ],
        social: [
            { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
            { icon: FaXTwitter, href: 'https://twitter.com', label: 'Twitter' },
            { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
        ],
    };
    return (
        <footer
            style={{
                backgroundImage: `url(${IMAGE.footersImage.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            className="bg-[#0a1f44] text-white mt-12" role="contentinfo">
            <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand Section */}
                    <section  aria-labelledby="brand-heading">
                        <Link href="/" className="inline-flex items-center gap-2 group" aria-label="IGNITE Foundation">
                            <Image src={IMAGE.brandV2} alt="Logo" width={150} height={50} />
                        </Link>
                        <address className="space-y-2">
                            <span className="text-sm text-gray-300 lg:text-base">
                                <Link
                                    href="mailto:contactus@ignitefoundation.us"
                                    className="inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white lg:text-base"
                                    aria-label="Email us at contactus@ignitefoundation.us"
                                >
                                    <Mail className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                                    Email: contactus@ignitefoundation.us
                                </Link>
                            </span>
                            <p className="text-sm text-gray-300">Location: 12222 Merit Drive, #130 Dallas, TX 75251</p>
                            <p className="text-sm text-gray-300">Public Charity & Tax Exempt under IRS Code : 501(c)(3)</p>
                            <p className="text-sm text-gray-300">Tax ID: EIN 39-2824042</p>
                        </address>
                    </section>

                    {/* Resources Section */}
                    <nav className="space-y-4" aria-labelledby="resources-heading">
                        <h3 id="resources-heading" className="text-lg font-semibold lg:text-xl">
                            Resources
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-300 transition-colors hover:text-white hover:underline lg:text-base"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Quick Links Section */}
                    <nav className="space-y-4" aria-labelledby="quick-links-heading">
                        <h3 id="quick-links-heading" className="text-lg font-semibold lg:text-xl">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-300 transition-colors hover:text-white hover:underline lg:text-base"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Social Media Section */}
                    <section className="space-y-4" aria-labelledby="social-heading">
                        <h3 id="social-heading" className="text-lg font-semibold lg:text-xl">
                            Follow Us On
                        </h3>
                        <div className="flex gap-3">
                            {footerLinks.social.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 transition-all hover:bg-blue-700 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#0a1f44]"
                                        aria-label={`Follow us on ${social.label}`}
                                    >
                                        <Icon className="h-5 w-5" aria-hidden="true" />
                                    </a>
                                );
                            })}
                        </div>
                        <p className="text-sm text-gray-400 lg:text-base">
                            © {currentYear} IGNITE Foundation
                        </p>
                    </section>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
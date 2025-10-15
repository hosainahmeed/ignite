import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import SocialIcons from '@/app/components/form-related/SocialIcons';
import PageTopBanner from '@/app/components/status-banner/PageTopBanner';
import { IMAGE } from '@/app/constant/index.image';
import ContactForm from '@/app/components/form-related/ContactForm';
;
export const metadata: Metadata = {
  title: 'Contact Us',
};
function ContactPage() {
  return (
    <div className="min-h-dvh">
      <PageTopBanner title='Contact Us' description='Do you want to Be The Spark - reach us in one click' />
      <div className="container  mx-auto px-4 py-8">
        <div className="grid bg-[#e6ecf5] shadow-lg rounded-2xl lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Left Sidebar - Green Section */}
          <div className="lg:col-span-4 p-8 bg-gradient-to-r from-[#BF0A30] to-[#003F91] rounded-l-lg lg:rounded-r-none rounded-r-lg relative overflow-hidden">
            <div className="absolute  top-0 left-0 w-full h-full">
              <img
                src={IMAGE.contactImage.src}
                alt="Contact Background"
                className="object-cover w-full h-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
            </div>
            <div className="absolute bottom-6 left-6">
              <h1 className="text-white text-xl mb-3 font-semibold">
                Follow Us On
              </h1>
              <SocialIcons />
            </div>
          </div>

          {/* Right Content - Form Section */}
          <div className="lg:col-span-8 p-8 rounded-r-lg lg:rounded-l-none rounded-l-lg">
            <div className="max-w-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
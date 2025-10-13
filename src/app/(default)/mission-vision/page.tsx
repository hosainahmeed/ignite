import SectionLayout from '@/app/components/component-layout/SectionLayout'
import DiscoverBanner from '@/app/components/status-banner/DiscoverBanner'
import PageTopBanner from '@/app/components/status-banner/PageTopBanner'
import SideDescriber from '@/app/components/status-banner/SideDescriber'
import { IMAGE } from '@/app/constant/index.image'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

function page() {

  const data = [
    {
      title: 'Who We Are',
      description: 'IGNITE Foundation is a nationwide nonprofit dedicated to breaking the “pay to play” barrier in youth sports. We provide opportunities, funding, and mentorship for underprivileged athletes, helping them access elite training and achieve their dreams both on and off the field.',
      src: IMAGE.whoWeAre.src,
    },
    {
      title: 'Our Story',
      description: 'IGNITE Foundation is a nationwide nonprofit dedicated to breaking the “pay to play” barrier in youth sports. We provide opportunities, funding, and mentorship for underprivileged athletes, helping them access elite training and achieve their dreams both on and off the field.',
      src: IMAGE.ourStory.src,
    },
    {
      title: 'What Drives Us',
      description: 'IGNITE Foundation is a nationwide nonprofit dedicated to breaking the “pay to play” barrier in youth sports. We provide opportunities, funding, and mentorship for underprivileged athletes, helping them access elite training and achieve their dreams both on and off the field.',
      src: IMAGE.whatDrivesUs.src,
    },
    {
      title: 'How We Ignite Change',
      description: [
        'Mission: To break financial barriers in youth sports by providing access to coaching, academies, and facilities for underprivileged athletes.',
        'Vision: A future where every child, regardless of income, can pursue their sporting passion and unlock their full potential'
      ],
      src: IMAGE.howWeIgniteChange.src,
    }
  ]
  return (
    <div>
      <PageTopBanner
        title="Mission & Vision"
        description="Building a future where every child has the chance to shine through sports."
      />
      <SectionLayout className='mt-12 max-w-7xl mx-auto'>
        {
          data?.map((item, index) => (
            <div className={cn("flex md:gap-20 items-center flex-col",
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            )} key={index}>
              <div className='w-full  h-auto'>
                <Image className='w-full h-full object-contain' src={item.src} alt="Who We Are" width={IMAGE.whoWeAre.width} height={IMAGE.whoWeAre.height} />
              </div>
              <SideDescriber
                title={item.title}
                description={item.description}
                className='my-12 md:my-0'
              />
            </div>
          ))
        }
        <DiscoverBanner
        className='mt-12 md:mt-[128px]'
          title='Fuel the Future of Youth Athletes'
          description='Your donation helps break barriers — giving every child the chance to access elite coaching, join competitive clubs, and chase their sports dreams.'
          listbutton={true}
          buttonText='Donate Now'
          route='/donate'
        />
      </SectionLayout>
    </div>
  )
}

export default page
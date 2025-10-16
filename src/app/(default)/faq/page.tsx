'use client';
import React from 'react';
import PageTopBanner from '@/app/components/status-banner/PageTopBanner';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

function FaQ() {
    const data = [
        {
            question: 'How can I donate to the IGNITE Foundation?',
            answer: 'You can donate securely through our website under the “Donate” section. We offer multiple giving levels, and every contribution directly supports young athletes in need.'
        },
        {
            question: 'Can I nominate a child for support?',
            answer: 'Yes! You can nominate a child for support by filling out our nomination form on our website. We review each nomination carefully and provide support to deserving athletes.'
        },
        {
            question: 'What kind of information is needed to nominate an athlete?',
            answer: 'To nominate an athlete, you need to provide basic information such as the athlete’s name, age, sport, and a short description of their needs. You can also include any additional information that will help us better understand their situation.'
        },
        {
            question: 'How do clubs and academies join the IGNITE network?',
            answer: 'Clubs and academies can join the IGNITE network by filling out our partnership application on our website. We review each application carefully and provide support to deserving athletes.'
        },
        {
            question: 'Are donations tax deductible?',
            answer: 'Yes, donations to the IGNITE Foundation are tax deductible in the United States.'
        },
        {
            question: 'How is my donation used?',
            answer: 'Your donation helps provide financial support to young athletes in need, including equipment, travel, and other expenses.'
        }
    ];

    return (
        <div className="min-h-screen">
            <PageTopBanner
                title="Frequently asked questions"
                description="Learn about how IGNITE is fueling the dreams of young athletes"
            />
            <div className='container mx-auto'>
                <h1 className='text-3xl mt-6 font-bold text-[#022C22] mb-6'>Frequently asked questions</h1>
                {data?.length > 0 ? (
                    <div className="">
                        <Accordion
                            className="rounded-lg p-0"
                            type="single"
                            collapsible
                            defaultValue="item-1"
                        >
                            {data?.map(
                                (
                                    item: { question: string; answer: string },
                                    index: number
                                ) => (
                                    <AccordionItem value={`item-${index + 1}`} key={index}>
                                        <AccordionTrigger className="font-poppins py-3 font-medium text-lg md:text-xl text-[#000] transition-all ease-in-out duration-300">
                                            {item?.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-[#6B7280] leading-relaxed  py-3 text-base md:text-base">
                                            {item?.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                )
                            )}
                        </Accordion>
                    </div>
                ) : (
                    <p>No data available</p>
                )}
            </div>
        </div>
    );
}

export default FaQ;

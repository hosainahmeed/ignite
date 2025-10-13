'use client'
import React, { useRef } from 'react';
import { Button, message } from 'antd';
import ChildInformation, { ChildInformationHandle } from './ChildInformation';
import ParentDetails, { ParentDetailsHandle } from './ParentDetails';
import AboutYourChild, { AboutYourChildHandle } from './AboutYourChild';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { nextStep, prevStep } from '../../../store/features/applyIgnite/applyIgniteSlice';

const stepsMeta = [
    { title: 'First' },
    { title: 'Second' },
    { title: 'Last' },
];

const IgniteApply: React.FC = () => {
    const dispatch = useAppDispatch();
    const current = useAppSelector(s => s.applyIgnite.step);
    const applyIgnite = useAppSelector(s => s.applyIgnite);
    const childRef = useRef<ChildInformationHandle>(null)
    const parentRef = useRef<ParentDetailsHandle>(null)
    const aboutRef = useRef<AboutYourChildHandle>(null)

    const renderStep = () => {
        switch (current) {
            case 0:
                return <ChildInformation ref={childRef} />
            case 1:
                return <ParentDetails ref={parentRef} />
            case 2:
                return <AboutYourChild ref={aboutRef} />
            default:
                return null
        }
    }

    const handleNext = async () => {
        try {
            if (current === 0) await childRef.current?.validate()
            if (current === 1) await parentRef.current?.validate()
            if (current === 2) await aboutRef.current?.validate()
            dispatch(nextStep())
        } catch {
        }
    }

    const handleSubmit = async () => {
        try {
            if (current === 0) await childRef.current?.validate()
            if (current === 1) await parentRef.current?.validate()
            if (current === 2) await aboutRef.current?.validate()
            // All steps valid, log consolidated data
            // Note: values may be null if optional or untouched
            // eslint-disable-next-line no-console
            console.log('IGNITE submission payload:', applyIgnite)
            alert('Form is valid. Check console for payload.')
        } catch {
        }
    }

    return (
        <div className='container mx-auto pb-16'>
            <div

            >{renderStep()}</div>

            <div style={{ marginTop: 24 }}>
                {current > 0 && (
                    <Button
                        style={{
                            backgroundImage: 'linear-gradient(to right, #BF0A30, #003F91)',
                            color: '#fff',
                            border: 'none',
                            padding: '20px 30px',
                            borderRadius: '5px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                        }}
                        onClick={() => dispatch(prevStep())}>
                        Previous
                    </Button>
                )}
                {current < stepsMeta.length - 1 && (
                    <Button
                        style={{
                            backgroundImage: 'linear-gradient(to right, #BF0A30, #003F91)',
                            color: '#fff',
                            border: 'none',
                            padding: '20px 30px',
                            borderRadius: '5px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            marginLeft: '10px',
                        }}
                        onClick={handleNext}>
                        Next
                    </Button>
                )}
                {current === stepsMeta.length - 1 && (
                    <Button
                        style={{
                            backgroundImage: 'linear-gradient(to right, #BF0A30, #003F91)',
                            color: '#fff',
                            border: 'none',
                            padding: '20px 30px',
                            borderRadius: '5px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            marginLeft: '10px',
                            transition: 'all 0.3s ease',
                        }}
                        onClick={() => handleSubmit()}>
                        IGNITE My Child
                    </Button>
                )}

            </div>
        </div>
    );
};

export default IgniteApply;
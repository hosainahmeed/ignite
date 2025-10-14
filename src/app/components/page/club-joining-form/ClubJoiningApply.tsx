'use client'
import React, { useRef } from 'react';
import { Button } from 'antd';
import ClubAcademyDetails, { ClubAcademyDetailsHandle } from './ClubAcademyDetails';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { nextStep, prevStep } from '../../../store/features/applyClubSlice';
import LocationPrograms, { LocationProgramsHandle } from './LocationPrograms';

const stepsMeta = [
    { title: 'First' },
    { title: 'Second' },
];

const ClubJoiningApply: React.FC = () => {
    const dispatch = useAppDispatch();
    const current = useAppSelector(s => s.applyClub.step);
    const clubJoining = useAppSelector(s => s.applyClub);
    const childRef = useRef<ClubAcademyDetailsHandle>(null)
    const parentRef = useRef<LocationProgramsHandle>(null)

    const renderStep = () => {
        switch (current) {
            case 0:
                return <ClubAcademyDetails ref={childRef} />
            case 1:
                return <LocationPrograms ref={parentRef} />
            default:
                return null
        }
    }

    const handleNext = async () => {
        try {
            if (current === 0) await childRef.current?.validate()
            if (current === 1) await parentRef.current?.validate()
            dispatch(nextStep())
        } catch {
        }
    }

    const handleSubmit = async () => {
        try {
            if (current === 0) await childRef.current?.validate()
            if (current === 1) await parentRef.current?.validate()
            console.log('Club Joining submission payload:', clubJoining)
            alert('Form is valid. Check console for payload.')
        } catch {
        }
    }

    return (
        <div className='container mx-auto pb-16'>
            <div

            >{renderStep()}</div>

            <div style={{ marginTop: 24 }}>

                <div className='flex gap-5 md:flex-row flex-col md:gap-10'>
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
                            Join Be The Spark Club
                        </Button>
                    )}
                </div>

            </div>
        </div>
    );
};

export default ClubJoiningApply;
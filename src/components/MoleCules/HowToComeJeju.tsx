import React from 'react';
import JejuLocation from '../Atoms/JejuLocation';
import JejuDesc from '../Atoms/JejuDesc';
import { HiLocationMarker } from 'react-icons/hi';

export default function HowToComeJeju() {
    return (
        <div className='my-32 mx-10'>
            <div className='flex-col items-center text-center justify-center mb-4'>
                <h3 className='italic text-gray-600 font-naum pb-6 mb-6'>
                    LOCATION
                </h3>
                <h3 className='text-xl text-gray-600 font-seoul border-b-2 pb-6 font-bold'>
                    오시는 길
                </h3>
            </div>
            <div className='flex items-center py-4'>
                <HiLocationMarker className='text-3xl text-neutral-400' />
                <p className='ml-2 font-suite'>오션스위츠 제주호텔</p>
            </div>
            <JejuLocation />
            <JejuDesc />
        </div>
    );
}

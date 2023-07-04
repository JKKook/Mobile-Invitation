import React from 'react';
import HallMap from '../Atoms/HallMap';
import MapDesc from '../Atoms/MapDesc';
import { HiLocationMarker } from 'react-icons/hi';

export default function HowToCome() {
    return (
        <div className='my-32 mx-10'>
            <div className='opacity-30 mb-32'>
                <img
                    className='w-full h-[150px]'
                    src='images/ring.jpeg'
                    alt='banner'
                />
            </div>
            <div className='flex-col items-center text-center justify-center mb-4'>
                <h3 className='italic text-gray-600 font-naum pb-6 mb-6'>
                    LOCATION
                </h3>
                <h3 className='text-xl text-gray-600 font-seoul border-b-2 pb-6 font-bold'>
                    오시는 길
                </h3>
            </div>
            <div className='flex items-center p-4'>
                <HiLocationMarker className='text-3xl text-neutral-400' />
                <p className='ml-4 font-suite'>삼산월드컨벤션센터</p>
            </div>
            <HallMap />
            <MapDesc />
        </div>
    );
}

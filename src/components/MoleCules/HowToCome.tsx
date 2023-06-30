import React from 'react';
import HallMap from '../Atoms/HallMap';
import MapDesc from '../Atoms/MapDesc';

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
            <div className='flex justify-center mb-10 text-2xl'>
                <h3 className='text-gray-600 font-naum  pb-6 font-bold'>
                    오시는 길
                </h3>
            </div>
            <HallMap />
            <MapDesc />
        </div>
    );
}

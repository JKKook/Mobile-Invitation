import React from 'react';
import HallMap from '../Atoms/HallMap';
import MapDesc from '../Atoms/MapDesc';
import { HiLocationMarker } from 'react-icons/hi';

export default function HowToCome() {
    return (
        <div
            data-aos='fade-up'
            data-aos-duration='3000'
            className='my-32 mx-10'
        >
            <div className='flex-col items-center text-center justify-center mb-4'>
                <h3 className='italic text-gray-600 font-naum pb-6 mb-6'>
                    LOCATION
                </h3>
                <h3 className='text-xl text-gray-600 font-seoul border-b-2 pb-6 font-bold'>
                    오시는 길
                </h3>
            </div>
            <div className='flex-col items-start mb-6 font-naum'>
                <h2 className='text-md'>삼산월드컨벤션센터</h2>
                <h3 className='text-sm '>
                    인천광역시 부평구 체육관로 60 삼산월드체육관
                </h3>
                <p className='text-sm'>032-719-3301</p>
            </div>
            <div className='flex items-center py-4'>
                <HiLocationMarker className='text-3xl text-neutral-400' />
                <p className='ml-2 font-suite'>삼산월드컨벤션센터</p>
            </div>
            <HallMap />
            <MapDesc />
        </div>
    );
}

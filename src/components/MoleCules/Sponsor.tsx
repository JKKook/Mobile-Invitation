import React from 'react';
import SponToggle from '../Atoms/SponToggle';
import rose from '../../../public/images/rose.png';
import Image from 'next/image';

export default function Sponsor() {
    return (
        <div className='my-[8rem]'>
            <div className='flex justify-center mb-[4rem]'>
                <Image
                    className='opacity-30'
                    src={rose}
                    alt='rose'
                    width={100}
                />
            </div>
            <div className='flex justify-center mb-10 text-2xl'>
                <h3 className='text-gray-600 font-naum border-b-2 pb-6 font-bold'>
                    마음 전하는 곳
                </h3>
            </div>
            <SponToggle />
        </div>
    );
}

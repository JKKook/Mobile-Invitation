import Image from 'next/image';
import React from 'react';
import wedding from '../../../public/images/wedding6.jpeg';

export default function MainImage() {
    return (
        <div className='relative'>
            <Image src={wedding} alt='main-image' width={480} />
            <div
                style={{ writingMode: 'vertical-rl' }}
                className='text-white  font-arita absolute top-5 right-0'
            >
                <p className='text-2xl'>2023. 10. 07.</p>
                <span className='text-3xl'>결혼합니다</span>
            </div>
        </div>
    );
}

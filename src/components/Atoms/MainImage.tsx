import Image from 'next/image';
import React from 'react';
import wedding from '../../../public/images/wedding6.jpeg';

export default function MainImage() {
    return (
        <div className='relative'>
            <div className='absolute bg-black top-0 left-0 right-0 bottom-0 opacity-[20%]'></div>

            <div></div>
            <Image
                // className='opacity-80'
                src={wedding}
                alt='main-image'
                width={480}
            />

            <div
                style={{ writingMode: 'vertical-rl' }}
                className='text-white font-SunBatang absolute top-6 right-10'
            >
                <span className='block text-[32px] font-thin translate-y-[25%] tracking-[6px]'>
                    결혼합니다
                </span>
                <span className='block text-[32px] font-thin tracking-wide'>
                    우리
                </span>
            </div>
        </div>
    );
}

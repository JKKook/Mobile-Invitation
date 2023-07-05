import React from 'react';
import Image from 'next/image';
import flower from '../../../public/images/flower.jpeg';

export default function Greeting() {
    return (
        <div className='relative mb-[8rem]'>
            <div className='opacity-30'>
                <Image
                    className='md:w-full md:h-auto'
                    src={flower}
                    alt='flower-banner'
                    width={480}
                    height={200}
                />
            </div>
            <div className='text-center flex justify-center'>
                <h3
                    data-aos='fade-in'
                    data-aos-duration='2000'
                    className='font-bold text-zinc-500 tracking-[0.7em] absolute top-[50%] font-SunBatang text-md'
                >
                    소중한 분들을 초대합니다
                </h3>
            </div>
        </div>
    );
}

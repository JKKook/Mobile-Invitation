import Image from 'next/image';
import React from 'react';
import wedding from '../../../public/images/wedding6.jpeg';

export default function MainImage() {
    return (
        <div className='relative'>
            <div className='absolute bg-black top-0 left-0 right-0 bottom-0 opacity-[20%]'></div>

            <Image src={wedding} alt='main-image' width={480} />

            <div
                style={{ writingMode: 'vertical-rl' }}
                className='text-white font-SunBatang absolute top-6 right-10'
            >
                <div data-aos='fade-down' data-aos-duration='3000'>
                    <span className='absolute top-0 right-10 text-[32px] font-thin tracking-[6px]'>
                        우
                    </span>
                </div>
                <div data-aos='fade-down' data-aos-duration='2000'>
                    <span className='absolute top-10 right-10 text-[32px] font-thin tracking-[6px]'>
                        리
                    </span>
                </div>
                <div data-aos='fade-down' data-aos-duration='5000'>
                    <span className='absolute top-20 right-1 text-[32px] font-thin tracking-[6px]'>
                        결
                    </span>
                </div>
                <div data-aos='fade-down' data-aos-duration='4000'>
                    <span className='absolute top-32 right-1 text-[32px] font-thin tracking-[6px]'>
                        혼
                    </span>
                </div>
                <div data-aos='fade-down' data-aos-duration='3000'>
                    <span className='absolute top-44 right-1 text-[32px] font-thin tracking-[6px]'>
                        합
                    </span>
                </div>
                <div data-aos='fade-down' data-aos-duration='2000'>
                    <span className='absolute top-56 right-1 text-[32px] font-thin tracking-[6px]'>
                        니
                    </span>
                </div>
                <div data-aos='fade-down' data-aos-duration='1000'>
                    <span className='absolute top-[17rem] right-1 text-[32px] font-thin tracking-[6px]'>
                        다
                    </span>
                </div>

                {/* <span className='block text-[32px] font-thin translate-y-[25%] tracking-[6px]'>
                        결혼합니다
                    </span> */}

                {/* <span className='block text-[32px] font-thin tracking-wide'>
                        우리
                    </span> */}
            </div>

            <div className='absolute bottom-[-2px] border-white'>
                <img className='w-[480px]' src='/images/cal.png' alt='cal' />
            </div>
        </div>
    );
}

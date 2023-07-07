import Image from 'next/image';
import React from 'react';
import AOS from 'aos';
import { useEffect } from 'react';
import wedding from '../../../public/images/wedding6.jpeg';
import { useRef } from 'react';

export default function JejuMainImage() {
    // text event Handling
    const textRef = useRef<HTMLSpanElement>(null);

    const handleScrollTextEvent = () => {
        if (textRef.current) {
            const spanElement = textRef.current;

            let opacity = 0;

            const intervalId = setInterval(() => {
                // opactiy의 값을 증가해서 3번의 변화를 주어서 깜빡거리는 효과를 좀 더 극명하게 전달
                spanElement.style.opacity = String(opacity / 100);
                opacity += 30;

                if (opacity > 100) {
                    clearInterval(intervalId);
                }
            }, 2000);
        }
    };

    useEffect(() => {
        // handle Text Event
        handleScrollTextEvent();
        // AOS 초기화
        AOS.init();

        window.addEventListener('scroll', handleScrollTextEvent);

        // unMount
        return () => {
            window.removeEventListener('scroll', handleScrollTextEvent);
        };
    }, []);

    return (
        <div className='relative'>
            <div className='absolute bg-black top-0 left-0 right-0 bottom-0 opacity-[20%]'></div>

            <Image src={wedding} alt='main-image' width={480} />

            <div
                style={{ writingMode: 'vertical-rl' }}
                className='text-white font-SunBatang absolute top-6 right-10'
            >
                <div
                    data-aos='fade-down'
                    data-aos-duration='3000'
                    data-aos-offset='100'
                >
                    <span className='absolute top-0 right-10 text-[32px] font-thin tracking-[6px]'>
                        우
                    </span>
                </div>
                <div
                    data-aos='fade-down'
                    data-aos-delay='1100'
                    data-aos-duration='3000'
                >
                    <span className='absolute top-10 right-10 text-[32px] font-thin tracking-[6px]'>
                        리
                    </span>
                </div>
                <div
                    data-aos='fade-down'
                    data-aos-delay='1600'
                    data-aos-duration='3000'
                    data-aos-offset='100'
                >
                    <span className='absolute top-20 right-1 text-[32px] font-thin tracking-[6px]'>
                        결
                    </span>
                </div>
                <div
                    data-aos='fade-down'
                    data-aos-delay='2200'
                    data-aos-duration='3000'
                    data-aos-offset='300'
                >
                    <span className='absolute top-32 right-1 text-[32px] font-thin tracking-[6px]'>
                        혼
                    </span>
                </div>
                <div
                    data-aos='fade-down'
                    data-aos-delay='2600'
                    data-aos-duration='3000'
                    data-aos-offset='500'
                >
                    <span className='absolute top-44 right-1 text-[32px] font-thin tracking-[6px]'>
                        합
                    </span>
                </div>
                <div
                    data-aos='fade-down'
                    data-aos-delay='2800'
                    data-aos-duration='3000'
                    data-aos-offset='500'
                >
                    <span className='absolute top-56 right-1 text-[32px] font-thin tracking-[6px]'>
                        니
                    </span>
                </div>
                <div
                    data-aos='fade-down'
                    data-aos-delay='3000'
                    data-aos-duration='3000'
                    data-aos-offset='500'
                >
                    <span className='absolute top-[17rem] right-1 text-[32px] font-thin tracking-[6px]'>
                        다
                    </span>
                </div>
            </div>

            <div>
                <div
                    data-aos='fade-in'
                    data-aos-offset='100'
                    data-aos-duration='3000'
                    data-aos-delay='2000'
                    className='absolute font-seoul text-[1.1em] text-white top-[13rem] left-[2rem] tracking-wider'
                >
                    <p>오션스위츠 제주호텔</p>
                </div>
                <div
                    data-aos='fade-in'
                    data-aos-offset='100'
                    data-aos-duration='3000'
                    data-aos-delay='3000'
                    className='italic absolute font-seoul text-[1.0em] text-white top-[15rem] left-8 border-b-2'
                >
                    <span>2023.09.23.(토) 오전 11시 - 오후 5시</span>
                </div>
            </div>

            <div className='absolute bottom-[-2px] border-white text-center'>
                <img className='w-[480px]' src='/images/cal.png' alt='cal' />
                <span
                    ref={textRef}
                    className='text-slate-700 font-naum absolute translate-x-[-50%] translate-y-[-100%] transition duration-200 ease-in '
                >
                    scroll
                </span>
            </div>
        </div>
    );
}

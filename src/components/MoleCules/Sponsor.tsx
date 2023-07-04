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
            <div className='flex-col items-center text-center justify-center mb-10'>
                <h3 className='italic text-gray-600 font-naum pb-6 mb-6'>
                    For Your Heart
                </h3>
                <span className='text-xl text-gray-600 font-seoul border-b-2 pb-6 font-bold'>
                    마음 전하실 곳
                </span>
            </div>
            <div className='py-6 italic text-slate-500 text-[14px] text-center font-seoul'>
                저희 두 사람의 소중한 시작을
                <div></div>
                함께 해주시는 모든 분들께 감사드리며,
                <div></div>
                전해주시는 따뜻한 진심을 배워
                <div></div>
                오래도록 행복하게 잘 살겠습니다.
            </div>
            <SponToggle />
        </div>
    );
}

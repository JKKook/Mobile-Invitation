import React from 'react';
import JejuLocation from '../Atoms/JejuLocation';
import JejuDesc from '../Atoms/JejuDesc';
import { HiLocationMarker } from 'react-icons/hi';

export default function HowToComeJeju() {
    return (
        <div className='my-32 mx-10'>
            <div className='my-32 mx-10'>
                <div className='flex-col items-center text-center justify-center mb-10'>
                    <span className='text-xl text-gray-600 font-seoul border-b-2 pb-6 font-bold'>
                        피로연 안내
                    </span>
                </div>
                <div className='py-6 italic text-slate-500 text-[14px] text-center font-seoul'>
                    예식장이 멀어
                    <div></div>
                    참석하시는 분들을 위해
                    <div></div>
                    작은 피로연 자리를
                    <div></div>
                    마련하였습니다
                </div>
            </div>
            <div className='flex-col items-center text-center justify-center mb-4'>
                <h3 className='italic text-gray-600 font-naum pb-6 mb-6'>
                    LOCATION
                </h3>
                <h3 className='text-xl text-gray-600 font-seoul border-b-2 pb-6 font-bold'>
                    오시는 길
                </h3>
            </div>
            <div className='flex-col items-start mb-6 font-naum'>
                <h2 className='text-md'>오션스위츠 제주호텔</h2>
                <h3 className='text-sm '>제주도 제주시 탑동해안로 74</h3>
                <p className='text-sm'>064-720-6000</p>
            </div>
            <div className='flex items-center py-4'>
                <HiLocationMarker className='text-3xl text-neutral-400' />
                <p className='ml-2 font-suite'>오션스위츠 제주호텔</p>
            </div>
            <JejuLocation />
            <JejuDesc />
        </div>
    );
}

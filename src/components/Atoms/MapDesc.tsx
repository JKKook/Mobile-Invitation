import React from 'react';
import { FaBus } from 'react-icons/fa';
import { FaSubway } from 'react-icons/fa';

export default function MapDesc() {
    return (
        <>
            <div className='my-4 rounded-sm'>
                <div className='flex items-center py-4'>
                    <FaBus className='text-3xl text-neutral-400' />
                    <h1 className='ml-4 font-suite font-[800]'>버스 이용 시</h1>
                </div>
                <div className='font-suite rounded-xl bg-stone-100 p-10'>
                    <ul className='list-disc'>
                        <li>삼산월드체육관 하차 시, (도보 2분)</li>
                        <li className='text-[18px] text-stone-600 font-kotra list-none mb-2'>
                            버스: 24, 28, 67-1, 87, 558, 79, 1200, 9300
                        </li>
                        <li>한국만화박물관 하차 시, (도보 6분)</li>
                        <li className='text-[18px] text-stone-600 font-kotra list-none'>
                            버스: 565, 53, 59-1, 37, 526, 558, 565, 인천e음61
                        </li>
                    </ul>
                </div>
            </div>
            <div className='rounded-sm'>
                <div className='flex items-center py-4'>
                    <FaSubway className='text-3xl text-rose-200' />
                    <h1 className='ml-4 font-suite'>지하철 이용 시</h1>
                </div>
                <div className='font-suite rounded-xl bg-rose-50 p-10'>
                    <ul className='list-disc'>
                        <li>7호선 삼산체육관역 3번 출구 하차 시, (도보 5분)</li>
                        <li className='text-[18px] text-stone-600 font-kotra list-none'>
                            부평구청 - 굴포천역 - 삼산체육관역 - 상동역
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

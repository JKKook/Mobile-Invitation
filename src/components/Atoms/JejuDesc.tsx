import React from 'react';
import { FaBus } from 'react-icons/fa';
import { FaTaxi } from 'react-icons/fa';

export default function JejuDesc() {
    return (
        <>
            <div className='my-4 rounded-sm'>
                <div className='flex items-center py-4'>
                    <FaBus className='text-3xl text-neutral-400' />
                    <h1 className='ml-4 font-suite font-[800]'>버스 이용 시</h1>
                </div>
                <div className='font-suite rounded-xl bg-stone-100 p-10'>
                    <ul className='list-disc'>
                        <li>제주국제공항</li>
                        <li className='text-[18px] text-stone-600 font-kotra list-none mb-2'>
                            버스: 365, 411(관덕정[북] 환승), 331, 3001
                        </li>
                        <li>제주항</li>
                        <li className='text-[18px] text-stone-600 font-kotra list-none'>
                            버스: 412, 415, 426
                        </li>
                    </ul>
                </div>
            </div>
            <div className='rounded-sm'>
                <div className='flex items-center py-4'>
                    <FaTaxi className='text-3xl text-rose-200' />
                    <h1 className='ml-4 font-suite'>택시 이용 시</h1>
                </div>
                <div className='font-suite rounded-xl bg-rose-50 p-10'>
                    <ul className='list-disc'>
                        <li>제주국제공항, (소요시간 : 약8분)</li>
                        <li className='text-[18px] text-stone-600 font-kotra list-none'>
                            거리(4km)
                        </li>
                        <li>제주항, (소요시간 : 약5분)</li>
                        <li className='text-[18px] text-stone-600 font-kotra list-none'>
                            거리(2.2km)
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

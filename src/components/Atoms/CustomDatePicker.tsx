import { differenceInDays } from 'date-fns';
import React from 'react';
import CalendarDate from './CalendarDate';

export default function CustomDatePicker() {
    const daysRemain = differenceInDays(new Date(2023, 9, 7), new Date());

    return (
        <div data-aos='fade-in' data-aos-duration='2000'>
            <div className='flex-col text-center items-center justify-center p-6 border-b-2'>
                <p className='italic text-gray-600 font-naum pb-6 mb-6'>
                    THE WEDDING DAY
                </p>
                <p className='text-xl py-4 font-seoul'>
                    2023년 10월 07일 토요일
                </p>
                <p className='font-seoul text-[18px]'>오후 1시 20분</p>
            </div>
            <CalendarDate />
            <div>
                {daysRemain > 0 && (
                    <div className='py-6 flex justify-center items-center font-kotra'>
                        <span>D-Day까지</span>
                        <span className='text-rose-500 px-4 text-2xl after:content-["♥︎"]'>
                            {daysRemain}일
                        </span>
                        <span>남았습니다</span>
                    </div>
                )}
            </div>
        </div>
    );
}

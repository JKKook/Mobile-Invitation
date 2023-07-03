import { differenceInDays } from 'date-fns';
import React from 'react';
import CalendarDate from './CalendarDate';

export default function CustomDatePicker() {
    const daysRemain = differenceInDays(new Date(2023, 9, 7), new Date());

    return (
        <div>
            <div className='flex-col text-center items-center justify-center p-6'>
                <p className='text-sm font-naum'>THE WEDDING DAY</p>
                <p className='text-xl py-6 font-arita border-b-2'>
                    2023년 10월 07일 토요일 오후 1시
                </p>
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

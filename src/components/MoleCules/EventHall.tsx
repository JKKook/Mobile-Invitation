import Image from 'next/image';
import React from 'react';
import hall from '../../../public/images/hall.jpeg';
import resturant from '../../../public/images/resturant.jpeg';

export default function EventHall() {
    return (
        <div className='my-32 mx-10'>
            <div className='flex justify-center mb-10 text-2xl'>
                <h3 className='text-gray-600 font-naum border-b-2 pb-6 font-bold'>
                    저희 결혼식을 소개합니다
                </h3>
            </div>
            <div className='mb-8 flex justify-around items-center'>
                <div className='basis-1/4'>
                    <img
                        className='w-[100px] h-[100px] rounded-[50%]'
                        alt='웨딩홀'
                        src='/images/hall.jpeg'
                    />
                </div>
                <div className='flex-col basis-1/2 items-center justify-center '>
                    <h3 className='font-arita text-center mb-2'>
                        단독 이벤트 홀
                    </h3>
                    <p className='font-SunBatang text-[13px]'>
                        본 예식은 단독 이벤트 홀에서 이뤄집니다.
                    </p>
                </div>
            </div>
            {/* 연회장 */}
            <div className='mb-8 flex justify-around items-center'>
                <div className='basis-1/4'>
                    <img
                        className='w-[100px] h-[100px] rounded-[50%]'
                        alt='웨딩홀'
                        src='/images/resturant.jpeg'
                    />
                </div>
                <div className='flex-col basis-1/2 items-center justify-center '>
                    <h3 className='font-arita text-center mb-2'>연회장</h3>
                    <p className='font-SunBatang text-[13px]'>
                        예식장 바로 옆에 연회장이 마련되어 있습니다.
                        <div></div>
                        정성스럽게 음식들을 준비했으니 마음껏 즐겨주시길
                        바라겠습니다.
                    </p>
                </div>
            </div>

            {/* 주차장 */}
            <div className='mb-8 flex justify-around items-center'>
                <div className='basis-1/4'>
                    <img
                        className='w-[100px] h-[100px] rounded-[50%]'
                        alt='웨딩홀'
                        src='/images/car.jpeg'
                    />
                </div>
                <div className='flex-col basis-1/2 items-center justify-center '>
                    <h3 className='font-arita text-center mb-2'>주차장</h3>
                    <p className='font-SunBatang text-[13px]'>
                        지상, 지하 주차장이 마련되어 있습니다. 동시 주차
                        1,000대까지 가능합니다
                    </p>
                </div>
            </div>
            <div className='text-center '>
                <span className='font-naum text-[10px]'>
                    * 예식과 더불어 여유있는 2시간 30분의 식사시간 주어집니다.
                </span>
                <span className='block font-naum text-[10px]'>
                    하객 분들은 2시간 무료주차이며, 초과 시 30분당 500원씩
                    발생합니다
                </span>
            </div>
        </div>
    );
}

// *
// 하객 분들은 2시간 무료주차이며, 초과 시 30분당 500원씩
// 발생합니다

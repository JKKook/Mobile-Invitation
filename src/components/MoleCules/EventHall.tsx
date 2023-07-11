import React from 'react';

export default function EventHall() {
    return (
        <div
            data-aos='fade-up'
            data-aos-duration='3000'
            className='my-32 mx-10'
        >
            <div className='flex-col items-center text-center justify-center mb-[5rem]'>
                <h3 className='italic text-gray-600 font-naum pb-6 mb-6'>
                    INFORMATION
                </h3>
                <h3 className='text-xl text-gray-600 font-seoul border-b-2 pb-6 font-bold'>
                    저희 결혼식을 소개합니다
                </h3>
            </div>

            {/* 웨딩홀 */}
            <div className='mb-12 flex justify-around items-center'>
                <div className='basis-[25%]'>
                    <img
                        className='w-full rounded-[50%] '
                        alt='웨딩홀'
                        src='/images/hall.jpg'
                    />
                </div>
                <div className='flex-col pl-2 basis-2/3 items-center justify-center'>
                    <h3 className='font-seoul pl-[4%] pb-[2%] text-sm text-slate-900'>
                        단독 이벤트 홀
                    </h3>
                    <div className='font-suite flex items-center text-[13px] h-[10%] break-keep rounded-xl bg-slate-100 p-4'>
                        본 예식은 단독 이벤트 홀에서 이뤄집니다.
                    </div>
                </div>
            </div>

            {/* 연회장 */}
            <div className='mb-12 flex justify-around items-center'>
                <div className='basis-[25%]'>
                    <img
                        className='w-full rounded-[50%]  '
                        alt='연회장'
                        src='/images/resturant.jpg'
                    />
                </div>
                <div className='flex-col pl-2 basis-2/3 items-center justify-center '>
                    <h3 className='font-seoul pl-[4%] pb-[2%] text-sm text-slate-900'>
                        연회장
                    </h3>
                    <div className='font-suite text-[13px] flex justify-center items-center h-[10%] break-keep rounded-xl bg-slate-100 p-4'>
                        예식장 바로 옆에 연회장이 마련되어 있습니다. 정성스럽게
                        음식들을 준비했으니 마음껏 즐겨주시길 바라겠습니다.
                    </div>
                </div>
            </div>

            {/* 주차장 */}
            <div className='mb-12 flex justify-around items-center'>
                <div className='basis-[25%]'>
                    <img
                        className='w-full rounded-[50%]'
                        alt='주차장'
                        src='/images/car.jpg'
                    />
                </div>
                <div className='flex-col pl-2 basis-2/3 items-center justify-center '>
                    <h3 className='font-seoul pl-[4%] pb-[2%] text-sm text-slate-900'>
                        주차장
                    </h3>
                    <div className='font-suite text-[13px] flex justify-center items-center h-[10%] break-keep rounded-xl bg-slate-100 p-4'>
                        지상, 지하 주차장이 마련되어 있습니다. 동시 주차
                        1,000대까지 가능합니다
                    </div>
                </div>
            </div>
            <div className='text-center '>
                <span className='font-naum text-[12px]'>
                    * 예식과 더불어 여유있는 2시간 30분의 식사시간 주어집니다.
                </span>
                <span className='block font-naum text-[12px]'>
                    하객 분들은 2시간 무료주차이며, 초과 시 30분당 500원씩
                    발생합니다
                </span>
            </div>
        </div>
    );
}

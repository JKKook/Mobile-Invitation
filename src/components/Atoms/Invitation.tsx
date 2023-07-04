import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Invitation() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='my-32 mx-10'>
            <div
                data-aos='fade-up'
                data-aos-duration='3000'
                className='flex-col '
            >
                <div className='flex-col items-center text-center justify-center mb-10'>
                    <h3 className='italic text-gray-600 font-naum pb-6 mb-6'>
                        INVITATION
                    </h3>
                    <h3 className='text-xl text-gray-600 font-seoul border-b-2 pb-6 font-bold'>
                        소중한 분들을 초대합니다
                    </h3>
                </div>
                <div className='relative flex justify-center px-10 text-center'>
                    <span
                        style={{ display: 'flex' }}
                        className='flex-col italic font-seoul text-stone-500 text-ms gap-2'
                    >
                        서로가 마주보며
                        <div></div>
                        다져온 사랑을
                        <div></div>
                        이제 함께 한 곳을 바라보며
                        <div></div>
                        걸어갈 수 있는 큰 사랑으로
                        <div></div>
                        키우고자 합니다.
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        저희 두 사람이
                        <div></div>
                        사랑의 이름으로
                        <div></div>
                        지켜나갈 수 있도록
                        <div></div>앞 날을 축복해 주시면
                        <div></div>
                        감사하겠습니다.
                    </span>
                </div>
            </div>
            {/* 구분선 */}
            <div className='relative'>
                <div className='relative p-[5rem]'>
                    <div className='border-l-2 h-[60px] translate-x-[50%]'></div>
                </div>
                <div>
                    <div className='flex justify-center items-center font-arita p-2'>
                        <span className='font-extrabold font-seoul'>
                            이인규
                        </span>
                        ·
                        <span className='font-extrabold font-seoul'>이수민</span>
                        <span className='font-extrabold font-seoul'>의</span>
                        <span className='pl-2 text-sm text-gray-800'>장남</span>
                        <span className='pl-2 text-2xl font-SunBatang translate-y-[-10%] text-gray-600'>
                            종일
                        </span>
                    </div>
                    <div className='flex justify-center items-center font-arita p-2'>
                        <span className='font-extrabold font-seoul'>이광택</span>
                        ·
                        <span className='font-extrabold font-seoul'>조동순</span>
                        <span className='font-extrabold font-seoul'>의</span>
                        <span className='pl-2 text-sm text-gray-800'>차녀</span>
                        <span className='pl-2 text-2xl font-SunBatang translate-y-[-10%] text-gray-600'>
                            효민
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

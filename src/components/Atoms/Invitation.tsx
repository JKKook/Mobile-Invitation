import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Invitation() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div
            data-aos='fade-up'
            data-aos-duration='3000'
            className='flex-col my-32 mx-10'
        >
            <div className='flex justify-center mb-10 text-2xl'>
                <h3 className='text-gray-600 font-naum border-b-2 pb-6 font-bold'>
                    INVITATION
                </h3>
            </div>
            <div className='relative flex justify-center px-10 text-center'>
                <span
                    style={{ display: 'flex' }}
                    className='flex-col font-naum text-ms gap-2'
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
                    <div></div>
                    앞날을 축복해 주시면
                    <div></div>
                    감사하겠습니다.
                </span>
            </div>
        </div>
    );
}

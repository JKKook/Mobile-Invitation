import Link from 'next/link';
import Script from 'next/script';
import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

export default function KakaoShare() {
    const handleShareBtn = () => {
        const url = 'https://wedding-oct.vercel.app';
        const apiKey = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
        // ** Property 'Kakao' does not exist on type 'Window & typeof globalThis'.
        // global.d.ts 타입 규정 => include
        if (window.Kakao) {
            const kakao = window.Kakao;

            if (!kakao.isInitialized()) {
                kakao.init(apiKey);
            }

            kakao.Share.createDefaultButton({
                container: '#kakaotalk-sharing-btn',
                objectType: 'feed',
                content: {
                    title: '종일 ♥︎ 효민 결혼식',
                    description:
                        '#결혼식 #부천 #삼산월드컨벤션 #제주 #오션스위츠',
                    imageUrl:
                        'https://cdn.pixabay.com/photo/2017/08/06/20/11/wedding-2595862_1280.jpg',
                    link: {
                        // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
                        mobileWebUrl: url,
                        webUrl: url,
                    },
                },
                buttons: [
                    {
                        title: '웹으로 보기',
                        link: {
                            mobileWebUrl: url,
                            webUrl: url,
                        },
                    },
                    {
                        title: '앱으로 보기',
                        link: {
                            mobileWebUrl: url,
                            webUrl: url,
                        },
                    },
                ],
            });
        }
    };

    useEffect(() => {
        handleShareBtn();
    }, []);

    return (
        <div className='bg-gray-900'>
            <div className='flex-col justify-center items-center p-4'>
                <div className='flex-col text-center font-suite italic text-gray-300 text-sm p-6'>
                    <p className='italic text-gray-600 font-naum mb-6'>
                        Thanks To
                    </p>
                    <p>언제나 곁을 따뜻하게 지켜주신</p>
                    <div></div>
                    <p>양가 부모님과 사랑으로 응원해주시는</p>
                    <div></div>
                    <p>모든 분들께 감사드립니다.</p>
                </div>
                <div className='flex justify-center items-center text-center pb-4'>
                    <Link
                        href='#'
                        onClick={handleShareBtn}
                        id='kakaotalk-sharing-btn'
                    >
                        <img
                            className='w-[35px] h-auto'
                            src='https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png'
                            alt='카카오톡 공유 보내기 버튼'
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}

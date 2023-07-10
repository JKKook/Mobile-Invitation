import Link from 'next/link';
import Script from 'next/script';
import React from 'react';
import { useEffect } from 'react';

export default function KakaoShare() {
    const handleShareBtn = () => {
        const url = 'https://wedding-oct.vercel.app';
        // const apiKey = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
        // ** Property 'Kakao' does not exist on type 'Window & typeof globalThis'.
        // global.d.ts 타입 규정 => include
        if (window.Kakao) {
            const kakao = window.Kakao;

            if (!kakao.isInitialized()) {
                kakao.init('7d083f348ef760106a2a3cf39bef64b6');
            }

            kakao.Share.createDefaultButton({
                container: '#kakaotalk-sharing-btn',
                objectType: 'feed',
                content: {
                    title: '종일 ♥︎ 효민 결혼식',
                    description:
                        '#결혼식 #부천 #삼산월드컨벤션 #제주 #오션스위츠',
                    imageUrl: '/images/real1.jpeg',
                    link: {
                        // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
                        mobileWebUrl: url,
                        webUrl: url,
                    },
                },
                social: {
                    likeCount: 286,
                    commentCount: 45,
                    sharedCount: 845,
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
        <div>
            <Link
                className='rounded-[50%]'
                onClick={handleShareBtn}
                id='kakaotalk-sharing-btn'
                href='javascript:;'
            >
                <img
                    src='https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png'
                    alt='카카오톡 공유 보내기 버튼'
                />
            </Link>
        </div>
    );
}

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
                        'https://pixabay.com/link/?ua=cd3%3Dimage%26cd7%3Dko%253A%25EA%25B2%25B0%25ED%2598%25BC%253AKOR%26ec%3Dapi_ad%26ea%3Dnavigate%26el%3Dgetty%26tid%3DUA-20223345-1%26dr%3Dhttps%253A%252F%252Fpixabay.com%252Fko%252Fimages%252Fsearch%252Fwedding%252F%253Fpagi%253D3&sp=%2524%3Dadvertisement_clicked%26user_action%3Dnavigate%26ad_partner%3Dgetty%26ad_content%3Dapi_ad%26ad_type%3D%26media_type%3Dphoto%26media_subtype%3D%26media_id%3D&next=https%3A%2F%2Fwww.istockphoto.com%2Fphoto%2Fthe-bride-and-groom-use-the-little-finger-together-lovely-couple-hold-hand-with-gm1303189272-394718470%3Futm_source%3Dpixabay%26utm_medium%3Daffiliate%26utm_campaign%3DSRP_image_sponsored%26utm_content%3Dhttps%253A%252F%252Fpixabay.com%252Fko%252Fimages%252Fsearch%252F%2525EA%2525B2%2525B0%2525ED%252598%2525BC%252F%26utm_term%3D%25EA%25B2%25B0%25ED%2598%25BC&hash=a07c231bcda9d9ba5a5a3c57961437a3b3de2e84&=',
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
                        onClick={handleShareBtn}
                        id='kakaotalk-sharing-btn'
                        href='javascript:;'
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

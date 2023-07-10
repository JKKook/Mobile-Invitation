import React from 'react';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import { IoIosClose } from 'react-icons/io';

export default function GalleryImage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isResizing, setIsResizing] = useState({ width: 0, height: 0 });

    const images = [
        '/images/wedding1.jpg',
        '/images/wedding4.jpeg',
        '/images/wedding3.jpeg',
        '/images/wedding5.jpeg',
        '/images/wedding2.jpeg',
        '/images/wedding7.jpeg',
        '/images/wedding12.jpeg',
        '/images/wedding9.jpeg',
        '/images/wedding10.jpeg',
        '/images/wedding11.jpeg',
    ];

    const handleImageClick = (image: string) => {
        if (image === '/images/wedding10.jpeg') {
            setSelectedImage('/images/real2.jpeg');
        } else if (image === '/images/wedding11.jpeg') {
            setSelectedImage('/images/real1.jpeg');
        } else {
            setSelectedImage(image);
        }
    };

    /** 모달창, 바깥과 x버튼 클릭 시 닫힘 */
    const handleModalClose = () => {
        setSelectedImage(null);
    };

    // Modal에서 스크린리더에서 이미지가 아닌 다른 부분까지 읽는 에러 해결
    if (typeof window !== 'undefined') {
        Modal.setAppElement('#__next');
    }

    return (
        // 이미지 호버 시 , 이미지 클릭 시 이벤트 발생
        <div className='grid grid-cols-2 gap-3 place-items-center'>
            {images.map((image) => (
                <motion.img
                    key={image}
                    src={image}
                    alt='Gallery'
                    className='rounded-md cursor-pointer mw-[200px] mh-[200px] w-full h-full'
                    onClick={() => handleImageClick(image)}
                    whileHover={{
                        scale: 1.1,
                        opacity: 0.3,
                        transition: { duration: 0.3 },
                    }}
                />
            ))}

            <Modal
                isOpen={selectedImage !== null}
                onRequestClose={handleModalClose}
                ariaHideApp={false}
                style={{
                    content: {
                        width: '80%', // 모달창의 너비
                        height: '80%', // 모달창의 높이
                        top: '50%', // 모달창의 수직 위치 (중앙 정렬)
                        left: '50%', // 모달창의 수평 위치 (중앙 정렬)
                        transform: 'translate(-50%, -50%)', // 모달창을 수평 및 수직으로 정확히 가운데로 위치시키는 변형
                        // overflow: 'hidden',
                    },
                }}
            >
                {selectedImage && (
                    // 해상도에 따른 이미지 반응형 작업
                    <img
                        className='mw-[480px] h-auto'
                        src={selectedImage}
                        alt='select-image'
                    />
                )}
                <button
                    className='absolute top-5 right-5'
                    onClick={handleModalClose}
                >
                    <IoIosClose className='text-5xl text-rose-300 hover:text-rose-600' />
                </button>
                <div className='p-4 text-center text-sm text-slate-600'>
                    <span className='italic font-seoul'>
                        우리의 행복한 추억이 담긴 사진입니다
                    </span>
                    <div className='italic flex-col gap-2 p-6 font-seoul text-slate-400 text-[12px]'>
                        서로의 인생을 살아오며,
                        <div></div>두 사람이 함께한지 육년 째,
                        <div></div>
                        서로 덕분에 가장 행복하게 웃었고,
                        <div></div>그 누구보다 서로를 아껴주며
                        <div></div>
                        행복하게 지내고 있습니다.
                        <div></div>
                        <div></div>
                        함께 할 내일이 끊임없이 설레기에
                        <div></div>
                        연애의 마침표,
                        <div></div>
                        결혼을 하고자 합니다.
                        <div></div>
                        많은 응원과 격려 부탁드립니다.
                    </div>
                </div>
            </Modal>
        </div>
    );
}

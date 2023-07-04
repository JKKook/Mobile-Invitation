import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import { IoIosClose } from 'react-icons/io';

export default function GalleryImage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isClosedModal, setIsClosedModal] = useState<boolean>(false);

    // images
    const images = [
        '/images/wedding1.jpeg',
        '/images/wedding4.jpeg',
        '/images/wedding3.jpeg',
        '/images/wedding5.jpeg',
        '/images/wedding2.jpeg',
        '/images/wedding7.jpeg',
    ];

    const handleImageClick = (image: string) => {
        setSelectedImage(image);
    };

    const handleModalClose = () => {
        setSelectedImage(null);
    };

    // Modal에서 스크린리더에서 이미지가 아닌 다른 부분까지 읽는 에러 해결
    if (typeof window !== 'undefined') {
        Modal.setAppElement('#__next');
    }

    return (
        // 이미지 호버 시 , 이미지 클릭 시 이벤트 발생
        <div className='grid grid-cols-2 gap-6'>
            {images.map((image) => (
                <motion.img
                    key={image}
                    src={image}
                    alt='Gallery'
                    className='rounded-md cursor-pointer h-[250px] w-[200px]'
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
            >
                {selectedImage && (
                    <img
                        className='w-full h-full'
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
            </Modal>
        </div>
    );
}

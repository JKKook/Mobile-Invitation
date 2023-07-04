import React from 'react';
import GalleryImage from '../Atoms/GalleryImage';

export default function Gallery() {
    return (
        <div className='my-32 mx-10'>
            <div className='flex-col items-center text-center justify-center mb-[5rem]'>
                <h3 className='italic text-gray-600 font-naum pb-6 mb-6'>
                    GALLERY
                </h3>
                <h3 className='text-xl text-gray-600 font-seoul border-b-2 pb-6 font-bold'>
                    소중한 순간
                </h3>
            </div>
            <GalleryImage />
        </div>
    );
}

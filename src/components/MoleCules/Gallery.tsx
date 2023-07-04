import React from 'react';
import GalleryImage from '../Atoms/GalleryImage';

export default function Gallery() {
    return (
        <div className='my-32 mx-10'>
            <div className='flex justify-center mb-10 text-2xl'>
                <h3 className='text-gray-600 font-naum border-b-2 pb-6 font-bold'>
                    GALLERY
                </h3>
            </div>
            <GalleryImage />
        </div>
    );
}

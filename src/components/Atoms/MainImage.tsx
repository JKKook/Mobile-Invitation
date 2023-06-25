import Image from 'next/image';
import React from 'react';
import wedding from '../../../public/images/wedding6.jpeg';

export default function MainImage() {
    return (
        <div>
            <Image src={wedding} alt='main-image' width={480} />
            <span>우리 결혼합니다</span>
            <span>2023. 10. 07.</span>
        </div>
    );
}

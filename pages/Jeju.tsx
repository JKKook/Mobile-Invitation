import React from 'react';
import Gallery from '../src/components/MoleCules/Gallery';
import Sponsor from '../src/components/MoleCules/Sponsor';
import HowToComeJeju from '../src/components/MoleCules/HowToComeJeju';
import JejuMainImage from '../src/components/Atoms/JejuMainImage';
import KakaoShare from '../src/components/Atoms/KakaoShare';

export default function Jeju() {
    return (
        <div className='flex justify-center bg-black'>
            <div className='mw-[480px] w-[480px]  bg-white'>
                <JejuMainImage />
                <HowToComeJeju />
                <Sponsor />
                <Gallery />
                <KakaoShare />
            </div>
        </div>
    );
}

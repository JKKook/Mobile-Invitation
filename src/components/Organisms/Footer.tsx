import React from 'react';
import Gallery from '../MoleCules/Gallery';
import HowToCome from '../MoleCules/HowToCome';
import Sponsor from '../MoleCules/Sponsor';
import KakaoShare from '../Atoms/KakaoShare';

export default function Footer() {
    return (
        <>
            <HowToCome />
            <Sponsor />
            <Gallery />
            <KakaoShare />
        </>
    );
}

import React from 'react';
import Gallery from '../src/components/MoleCules/Gallery';
import Sponsor from '../src/components/MoleCules/Sponsor';
import HowToComeJeju from '../src/components/MoleCules/HowToComeJeju';
import JejuMainImage from '../src/components/Atoms/JejuMainImage';

export default function Jeju() {
    return (
        <>
            <JejuMainImage />
            <HowToComeJeju />
            <Sponsor />
            <Gallery />
        </>
    );
}

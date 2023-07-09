import React from 'react';
import Template from '../src/components/Templates/Template';
import { useEffect } from 'react';
import { useState } from 'react';

const Home = () => {
    // hydration ERROR
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className='flex justify-center bg-black '>
            <div className='mw-[480px] w-[480px]  bg-white'>
                <Template />
            </div>
        </div>
    );
};

export default Home;

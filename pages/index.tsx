import React from 'react';
import Template from '@/src/components/Templates/Template';
import { useEffect } from 'react';
import { useState } from 'react';

const Home = () => {
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'black',
            }}
        >
            <div style={{ maxWidth: '480px', backgroundColor: 'white' }}>
                <Template />
            </div>
        </div>
    );
};

export default Home;

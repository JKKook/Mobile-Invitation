import React from 'react';
import Template from '@/src/components/Templates/Template';

const Home = () => {
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

import React from 'react';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import SponDesc from './SponDesc';

interface ToggleProps {
    toggle?: boolean;
}

export default function SponToggle() {
    const [toggle, setToggle] = useState<boolean>(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <>
            <div className='p-8 relative flex-col justify-center'>
                {/* Toggle */}

                <div className='flex items-center justify-center'>
                    <IoIosArrowDown className='mr-2' />
                    <div
                        className='flex text-[18px] justify-start cursor-pointer font-suite text-md w-full'
                        onClick={handleToggle}
                    >
                        신랑 측
                    </div>
                </div>

                {/* 재사용 되는 부분 */}
                <SponDesc
                    toggle={toggle}
                    bank='신한'
                    account='110-209-080220'
                    family='아버지'
                    name='이인규'
                />
                <SponDesc
                    toggle={toggle}
                    bank='신한'
                    account='110-209-080220'
                    family='아버지'
                    name='이인규'
                />
                <SponDesc
                    toggle={toggle}
                    bank='신한'
                    account='110-209-080220'
                    family='아버지'
                    name='이인규'
                />
            </div>
        </>
    );
}

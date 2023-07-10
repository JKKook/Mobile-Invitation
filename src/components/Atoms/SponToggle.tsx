import React from 'react';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import SponDesc from './SponDesc';

export default function SponToggle() {
    const [toggle, setToggle] = useState<boolean>(false);
    const [anotherToggle, setAnotherToggle] = useState<boolean>(false);

    const handleToggle = () => {
        setToggle((prev) => !prev);
    };

    const anotherHandleToggle = () => {
        setAnotherToggle((prev) => !prev);
    };

    return (
        <>
            <div className='select-none p-8 relative flex-col justify-center'>
                <div className='pb-4'>
                    <div className='flex items-center justify-center'>
                        <div
                            className={`flex text-[18px] rounded-md p-2 bg-zinc-100 hover:bg-zinc-300 justify-center cursor-pointer font-SunBatang text-md w-full transition duration-300 
                            }`}
                            onClick={handleToggle}
                        >
                            신랑 측
                            {toggle ? (
                                <IoIosArrowDown className='ml-2 mt-2 animate-bounce' />
                            ) : (
                                <IoIosArrowUp className='ml-2 mt-2 animate-bounce' />
                            )}
                        </div>
                    </div>
                    {toggle && (
                        <>
                            <SponDesc
                                toggle={toggle}
                                bank='농협'
                                account='59502121768'
                                family='아버지'
                                name='이인규'
                            />
                            <SponDesc
                                toggle={toggle}
                                bank='농협'
                                account='110612019975'
                                family='어머니'
                                name='이수민'
                            />
                            <SponDesc
                                toggle={toggle}
                                bank='신한'
                                account='110300015355'
                                family='신 랑'
                                name='이종일'
                            />
                        </>
                    )}
                </div>

                <div className='mt-6 flex items-center justify-center'>
                    <div
                        className={`flex text-[18px] rounded-md p-2 bg-rose-100 hover:bg-rose-200 justify-center cursor-pointer font-SunBatang text-md w-full transition duration-300 ${
                            anotherToggle ? 'ease-in' : 'ease-out'
                        }`}
                        onClick={anotherHandleToggle}
                    >
                        신부 측
                        {anotherToggle ? (
                            <IoIosArrowDown className='ml-2 mt-2 animate-bounce' />
                        ) : (
                            <IoIosArrowUp className='ml-2 mt-2 animate-bounce' />
                        )}
                    </div>
                </div>

                {/* 재사용 되는 부분 */}
                {anotherToggle && (
                    <>
                        <SponDesc
                            anotherToggle={anotherToggle}
                            bank='신협중앙회'
                            account='132028205826'
                            family='아버지'
                            name='이광택'
                        />
                        <SponDesc
                            anotherToggle={anotherToggle}
                            bank='신한'
                            account='110305648044'
                            family='신 부'
                            name='이효민'
                        />
                    </>
                )}
            </div>
        </>
    );
}

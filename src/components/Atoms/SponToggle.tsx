import React from 'react';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import SponDesc from './SponDesc';

export default function SponToggle() {
    const [toggle, setToggle] = useState<boolean>(false);
    const [anotherToggle, setAnotherToggle] = useState<boolean>(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    const anotherHandleToggle = () => {
        setAnotherToggle(!anotherToggle);
    };

    return (
        <>
            <div className='select-none p-8 relative flex-col justify-center'>
                <div className='pb-4'>
                    <div className='flex items-center justify-center'>
                        <div
                            className='flex text-[18px] rounded-md p-2 bg-zinc-100 hover:bg-zinc-300 justify-center cursor-pointer font-suite text-md w-full'
                            onClick={handleToggle}
                        >
                            신랑 측
                            {toggle ? (
                                <IoIosArrowDown className='translate-x-[50%] translate-y-[25%]' />
                            ) : (
                                <IoIosArrowUp className='translate-x-[50%] translate-y-[25%]' />
                            )}
                        </div>
                    </div>
                    {toggle && (
                        <div>
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
                                account='110-209-080220'
                                family='신 랑'
                                name='이종일'
                            />
                        </div>
                    )}
                </div>

                <div className='mt-6 flex items-center justify-center'>
                    <div
                        className='flex text-[18px] rounded-md p-2 bg-rose-100 hover:bg-rose-200 justify-center cursor-pointer font-suite text-md w-full'
                        onClick={anotherHandleToggle}
                    >
                        신부 측
                        {anotherToggle ? (
                            <IoIosArrowDown className='translate-x-[50%] translate-y-[25%]' />
                        ) : (
                            <IoIosArrowUp className='translate-x-[50%] translate-y-[25%]' />
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
                            account='110-209-080220'
                            family='신 부'
                            name='이효민'
                        />
                    </>
                )}
            </div>
        </>
    );
}

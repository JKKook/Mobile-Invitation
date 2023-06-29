import React from 'react';

interface SponToggleProps {
    toggle?: boolean;
    bank?: string;
    account?: string;
    family?: string;
    name?: string;
}

export default function SponDesc({
    toggle,
    bank,
    account,
    family,
    name,
}: SponToggleProps) {
    return (
        <>
            <div
                className={`border p-4 mt-4 mb-8 text-sm font-naum ${
                    toggle
                        ? 'transform translate-y-2 opacity-100'
                        : 'transform -translate-y-0 opacity-0'
                } transition-all duration-300`}
            >
                <div className='flex justify-between'>
                    <div className='flex justify-around'>
                        <span>{bank}</span>
                        <span className='text-zinc-300 px-2'>|</span>
                        <span>{account}</span>
                    </div>
                    <div>ClipBoard</div>
                </div>
                <div className='mt-4'>
                    <span>{family}</span>
                    <span className='pl-2 text-[16px] font-bold'>{name}</span>
                </div>
            </div>
        </>
    );
}

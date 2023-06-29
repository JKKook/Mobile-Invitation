import React from 'react';

interface SponToggleProps {
    toggle?: boolean;
    anotherToggle?: boolean;
    bank?: string;
    account?: string;
    family?: string;
    name?: string;
}

export default function SponDesc({
    toggle,
    anotherToggle,
    bank,
    account,
    family,
    name,
}: SponToggleProps) {
    return (
        <>
            <div
                className={`bg-stone-100 border p-4 mt-4 mb-4 text-sm font-naum`}
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

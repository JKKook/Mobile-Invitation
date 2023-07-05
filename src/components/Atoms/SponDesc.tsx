import React from 'react';
import { useRef, useState } from 'react';
import { BiCopy } from 'react-icons/bi';
import { CopyToClipboard } from 'react-copy-to-clipboard';

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
    bank,
    account,
    family,
    name,
}: SponToggleProps) {
    const textRef = useRef<HTMLSpanElement>(null);

    const [copyText, setCopyText] = useState<String>('');
    const [copied, setCopied] = useState<boolean>(false);

    const handleCopy = () => {
        if (copied) alert('계좌번호가 성공적으로 복사되었습니다');
        setCopied(true);
    };

    return (
        <>
            <div
                className={`bg-stone-100 border p-4 mt-4 mb-4 text-sm font-naum`}
            >
                <div className='flex justify-between'>
                    <div className='flex justify-around'>
                        <span>{bank}</span>
                        <span className='text-gray-400 px-2'>|</span>
                        <span ref={textRef}>{account}</span>
                    </div>
                    <div className='flex items-center'>
                        <CopyToClipboard
                            text={account || ''}
                            onCopy={handleCopy}
                        >
                            <button className='mr-1 text-[12px] hover:text-red-300'>
                                <BiCopy className='ml-4 cursor-pointer hover:text-red-300' />
                                {copied ? 'Copied!' : 'Copy'}
                            </button>
                        </CopyToClipboard>
                    </div>
                </div>
                <div className='mt-4'>
                    <span>{family}</span>
                    <span className='pl-2 text-[16px] font-bold'>{name}</span>
                </div>
            </div>
        </>
    );
}

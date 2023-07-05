import React from 'react';
import { useRef } from 'react';
import { BiCopy } from 'react-icons/bi';

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

    const handleCopyText = async () => {
        if (textRef.current) {
            const textValue = account;

            try {
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    await navigator.clipboard.writeText(textValue as string);
                    alert('계좌번호가 복사 되었습니다');
                } else {
                    const textArea = document.createElement('textarea');
                    textArea.value = textValue as string;
                    document.body.appendChild(textArea);
                    textArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textArea);
                    alert('계좌번호가 복사되었습니다.');
                }
            } catch (error) {
                alert(
                    '계좌번호를 복사할 수 없습니다, 잠시 뒤에 다시 시도해주세요',
                );
            }
        }
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
                    <div onClick={handleCopyText} className='flex items-center'>
                        <button className='mr-1 text-[12px] hover:text-red-300'>
                            copy
                        </button>
                        <BiCopy className='cursor-pointer hover:text-red-300' />
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

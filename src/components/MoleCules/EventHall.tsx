import Image from 'next/image';
import React from 'react';
import hall from '../../../public/images/hall.jpeg';
import resturant from '../../../public/images/resturant.jpeg';

export default function EventHall() {
    return (
        <div>
            <h1>웨딩 홀 정보</h1>
            <div className='flex'>
                <div>
                    <Image src={hall} alt='웨딩홀' />
                </div>
                <div>
                    <h3>단독 이벤트 홀</h3>
                    <p>
                        본 예식은 단독 이벤트 홀에서 이뤄지므로, 찾는 수고를
                        하실 필요 없습니다
                    </p>
                </div>
            </div>
            <div className='flex'>
                <div className='rounded-sm'>
                    <Image src={resturant} alt='연회장' />
                </div>
                <div>
                    <h3>연회장</h3>
                    <p>
                        예식장 바로 옆에 연회장이 마련되어 있습니다. 정성스럽게
                        음식들을 준비했으니 마음껏 즐겨주시길 바라겠습니다
                    </p>
                </div>
            </div>
        </div>
    );
}

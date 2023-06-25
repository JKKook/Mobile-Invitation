import React from 'react';

export default function SponToggle() {
    return (
        <>
            <div>
                <h1>마음 전하실 곳</h1>
                {/* Toggle */}
                <button>신랑 측 계좌번호</button>
                <div>
                    <span>은행명</span>
                    <span>계좌번호</span>
                    <div>ClipBoard</div>
                    <p>성함</p>
                </div>
            </div>
            <div>
                <h1>마음 전하실 곳</h1>
                <button>신부 측 계좌번호</button>
                <div>
                    <span>은행명</span>
                    <span>계좌번호</span>
                    <div>ClipBoard</div>
                    <p>성함</p>
                </div>
            </div>
        </>
    );
}

import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

export default function HallMap() {
    const mapElement = useRef(null);

    useEffect(() => {
        const { naver } = window;
        if (!mapElement || naver) return;

        // 지도에 표시할 위치의 위도, 경도
    }, []);

    return (
        <div>
            <h1>네이버 지도</h1>
        </div>
    );
}

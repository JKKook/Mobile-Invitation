import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

const Document = () => {
    return (
        <Html lang='ko'>
            <Head>
                <meta charSet='utf-8' />
            </Head>
            <Script
                strategy='beforeInteractive'
                src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`}
            ></Script>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;

import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
    return (
        <Html lang='ko'>
            <Head>
                <meta charSet='utf-8' />
                <link rel='stylesheet' href='/global.css' />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;

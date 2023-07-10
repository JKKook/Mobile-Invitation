import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
const Document = () => {
    return (
        <Html lang='ko'>
            <Head />
            <body>
                <Main />
                <NextScript />
                <Script
                    src='https://developers.kakao.com/sdk/js/kakao.js'
                    strategy='beforeInteractive'
                />
            </body>
        </Html>
    );
};

export default Document;

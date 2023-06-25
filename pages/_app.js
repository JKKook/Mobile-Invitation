import React from 'react';
import NextNProgress from 'nextjs-progressbar';
import RootLayout from '../.history/pages/layout_20230624160827';

const App = ({ Component, pageProps }) => {
    return (
        <RootLayout>
            <NextNProgress />
            <Component {...pageProps} />
        </RootLayout>
    );
};

export default App;

import Home from '../../pages/index';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Home />
            <>{children}</>
        </>
    );
}

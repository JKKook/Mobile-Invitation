// These styles apply to every route in the application
import './global.css';
import Home from './index';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Home />
            <div>{children}</div>
        </>
    );
}

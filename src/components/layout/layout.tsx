// These styles apply to every route in the application
import '../../../styles/global.css';
import Home from '../../../pages/index';

// 공용 레이아웃을 만들 필요가 없음

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='ko'>
            <Home />
            <div>{children}</div>
        </html>
    );
}

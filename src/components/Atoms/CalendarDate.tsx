import { getDay, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';

export default function CalendarDate() {
    // 2023년 10월로 설정 ** 월은 0부터 시작
    const today = new Date(2023, 9, 1);
    const weekly = ['일', '월', '화', '수', '목', '금', '토'];
    const startOfCurrentMonth = startOfMonth(today);
    const endOfCurrentMonth = endOfMonth(today);

    const daysInMonth = eachDayOfInterval({
        start: startOfCurrentMonth,
        end: endOfCurrentMonth,
    });

    const getDayClassName = (date: Date) => {
        const day = getDay(date);

        let className = 'text-gray-800';

        if (day === 0) {
            // 일요일
            className += ' text-red-300';
        }

        if (date.getDate() === 7) {
            className =
                "scale-125 text-white bg-red-400 hover:bg-red-300 after:content-['🎔']";
        }

        return className;
    };

    return (
        <div className='select-none max-w-md mx-auto p-4'>
            <div className='font-kotra text-xl grid grid-cols-7 gap-1 mb-2'>
                {weekly.map((day) => (
                    <div key={day} className='text-center text-gray-600'>
                        {day}
                    </div>
                ))}
            </div>
            <div className='font-kotra grid grid-cols-7 gap-1'>
                {daysInMonth.map((day) => (
                    <div
                        key={day.toString()}
                        className={`p-2 text-center rounded ${getDayClassName(
                            day,
                        )}`}
                    >
                        {day.getDate()}
                    </div>
                ))}
            </div>
        </div>
    );
}

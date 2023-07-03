import {
    format,
    getDay,
    startOfMonth,
    endOfMonth,
    eachDayOfInterval,
    differenceInDays,
} from 'date-fns';
import { useState } from 'react';

const CalendarDate = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    // 2023년 10월로 설정 ** 월은 0부터 시작
    const today = new Date(2023, 9, 1);
    const startOfCurrentMonth = startOfMonth(today);
    const endOfCurrentMonth = endOfMonth(today);

    const daysInMonth = eachDayOfInterval({
        start: startOfCurrentMonth,
        end: endOfCurrentMonth,
    });

    const daysRemain = differenceInDays(new Date(), new Date(2023, 9, 7));

    // const handleDayClick = (date: Date) => {
    //     setSelectedDate(date);
    // };

    const getDayClassName = (date: Date) => {
        const day = getDay(date);

        let className = 'text-gray-800';

        if (day === 0) {
            // 일요일
            className += ' text-red-300';
        }

        // else if (day === 6) {
        //     // 토요일
        //     className = ' text-blue-200';
        // }

        // if (date.getDate() === selectedDate?.getDate()) {
        //     className += ' bg-blue-200';
        // }

        if (date.getDate() === 7) {
            console.log('date :', date.getDate() === 7);
            className =
                "scale-125 text-white bg-red-400 hover:bg-red-300 after:content-['🎔']";
        }

        return className;
    };

    return (
        <div className='select-none max-w-md mx-auto p-4'>
            <div className='font-kotra grid grid-cols-7 gap-1 mb-2'>
                {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
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
                        // onClick={() => handleDayClick(day)}
                    >
                        {day.getDate()}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CalendarDate;

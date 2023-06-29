import React, { useState, useCallback } from 'react';
export default function GptCalendar() {
    const today = {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        date: new Date().getDate(),
        day: new Date().getDay(),
    };

    const week = ['일', '월', '화', '수', '목', '금', '토'];

    const [selectedYear, setSelectedYear] = useState(today.year);
    const [selectedMonth, setSelectedMonth] = useState(today.month);
    const [selectedDate, setSelectedDate] = useState(today.date);
    const [selectedDay, setSelectedDay] = useState(today.day);

    const dateTotalCount = new Date(selectedYear, selectedMonth, 0).getDate();
    const firstDay = new Date(selectedYear, selectedMonth - 1, 1).getDay();

    const prevMonth = useCallback(() => {
        if (selectedMonth === 1) {
            setSelectedMonth(12);
            setSelectedYear(selectedYear - 1);
        } else {
            setSelectedMonth(selectedMonth - 1);
        }
    }, [selectedMonth, selectedYear]);

    const nextMonth = useCallback(() => {
        if (selectedMonth === 12) {
            setSelectedMonth(1);
            setSelectedYear(selectedYear + 1);
        } else {
            setSelectedMonth(selectedMonth + 1);
        }
    }, [selectedMonth, selectedYear]);

    const changeSelectMonth = useCallback(
        (e: React.ChangeEvent<HTMLSelectElement>) => {
            setSelectedMonth(Number(e.target.value));
        },
        [],
    );

    const changeSelectYear = useCallback(
        (e: React.ChangeEvent<HTMLSelectElement>) => {
            setSelectedYear(Number(e.target.value));
        },
        [],
    );

    const leadingBlankDates = Array.from({ length: firstDay }, (_, index) => (
        <li
            key={`leading-${index}`}
            className='w-1/7 h-12 border border-gray-300 flex justify-center items-center'
        >
            &nbsp;
        </li>
    ));

    const dates = Array.from(
        { length: dateTotalCount },
        (_, index) => index + 1,
    );

    const dateCells = dates.map((date) => (
        <li
            key={date}
            className={`w-1/7 h-12 border border-gray-300 flex justify-center items-center ${
                date === selectedDate ? 'bg-blue-500 text-white' : ''
            }`}
        >
            {date}
        </li>
    ));

    const trailingBlankDates = Array.from(
        { length: 35 - firstDay - dateTotalCount },
        (_, index) => (
            <li
                key={`trailing-${index}`}
                className='w-1/7 h-12 border border-gray-300 flex justify-center items-center'
            >
                &nbsp;
            </li>
        ),
    );

    const calendarDates = [
        ...leadingBlankDates,
        ...dateCells,
        ...trailingBlankDates,
    ];

    const formattedWeek = [...week.slice(1), week[0]]; // 요일 배열을 이동하여 일요일부터 시작하도록 변경

    return (
        <div className='relative w-480px h-500px'>
            <div className='absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-full'>
                <div className='flex justify-between mb-2'>
                    <div className='flex'>
                        <select
                            value={selectedYear}
                            onChange={changeSelectYear}
                            className='px-2 py-1 border border-gray-300 rounded mr-2'
                        >
                            {Array.from({ length: 21 }, (_, index) => (
                                <option
                                    key={`year-${index}`}
                                    value={today.year - 10 + index}
                                >
                                    {today.year - 10 + index}
                                </option>
                            ))}
                        </select>
                        <select
                            value={selectedMonth}
                            onChange={changeSelectMonth}
                            className='px-2 py-1 border border-gray-300 rounded'
                        >
                            {Array.from({ length: 12 }, (_, index) => (
                                <option
                                    key={`month-${index}`}
                                    value={index + 1}
                                >
                                    {index + 1}월
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <button
                            onClick={prevMonth}
                            className='px-4 py-2 mr-2 bg-blue-500 text-white rounded'
                        >
                            이전 달
                        </button>
                        <button
                            onClick={nextMonth}
                            className='px-4 py-2 bg-blue-500 text-white rounded'
                        >
                            다음 달
                        </button>
                    </div>
                </div>
                <div className='flex w-full text-center mb-2'>
                    {formattedWeek.map((day) => (
                        <div
                            key={day}
                            className='w-1/7 h-12 border border-gray-300 bg-gray-100 flex justify-center items-center'
                        >
                            {day}
                        </div>
                    ))}
                </div>
                <ul className='grid grid-cols-7 gap-1'>
                    {calendarDates.map((dateCell, index) => (
                        <li
                            key={index}
                            className='w-1/7 h-12 border border-gray-300 flex justify-center items-center'
                        >
                            {dateCell}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

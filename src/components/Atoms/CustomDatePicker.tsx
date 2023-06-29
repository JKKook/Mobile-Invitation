import React, { useCallback, useState } from 'react';

export default function CustomDatePicker() {
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

    // 선택 연도, 달의 마지막 날짜
    const dateTotalCount = new Date(selectedYear, selectedMonth, 0).getDate();

    const prevMonth = useCallback(() => {
        // 이전 달 보기 버튼
        if (selectedMonth === 1) {
            setSelectedMonth(12);
            setSelectedYear(selectedYear - 1);
        } else {
            setSelectedMonth(selectedMonth - 1);
        }
    }, [selectedMonth]);

    const nextMonth = useCallback(() => {
        // 다음 달 보기 버튼
        if (selectedMonth === 12) {
            setSelectedMonth(1);
            setSelectedYear(selectedYear + 1);
        } else {
            setSelectedMonth(selectedMonth + 1);
        }
    }, []);

    // handleChangeMonth
    const changeSelectMonth = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMonth(Number(e.target.value));
    };

    const monthControl = useCallback(() => {
        // 달 선택 박스에서 고르기
        let monthArr = [];
        for (let i = 0; i < 12; i++) {
            monthArr.push(
                <option key={i + 1} value={i + 1}>
                    {i + 1}월
                </option>,
            );
        }

        return (
            <select onChange={changeSelectMonth} value={selectedMonth}>
                {monthArr}
            </select>
        );
    }, [selectedMonth]);

    const changeSelectYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedYear(Number(e.target.value));
    };

    const yearControl = useCallback(() => {
        let yearArr = [];

        // 10년 전후 컨트롤
        const startYear = today.year - 10;
        const endYear = today.year + 10;

        for (let i = startYear; i < endYear + 1; i++) {
            yearArr.push(
                <option key={i} value={i}>
                    {i}년
                </option>,
            );
        }

        return (
            <select onChange={changeSelectYear} value={selectedYear}>
                {yearArr}
            </select>
        );
    }, [selectedYear]);

    //
    const returnWeek = useCallback(() => {
        let weekArr = [];
        for (let i = 0; i < 7; i++) {
            weekArr.push(<div key={week[i]}>{week[i]}</div>);
        }
        return weekArr;
    }, []);

    const returnDate = useCallback(() => {
        let dateArr = [];
        for (let i = 1; i <= 30; i++) {
            dateArr.push(i);
        }

        let arr = [];
        for (let i = 0; i < 35; i++) {
            if (i > 4) {
                arr.push(<li key={dateArr[i - 5]}>{dateArr[i - 5]}</li>);
            } else {
                arr.push(<li key={dateArr[i - 5]}>{dateArr[i - 5]}</li>);
            }
        }
        return arr;
    }, []);

    return (
        <div className='relative'>
            <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[480px] h-[300px] m-auto px-[20px] py-[20px]  '>
                <div className='flex'>
                    <h3>
                        {yearControl()} {monthControl()}
                    </h3>
                    {/* <button onClick={prevMonth}>이전 달</button>
                <button onClick={nextMonth}>다음 달</button> */}
                </div>
                <div className='flex text-center w-[calc(480px / 7)]  list-none'>
                    {returnWeek()}
                </div>
                <div className='list-none'>{returnDate()}</div>
            </div>
        </div>
    );
}

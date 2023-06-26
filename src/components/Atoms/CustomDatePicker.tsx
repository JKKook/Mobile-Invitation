import React, { useState } from 'react';

const CustomDatePicker = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const dateString = event.target.value;
        const date = new Date(dateString);
        setSelectedDate(date);
    };

    const isDateActive = (date: Date): boolean => {
        const activeDate = new Date(2023, 9, 7); // 10월은 9로 표현되므로 월 인덱스는 9입니다.
        return date.toDateString() === activeDate.toDateString();
    };

    return (
        <div>
            <input
                type='date'
                value={
                    selectedDate ? selectedDate.toISOString().slice(0, 10) : ''
                }
                onChange={handleDateChange}
            />
            {selectedDate && (
                <div
                    className={`calendar ${
                        isDateActive(selectedDate) ? 'active' : ''
                    }`}
                >
                    {selectedDate.toDateString()}
                </div>
            )}
        </div>
    );
};

export default CustomDatePicker;

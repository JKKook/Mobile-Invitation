import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function CustomDatePicker() {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div>
            <h1>datePicker</h1>
        </div>
    );
}

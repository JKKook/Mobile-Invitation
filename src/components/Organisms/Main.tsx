import React from 'react';
import Greeting from '../MoleCules/Greeting';
import EventHall from '../MoleCules/EventHall';
import CustomDatePicker from '../Atoms/CustomDatePicker';

export default function Main() {
    return (
        <>
            <Greeting />
            <CustomDatePicker />
            <EventHall />
        </>
    );
}

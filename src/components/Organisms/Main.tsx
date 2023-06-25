import React from 'react';
import Greeting from '../MoleCules/Greeting';
import Calendar from '../MoleCules/Calendar';
import Sponsor from '../MoleCules/Sponsor';
import EventHall from '../MoleCules/EventHall';

export default function Main() {
    return (
        <>
            <Greeting />
            <Calendar />
            <Sponsor />
            <EventHall />
        </>
    );
}

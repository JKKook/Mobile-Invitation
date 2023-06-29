import React from 'react';
import Greeting from '../MoleCules/Greeting';
import Calendar from '../MoleCules/Calendar';
import Sponsor from '../MoleCules/Sponsor';
import EventHall from '../MoleCules/EventHall';
import GptCalendar from '../Atoms/GptCalendar';

export default function Main() {
    return (
        <>
            <Greeting />
            {/* <GptCalendar /> */}
            {/* <Calendar /> */}
            <Sponsor />
            <EventHall />
        </>
    );
}

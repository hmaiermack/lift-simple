import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import React, { useState } from 'react';
import { HistoryTable } from '../HistoryTable/HistoryTable';

export const CalendarComponent = () => {

    const [date, setDate] = useState(new Date())

    

    const onChange = date => setDate(date)


    return (
        
        <div>
            <Calendar onChange={onChange} />
            <HistoryTable date={date}/>
        </div>
    )
}

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import React, { useState, useContext } from 'react';
import moment from 'moment'
import { HistoryTable } from '../HistoryTable/HistoryTable';
import { GlobalContext } from '../../context/GlobalContext';

export const CalendarComponent = () => {
    const { history } = useContext(GlobalContext)

    const [date, setDate] = useState(new Date())

    

    const onChange = date => setDate(moment(date).format('DD/MM/YYYY'))


    let filtered = []

    //needs refactoring, only using it to conditionally render history table 
    history.forEach(item => {
        const historyDate = item.date
        if(date === historyDate){
            filtered.push(item)
        }
        else{return null}
    })

    return (
        
        <div style={{alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
            <Calendar onChange={onChange} />
            {filtered.length > 0 && 

                    <HistoryTable date={date}/>
            }
        </div>
    )
}

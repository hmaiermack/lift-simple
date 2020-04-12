import React from 'react'
import { CalendarComponent } from '../../components/Calendar/CalendarComponent'
import { HistoryTable } from '../../components/HistoryTable/HistoryTable';

export const HistoryPage = () => {
    return (
        <div className="historyPage">
            <CalendarComponent />
            <HistoryTable />
        </div>
    )
}

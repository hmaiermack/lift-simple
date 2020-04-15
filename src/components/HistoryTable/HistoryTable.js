import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { HistoryItem } from './HistoryItem/HistoryItem'

export const HistoryTable = (props) => {
    const { history } = useContext(GlobalContext)

    const parentDate = new Date(props.date)

    let filtered = []

    
    history.forEach(item => {
        const historyDate = new Date(item.date)
        if(parentDate.getTime() === historyDate.getTime()){
            filtered.push(item)
            console.log(filtered)
        }
        else{return null}
    })

    return (
        <ul>
            {filtered.length > 0 &&
                filtered.map(item => 
                    item.exercises.map((item, idx) => 
                        <HistoryItem exercise={item} key={idx}/>
                    )
                )}
        </ul>
    )
}

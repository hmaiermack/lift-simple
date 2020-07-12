import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { HistoryItem } from './HistoryItem/HistoryItem'

export const HistoryTable = (props) => {
    const { history } = useContext(GlobalContext)

    const parentDate = props.date

    let filtered = []

    
    history.forEach(item => {
        const historyDate = item.date
        if(parentDate === historyDate){
            filtered.push(item)
        }
        else{return null}
    })

    return (
        <div className="listContainer">
            {filtered.length > 0 &&
                filtered.map(item => 
                    item.exercises.map((item, idx) => 
                        <HistoryItem exercise={item} key={idx}/>
                    )
                )}
        </div>
    )
}

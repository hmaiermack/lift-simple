import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { HistoryItem } from './HistoryItem/HistoryItem'

export const HistoryTable = (props) => {
    const { history } = useContext(GlobalContext)

    const parentDate = props.date

    let filtered = []

    //filter history array based on date
    history.forEach(item => {
        const historyDate = item.date
        if(parentDate === historyDate){
            filtered.push(item)
        }
        else{return null}
    })

    return (
        <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {filtered.length > 0 &&
            //map over each workout in case of multiple workouts on one date
                filtered.map((item, idx) => (
                  <div className="listContainer" key={idx}>
                  <h3 className="workoutHeader" >{item.date} - {item.workout}</h3>
                    {//map over each exercise
                    item.exercises.map((item, idx) => 
                        <HistoryItem exercise={item} key={idx}/>
                    )}
                    </div>
                )
                    )}
        </div>
    )
}

import React from 'react'

export const HistoryItem = (props) => {
    const { exercise } = props
    return (
        <span>
            <h4 className="exHeader">{exercise.name}</h4>
            {exercise.data.map((item, id) =>
                <li className="listItem" key={id}>{item[0]} reps x {item[1]} lbs</li>)}
        </span>
    )
}

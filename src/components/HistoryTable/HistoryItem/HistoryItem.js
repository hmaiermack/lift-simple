import React from 'react'

export const HistoryItem = (props) => {
    const { exercise } = props
    return (
        <ul>
            <h4>{exercise.name}</h4>
            {exercise.data.map((item, id) =>
                <li key={id}>{item[0]} reps x {item[1]} lbs</li>)}
        </ul>
    )
}

import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import  moment from 'moment'
import UserServices from "../../services/UserServices"
import { useAuth0 } from "../../react-auth0-spa"


export const LogForm = () => {
    const {workouts, active_workout, active_program, programs, changed, logWorkout, activeProgram, activeWorkout, history} = useContext(GlobalContext)
    const { user, getTokenSilently } = useAuth0();
    const id = user.sub.substr(6);
    const {updateData} = UserServices;

    const data = {
        programs,
        workouts,
        history
    }
    
    let exercises = workouts[active_workout].exercises

    
    const [value, setValue] = useState([])
    const [ready, setReady] = useState(false)

    const formVals = exercises.map((exercise, index) => {
        let arr = [];
        for(let i =0; i < exercise.sets; i++){
            
            arr.push(
            {
                [`ex${index}set${i}reps`]: '',
                [`ex${index}set${i}weight`]: ''
            })
        }
        return arr;
    })

    useEffect(() => {
        setValue(formVals)
        setReady(true)
    }, [changed])

    function handleSubmit(){
        const history = {}
        history.date = moment().format('DD/MM/YYYY')
        history.workout = workouts[active_workout].name
        history.exercises = []
        
        exercises.forEach((exercise, index) => {
            let data = value[index].map(arr => {
                return Object.values(arr)
            })
            history.exercises.push({
                name: exercise.name,
                data: data
            })
        })

        logWorkout(history)
        data.history.push(history)

        setValue([])
        setReady(false)
        activeProgram(null)
        activeWorkout(null)
        getTokenSilently()
        .then(token => 
            updateData(id, token, JSON.stringify(data))
        )
    }

    
    return (
        <form>
            {ready !== false &&
                <legend>{programs[active_program].name}: {workouts[active_workout].name}</legend>}
            {ready !== false &&
            exercises.map((exercise, index) => {
                let sets = exercise.sets
                let group = []
                
                for(let i = 0; i < sets; i++){
                 group.push(
                    <div key={`ex${index} div${i}`}>
                        <span key={`ex${index} set${i}`}>Set {i + 1}:</span>
                        <label htmlFor={`ex${index}set${i}reps`} key={`ex${index} set${i} reps label`}>Reps</label>
                        <input type="number" name={`ex${index}set${i}reps`} key={`ex${index} set${i} reps input`} 
                        value={value[index][i].reps} onChange={(e) => {
                            let temp = value
                            let target = e.target.name
                            temp[index][i][target] = e.target.value
                            setValue(temp)}}></input>

                        <label htmlFor={`ex${index}set${i}weight`} key={`ex${index} set${i} weight label`}>weight</label>
                        <input type="number" name={`ex${index}set${i}weight`} key={`ex${index} set${i} weight input`} 
                        value={value[index][i].sets} onChange={(e) => {
                            let temp = value
                            let target = e.target.name
                            temp[index][i][target] = e.target.value
                            setValue(temp)}} ></input>
                    </div>
                    )
                }
            return <fieldset key={index}>
                        <legend>
                            {exercise.name} {exercise.sets} x {exercise.reps} 
                        </legend>
                        {group}
                    </fieldset>
            })}
            {ready !== false &&
                <button type="button" onClick={handleSubmit}>Log Workout</button>}
        </form>
    )
}

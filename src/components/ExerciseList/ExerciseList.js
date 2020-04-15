import React, { useContext, useState, useEffect } from 'react'
import { ExerciseListItem } from '../ExerciseListItem/ExerciseListItem'
import { GlobalContext } from '../../context/GlobalContext'

export const ExerciseList = () => {
    const { workouts, active_workout, deleteExerciseItem } = useContext(GlobalContext)

    const [exName, setExName] = useState('')
    const [changed, setChanged] = useState(false)
    const [newEx, setNewEx] = useState(workouts)

    const [showAddExercise, setShowAddExercise] = useState(false);
    const [exerciseName, setExerciseName] = useState('')
    const [sets, setSets] = useState('')
    const [reps, setReps] = useState('')


    function handleDelete(e){
        setExName(e.target.name)
        deleteExerciseItem(newEx)
        setChanged(false)
    }

    function handleAddClick(){
        setShowAddExercise(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        workouts[active_workout].exercises.push(
            {
                name: exerciseName,
                sets: +sets,
                reps: +reps
            }
        )
        setShowAddExercise(false)
    }

    function handleExChange(e) {
        setExerciseName(e.target.value)
    }

    function handleSetChange(e) {
        setSets(e.target.value)
    }

    function handleRepChange(e) {
        setReps(e.target.value)
    }

    useEffect(() => {

        let e = newEx
        if(active_workout !== null){
            let t = newEx[active_workout].exercises.filter(item =>
                item.name !== exName)    
            e[active_workout].exercises = t
        }

        setNewEx(e)
        setChanged(true)
    }, [newEx, active_workout, exName])

    
    return (
        <div className="exerciseList">
            {active_workout !== null &&
                <h4 style={{margin: 0}}>Exercises</h4>}
            {active_workout !== null && 
            workouts[active_workout].exercises.map((item, index) => 
                <ExerciseListItem name={item.name} sets={item.sets} reps={item.reps} key={index} handleDelete={handleDelete}/>
            )}
            {showAddExercise && 
                <form>
                    <label htmlFor="exerciseName">Exercise Name:</label>
                    <input type="text" name="exerciseName" value={exerciseName} onChange={handleExChange}></input>

                    <label htmlFor="setNum">Sets:</label>
                    <input type="text" name="setNum" value={sets} onChange={handleSetChange}></input>

                    <label htmlFor="repNum"> Reps:</label>
                    <input type="text" name="repNum" value={reps} onChange={handleRepChange}></input>
                    <button type="submit" onClick={handleSubmit}> check</button>
                </form>
            }           
            {showAddExercise !== true &&
                ( active_workout !== null &&
                <button onClick={() => handleAddClick()}>Add</button>)
            }
        </div>
    )
}

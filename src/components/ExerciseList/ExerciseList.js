import React, { useContext, useState, useEffect } from 'react'
import { ExerciseListItem } from '../ExerciseListItem/ExerciseListItem'
import { GlobalContext } from '../../context/GlobalContext' 
import UserServices from "../../services/UserServices"
import { useAuth0 } from "../../react-auth0-spa"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'



export const ExerciseList = () => {
    const check = <FontAwesomeIcon icon={faCheck} />;
    const { workouts, active_workout, deleteExerciseItem, programs, history } = useContext(GlobalContext)
    const { user, getTokenSilently } = useAuth0();
    const {updateData} = UserServices;
    const id = user.sub.substr(6);

    const data = {
        programs,
        workouts,
        history
    } 


    const [exName, setExName] = useState('')
    const [changed, setChanged] = useState(false)
    const [newEx, setNewEx] = useState(workouts)

    const [showAddExercise, setShowAddExercise] = useState(false);
    const [exerciseName, setExerciseName] = useState('')
    const [sets, setSets] = useState('')
    const [reps, setReps] = useState('')



    function handleAddClick(){
        setShowAddExercise(true)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        //update exercise array for current workout with values from state based on user input
        workouts[active_workout].exercises.push(
            {
                name: exerciseName,
                sets: +sets,
                reps: +reps
            }
        )
        //auth0
        getTokenSilently()
        //using token update db
        .then(token => 
            updateData(id, token, JSON.stringify(data))
        )
        //hide exercise add form and clear state data
        setExerciseName('')
        setSets('')
        setReps('')
        setShowAddExercise(false)
    }

    //update exercise name to add as user adds input
    function handleExChange(e) {
        setExerciseName(e.target.value)
    }

    //update set amount based on user input 
    function handleSetChange(e) {
        setSets(e.target.value)
    }

    //update rep amount based on user input
    function handleRepChange(e) {
        setReps(e.target.value)
    }

    //keep track and update only current workout
    useEffect(() => {

        let e = newEx
        if(active_workout !== null){
            let t = newEx[active_workout].exercises.filter(item =>
                item.name !== exName)    
            e[active_workout].exercises = t
        }

        setNewEx(e)
        setChanged(!changed)
    }, [newEx, active_workout, exName])

    //needs refactoring/rethinking
    function handleDelete(e){
        //set exName to prop passed down to delete button in list item
        setExName(e.currentTarget.attributes.name.nodeValue)
        //update context
        deleteExerciseItem(newEx)
        setChanged(!changed)
        workouts[active_workout].exercises.filter(item => item.name !== exName)
        data.workouts[active_workout].exercises.filter(item => item.name !== exName)
        getTokenSilently()
        .then(token =>{
            setChanged(!changed)
            updateData(id, token, JSON.stringify(data))}
        )
        
    }

    return (
        <div className="listContainer">
            {active_workout !== null &&
                <h4 className="listHeader" style={{margin: 0}}>Exercises</h4>}
            {active_workout !== null && 
            workouts[active_workout].exercises.map((item, index) => 
                <ExerciseListItem name={item.name} sets={item.sets} reps={item.reps} key={index} handleDelete={handleDelete}/>
            )}
            {showAddExercise && 
                    <form className="addForm" onSubmit={handleSubmit} style={{display: 'flex'}}>
                        <div>
                        <label htmlFor="exerciseName">Name: </label>
                        <input className="addInput" type="text" name="exerciseName" value={exerciseName} onChange={handleExChange}></input>
                        </div>

                        <div>
                        <label htmlFor="setNum">Sets: </label>
                        <input className="addInput" type="text" name="setNum" value={sets} onChange={handleSetChange}></input>
                        </div>

                        <div>
                        <label htmlFor="repNum">Reps: </label>
                        <input className="addInput" type="text" name="repNum" value={reps} onChange={handleRepChange}></input>
                        </div>
                        <span className="checkButton" type="submit" onClick={handleSubmit}>{check}</span>
                    </form>
            }           
            {showAddExercise !== true &&
                ( active_workout !== null &&
                <button type="button" className="addButton" onClick={() => handleAddClick()}>Add an exercise</button>)
            }
        </div>
    )
}

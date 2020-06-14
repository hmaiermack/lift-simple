import React, { createContext, useReducer } from 'react';
import moment from 'moment'
import AppReducer from './AppReducer'

//initial state

const initialState = {
    user_id: 1,
    active_program: null,
    active_workout: null,
    changed: false,
    programs: [],
    workouts: [],
    history: [],
}

//create context

export const GlobalContext = createContext(initialState);

//create provider

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //actions
    function deleteWorkoutItem(id){
        dispatch({
            type: 'DELETE_WORKOUT_ITEM',
            payload: id
        })
    }

    function deleteProgramItem(id){
        dispatch({
            type: 'DELETE_PROGRAM_ITEM',
            payload: id
        })
    }

    function activeProgram(id){
        dispatch({
            type: 'CHANGE_ACTIVE_PROGRAM',
            payload: id
        })
    }

    function addProgram(name){
        dispatch({
            type: 'ADD_PROGRAM_ITEM',
            payload: name
        })
    }

    function addWorkout(name){
        dispatch({
            type: 'ADD_WORKOUT_ITEM',
            payload: name
        })
    }

    function activeWorkout(id){
        dispatch({
            type: 'CHANGE_ACTIVE_WORKOUT',
            payload: id
        })
    }

    function deleteExerciseItem(object){
        dispatch({
            type: 'DELETE_EXERCISE_ITEM',
            payload: object
        })
    }

    function setChanged(bool){
        dispatch({
            type: 'SET_CHANGED',
            payload: bool
        })
    }

    function logWorkout(object){
        dispatch({
            type: 'LOG_WORKOUT',
            payload: object
        })
    }

    function setPrograms(programs){
        dispatch({
            type: 'SET_PROGRAMS',
            payload: programs
        })
    }

    function setWorkouts(workouts){
        dispatch({
            type: 'SET_WORKOUTS',
            payload: workouts
        })
    }

    function setHistory(history){
        dispatch({
            type: 'SET_HISTORY',
            payload: history
        })
    }


    return (
        <GlobalContext.Provider value={{
            user_id: state.user_id,
            programs: state.programs,
            workouts: state.workouts,
            active_program: state.active_program,
            active_workout: state.active_workout,
            history: state.history,
            setChanged,
            deleteWorkoutItem,
            deleteProgramItem,
            deleteExerciseItem,
            addProgram,
            addWorkout,
            activeProgram,
            activeWorkout,
            logWorkout,
            setPrograms,
            setWorkouts,
            setHistory
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
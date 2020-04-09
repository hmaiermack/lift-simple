import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

//initial state

const initialState = {
    user_id: 1,
    active_program: null,
    active_workout: null,
    programs: [
        {
            name: 'Legs Push Pull',
            id: 0
        },
        {
            name: 'Upper/Lower',
            id: 1
        },
        {
            name: 'Starting Strength',
            id: 2
        }
    ],
    workouts: [
        {
            id: 0,
            name: 'Legs',
            program_id: [1, 2],
            exercises: [
                {
                    name: 'Squats',
                    sets: 5,
                    reps: 5
                },
                {
                    name: 'Deadlifts',
                    sets: 5,
                    reps: 5
                },
                {
                    name: 'Lunges',
                    sets: 3,
                    reps: 8
                }
            ]
        },
        {
            id: 1,
            name: 'Push',
            program_id: [1],
            exercises: [
                {
                    name: 'Bench Press',
                    sets: 5,
                    reps: 5
                },
                {
                    name: 'Overhead Press',
                    sets: 3,
                    reps: 5
                },
                {
                    name: 'Bicep Curl',
                    sets: 5,
                    reps: 10
                },
            ]
        },
        {
            id: 2,
            name: 'test',
            program_id: [3],
            exercises: [
                {
                    name: 'Squats',
                    sets: 5,
                    reps: 5
                },
                {
                    name: 'Deadlifts',
                    sets: 5,
                    reps: 5
                },
                {
                    name: 'Lunges',
                    sets: 3,
                    reps: 8
                }
            ]
        },
    ],
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

    function deleteExerciseItem([]){
        dispatch({
            type: 'DELETE_EXERCISE_ITEM',
            payload: []
        })
    }



    return (
        <GlobalContext.Provider value={{
            user_id: state.user_id,
            programs: state.programs,
            workouts: state.workouts,
            active_program: state.active_program,
            active_workout: state.active_workout,
            deleteWorkoutItem,
            deleteProgramItem,
            deleteExerciseItem,
            addProgram,
            addWorkout,
            activeProgram,
            activeWorkout
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

//initial state

const initialState = {
    user_id: 1,
    programs: [
        {
            name: 'Legs Push Pull',
            id: 1
        },
        {
            name: 'Upper/Lower',
            id: 2
        },
        {
            name: 'Starting Strength',
            id: 3
        }
    ],
    workouts: [
        {
            id: 1,
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
            id: 2,
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
        }
    ]
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

    return (
        <GlobalContext.Provider value={{
            user_id: state.user_id,
            programs: state.programs,
            workouts: state.workouts,
            deleteWorkoutItem,
            deleteProgramItem
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
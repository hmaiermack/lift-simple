
export default (state, action) => {
    switch(action.type) {
        case 'SET_CHANGED':
            return {
                ...state,
                changed: action.payload
            }

        case 'BURGER_CHANGED':
            return{
                ...state,
                burgerOpen: action.payload
            }

        case 'DELETE_WORKOUT_ITEM':
            return {
                ...state,
                workouts: state.workouts.filter(item => item.id !== action.payload),
            }
        
        case 'DELETE_PROGRAM_ITEM':
            return {
                ...state,
                programs: state.programs.filter(item => item.id !== action.payload),
            }

        case 'DELETE_EXERCISE_ITEM':
            return {
                ...state,
                workouts: action.payload
            }

            //ask david about this behavior
        case 'ADD_PROGRAM_ITEM':
            return {
                ...state,
                //state update handled w/in the component
            }


        case 'CHANGE_ACTIVE_PROGRAM':
            return {
                ...state,
                active_program: action.payload
            }

        case 'CHANGE_ACTIVE_WORKOUT':
            return {
                ...state,
                active_workout: action.payload
            }

        case 'LOG_WORKOUT':
            return {
                ...state,
                history: state.history.concat(action.payload)
            }
    
        default: 
            return state;
    }
}
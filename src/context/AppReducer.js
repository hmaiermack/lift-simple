export default (state, action) => {
    switch(action.type) {
        case 'DELETE_WORKOUT_ITEM':
            return {
                ...state,
                workouts: state.workouts.filter(item => item.id !== action.payload)
            }
        
        case 'DELETE_PROGRAM_ITEM':
            return {
                ...state,
                programs: state.programs.filter(item => item.id !== action.payload)
            }
        default: 
            return state;
    }
}
const user = 'Mack';

let programs = [
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
]

let workouts = [
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

let store = {
    user: user,
    programs: programs,
    workouts: workouts
}

export default store;
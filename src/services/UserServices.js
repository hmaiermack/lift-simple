
const UserServices = {
    getUserData(id, token, setP, setW, setH) {
        console.log(`user id: ${id} token: ${token}`)
        return fetch(`http://localhost:8000/api/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
              }      
        })
        .then(res => 
            (!res.ok)
            ? res.status === 404 ?
                (console.log(`User with id ${id} does not exist. Creating new user.`),
                fetch(`http://localhost:8000/api/${id}`,{
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                .then(res => 
                    console.log(res.json())))
                : res.json().then(e => Promise.reject(e))
            : res.json()
            )
            .then(obj => 
                {setP(obj.data.programs)
                setW(obj.data.workouts)
                setH(obj.data.history)})
    },

    updateData(id, token, data){
        return fetch(`http://localhost:8000/api/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: data
        })
        .then(res =>
            (!res.ok) ?
                (res.json().then(e => Promise.reject(e)),
                alert('Something went wrong.'))
                : res.json())
    }
}

export default UserServices
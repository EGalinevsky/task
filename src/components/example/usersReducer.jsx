import React from 'react'

export const UsersArr = ({users}) =>{    
    console.log(users)
    return(
        <>
        {users.map(user=> <p key={user.id   }>{user.name}</p>)}    
        </>
    )
}
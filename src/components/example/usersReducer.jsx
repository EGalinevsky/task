import React from 'react'
import s from './user.module.css'
export const UsersArr = ({users}) =>{    
        return(
        <ul className={s.userList}>
        {users.map(user=> 
            <li className={s.listBtn} key={user.id   }>
                <button className={s.btnName}>{user.name}</button>
            </li>)}    
        </ul>
    )
}
import React, { useEffect, useState } from "react";
import ContextContainer from "./useReducerContainer";
import Alert from './alert/Alertreducer'
import { AlertProvider } from "./alert/alertContainer";
import axios from "axios";
import { UsersArr } from "../example/usersReducer";



export const Hooks7 = () => {
  const [click, setClick] = useState('')
  const [users, setUsers] = useState([])
  const URL = 'https://jsonplaceholder.typicode.com/users'
  const [boom, setBoom] = useState([])
  const [boom2, setBoom2] = useState([])

  // const [Gluk, setGluk] = useState([])

  const arr = [
    {
      name: 'gluk',
      age: 20,
      id: 1
    },
    {
      name: 'Lexa',
      age: 20,
      id: 2
    },
    {
      name: 'Karl',
      age: 20,
      id: 3
    },
    {
      name: 'Daril',
      age: 20,
      id: 4
    },
    {
      name: 'Marlen',
      age: 20,
      id: 5
    }
  ]
  const numbers = [1, 2, 3, 4, 5]
  async function getUser() {
    try {
      const data = await axios.get(URL)
      setUsers(data.data)
    } catch (error) {
      console.error(error);
    } finally {

    }
  }

  useEffect(() => {
    getUser()
  }, [])

  console.log(boom2)
  console.log(click)

  return (
    <AlertProvider>
      <div>
        <div>
          useReducer Hook7
          <ContextContainer boomerang={(value) => setBoom(value)} array={arr} click={click} setBoom2={setBoom2} boom2={boom2} setClick={setClick} />

          <Alert />
        </div>
        <div>
          {boom2.map((b) =>
            <li key={b.id}>
              {b.name}
            </li>)}
        </div>
        <div>
          <h1>Users</h1>
          <UsersArr users={users} />
        </div>
      </div>
    </AlertProvider >
  );
};

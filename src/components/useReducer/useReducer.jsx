import React, { useState } from "react";
import ContextContainer from "./useReducerContainer";
import Alert from './alert/Alertreducer'
import { AlertProvider } from "./alert/alertContainer";



export const Hooks7 = () => {
  const[show, setShow] = useState(false)
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
  return (
    <AlertProvider>
      <div>
        <div>
          useContext
          <ContextContainer array={arr} showBtns={show} setShowBtns={setShow}/>
          <Alert />
        </div>
      </div>
    </AlertProvider>
  );
};

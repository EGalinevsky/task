import React, { useState } from "react";
import { useAlert } from "./alert/alertContainer";
import s from "./useReducer.module.css"

export default function ContextContainer({ array, setBoom2, boom2, click, setClick, boomerang }) {

  const [showBtns, setShowBtns] = useState(false)
  const { show, visible, hide } = useAlert()

  const style = {
    color: 'blue',
    font: 'bold',
  }
  const handlAddInArray = e => {
    setClick(e)
    console.log(boom2)
    setBoom2([...boom2, click])
  }

  const handleClickBTN = () => {
    setShowBtns(prev => !prev)
  }

  return (
    <>
      <h1 style={style}>Hello in example context </h1>
      <button onClick={handleClickBTN}>
        show Button
      </button>
      {showBtns &&
        <div style={{ margin: '10px' }}>
          {array.map(a =>
            <button className={click === a.id ? s.btnActive : s.btn} onClick={() => handlAddInArray(a)} key={a.id}>
              {a.name} {a.age}
            </button>)}

          <div>
            <button onClick={() => boomerang(click)}>click here</button>
          </div>
        </div>}
      <div>
        <button onClick={!visible ? show : hide}>{!visible ? 'show' : 'hide'} alert</button>
      </div>

    </>
  );
}

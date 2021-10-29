import React from "react";
import { useAlert, useToggleAlert } from "./alert/alertContainer";

export default function     ContextContainer({array, showBtns, setShowBtns}) {
  const {show,visible, hide} = useAlert()

  const style ={
    color: 'blue',
    font: 'bold',
  }
  
  const handleClickBTN = () =>{
    setShowBtns(prev => !prev )
  }

  return (
    <>
      <h1 style={style}>Hello in example context </h1>
      <button onClick={handleClickBTN}>
        show Button
      </button>
      {showBtns && 
      <div>
        {array.map(a => <button key={a.id}> 
          {a.name}
        </button>)}
      </div>}
      <div>
        <button onClick={!visible ? show: hide}>{!visible ? 'show': 'hide'} alert</button>    
      </div>
      
    </>
  );
}

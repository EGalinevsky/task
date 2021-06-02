import React from "react";
import { useAlert, useToggleAlert } from "./alert/alertContainer";

export default function ContextContainer() {

  const {visible, toggleAlert} = useAlert()
  const style ={
    color: 'blue',
    font: 'bold',
  }
  console.log(visible)
  
  return (
    <>
      <h1 style={style}>Hello in example context </h1>
      <button onClick={toggleAlert}>{!visible ? 'show': 'hide'} alert</button>
    </>
  );
}

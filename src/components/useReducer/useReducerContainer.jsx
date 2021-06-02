import React from "react";
import { useAlert, useToggleAlert } from "./alert/alertContainer";

export default function ContextContainer() {

  const {show,visible} = useAlert()
  const style ={
    color: 'blue',
    font: 'bold',
  }
  console.log(visible)
  
  return (
    <>
      <h1 style={style}>Hello in example context </h1>
      <button onClick={show}>{!visible ? 'show': 'hide'} alert</button>
    </>
  );
}

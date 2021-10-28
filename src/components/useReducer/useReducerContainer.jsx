import React from "react";
import { useAlert, useToggleAlert } from "./alert/alertContainer";

export default function     ContextContainer() {

  const {show,visible, hide} = useAlert()
  const style ={
    color: 'blue',
    font: 'bold',
  }
  return (
    <>
      <h1 style={style}>Hello in example context </h1>
      <button onClick={!visible ? show: hide}>{!visible ? 'show': 'hide'} alert</button>      
    </>
  );
}

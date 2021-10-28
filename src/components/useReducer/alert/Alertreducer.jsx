import React from "react";
import { useAlert } from "./alertContainer";


export default function Alert() {
  const alert = useAlert()
  console.log(alert)
  const style = {
    color: "red",
    border: "1px solid blue",
    padding: "5px",
  };

  if (!alert.visible) return null;
  return (
    <div>
      <p style={style} onClick={alert.hide}> this is a very and very important message</p>
    </div>
  );
}

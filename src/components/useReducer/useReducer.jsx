import React, { useState } from "react";
import ContextContainer from "./useReducerContainer";
import Alert from './alert/Alertreducer'
import { AlertProvider } from "./alert/alertContainer";



export const Hooks7 = () => {


  return (
    <AlertProvider>
      <div>
        <div>
          useContext
          <ContextContainer  toggleAlert={()=>{}} />
          <Alert />
        </div>
      </div>
    </AlertProvider>
  );
};

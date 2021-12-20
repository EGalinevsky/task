import React, { useState } from "react";
import ContextContainer from "./useContextContainer";
import Alert from './alert/AlertContext'
import { AlertProvider } from "./alert/alertContainer";



export const Hooks6 = () => {


  return (
    <AlertProvider>
      <div>
        <div>
          useContext
          <ContextContainer toggleAlert={() => { }} />
          <Alert />
        </div>
      </div>
    </AlertProvider>
  );
};

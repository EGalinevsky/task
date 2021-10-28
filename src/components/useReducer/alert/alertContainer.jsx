import React, { useContext, useState, useReducer } from "react";

const AlertContainer = React.createContext();

export const useAlert = () => {
  return useContext(AlertContainer);
};

const reducer = (state, action) => {
  console.log(state)  
  console.log(action.type)


  switch (action.type) {
    case 'show': return {...state, visible:true, text: action.text};
    case 'hide': return {...state, visible:false,} 
    default:
      return state;
  }
};

export const AlertProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    visible: false,
    text: ''
  });

  const show = text => dispatch({ type: "show", text });
  const hide = () => dispatch({ type: "hide", });

  return (
    <AlertContainer.Provider
      value={{
        visible: state.visible,
        show, hide
      }}
    >
      {children}
    </AlertContainer.Provider>
  );
};

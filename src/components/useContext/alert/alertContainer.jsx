import React, { useContext, useState } from "react";

const AlertContainer = React.createContext();
// const AlertToogleContainer = React.createContext(); 
// передавать creact в функцию что бы тоггле передать в нужный компонет 

export const useAlert = () => {
  return useContext(AlertContainer);
};

// export const useToggleAlert = () => {
//   return useContext(AlertToogleContainer);
// }; // передаем  функциию  В компонет useContextContainer 

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(false);
  const toggleAlert = () => setAlert((prev) => !prev);

  return (
    <AlertContainer.Provider value={{
      visible: alert,
      toggleAlert
    }}>
      {/* <AlertToogleContainer.Provider value={toggleAlert}> */}
        {children}
      {/* </AlertToogleContainer.Provider> */}
    </AlertContainer.Provider>
  );
};

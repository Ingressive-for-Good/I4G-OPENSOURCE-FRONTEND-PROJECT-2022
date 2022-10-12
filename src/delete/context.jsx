import React, { useContext, useState, useRef, useEffect } from "react";
import { data, nav } from "./data";
const AppContext = React.createContext();
const Context = ({ children }) => {
  const [value, setValue] = useState(data);
  const [alertDelete, setAlertDelete] = useState(false);
  const [alert, setAlert] = useState({ available: false, msg: "" });
  useEffect(() => {
    const message = alert.msg;
    console.log(message);
    const set = setInterval(() => {
      setAlert({ ...alert, message });
    }, 2000);
    return () => {
      clearInterval(set);
    };
  }, [alert]);
  return (
    <AppContext.Provider
      value={{
        value,
        setValue,
        nav,
        alert,
        setAlert,
        alertDelete,
        setAlertDelete,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const UseAppContext = () => {
  return useContext(AppContext);
};

export { Context, AppContext };

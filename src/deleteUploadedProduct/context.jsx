import React, { useContext, useState, useRef, useEffect } from "react";
import { data, nav } from "./data";
const AppContext = React.createContext();
const Context = ({ children }) => {
  const [value, setValue] = useState(data);

  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [popUp, setPopUp] = useState(false);
  useEffect(() => {
    const set = setInterval(() => {
      setPopUp(!popUp);
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
        message,
        setMessage,
        popUp,
        setPopUp,
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

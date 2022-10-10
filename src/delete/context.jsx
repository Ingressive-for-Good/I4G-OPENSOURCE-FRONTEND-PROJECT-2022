import React, { useContext, useState, useRef } from "react";
import { data, nav } from "./data";
const AppContext = React.createContext();
const Context = ({ children }) => {
  const [value, setValue] = useState(data);
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState(false);

  return (
    <AppContext.Provider
      value={{ value, setValue, nav, show, setShow, alert, setAlert }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const UseAppContext = () => {
  return useContext(AppContext);
};

export { Context, AppContext };

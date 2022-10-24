import React, { useContext, useState, useEffect } from "react";
import { data, nav, dashboardData } from "../src/assets/data/data";

const AppContext = React.createContext();
const Context = ({ children }) => {
  const [value, setValue] = useState(data);
  const [dashboard, setDashboard] = useState(dashboardData);
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [popUp, setPopUp] = useState(false);
  const [deletePopUp, setDeletePopUp] = useState({ show: false, msg: "" });
  useEffect(() => {
    const set = setInterval(() => {
      setPopUp(!popUp);
    }, 2000);
    return () => {
      clearInterval(set);
    };
  }, [alert]);
  useEffect(() => {
    const set = setInterval(() => {
      setDeletePopUp(!deletePopUp);
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
        deletePopUp,
        setDeletePopUp,
        dashboard,
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

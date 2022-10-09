import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}

export default App;

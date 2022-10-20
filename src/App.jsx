import React from "react";
import { BrowserRouter} from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
    //Any Routes added here won't be merged, please check the routes.jsx file, follow the pattern and add any additional routes.
    <BrowserRouter>
      <Routes>
      </Routes>

    </BrowserRouter>
  );
}

export default App;


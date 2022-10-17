import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes'; // Routes Component houses all routes in the app.

function App() {
  return (
    <BrowserRouter>
      {/*  Placing it here so that react knows about our defined routes */}
      <Routes />
    </BrowserRouter>
  );
}

export default App;

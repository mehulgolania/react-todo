import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout  from '../Layout/layout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Route component={Layout} />
      </BrowserRouter>
    </>
  );
}

export default App;

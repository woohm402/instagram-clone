import React from 'react';

import { BrowserRouter, Redirect, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <header>TODO header</header>
      <BrowserRouter>
        <Route exact path={'/'} component={() => null} />
        <Redirect to={'/'} />
      </BrowserRouter>
    </>
  );
};

export default App;

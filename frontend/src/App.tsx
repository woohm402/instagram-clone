import React from 'react';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={'/'} component={() => null} />
          <Redirect to={'/'} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;

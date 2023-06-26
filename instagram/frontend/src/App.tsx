import React from 'react';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={'/'} component={Main} />
          <Redirect to={'/'} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;

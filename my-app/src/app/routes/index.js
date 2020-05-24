import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import User from '../modules/users';
import Info from '../modules/info';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact
          component={User}
        />
        <Route
          path="/info"
          component={Info}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

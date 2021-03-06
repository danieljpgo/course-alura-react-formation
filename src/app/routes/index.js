import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import User from '../modules/Users';
import Info from '../modules/Info';
import Navigation from '../common/layout/Navigation';
import Admin from '../modules/Admin';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Navigation>
          <Switch>
            <Route
              path="/"
              exact
              component={User}
            />
            <Route
              path="/users"
              exact
              component={User}
            />
            <Route
              path="/info"
              component={Info}
            />
            <Route
              path="/admin"
              component={Admin}
            />
          </Switch>
        </Navigation>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

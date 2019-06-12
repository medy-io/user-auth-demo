import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppHeader from './components/app-header/app-header';
import LoginForm from './components/login-form/login-form.component';
import { ProtectedRoute } from './components/protected-route/protected.route';

import './App.css';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={LoginForm} />
            <ProtectedRoute exact path="/app" component={AppHeader} />
          </Switch>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

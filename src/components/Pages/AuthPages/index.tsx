import React from 'react'
import LogInPage from './LogInPage';
import SignUpPage from './SignUpPage';
import AuthPage from './AuthPage';
import {Switch, Route } from 'react-router-dom';

const AuthRouter: React.FC = () => {
  return (
      <Switch>
          <Route exact path="/auth" component={AuthPage}/>
          <Route exact path="/auth/login" component={LogInPage}/>
          <Route exact path="/auth/signup" component={SignUpPage}/>
      </Switch>
  )
}

export default AuthRouter;
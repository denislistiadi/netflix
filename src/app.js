import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom'
import * as ROUTES from './constants/routes';
import { Home, Browse, Signin, Signup } from './pages/index';

export default function App() {
  return (
    <Routes>
      <Route path={ROUTES.BROWSE}>
        <Browse />
      </Route>

      <Route path={ROUTES.SIGN_UP}>
        <Signup />
      </Route>

      <Route path={ROUTES.SIGN_IN}>
        <Signin />
      </Route>
      
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route> 
    </Routes>
  );
}

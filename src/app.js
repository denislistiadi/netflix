import React from 'react';
import { BrowserRouter as Routes, Switch } from 'react-router-dom'
import * as ROUTES from './constants/routes';
import { Home, Browse, Signin, Signup } from './pages/index';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from "./hooks";

export default function App() {
  const { user } = useAuthListener();

  return (
    <Routes>
      <Switch>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
          <Signin />
        </IsUserRedirect>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
          <Signup />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect user={user} path={ROUTES.BROWSE}>
          <Home />
        </IsUserRedirect>
      </Switch>
    </Routes>
  );
}

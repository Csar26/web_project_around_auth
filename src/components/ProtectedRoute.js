import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ children, logged, ...props }) {
  return (
    <Route {...props}>
      {logged ? children : <Redirect to={"/login"} />}
    </Route>
  );
}

export default ProtectedRoute;
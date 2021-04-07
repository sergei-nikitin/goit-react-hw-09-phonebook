import React from "react";
import { Route, Redirect } from "react-router-dom";
import authSelectors from "../redux/auth/auth-selectors";
import { useSelector } from "react-redux";

export default function PrivateRoute({
  isAuthenticated,
  redirectTo,
  children,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}

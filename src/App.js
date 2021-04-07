import React, { Suspense, lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import authOperations from "./redux/auth/auth-operations";
import { Switch } from "react-router-dom";
import Header from "./components/header";
import routes from "./routes";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const HomeView = lazy(
  () => import("./views/home") /*webpackChunkName: 'home-view' */
);
const PhoneBook = lazy(
  () => import("./views/phoneBook") /*webpackChunkName: 'contacts-view' */
);
const Login = lazy(
  () => import("./views/login") /*webpackChunkName: 'login-view' */
);
const Register = lazy(
  () => import("./views/register") /*webpackChunkName: 'register-view' */
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <PublicRoute exact path={routes.home}>
            <HomeView />
          </PublicRoute>

          <PrivateRoute path={routes.contacts} redirectTo={routes.login}>
            <PhoneBook />
          </PrivateRoute>

          <PublicRoute
            path={routes.login}
            restricted
            redirectTo={routes.contacts}
          >
            <Login />
          </PublicRoute>

          <PublicRoute
            path={routes.register}
            restricted
            redirectTo={routes.contacts}
          >
            <Register />
          </PublicRoute>
        </Switch>
      </Suspense>
    </>
  );
}

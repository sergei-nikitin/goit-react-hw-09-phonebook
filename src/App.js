import React, { Suspense, lazy, Component } from "react";
import { connect } from "react-redux";
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

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <Header />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <PublicRoute exact path={routes.home} component={HomeView} />
            <PrivateRoute
              path={routes.contacts}
              component={PhoneBook}
              redirectTo={routes.login}
            />
            <PublicRoute
              path={routes.login}
              restricted
              redirectTo={routes.contacts}
              component={Login}
            />
            <PublicRoute
              path={routes.register}
              restricted
              redirectTo={routes.contacts}
              component={Register}
            />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);

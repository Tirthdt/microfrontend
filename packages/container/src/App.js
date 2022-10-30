import React, { lazy, Suspense, useState } from "react";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Progress from "./components/Progress";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));
const DashboardLazy = lazy(() => import("./components/DashboardApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const App = () => {
  const [login, setLogin] = useState(false);

  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header signedIn={login} onSignOut={() => setLogin(false)} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy setLogin={() => setLogin(true)} />
              </Route>
              <Route path="/dashboard">
                {!login ? <Redirect to="/" /> : <DashboardLazy />}
              </Route>
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};

export default App;

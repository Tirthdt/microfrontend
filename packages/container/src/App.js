import React from "react";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import MarketingApp from "./components/MarketingApp";
import AuthApp from "./components/AuthApp";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const App = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/auth" component={AuthApp} />
            <Route path="/" component={MarketingApp} />
          </Switch>
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};

export default App;

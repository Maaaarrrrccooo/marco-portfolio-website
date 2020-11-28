import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "./pages";
import Contact from "./pages/Contact";
import NotFound from "./pages/404";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;

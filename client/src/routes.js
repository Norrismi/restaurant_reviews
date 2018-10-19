import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/home";
import Layout from "./hoc/layout";
import BookView from "./containers/restaurant-view";
import Login from "./containers/Admin/login";

const Routes = () => {
  return (
    <Layout>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/restaurant/:id" exact component={BookView} />
        </Switch>
      </div>
    </Layout>
  );
};

export default Routes;

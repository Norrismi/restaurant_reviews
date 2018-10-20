import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/home";
import Layout from "./hoc/layout";
import BookView from "./containers/restaurant-view";
import Login from "./containers/Admin/login";
import Auth from './hoc/auth'
import User from './components/Admin'

const Routes = () => {
  return (
    <Layout>
      <div>
        <Switch>
          <Route path="/" exact component={Auth(Home,null)} />
          <Route path="/login" exact component={Auth(Login,false)} />
          <Route path="/user" exact component={Auth(User,true)} />
          <Route path="/restaurant/:id" exact component={Auth(BookView)} />
        </Switch>
      </div>
    </Layout>
  );
};

export default Routes;

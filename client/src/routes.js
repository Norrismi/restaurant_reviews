import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/home";
import Layout from "./hoc/layout";
import BookView from "./containers/restaurant-view";
import Login from "./containers/Admin/login";
import Auth from './hoc/auth'
import User from './components/Admin'
import AddRestaurant from './containers/Admin/add'
import UserPosts from './components/Admin/userPosts'
import EditRestaurant from './containers/Admin/edit'
import Register from './containers/Admin/register'

const Routes = () => {
  return (
    <Layout>
      <div>
        <Switch>
          <Route path="/" exact component={Auth(Home,null)} />
          <Route path="/login" exact component={Auth(Login,false)} />
          <Route path="/user" exact component={Auth(User,true)} />
          <Route path="/user/add" exact component={Auth(AddRestaurant,true)} />
          <Route path="/restaurant/:id" exact component={Auth(BookView,null)} />
          <Route path="/user/user-reviews" exact component={Auth(UserPosts,true)} />
          <Route path="/user/edit-post/:id" exact component={Auth(EditRestaurant,true)} />
          <Route path="/user/register" exact component={Auth(Register,true)} />
        </Switch>
      </div>
    </Layout>
  );
};

export default Routes;

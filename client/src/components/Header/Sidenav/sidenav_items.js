import React from "react";
import { Link } from "react-router-dom";
import "./sidenav_items.css";
import { connect } from "react-redux";

const SideNavItems = ({ user }) => {
  const items = [
    {
      type: "navItem",
      icon: "home",
      text: "Home",
      link: "/",
      restricted: false
    },
    {
      type: "navItem",
      icon: "laptop_mac",
      text: "Login",
      link: "/login",
      restricted: false,
      exclude: true
    },
    {
      type: "navItem",
      icon: "account_box",
      text: "My Profile",
      link: "/user",
      restricted: true
    },
    {
      type: "navItem",
      icon: "person_add",
      text: "Add Admins",
      link: "/user/register",
      restricted: true
    },
    {
      type: "navItem",
      icon: "rate_review",
      text: "My Reviews",
      link: "/user/user-reviews",
      restricted: true
    },
    {
      type: "navItem",
      icon: "add_circle_outline",
      text: "Add Reviews",
      link: "/user/add",
      restricted: true
    },
    {
      type: "navItem",
      icon: "laptop_mac",
      text: "Logout",
      link: "/user/logout",
      restricted: true
    }
  ];

  const element = (item, i) => (
    <div key={i} className={item.type}>
      <Link to={item.link}>
        <div className="navText">
          <div className="material-icons navIcon">{item.icon}</div>
          {item.text}
        </div>
      </Link>
    </div>
  );

  const showItems = () =>
    user.login
      ? items.map((item, i) => {
          if (user.login.isAuth) {
            return !item.exclude ? element(item, i) : null;
          } else {
            return !item.restricted ? element(item, i) : null;
          }
        })
      : null;

  return <div>{showItems()}</div>;
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(SideNavItems);

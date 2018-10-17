import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import Nav from "./Sidenav/sidenav";

class Header extends Component {
  state = {
    showNav: true
  };

  onHideNav = () => {
    this.setState({ showNav: false });
  };

  render() {
    return (
      <header>
        <div>
          <FontAwesome
            name="bars"
            onClick={()=> this.setState({showNav:true})}
            style={{
              color: "#000000",
              padding: "10px",
              cursor: "pointer"
            }}
          />
        </div>
        <Nav showNav={this.state.showNav} onHideNav={() => this.onHideNav()} />

        <Link to="/" className="logo">
          Restaurant Review
        </Link>
      </header>
    );
  }
}

export default Header;

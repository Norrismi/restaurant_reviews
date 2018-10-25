import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserPosts } from "../../actions";
import moment from "moment-js";
import { Link } from "react-router-dom";

class UserPosts extends Component {
  componentWillMount() {
    this.props.dispatch(getUserPosts(this.props.user.login.id));
  }

  showUserPosts = user =>
    user.userPosts
      ? user.userPosts.map((item, i) => (
          <table key={item._id}>
            <tr key={item._id}>
              <td>
                <Link to={`/user/edit-post/${item._id}`}>{item.name}</Link>
              </td>
              <td>{item.review}</td>
              <td>{moment(item.createAt).format("MM/DD/YY")}</td>
            </tr>
          </table>
        ))
      : null;

  render() {
    let user = this.props.user;
    return (
      <div>
        <h4>Your reviews</h4>

        <table className="centered">
     

            {/* <th>Name</th>
            <th>Review</th>
            <th>Date</th> */}
      
        {this.showUserPosts(user)}
        
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(UserPosts);

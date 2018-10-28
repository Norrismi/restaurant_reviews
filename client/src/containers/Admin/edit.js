import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  getRestaurants,
  updateRestaurant,
  clearRestaurant,
  deleteRestaurant
} from "../../actions";

class EditRestaurant extends PureComponent {
  state = {
    formdata: {
      id: this.props.match.params.id,
      name: "",
      author: "",
      review: "",
      location: "",
      rating: ""
    }
  };

  handleInput = (event, name) => {
    const newFormData = {
      ...this.state.formdata
    };
    newFormData[name] = event.target.value;

    this.setState({
      formdata: newFormData
    });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.dispatch(updateRestaurant(this.state.formdata));
  };

  componentWillMount() {
    this.props.dispatch(getRestaurants(this.props.match.params.id));
  }

  deletePost = () => {
    this.props.dispatch(deleteRestaurant(this.props.match.params.id));
  };
  redirectUser = () => {
    setTimeout(() => {
      this.props.history.push("/user/user-reviews");
    }, 1000);
  };

  componentWillUnmount() {
    this.props.dispatch(clearRestaurant());
  }

  //   showAdmendRestaurant = updateRestaurant =>
  //     updateRestaurant === true ? (
  //       <div>
  //         <Link to={`restaurants/${this.props.restaurants.restaurant._id}`}>Your Edit was successful!</Link>
  //       </div>
  //     ) : null;

  componentWillReceiveProps(nextProps) {
    let updateRestaurant = nextProps.restaurants.restaurant;
    this.setState({
      formdata: updateRestaurant
    });
  }

  render() {
    let data = this.props.restaurants;
    return (
      <div className="article">
        <form className="entireForm" onSubmit={this.submitForm}>
          <h2>Edit review</h2>
          <div className="form">
            <input
              type="text"
              placeholder="Enter name"
              value={this.state.formdata.name}
              onChange={event => this.handleInput(event, "name")}
            />
          </div>

          <div className="form">
            <input
              type="text"
              placeholder="Enter author"
              value={this.state.formdata.author}
              onChange={event => this.handleInput(event, "author")}
            />
          </div>

          <textarea
            value={this.state.formdata.review}
            placeholder="Enter review"
            onChange={event => this.handleInput(event, "review")}
          />

          <div className="form">
            <input
              type="text"
              placeholder="Enter location"
              value={this.state.formdata.location}
              onChange={event => this.handleInput(event, "location")}
            />
          </div>

          <div className="form">
            <select
              value={this.state.formdata.rating}
              onChange={event => this.handleInput(event, "rating")}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>

          {data.updateRestaurant ? (
            <div>
              <Link to={`/restaurant/${data.restaurant._id}`}>
                Your Edit was successful!
              </Link>
            </div>
          ) : null}

          <button className="form btn" type="submit">
            Edit review
          </button>

          <div className="delete_post">
            <div className="btn red" onClick={this.deletePost}>
              Delete Review
            </div>
          </div>

          {data.postDeleted ? (
            <div>
              Your post was deleted
              {this.redirectUser()}
            </div>
          ) : null}
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    restaurants: state.restaurants
  };
}

export default connect(mapStateToProps)(EditRestaurant);

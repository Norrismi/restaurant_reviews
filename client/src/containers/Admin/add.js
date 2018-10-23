import React, { Component } from "react";
import {connect} from 'react-redux'
//import {Link} from 'react-router-dom'
import {addRestaurant} from '../../actions'


class AddRestaurant extends Component {
  state = {
    formdata: {
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
        }
      newFormData[name] = event.target.value

      this.setState({
          formdata: newFormData
      })
  };

  submitForm = e => {
    e.preventDefault()
  
    this.props.dispatch(addRestaurant({
        ...this.state.formdata,
        ownerId: this.props.user.login.id
    }))
  };

  render() {
    return (
      <div className="article">
        <form onSubmit={this.submitForm} > 
        <h2>Add a review</h2>
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
          </select>
        </div>


        <button className="form btn" type="submit">Add review</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state){
    console.log(state)
    return{
        restaurants:state.restaurants
    }
}

export default connect(mapStateToProps)(AddRestaurant);

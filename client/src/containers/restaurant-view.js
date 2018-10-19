import React, { Component } from 'react';
import {getRestaurantReviewer} from '../actions/index'
import {connect} from 'react-redux'

class RestaurantView extends Component {

    componentWillMount(){
        this.props.dispatch(getRestaurantReviewer(this.props.match.params.id))
    }


    renderRestaurant = (restaurants) => (
        restaurants.restaurant ?
        <div className='rr-container'>
            <div className='rr-header'>
                <h2>{restaurants.restaurant.name}</h2>
                <h5>{restaurants.restaurant.author}</h5>
                <div className='rr-reviewer'>
                    <span>Review by:</span>{restaurants.reviewer.name} {restaurants.reviewer.lastname}

                </div>
            </div>
            <div className='rr-review'>
                {restaurants.restaurant.review}

            </div>
            <div className='rr-box'>
                <div className='left'>
                    <div>
                        {/* <span>Pages:</span> {restaurants.reataurant.pages} */}
                    </div>
                    <div>
                        {/* <span>Price:</span> {restaurants.reataurant.price} */}
                    </div>
                </div>
                <div className='right'>
                    <span>Rating</span> 
                    <div>
                    {restaurants.restaurant.rating}/5
                    </div>
                </div>

            </div>
        </div>
        :null
    )


    render() {
       let restaurants = this.props.restaurant;
        return (
            <div>
                Hello
                {this.renderRestaurant(restaurants)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
   return {

       restaurant: state.restaurant
   }
}

export default connect(mapStateToProps)(RestaurantView);

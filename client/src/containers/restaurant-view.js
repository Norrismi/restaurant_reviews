import React, { Component } from 'react';
import {getRestaurantReviewer,clearRestaurantReview} from '../actions/index'
import {connect} from 'react-redux'

class RestaurantView extends Component {

    componentWillMount(){
        this.props.dispatch(getRestaurantReviewer(this.props.match.params.id))
    }

    componentWillUnmount(){
        this.props.dispatch(clearRestaurantReview())
    }


    renderRestaurant = (props) => (
        props.restaurant ?
        <div className='rr-container'>
            <div className='rr-header'>
                <h2>{props.restaurant.name}</h2>
                <h5>{props.restaurant.author}</h5>
                <div className='rr-reviewer'>
                    <span>Review by:</span>{props.reviewer.name} {props.reviewer.lastname}

                </div>
            </div>
            <div className='rr-review'>
                {props.restaurant.review}

            </div>
            <div className='rr-box'>
                <div className='left'>
                    <div>
                        {/* <span>Pages:</span> {props.reataurant.pages} */}
                    </div>
                    <div>
                        {/* <span>Price:</span> {props.reataurant.price} */}
                    </div>
                </div>
                <div className='right'>
                    <span>Rating</span> 
                    <div>
                    {props.restaurant.rating}/5
                    </div>
                </div>

            </div>
        </div>
        :null
    )


    render() {
       let props = this.props.restaurant;
        return (
            <div>
                Hello
                {this.renderRestaurant(props)}
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

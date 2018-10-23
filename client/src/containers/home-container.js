import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getRestaurant} from '../actions'
import RestaurantItem from '../widgetsUI/restaurant-item'


class HomeContainer extends Component {
    
    componentWillMount(){
        this.props.dispatch(getRestaurant(3,0,'desc'))
    }

    renderItems=(restaurant)=>(
        restaurant.list ? 
            restaurant.list.map(item => (
                <RestaurantItem {...item} key={item._id}/>
            ))
        :null
    )

    loadmore = () => {
        let count = this.props.restaurants.list.length;
        this.props.dispatch(getRestaurant(1,count,'desc',this.props.restaurants.list))
    }


    render() {
        return (
            <div>
               {this.renderItems(this.props.restaurants)}
               <div className='loadmore'
               onClick={this.loadmore}>
               Load More</div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        restaurants: state.restaurants
    }
}

export default connect(mapStateToProps)(HomeContainer);

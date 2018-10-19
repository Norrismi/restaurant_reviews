import React from 'react';
import {Link} from 'react-router-dom'

const RestaurantItem = (item) => {
    return (
        <Link to={`/restaurant/${item._id}`} className='restaurant-item'>
            <div className="Restaurant-header">
                <h2>{item.name}</h2>
            </div>
            <div className='restaurant-items'>
                <div className='restaurant-author'>{item.author}</div>
                <div className='restaurant-bubble'>
                    <strong>Price</strong> ${item.price}
                </div>
                <div className='restaurant-bubble'>
                    <strong>Rating</strong> {item.rating}
                </div>

            </div>
        </Link>
    );
}

export default RestaurantItem;

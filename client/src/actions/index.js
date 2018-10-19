import axios from "axios";

export function getRestaurant(limit = 10, start = 0, order = "asc", list = "") {
  const request = axios
    .get(`/api/getRestaurants?limit=${limit}&skip=${start}&order=${order}`)
    .then(response => {
      if (list) {
        return [...list, ...response.data];
      } else {
        return response.data;
      }
    });

  return {
    type: "GET_RESTAURANT",
    payload: request
  };
}

export function getRestaurantReviewer(id) {
  const request = axios.get(`/api/getRestaurant?id=${id}`);

  return dispatch => {
    request.then(({data})=> {
      let restaurant = data;

      axios
        .get(`/api/getReviewer?id=${restaurant.ownerId}`)
        .then(({data})=> {
          let restaurantRes = {
            restaurant,
            reviewer: data
          };

         

          dispatch({
            type: "GET_RESTAURANT_REVIEWER",
            payload: restaurantRes
          });
        });
    });
  };
}

export function clearRestaurantReview(){
  return{
    type: 'CLEAR_RESTAURANT_REVIEW',
    payload: {
      restaurant: {},
      reviewer:{}
    }
  }

}

/*==========USER============*/

export function loginUser({email, password}){
  const request = axios.post(`/api/login`,{email,password})
  .then(res => res.data)

  return{
    type: 'LOGIN_USER',
    payload:request
  }
}



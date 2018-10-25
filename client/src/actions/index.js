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
    request.then(({ data }) => {
      let restaurant = data;

      axios
        .get(`/api/getReviewer?id=${restaurant.ownerId}`)
        .then(({ data }) => {
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

export function clearRestaurantReview() {
  return {
    type: "CLEAR_RESTAURANT_REVIEW",
    payload: {
      restaurant: {},
      reviewer: {}
    }
  };
}

export function addRestaurant(restaurant) {
  const request = axios
    .post("/api/restaurant", restaurant)
    .then(res => res.data);

  return {
    type: "ADD_RESTAURANT",
    payload: request
  };
}

export function clearRestaurantSubmission() {
  return {
    type: "CLEAR_RESTAURANT_SUBMISSION",
    payload: {}
  };
}

export function getRestaurants(id) {
  const request = axios
    .get(`/api/getRestaurant?id=${id}`)
    .then(res => res.data);

  return {
    type: "GET_RESTAURANTS",
    payload: request
  };
}

export function updateRestaurant(data) {
  const request = axios
    .post(`/api/restaurant_update`, data)
    .then(res => res.data);
  return {
    type: "UPDATE_RESTAURANT",
    payload: request
  };
}

export function deleteRestaurant(id) {
  const request = axios
    .delete(`/api/delete_restaurant?id=${id}`)
    .then(res => res.data);
  return {
    type: "DELETE_RESTAURANT",
    payload: request
  };
}

export function clearRestaurant() {
  return {
    type: "CLEAR_RESTAURANT",
    payload: {
      restaurant: null,
      updateRestaurant: false,
      postDeleted: false
    }
  };
}

/*==========USER============*/

export function loginUser({ email, password }) {
  const request = axios
    .post(`/api/login`, { email, password })
    .then(res => res.data);

  return {
    type: "LOGIN_USER",
    payload: request
  };
}

export function auth() {
  const request = axios.get(`/api/auth`).then(res => res.data);
  return {
    type: "USER_AUTH",
    payload: request
  };
}

export function getUserPosts(userId) {
  const request = axios
    .get(`/api/user_posts?user=${userId}`)
    .then(res => res.data);
  return {
    type: "GET_USER_POSTS",
    payload: request
  };
}

export function getUsers() {
  const request = axios.get(`/api/users`).then(res => res.data);
  return {
    type: "GET_USERS",
    payload: request
  };
}

export function userRegister(user,userList) {
  const request = axios.post(`/api/register`,user)

  return(dispatch) => {
    request.then(({data}) => {
      let response = {
        success:data.success,
        users:[...userList,data.user]
      }
      dispatch({

        type: "USER_REGISTER",
        payload: response
      })
    })
  };
}

export default function(state = {}, action) {
  switch (action.type) {
    case "GET_RESTAURANT":
      return { ...state, list: action.payload };
    case "GET_RESTAURANTS":
      return { ...state, restaurant: action.payload };

    case "GET_RESTAURANT_REVIEWER":
      return {
        ...state,
        restaurant: action.payload.restaurant,
        reviewer: action.payload.reviewer
      };

    case "CLEAR_RESTAURANT_REVIEW":
      return {
        ...state,
        restaurant: action.payload.restaurant,
        reviewer: action.payload.reviewer
      };

    case "ADD_RESTAURANT":
      return {
        ...state,
        newRestaurant: action.payload
      };
    case "UPDATE_RESTAURANT":
      return {
        ...state,
        updateRestaurant: action.payload.success,
        restaurant: action.payload.doc
      };
    case "CLEAR_RESTAURANT_SUBMISSION":
      return {
        ...state,
        newRestaurant: action.payload
      };
    case "DELETE_RESTAURANT":
      return {
        ...state,
        postDeleted: action.payload
      };
    case "CLEAR_RESTAURANT":
      return {
        ...state,
        restaurant: action.payload.restaurant,
        updateRestaurant: action.payload.updateRestaurant,
        postDeleted: action.payload.postDeleted
      };
    default:
      return state;
  }
}

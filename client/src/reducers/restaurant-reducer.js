export default function(state = {}, action) {
  switch (action.type) {
    case "GET_RESTAURANT":
      return { ...state, list: action.payload };

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
    case "CLEAR_RESTAURANT_SUBMISSION":
      return {
        ...state,
        newRestaurant: action.payload
      };
    default:
      return state;
  }
}

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
    default:
      return state;
  }
}

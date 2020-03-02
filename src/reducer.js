import { cartValue, getProducts, getProduct } from "./action";
export const initialState = {
  product: [],
  cart: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_REQUEST":
      return {
        ...state,
        product: action.payload
      };
    case "Add_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(item => item !== action.payload)
      };

    default:
      return state;
  }
};

export default reducer;

export function isInCart(state, props) {
  return state.cart.indexOf(props.id) !== -1;
}
export function getItems(state, props) {
  return state.cart.map(id => getProduct(state, { id }));
}

export function getTotal(state, props) {
  return state.cart.reduce((acc, id) => {
    const item = getProduct(state, { id });
    return acc + parseInt(item.Price);
  }, 0);
}

import types, {CartState} from "./cart.d";
import {addItemToCart, removeItemFromCart} from "./cartUtils";
import {cartItem} from "../state.d";

const INITIAL_STATE: CartState = {
	hidden: true,
	cartItems: []
};

const cartReducer = (state: CartState = INITIAL_STATE, action: CartAction) => {
	switch (action.type) {
		case types.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden
			};
		case types.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload)
			};
		case types.CLEAR_ITEM_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter(
					(item: cartItem) => item.id !== action.payload.id
				)
			};
		case types.REMOVE_ITEM:
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, action.payload)
			};
		default:
			return state;
	}
};

export default cartReducer;

interface CartAction {
	type: string;
	payload: cartItem;
}

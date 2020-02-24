import types, {State} from "./cart.d";

const INITIAL_STATE: State = {
	hidden: true,
	cartItems: []
};

const cartReducer = (state: State = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case types.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden
			};
		case types.ADD_ITEM:
			return {
				...state,
				cartItems: [...state.cartItems, action.payload]
			};
		default:
			return state;
	}
};

export default cartReducer;

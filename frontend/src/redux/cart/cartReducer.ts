import types, {State} from "./cart.d";

const INITIAL_STATE = {
	hidden: true
};

const cartReducer = (state: State = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case types.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden
			};
		default:
			return state;
	}
};

export default cartReducer;

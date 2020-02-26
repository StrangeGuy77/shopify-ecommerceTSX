import {createSelector} from "reselect";
import GlobalState, {cartItem} from "../state";

const selectCart = (state: GlobalState) => {
	return state.cart;
};

export const selectCartItems = createSelector(
	[selectCart],
	(cart: Cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
	[selectCart],
	(cart: Cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	(cartItems: cartItem[]) =>
		cartItems.reduce(
			(accumulatedQuantity: number, cartItem: cartItem) =>
				accumulatedQuantity + cartItem.quantity,
			0
		)
);

export const selectCartTotal = createSelector(
	[selectCartItems],
	(cartItems: cartItem[]) =>
		cartItems.reduce(
			(accumulatedQuantity: number, cartItem: cartItem) =>
				accumulatedQuantity + cartItem.quantity * cartItem.price,
			0
		)
);

interface Cart {
	cartItems: cartItem[];
	hidden: boolean;
}

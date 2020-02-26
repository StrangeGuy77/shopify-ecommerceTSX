import {createSelector} from "reselect";
import GlobalState, {cartItem} from "../state";

const selectCart = (state: GlobalState) => {
	return state.cart;
};

export const selectCartItems = createSelector(
	[selectCart],
	(cart: cart) => cart.cartItems
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

interface cart {
	cartItems: cartItem[];
}

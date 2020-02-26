import {cartItem} from "../state";

export const addItemToCart = (
	cartItems: cartItem[],
	cartItemToAdd: cartItem
) => {
	const existingCartItem = cartItems.find(
		(cartItem: cartItem) => cartItem.id === cartItemToAdd.id
	);

	if (existingCartItem) {
		return cartItems.map((cartItem: cartItem) =>
			cartItem.id === cartItemToAdd.id
				? {...cartItem, quantity: cartItem.quantity + 1}
				: cartItem
		);
	}

	return [...cartItems, {...cartItemToAdd, quantity: 1}];
};

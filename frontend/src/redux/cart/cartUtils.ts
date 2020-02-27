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

export const removeItemFromCart = (
	cartItems: cartItem[],
	itemToRemove: cartItem
) => {
	const existingCartItem = cartItems.find(
		(item: cartItem) => itemToRemove.id === item.id
	) as cartItem;
	if (existingCartItem.quantity) {
		return cartItems.filter((item: cartItem) => item.id !== itemToRemove.id);
	}

	return cartItems.map((item: cartItem) =>
		item.id === itemToRemove.id ? {...item, quantity: item.quantity - 1} : item
	);
};

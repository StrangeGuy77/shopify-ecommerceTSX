import cartTypes from "./cart.d";

export const toggleCartHidden = () => ({
	type: cartTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (item: any) => ({
	type: cartTypes.ADD_ITEM,
	payload: item
});

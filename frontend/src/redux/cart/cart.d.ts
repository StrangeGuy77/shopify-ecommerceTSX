export default {
	TOGGLE_CART_HIDDEN: "TOGGLE_CART_HIDDEN",
	ADD_ITEM: "ADD_ITEM"
};

export interface State {
	hidden: boolean;
	cartItems: Array<any>;
}

import cartTypes from "./cart.d";
import {Items} from "../../components/CollectionsOverview/CollectionOverview";

export const toggleCartHidden = () => ({
	type: cartTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (item: Items) => ({
	type: cartTypes.ADD_ITEM,
	payload: item
});

export const removeItem = (item: Items) => ({
	type: cartTypes.REMOVE_ITEM,
	payload: item
});

export const clearItemFromCart = (item: Items) => ({
	type: cartTypes.CLEAR_ITEM_FROM_CART,
	payload: item
});

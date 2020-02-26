import cartTypes from "./cart.d";
import {Items} from "../../pages/ShopPage/ShopPage";

export const toggleCartHidden = () => ({
	type: cartTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (item: Items) => ({
	type: cartTypes.ADD_ITEM,
	payload: item
});

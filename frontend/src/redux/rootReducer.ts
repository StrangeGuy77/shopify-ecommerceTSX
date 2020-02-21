import {userReducer} from "./user/userReducer";
import cartReducer from "./cart/cartReducer";
import {combineReducers} from "redux";

export default combineReducers({
	user: userReducer,
	cart: cartReducer
});

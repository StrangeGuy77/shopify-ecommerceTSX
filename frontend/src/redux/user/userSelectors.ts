import {createSelector} from "reselect";
import GlobalState from "../state";

const selectUser = (state: GlobalState) => state.user;

export const selectCurrentUser = createSelector(
	[selectUser],
	(user: User) => user.currentUser
);

interface User {
	currentUser: null | any;
}

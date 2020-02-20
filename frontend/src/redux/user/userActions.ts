import userTypes from "./user.d";

export const setCurrentUser = (user: any) => ({
	type: userTypes.SET_CURRENT_USER,
	payload: user
});

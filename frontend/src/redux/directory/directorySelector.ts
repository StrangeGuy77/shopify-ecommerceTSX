import {createSelector} from "reselect";
import GlobalState from "../state";
import {Items} from "../../components/Directory/Directory";

const selectDirectory = (state: GlobalState) => state.directory;

export const selectDirectorySections = createSelector(
	[selectDirectory],
	(directory: Items[]) => {
		return directory;
	}
);

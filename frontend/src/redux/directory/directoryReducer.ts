import {sections} from "../../components/Directory/DirectoryData";
import {Items} from "../../components/Directory/Directory";
import {Action} from "redux";

const directoryReducer = (
	state: Items[] = sections,
	action: DirectoryAction
) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default directoryReducer;

interface DirectoryAction extends Action {
	type: string;
	payload: any;
}

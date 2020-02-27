import {ShopData} from "../../utils/DirectoryComponentData";
import {ICollections} from "../../components/CollectionsOverview/CollectionOverview";

const INITIAL_STATE: ICollections[] = ShopData;

const shopReducer = (
	state: ICollections[] | ICollections = INITIAL_STATE,
	action: ShopAction
) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default shopReducer;

interface ShopAction {
	type: string;
	payload: any;
}

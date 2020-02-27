import GlobalState from "../state";
import {createSelector} from "reselect";
import {ICollections} from "../../components/CollectionsOverview/CollectionOverview";

const selectCollection = (state: GlobalState) => state.shop;

export const selectShopDataCollections = createSelector(
	[selectCollection],
	(collection: ICollections[]) => collection
);

export const selectExactCollectionCategory = (routeName: string) =>
	createSelector([selectCollection], (collection: ICollections[]) => {
		return collection.find(
			(collection: ICollections) => collection.routeName === routeName
		);
	});

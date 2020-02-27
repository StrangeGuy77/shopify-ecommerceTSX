import {Items} from "../components/Directory/Directory";
import {ICollections} from "../pages/ShopPage/ShopPage";
import {ICollections} from "../components/CollectionsOverview/CollectionOverview";

export default interface GlobalState {
	user: {
		currentUser: any;
	};
	cart: {
		hidden: boolean;
		cartItems: cartItem[];
	};
	directory: Items[];
	shop: ICollections[] | ICollections;
}

export interface cartItem {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
	quantity: number;
}

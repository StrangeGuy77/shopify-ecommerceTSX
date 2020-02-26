export default interface GlobalState {
	user: {
		currentUser: any;
	};
	cart: {
		hidden: boolean;
		cartItems: cartItem[];
	};
}

export interface cartItem {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
	quantity: number;
}

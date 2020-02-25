/**
 * @description Specifies the shipping details for the order.
 * @param price (Money) Price of the shipping rate.
 * @param shippingRateHandle (string) A unique identifier for the shipping rate.
 * @param title (string) Title of the shipping rate.
 */

export default interface ShippingLineInput {
	price: number;
	shippingRateHandle: string;
	title: string;
}

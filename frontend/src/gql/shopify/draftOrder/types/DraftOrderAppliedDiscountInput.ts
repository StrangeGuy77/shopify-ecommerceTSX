/**
 * @description The input fields for applying an order-level discount to a draft order.
 * @param amount (Money) The applied amount of the discount.
 * @param description (string) Reason for the discount.
 * @param title (string) Title of the discount.
 * @param value (float) The value of the discount. If the type of the discount is fixed amount, then this is a fixed dollar amount. If the type is percentage, then this is the percentage.
 * @param valueType (DraftOrderAppliedDiscountType) The type of the discount
 */

export interface DraftOrderAppliedDiscountInput {
	amount: string;
	description: string;
	title: string;
	value: number;
	valueType: DraftOrderAppliedDiscountType;
}

/**
 * @description The valid discount types that can be applied to a draft order.
 * @typedef FIXED_AMOUNT A fixed amount in the store's currency.
 * @typedef PERCENTAGE A percentage of the order subtotal.
 */

declare type DraftOrderAppliedDiscountType = {
	FIXED_AMOUNT: "FIXED_AMOUNT";
	PERCENTAGE: "PERCENTAGE";
};

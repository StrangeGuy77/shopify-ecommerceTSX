import {DraftOrderAppliedDiscountInput} from "./types/DraftOrderAppliedDiscountInput";
import {MailingAddressInput} from "../global/MailingAddressInput";
import {AttributeInput} from "../global/types/customAttributes";
import {DraftOrderLneItemInput} from "./types/DraftOrderLineItemInput";
import {MetafieldInput} from "../global/MetafieldInput";
import {PrivateMetafieldInput} from "../global/privateMetafieldInput";
import ShippingLineInput from "../global/types/shippingLineInput";

/**
 * @description The input fields used to create or update a draft order.
 * @param appliedDiscount (DraftOrderAppliedDiscountInput) The discount that will be applied to the draft order. A draft order line item can have one discount. A draft order can also have one order-level discount.
 * @param billingAddress (MailingAddressInput) The mailing address associated with the payment method.
 * @param customAttributes ([AttributeInput]) Extra information added to the customer.
 * @param customerId (ID) Customer associated with the draft order.
 * @param email (string) The customer's email address.
 * @param lineItems ([DraftOrderLineItemInput!]) Product variant line item or custom line item associated to the draft order. Each draft order must include at least one line item.
 * @param metafields ([MetafieldInput]) Metafields attached to the draft order.
 * @param note (string) The text of an optional note that a shop owner can attach to the draft order.
 * @param privateMetafields ([PrivateMetafieldInput]) The private metafields attached to the draft order.
 * @param shippingAddress (MailingAddressInput) The mailing address to where the order will be shipped.
 * @param shippingLine (ShippingLineInput) A shipping line object, which details the shipping method used.
 * @param tags ([string]) Additional short descriptors, commonly used for filtering and searching, formatted as a string of comma-separated values.
 * @param taxExempt (boolean) Whether or not taxes are exempt for the draft order. If false, then Shopify will refer to the taxable field for each line item. If a customer is applied to the draft order, then Shopify will use the customer's tax exempt field instead.
 * @param useCustomerDefaultAddress (boolean) Sent as part of a draft order object to load customer shipping information.
 */

export interface DraftOrderInput {
	appliedDiscount?: DraftOrderAppliedDiscountInput;
	billingAddress?: MailingAddressInput;
	customAttributes?: AttributeInput[];
	customerId: string;
	email: string;
	lineItems: DraftOrderLneItemInput[];
	metafields?: MetafieldInput[];
	note?: string;
	privateMetafields?: PrivateMetafieldInput[];
	shippingAddress?: MailingAddressInput;
	shippingLine?: ShippingLineInput;
	tags?: string[];
	taxExempt?: boolean;
	useCustomerDefaultAddress?: boolean;
}

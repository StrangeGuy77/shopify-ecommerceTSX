import {DraftOrderAppliedDiscountInput} from "./DraftOrderAppliedDiscountInput";
import {AttributeInput} from "../../global/types/customAttributes";
import {WeightInput} from "../../global/types/WeightInput";

/**
 * @description The input fields used to create a line item for a draft order.
 * @param appliedDiscount (DraftOrderAppliedDiscountInput) Discount which will be applied to the line item.
 * @param customAttributes ([AttributeInput]) Represents a generic custom attribute using a key value pair.
 * @param grams (Integer) Ignored when variant ID is provided. This argument is @deprecated: Use weight instead.
 * @param originalUnitPrice (Money) Ignored when variant ID is provided.
 * @param quantity (Integer!) The number of products that were purchased.
 * @param requiresShipping (boolean) Ignored when variant ID is provided.
 * @param sku (string) Ignored when variant ID is provided.
 * @param taxable (boolean) Ignored when variant ID is provided.
 * @param title (string) Ignored when variant ID is provided.
 * @param variandId (ID) The ID of the product variant corresponding to the line item. Null if custom line item. Required if product variant line item.
 * @param weight (WeightInput) Specifies the weight unit and value inputs. Ignored when variant ID or product ID are provided.
 */

export interface DraftOrderLneItemInput {
	appliedDiscount?: DraftOrderAppliedDiscountInput;
	customAttributes?: AttributeInput[];
	grams?: number;
	originalUnitPrice?: string;
	quantity: number;
	requiresShipping?: boolean;
	sku?: string;
	taxable?: boolean;
	title?: string;
	variandId?: string;
	weight: WeightInput;
}

import {MetafieldInput} from "../global/MetafieldInput";
import {PrivateMetafieldInput} from "../global/privateMetafieldInput";
import {WeightUnit} from "../global/types/WeightInput";

/**
 * @description Specifies a product variant to create or update.
 * @param barcode (string) The value of the barcode associated with the product.
 * @param compareAtPrice (Money) The compare-at price of the variant.
 * @param fulfillmentServiceId (ID) The ID of the fulfillment service associated with the variant.
 * @param harmonizedSystemCode (string) The Harmonized System Code (or HS Tariff Code) for the variant.
 * @param id (ID) Specifies the product variant to update or create a new variant if absent.
 * @param imageId (ID) The ID of the image that's associated with the variant.
 * @param imageSrc (string) The URL of an image to associate with the variant. This field can only be used through mutations that create product images and must match one of the URLs being created on the product.
 * @param inventoryItem (InventoryItemInput) Inventory Item associated with the variant, used for unit cost.
 * @param inventoryManagement (ProductVariantInventoryManagement) The fulfillment service that tracks the number of items in stock for the product variant. If you track the inventory yourself using the admin, then set the value to shopify. Valid values: shopify or the handle of a fulfillment service that has inventory management enabled. This argument is deprecated: Use tracked attribute on inventoryItem instead.
 * @param inventoryPolicy (ProductVariantInventoryPolicy) Whether customers are allowed to place an order for the product variant when it's out of stock.
 * @param inventoryQuantities ([InventoryLevelInput!]) Create only field. The inventory quantities at each location where the variant is stocked.
 * @param metafields ([MetafieldInput!]) Additional customizable information about the product variant.
 * @param options ([string]) The custom properties that a shop owner uses to define product variants.
 * @param position (Integer) The order of the product variant in the list of product variants. The first position in the list is 1.
 * @param price (Money) The price of the variant.
 * @param privateMetafields ([PrivateMetafieldInput]) The private metafields to associated with this product.
 * @param productId (ID) Create only required field. Specifies the product on which to create the variant.
 * @param requiresShipping (boolean) Whether the variant requires shipping.
 * @param sku (string) The SKU for the variant.
 * @param taxCode (string) The tax code associated with the variant.
 * @param taxable (boolean) Whether the variant is taxable.
 * @param title (string) This argument is deprecated: Variant title is not a writable field; it is generated from the selected variant options.
 * @param weight (Float) The weight of the variant.
 * @param weightUnit (WeightUnit) The unit of weight that's used to measure the variant.
 */
export default interface ProductVariantInput {
	barcode?: string;
	compareAtPrice?: string;
	fulfillmentServiceId?: string;
	harmonizedSystemCode?: string;
	id: string;
	imageId: string;
	imageSrc: string;
	inventoryItem: inventoryItemInput;
	inventoryManagement: ProductVariantInventoryManagement;
	inventoryPolicy?: ProductVariantInventoryPolicy;
	inventoryQuantities: InventoryLevelInput[];
	metafields?: MetafieldInput[];
	options?: string[];
	position?: number;
	price: string;
	privateMetafields?: PrivateMetafieldInput[];
	productId?: string;
	requiresShipping?: boolean;
	sku?: string;
	taxCode?: string;
	taxable?: string;
	title?: string;
	weight?: number;
	weightUnit: WeightUnit;
}

/**
 * @description Inventory items.
 * @param cost (Decimal) Unit cost associated with the inventory item, the currency is the shop's default currency.
 * @param tracked (boolean) Whether the inventory item is tracked.
 */
export interface inventoryItemInput {
	cost: number;
	tracked: boolean;
}

/**
 * @description The method of inventory tracking for a product variant.
 * @typedef FULFILLMENT_SERVICE A third-party fulfillment service tracks this product variant's inventory.
 * @typedef NOT_MANAGED This product variant's inventory is not tracked.
 * @typedef SHOPIFY Shopify tracks this product variant's inventory.
 */

interface ProductVariantInventoryManagement {
	FULFILLMENT_SERVICE: "FULFILLMENT_SERVICE";
	NOT_MANAGED: "NOT_MANAGED";
	SHOPIFY: "SHOPIFY";
}

/**
 * @description The inventory policy for a product variant controls whether customers can continue to buy the variant when it is out of stock. When the value is continue, customers are able to buy the variant when it's out of stock. When the value is deny, customers can't buy the variant when it's out of stock.
 * @typedef CONTINUE Continue selling a product variant when it is out of stock.
 * @typedef DENY Stop selling a product variant when it is out of stock.
 */
interface ProductVariantInventoryPolicy {
	CONTINUE: "CONTINUE";
	DENY: "DENY";
}

/**
 * @description Inventory quantity at a specific location.
 * @param availableQuantity (Integer!) Sets the quantity available at the location.
 * @param locationId (ID!) ID of the location.
 */
interface InventoryLevelInput {
	availableQuantity: number;
	locationId: string;
}

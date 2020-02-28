import ImageInput from "./types/ImageInput";
import {MetafieldInput} from "../global/MetafieldInput";
import {PrivateMetafieldInput} from "../global/privateMetafieldInput";
import ProductPublicationInput from "./types/ProductPublicationInput";
import SEOInput from "./types/SEOInput";
import ProductVariantInput from "./ProductVariantInput";

/**
 * @description Specifies the input fields required to create a product.
 * @param bodyHtml (string) A description of the product. Supports HTML formatting. This argument is @deprecated: Use descriptionHtml instead.
 * @param collectionsToJoin ([ID]) The IDs of the collections that this product will be added to.
 * @param collectionsToLeave ([ID]) The IDs of collections that will no longer include the product.
 * @param descriptionHtml (string) The description of the product, complete with HTML formatting.
 * @param giftCard (boolean) Whether the product is a gift card.
 * @param giftCardTemplateSuffix (string) The theme template used when viewing the gift card in a store.
 * @param handle (string) A unique human-friendly string for the product. Automatically generated from the product's title.
 * @param id (ID) Specifies the product to update or create a new product if absent.
 * @param images ([ImageInput]) The images to associate with the product.
 * @param metafields ([MetafieldInput]) The metafields to associate with this product.
 * @param options ([string]) List of custom product options (maximum of 3 per product).
 * @param privateMetafields ([PrivateMetafieldInput]) The private metafields to associated with this product.
 * @param productPublications ([ProductPublicationInput]) A list of the channels where the product is published. This argument is @deprecated: Use PublishablePublish instead.
 * @param productType (string) The product type specified by the merchant.
 * @param publications ([ProductPublicationInput]) A list of the channels where the product is published. This argument is @deprecated: Use PublishablePublish instead.
 * @param publishDate (DateTime) This argument is @deprecated: Use PublishablePublish instead.
 * @param publishOn (DateTime0) This argument is @deprecated: Use PublishablePublish instead.
 * @param published (boolean) This argument is @deprecated: Use PublishablePublish instead.
 * @param publishedAt (DateTime) This argument is @deprecated: Use PublishablePublish instead.
 * @param redirectNewHandle (boolean) Whether a redirect is required after a new handle has been provided. If true, then the old handle is redirected to the new one automatically
 * @param seo (SEOInput) The SEO information associated with the product.
 * @param tags ([string]) A list of the tags that have been added to the product.
 * @param templateSuffix (string) The theme template used when viewing the product in a store.
 * @param title (string) The title of the product.
 * @param variants ([ProductVariantInput]) A list of variants associated with the product.
 * @param vendor (string) The name of the product's vendor.
 */
export default interface ProductInput {
	bodyHtml?: string;
	collectionsToJoin?: string[];
	collectionsToLeave?: string[];
	descriptionHtml?: string;
	giftCard?: boolean;
	giftCardTemplateSuffix?: string;
	handle?: string;
	id: string;
	images: ImageInput[];
	metafields?: MetafieldInput[];
	options?: string[];
	privateMetafields?: PrivateMetafieldInput[];
	productPublications?: ProductPublicationInput[];
	productType?: string;
	publishDate?: string;
	publishOn?: string;
	published?: boolean;
	publishedAt?: string;
	redirectNewHandle?: boolean;
	seo?: SEOInput;
	tags?: string[];
	templateSuffix?: string;
	title: string;
	variants: ProductVariantInput[];
	vendor?: string;
}

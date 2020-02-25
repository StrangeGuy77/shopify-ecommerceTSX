import {MailingAddressInput} from "../global/MailingAddressInput";
import {MetafieldInput} from "../global/MetafieldInput";
import {PrivateMetafieldInput} from "../global/privateMetafieldInput";
import {TaxExemption} from "../global/types/TaxExemptionType";

/**
 * @description Provides the fields and values to use when creating or updating a customer.
 * @param acceptsMarketing (boolean) Whether the customer has consented to receive marketing material via email.
 * @param acceptsMarketingUpdatedAt (DateTime) The date and time when the customer consented or objected to receiving marketing material by email. Set whenever the customer consents or objects to marketing material.
 * @param addresses (Array<MailingAddressInput>) An input that specifies addresses for a customer.
 * @param email (string) The unique email address of the customer.
 * @param firstName (string) The customer's first name
 * @param id (ID) Specifies the customer to update, or creates a new customer if one doesn't exist.
 * @param lastName (string) The customer's last name
 * @param locale (string) The customer's locale
 * @param marketingOptInLevel (CustomerMarketingOptInLevel) The marketing subscription opt-in level (as described by the M3AAWG best practices guideline) that was enabled when the customer consented to receiving marketing material by email.
 * @param metafields (MetafieldInput) Attaches additional metadata to the customer.
 * @param note (string) A note about the customer.
 * @param phone (string) The unique phone number for the customer.
 * @param privateMetafields (PrivateMetafieldInput) The private metafields to associated with this product.
 * @param tags (Array<string>) Tags that the shop owner has attached to the customer.
 * @param taxExempt (boolean) Whether the customer is exempt from paying taxes on their order.
 * @param taxExemptions (Array<TaxExemption>) The list of tax exemptions to apply to the customer.
 */

export interface CustomerInput {
	acceptsMarketing?: boolean;
	acceptsMarketingUpdatedAt?: string;
	addresses: MailingAddressInput[];
	email?: string;
	firstName?: string;
	id: string;
	lastName?: string;
	locale?: string;
	marketingOptInLevel?: CustomerMarketingOptInLevel;
	metafields?: MetafieldInput[];
	note?: string;
	phone?: string;
	privateMetafields?: PrivateMetafieldInput[];
	tags?: string[];
	taxExempt?: boolean;
	taxExemptions?: TaxExemption[];
}

/**
 * @description The valid values for the marketing subscription opt-in active at the time the customer consented to email marketing. The levels are defined by the M3AAWG best practices guideline document.
 * @typedef CONFIRMED_OPT_IN After providing their email address, the customer received a confirmation email which required them to perform a prescribed action before receiving marketing emails.
 * @typedef SINGLE_OPT_IN The customer started receiving marketing email(s) after providing their email address, without any intermediate steps.
 * @typedef UNKNOWN The customer receives marketing emails, but the original opt-in process is unknown.
 */

declare type CustomerMarketingOptInLevel = {
	CONFIRMED_OPT_IN: "CONFIRMED_OPT_IN";
	SINGLE_OPT_IN: "SINGLE_OPT_IN";
	UNKNOWN: "UNKNOWN";
};

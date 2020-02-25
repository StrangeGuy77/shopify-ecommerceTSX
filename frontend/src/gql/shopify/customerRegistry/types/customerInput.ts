import {MailingAddressInput} from "../../global/MailingAddressInput";
import {MetafieldInput} from "../../global/MetafieldInput";
import {PrivateMetafieldInput} from "../../global/privateMetafieldInput";

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

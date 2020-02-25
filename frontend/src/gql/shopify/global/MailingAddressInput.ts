import {CountryCode} from "./types/types";

/**
 * @description The fields used to create or update a mailing address.
 * @param address1 (string) The first line of the address. Typically the street address or PO Box number.
 * @param address2 (string) The second line of the address. Typically the number of the apartment, suite, or unit.
 * @param city (string) The name of the city, district, village, or town.
 * @param company (string) The name of the customer's company or organization.
 * @deprecated country (string) The name of the country. This argument is deprecated: Use countryCode instead.
 * @param countryCode (countryCode) The two-letter code for the country of the address.
 * @param firstName (string) The firstName of the customer
 * @deprecated id (ID) This argument is deprecated: Not needed for 90% of mutations, and provided separately where it is needed.
 * @lastName (string) The lastname of the customer.
 * @phone (string) A unique phone number for the customer. Formatted using E.164 standard. For example, +16135551111.
 * @deprecated (string) The region of the address, such as the province, state, or district. This argument is deprecated: Use provinceCode instead.
 * @provinceCode (string) The code for the region of the address, such as the province, state, or district. For example QC for Quebec, Canada.
 * @zip (string) The zip or postal code of the address
 * @param CountryCode (Two digit country code name explicit by Shopify)
 */

export interface MailingAddressInput {
	address1: string;
	address2?: string;
	city: string;
	company?: string;
	country?: string;
	countryCode: CountryCode;
	firstName: string;
	id: string;
	lastName?: string;
	phone?: string;
	provice?: string;
	provinceCode?: string;
	zip?: string;
}

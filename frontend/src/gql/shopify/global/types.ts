/**
 * @description Metafield value types.
 * @typedef INTEGER An integer.
 * @typedef JSON_STRING A Json string.
 * @typedef STRING A string.
 */

export declare type MetafieldValueType = {
	INTEGER: Number;
	JSON_STRING: JSON;
	STRING: String;
};

/**
 * @description Value Input wraps two fields of Private Metafields into one. Those fields are value and value_type.
 * @param value (string) The value of a private metafield.
 * @param valueType (PrivateMetafieldValueType) Represents the private metafield value type.
 */

export declare type PrivateMetafieldValueInput = {
	value: String;
	valueType: PrivateMetafieldValueType;
};

/**
 * @description Private Metafield value types.
 * @typedef INTEGER An integer.
 * @typedef JSON_STRING A Json string.
 * @typedef STRING A string.
 */
declare type PrivateMetafieldValueType = {
	INTEGER: Number;
	JSON_STRING: String;
	STRING: String;
};

/**
 * @typedef Code ISO 3166-1 alpha-2 country codes with some differences. ()
 */

export declare type CountryCode = {
	Code: string;
};

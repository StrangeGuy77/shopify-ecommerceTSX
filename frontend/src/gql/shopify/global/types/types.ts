/**
 * @description Metafield value types.
 */
export declare type MetafieldValueType = INTEGER | JSON_STRING | STRING;

/**
 * @description Private Metafield value types.
 */
declare type PrivateMetafieldValueType = INTEGER | JSON_STRING | STRING;

/**
 * @typedef INTEGER An integer.
 */
declare type INTEGER = "INTEGER";
/**
 * @typedef JSON_STRING A Json string.
 */
declare type JSON_STRING = "JSON_STRING";
/**
 * @typedef STRING A string.
 */
declare type STRING = "STRING";

/**
 * @description Value Input wraps two fields of Private Metafields into one. Those fields are value and value_type.
 * @param value (string) The value of a private metafield.
 * @param valueType (PrivateMetafieldValueType) Represents the private metafield value type.
 */

export declare type PrivateMetafieldValueInput = {
	value: string;
	valueType: PrivateMetafieldValueType;
};

/**
 * @typedef Code ISO 3166-1 alpha-2 country codes with some differences. ()
 */

export declare type CountryCode = string;

export declare type ID = "gid?://(Shopify)?[-a-zA-Z]{1,256}/[a-zA-Z]{1,6}/([0-9]*)";

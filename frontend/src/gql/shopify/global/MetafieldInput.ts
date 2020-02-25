import {MetafieldValueType} from "./types";

/**
 * @description Specifies the input fields for a metafield.
 * @param description (string) The description of the metafield
 * @param id (ID) The unique ID of the metafield
 * @param key (string) The key name of the metafield
 * @param namespace (string) The namespace for a metafield
 * @param value (string) The value of a metafield
 * @param valueType (MetafieldValueType) The value type of a metafield
 */

export interface MetafieldInput {
	description: string;
	id: string;
	key: string;
	namespace: string;
	value: string;
	valueType: MetafieldValueType;
}

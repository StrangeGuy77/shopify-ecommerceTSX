import {PrivateMetafieldValueInput} from "./types/types";

/**
 * @description Specifies the input fields for a PrivateMetafield
 * @param key (string) The key for the private metafield
 * @param namespace (string) The namespace for the private metafield
 * @param owner (ID) The owning resource
 * @param valueInput (PrivateMetafieldValueInput) The value and the value type of the metafield, wrapped in a   ValueInput object
 */

export interface PrivateMetafieldInput {
	key: string;
	namespace: string;
	owner: string;
	valueInput: PrivateMetafieldValueInput;
}

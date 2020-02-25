/**
 * @description Specifies the input fields for an image.
 * @param altText (string) A word or phrase to share the nature or contents of an image.
 * @param id (ID) Globally unique identifier.
 * @param src (string) The URL of the image. May be a signed upload URL.
 */

export default interface ImageInput {
	altText: string;
	id: string;
	src: string;
}

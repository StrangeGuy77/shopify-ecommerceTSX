/**
 * @description Specifies the input fields required to create a media object.
 * @param alt (string) The alt text associated to the media.
 * @param mediaContentType (MediaContentType!) The media content type.
 * @param originalSource (string) The original source of the media object. May be an external URL or signed upload URL.
 */

export default interface CreateMediaInput {
	alt?: string;
	mediaContentType: MediaContentType;
	originalSource: string;
}

/**
 * @description The possible content types for a media object.
 * @typedef EXTERNAL_VIDEO An externally hosted video.
 * @typedef IMAGE A Shopify hosted image.
 * @typedef MODEL_3D A 3d model.
 * @typedef VIDEO A Shopify hosted video.
 */

declare type MediaContentType = {
	EXTERNAL_VIDEO: "EXTERNAL_VIDEO";
	IMAGE: "IMAGE";
	MODEL_3D: "MODEL_3D";
	VIDEO: "VIDEO";
};

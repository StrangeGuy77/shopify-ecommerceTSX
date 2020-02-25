/**
 * @description Specifies a publication to which a product will be published.
 * @param channelHandle (string) This argument is @deprecated: Use publicationId instead.
 * @param channelId (ID) ID of the channel. This argument is @deprecated: Use publicationId instead.
 * @param publicationId (ID) ID of the publication.
 * @param publishDate (DateTime) The date and time that the product was (or will be) published.
 */

export default interface ProductPublicationInput {
	channelHandle?: string;
	channelId?: string;
	publicationId: string;
	publishDate: string;
}

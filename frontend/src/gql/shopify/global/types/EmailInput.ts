/**
 * @description Specifies the fields for an email.
 * @param bbc ([string]) Specifies any bcc recipients for the email.
 * @param body (string) Specifies the email body
 * @param customMessage (string) Specifies a custom message to include in the email.
 * @param from (string) Specifies the email sender.
 * @param subject (string) Specifies the email subject.
 * @param to (string) Specifies the email recipient.
 */

export default interface EmailInput {
	bbc: string[];
	body: string;
	customMessage: string;
	from: string;
	subject: string;
	to: string;
}

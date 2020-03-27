import * as React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton: React.FC<IProps> = ({price}) => {
	const priceForStripe = (price as number) * 100;
	const publishableKey = "pk_test_Z5JZQq8QxBrvoKf8bgss1PkH0072q9LKtb";
	const onToken = (token: any) => {
		console.log(token);
	};

	return (
		<StripeCheckout
			label='Pay now'
			name='Aurora Development Ltd.'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is ${price}$`}
			amount={priceForStripe}
			panelLabel='Pay now'
			token={onToken}
			stripeKey={publishableKey as string}
			locale='en'
		/>
	);
};

export default StripeCheckoutButton;

interface IProps {
	price: string | number;
}

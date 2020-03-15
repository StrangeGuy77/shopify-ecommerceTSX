import * as React from 'react';
import './CheckoutStyles.scss';
import { connect } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelectors';
import GlobalState, { cartItem } from '../../redux/state';
import CheckoutItem from '../../components/CheckoutItems/CheckoutItem';

const Checkout: React.FC<IProps> = ({ cartItems, total }) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(item => <CheckoutItem key={item.id} cartItem={item} />)
            }
            <div className="stripe">

            </div>
            <div className="total">
                <span>TOTAL: {total}$</span>
            </div>
        </div>
    );
};

const mapStateToProps = (state: GlobalState) => ({
    cartItems: selectCartItems(state),
    total: selectCartTotal(state)
});

interface IProps {
    cartItems: cartItem[];
    total: number;
}

export default connect(mapStateToProps)(Checkout);
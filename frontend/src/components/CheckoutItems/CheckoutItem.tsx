import * as React from 'react';
import './CheckoutItemStyles.scss';
import { cartItem } from '../../redux/state';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { clearItemFromCart } from '../../redux/cart/cartActions';


const CheckoutItem: React.FC<IProps> = ({ cartItem, clearItem }) => {

    const { imageUrl, name, price, quantity } = cartItem;

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div>
    );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    clearItem: (item: cartItem) => dispatch(clearItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

interface IProps {
    cartItem: cartItem;
    clearItem: (item: cartItem) => any;
}

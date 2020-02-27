import * as React from 'react';
import './CheckoutItemStyles.scss';
import { cartItem } from '../../redux/state';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cartActions';


const CheckoutItem: React.FC<IProps> = ({ cartItem, clearItem, addItem, removeItem }) => {

    const { imageUrl, name, price, quantity } = cartItem;

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094; </div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}> &#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div>
    );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    clearItem: (item: cartItem) => dispatch(clearItemFromCart(item)),
    addItem: (item: cartItem) => dispatch(addItem(item)),
    removeItem: (item: cartItem) => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

interface IProps {
    cartItem: cartItem;
    clearItem: (item: cartItem) => any;
    addItem: (item: cartItem) => any;
    removeItem: (item: cartItem) => any;
}

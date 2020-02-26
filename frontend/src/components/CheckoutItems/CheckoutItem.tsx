import * as React from 'react';
import './CheckoutItemStyles.scss';
import { cartItem } from '../../redux/state';

const CheckoutItem: React.FC<IProps> = ({ cartItem: { imageUrl, name, price, quantity } }) => {
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <div className="remove-button">&#10005;</div>
        </div>
    );
};

interface IProps {
    cartItem: cartItem;
}

export default CheckoutItem;